import { Icon, Input, Button, Divider, TextArea } from "semantic-ui-react"
import "./Todo.scss"
import { useState } from "react"

export default function Todo({name, description, isActive, id, deleteTodo, editTodo}) {
    const [showContent, setShowContent] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [formTodo, setFormTodo] = useState({
        id,
        name,
        description
    })

    const toggleShowContent = () => {
        setShowContent(!showContent)
    }

    const handleDeleteTodo = () => {
        deleteTodo(id)
    }

    const handleChangeToEdit = () => {
        
    }

    const handleFormChange = e => {
        setFormTodo({
            id,
            name,
            description,
            isActive,
            [e.target.name]: e.target.value
        })
    }

    const applyChanges = () => {
        editTodo(id, formTodo)
        setIsEditing(false)
    }

    return (
        <div className={`todo ${isActive? "todo--active": ""}`}>
            <div class="todo__header" onClick={ toggleShowContent }>
                { isEditing?
                    <Input 
                        defaultValue={name}
                        style={{width:"100%"}}
                        onChange={ handleFormChange }
                        name="name"
                    />:
                    <h2 className="todo__header__title">{ name }</h2>
                }
                <Icon
                    name={`${showContent? "angle up" : "angle down"}`}
                    className="todo__header__icon"
                />
            </div>
            <div className={`todo__content ${showContent? "" : "todo__content--hide"} `}>
                { isEditing?
                    <TextArea
                        defaultValue={description}
                        style={{width:"100%"}}
                        onChange={ handleFormChange }
                        name="description"
                    />:
                    <p className="todo__content__span">{ description }</p>
                }
                <Divider />
                <Button
                    onClick={ isEditing? (() => setIsEditing(false)): () => setIsEditing(true) }
                    content={ isEditing? "CANCEL EDIT": "EDIT TO-DO" }
                />
                <Button
                    onClick={ isEditing? (applyChanges): (handleDeleteTodo) }
                    content={ isEditing? "APPLY CHANGES": "DELETE TO-DO" }
                    color="black"
                />
            </div>
        </div>
    )
}
