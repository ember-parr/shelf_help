import React from "react"
import { useHistory } from 'react-router-dom'

export const GroceryTableRow = ({item}) => {
    const history = useHistory();

    
        return (
            <>
                <tr >
                    <td>{ item.foodName }</td>
                    <td>{ item.location.name }</td>
                    <td className="d-none d-md-block"> 1 recipe on your menu</td>
                </tr>

            </>
        )
    
}