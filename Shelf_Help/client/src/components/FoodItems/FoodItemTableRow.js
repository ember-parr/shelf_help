import React from "react"
import { useHistory } from 'react-router-dom'
import { Table } from 'semantic-ui-react'

export const FoodItemTableRow = ({item}) => {
    const history = useHistory();

    
        return (
            <>
                <Table.Row onClick={() => history.push(`/items/edit/${item.id}`)}>
                    <Table.Cell collapsing>{ item.spoonacularingredientid }</Table.Cell>
                    <Table.Cell collapsing>{ item.quantity }</Table.Cell>
                    <Table.Cell collapsing>{ item.measurement }</Table.Cell>
                    <Table.Cell collapsing>{ item.location.name }</Table.Cell>
                    <Table.Cell collapsing> Using in some recipess.... EDIT THIS</Table.Cell>
                </Table.Row>

            </>
        )
    
}