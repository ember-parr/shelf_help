import React from "react"
import { useHistory } from 'react-router-dom'

export const GroceryTableRow = ({item}) => {
    const history = useHistory();

    
        return (
            <>
                <tr onClick={() => history.push(`/items/edit/${item.id}`)}>
                    <td>{ item.foodName }</td>
                    <td >{ item.quantity }</td>
                    <td  className="d-none d-sm-block">{ item.measurement }</td>
                    <td>{ item.location.name }</td>
                    <td className="d-none d-md-block"> Using in some recipess.... EDIT THIS</td>
                </tr>

            </>
        )
    
}