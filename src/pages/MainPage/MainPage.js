import "./MainPage.scss"
import { Grid } from "semantic-ui-react"
import Header from "../../components/Header"
import AdminPanel from "../../components/AdminPanel"
import Todos from "../../components/Todos"

export default function MainPage() {
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
