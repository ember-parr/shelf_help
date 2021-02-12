import React, {useState, useContext} from "react"
import { toast } from "react-toastify";
import { FoodItemContext } from "../../providers/FoodItemProvider";

export const GroceryTableRow = ({item}) => {
    const [isLoading, setIsLoading] = useState(true)
    const { deleteFoodItem, updateFoodItem } = useContext(FoodItemContext);

    const moveToPantry = () => {
        setIsLoading(true)
        console.log("add clicked : " + item.id)
        const foodToUpdate = {
            id: item.id,
            quantity: 1,
            spoonacularIngredientId: item.spoonacularIngredientId,
            measurement: " ",
            userId: item.userId,
            locationId: item.locationId,
            foodName: item.foodName
        }
        updateFoodItem(foodToUpdate)
        .then(() => {
            setIsLoading(false)
            toast.info(`${item.foodName} successfully updated!`)
        })
        .then(()=> {
            window.location.href="/grocerylist"
        })
    }

    const deleteItem = () => {
        setIsLoading(true)
        console.log("delete clicked: " + item.id)
        deleteFoodItem(item)
        .then(() => {
            setIsLoading(false)
            toast.info(`${item.foodName} deleted`)
        })
        .then(()=> {
            window.location.href="/grocerylist"
        })
    }


        return (
            <>
                <tr >
                    <td>{ item.foodName }</td>
                    {/* <td>{ item.location.name }</td> */}
                    <td> <span  href="#" id="TooltipAdd" onClick={() => moveToPantry()}> ✔ </span> &emsp; <span  href="#" id="TooltipDelete" onClick={() => deleteItem()}> ✖ </span> </td>
                    
                </tr>

            </>
        )
    
}