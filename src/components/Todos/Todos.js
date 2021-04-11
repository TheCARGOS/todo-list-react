import "./Todos.scss"
import Todo from "./Todo"
import TodosFilter from "./TodosFilter"

export default function Todos({todos, deleteTodo}) {
    return (
        <div className="todos-container">
            { todos.map(todo => 
                <Todo
                    name={ todo.name }
                    description={ todo.description }
                    isActive={ todo.isActive }
                    deleteTodo={ deleteTodo }
                    id={ todo.id }
                />
            )}
        </div>
    )
}
