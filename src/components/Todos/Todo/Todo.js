import { Icon } from "semantic-ui-react"
import "./Todo.scss"
import { useState } from "react"

export default function Todo({name, description, isActive}) {
    const [showContent, setShowContent] = useState(false)

    const toggleShowContent = () => {
        setShowContent(!showContent)
    }

    return (
        <div className={`todo ${isActive? "todo--active": ""}`}>
            <div class="todo__header" onClick={ toggleShowContent }>
                <h2 className="todo__header__title">{ name }</h2>
                <Icon name={`${showContent? "angle up" : "angle down"}`} className="todo__header__icon" />
            </div>
            <div className={`todo__content ${showContent? "" : "todo__content--hide"} `}>
                <span className="todo__content__span">{ description }</span>
            </div>
        </div>
    )
}
