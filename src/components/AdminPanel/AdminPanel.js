import "./AdminPanel.scss"
import { Form, Input, TextArea, Button, Icon } from "semantic-ui-react"
import { useState } from "react"

export default function AdminPanel({ addTodo }) {

    const defaultForm = {
        name: "",
        description: ""
    }

    const [formData, setFormData] = useState(defaultForm)
    
    const submitForm = () => {
        addTodo({
            ...formData,
            isActive: false
        })
        setFormData(defaultForm)
    }

    const handleFormOnChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="main-admin-panel">
            <header className="main-admin-panel__header">
                <h3 className="main-admin-panel__header__title">ADMIN PANEL</h3>
            </header>
            <Form className="main-admin-panel__form" onChange={ handleFormOnChange }>
                <Form.Field>
                    <Input name="name" placeholder="To-Do name" />
                </Form.Field>
                <Form.Field>
                    <TextArea name="description" placeholder="Why would you do this to-do?"></TextArea>
                </Form.Field>  

                <Button
                    fluid
                    onClick={ submitForm }
                >
                    <Icon name="plus" />
                    ADD
                </Button>
            </Form>     
        </div>
    )
}
