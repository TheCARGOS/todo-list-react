import "./TodosFilter.scss"
import { Checkbox, FormField } from "semantic-ui-react"

export default function TodosFilter({setFilter, filter}) {

    const handleSetFilter = (e, { value }) => setFilter(value)

    return (
        <div className="todos-filter">
            <FormField>
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
        </div>
    )
}
