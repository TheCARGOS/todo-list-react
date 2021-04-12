import "./TodosFilter.scss"
import { Checkbox, FormField, Input, Icon } from "semantic-ui-react"

export default function TodosFilter({setFilter, filter, setToSearch}) {

    const handleSetFilter = (e, { value }) => setFilter(value)

    const handleOnChange = e => {
        const upperCase = e.target.value.toUpperCase()
        setToSearch( upperCase )
    }

    return (
        <div className="todos-filter">
            <FormField className="todo-filter__form-field">
                <Checkbox 
                    radio
                    value="all"
                    onChange={ handleSetFilter }
                    label='All'
                    checked={ filter === "all" }
                />
                <Checkbox 
                    radio
                    value="active"
                    onChange={ handleSetFilter }
                    label='Active'
                    checked={ filter === "active" }
                />
                <Checkbox 
                    radio
                    value="inactive"
                    onChange={ handleSetFilter }
                    label='Inactive'
                    checked={ filter === "inactive" }
                />
            </FormField>
            <Input
                size="massive"
                icon="search"
                iconPosition="left"
                placeholder="To-do to search..."
                className="todo-filter__search"
                onChange={handleOnChange}
            />
        </div>
    )
}
