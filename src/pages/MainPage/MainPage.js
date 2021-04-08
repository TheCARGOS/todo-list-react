import "./MainPage.scss"
import { Grid } from "semantic-ui-react"
import Header from "../../components/Header"
import AdminPanel from "../../components/AdminPanel"
import Todos from "../../components/Todos"
import { useState, useEffect } from "react"

export default function MainPage() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }
      
        getTasks()
    }, [])

    const fetchTasks = async () => {
        const res = await fetch("http://localhost:5000/tasks")
        const tasks = await res.json()
        return tasks
    }

    const fetchTask = async (id) => {
        const res = await fetch("http://localhost:5000/task/id")
        const task = await res.json()
        return task
    }

    const addTask = async (task) => {
        const res = await fetch("http://localhost:5000/task/", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task),
        })

        const newTask = await res.json()
        setTasks([...tasks, newTask])
    }

    const deleteTask = async (id) => {
        const res = await fetch(`http://localhost:5000/task/${id}`, {
            method: "DELETE"
        })

        res.status == 200?
            setTasks( tasks.filter( task => task.id !== id ) ):
            alert("Error deleting this task.")
    }

    const toggleTaskActive = async (id, task) => {
        const taskToToggle = await fetchTask(id)
        const toggledTask = {
            ...taskToToggle,
            active: !taskToToggle.active
        }

        const res = await fetch(`http://localhost:5000/task/${id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(toggledTask)
        })

        const data = await res.json()
        setTasks(
            tasks.map( task => {
                return task.id === id ? { ...task, active: data.active } : task
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
                    <Todos />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
