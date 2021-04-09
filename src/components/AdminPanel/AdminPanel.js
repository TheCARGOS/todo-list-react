import "./AdminPanel.scss"
import { Form, Input, TextArea, Button, Icon } from "semantic-ui-react"

export default function AdminPanel() {
    return (
        <div className="main-admin-panel">
            <header className="main-admin-panel__header">
                <h3 className="main-admin-panel__header__title">ADMIN PANEL</h3>
            </header>
            <Form className="main-admin-panel__form">
                <Form.Field>
                    <Input placeholder="To-Do name" />
                </Form.Field>
                <Form.Field>
                    <TextArea placeholder="Why would you do this to-do?"></TextArea>
                </Form.Field>  

                <Button fluid>
                    <Icon name="plus" />
                    ADD
                </Button>
            </Form>     
        </div>
    )
}
