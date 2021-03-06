import "./MainPage.scss"
import { Grid } from "semantic-ui-react"
import Header from "../../components/Header"
import AdminPanel from "../../components/AdminPanel"
import Todos from "../../components/Todos"
import TodosFilter from "../../components/Todos/TodosFilter"
import { useState, useEffect } from "react"

export default function MainPage() {
    const [todos, setTodos] = useState([])
    const [filter, setFilter] = useState()
    const [filteredTodos, setFilteredTodos] = useState([])
    const [toSearch, setToSearch] = useState("")



    useEffect( async () => {
            const todosFromServer = await fetchTodos()
            setTodos(todosFromServer)

            updatedFilteredTodos()

    }, [filter, toSearch])

    const updatedFilteredTodos = () => {
        let secondFilter
        if ( filter == "all" ) {
            secondFilter = todos.filter( todo => 
                todo.name.toUpperCase().includes(toSearch)
            )
        } else {
            if ( filter == "active" ) {
                // setFilteredTodos(todos.filter(todo => todo.isActive === true))
                secondFilter = todos.filter(todo => todo.isActive === true)
                secondFilter = secondFilter.filter( todo => 
                    todo.name.toUpperCase().includes(toSearch)
                )
            } else {
                // setFilteredTodos(todos.filter(todo => todo.isActive === false))
                secondFilter = todos.filter(todo => todo.isActive === false)
                secondFilter = secondFilter.filter( todo => 
                    todo.name.toUpperCase().includes(toSearch)
                )
            }
        }
        setFilteredTodos(secondFilter)
    }

    const updateFiltered = () => {
        const otherFiltered = filter === "all"? "active" : "all"
        setFilter(otherFiltered)
        setFilter(filter)
    }

    const fetchTodos = async () => {
        const res = await fetch("http://localhost:5000/todos")
        const todosResponse = await res.json()
        return todosResponse
    }

    const fetchTodo = async (id) => {
        const res = await fetch("http://localhost:5000/todos/id")
        const todo = await res.json()
        return todo
    }

    const addTodo = async (todo) => {
        const res = await fetch("http://localhost:5000/todos/", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(todo),
        })

        const newTodo = await res.json()
        setTodos([...todos, newTodo])
        updateFiltered()
    }

    const deleteTodo = async (id) => {
        const res = await fetch(`http://localhost:5000/todos/${id}`, {
            method: "DELETE"
        })

        res.status === 200?
            setTodos( todos.filter( todo => todo.id !== id ) ):
            alert("Error deleting this todo.")

        updateFiltered()
    }

    const editTodo = async (id, todo) => {
        const res = await fetch(`http://localhost:5000/todos/${id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
        updateFiltered()
    }

    const toggleTodoActive = async (id, todo) => {
        const todoToToggle = await fetchTodo(id)
        const toggledTodo = {
            ...todoToToggle,
            active: !todoToToggle.active
        }

        const res = await fetch(`http://localhost:5000/todos/${id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(toggledTodo)
        })

        const data = await res.json()
        setTodos(
            todos.map( todo => {
                return todo.id === id ? { ...todo, active: data.active } : todo
            } )
        )
    }

    return (
        <Grid className="main-page">
            <Grid.Row>
                <Grid.Column className="main-bar" width={16}>
                    <Header />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column className="column" width={3}>
                    <AdminPanel addTodo={addTodo} />
                </Grid.Column>
                <Grid.Column className="column" width={13}>
                    <TodosFilter
                        setFilter={setFilter}
                        filter={filter} 
                        setToSearch={setToSearch}
                    />
                    { todos.length > 0 ?
                        (<Todos 
                            todos={filteredTodos}
                            deleteTodo={deleteTodo}
                            editTodo={editTodo}
                        />):
                        ("No Todos to show") }
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
