import "./Todos.scss"
import Todo from "./Todo"
import TodosFilter from "./TodosFilter"

export default function Todos() {
    return (
        <div>
            <TodosFilter />
            <h1>Todos Component</h1>            
            <Todo />
        </div>
    )
}
