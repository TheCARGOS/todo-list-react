import "./MainPage.scss"
import { Grid } from "semantic-ui-react"
import Header from "../../components/Header"
import AdminPanel from "../../components/AdminPanel"
import Todos from "../../components/Todos"
import { useState, useEffect } from "react"

export default function MainPage() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        (async () => {
            const todosFromServer = await fetchTodos()
            setTodos(todosFromServer)
        })()
    }, [])

    const fetchTodos = async () => {
        const res = await fetch("http://localhost:5000/todos")
        const todosResponse = await res.json()
        return todosResponse
    }

    const fetchtodo = async (id) => {
        const res = await fetch("http://localhost:5000/todo/id")
        const todo = await res.json()
        return todo
    }

    const addTodo = async (todo) => {
        const res = await fetch("http://localhost:5000/todo/", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(todo),
        })

        const newTodo = await res.json()
        setTodos([...todos, newTodo])
    }

    const deleteTodo = async (id) => {
        const res = await fetch(`http://localhost:5000/todo/${id}`, {
            method: "DELETE"
        })

        res.status == 200?
            setTodos( todos.filter( todo => todo.id !== id ) ):
            alert("Error deleting this todo.")
    }

    const toggleTodoActive = async (id, todo) => {
        const todoToToggle = await fetchtodo(id)
        const toggledTodo = {
            ...todoToToggle,
            active: !todoToToggle.active
        }

        const res = await fetch(`http://localhost:5000/todo/${id}`, {
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
                    <AdminPanel />
                </Grid.Column>
                <Grid.Column className="column" width={13}>
                    {
                        todos.length > 0 ? (<Todos  todos={todos} />) : ("No Todos to show")
                    }
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
