import React from "react"

export const GroceryTableRow = ({item}) => {

    console.log("groceryTableRowJustRan")
        return (
            <>
                <tr >
                    <td>{ item.foodName }</td>
                    <td>{ item.location.name }</td>
                    {/* <td className="d-none d-md-block"> 1 recipe on your menu</td> */}
                </tr>

            </>
        )
    
}