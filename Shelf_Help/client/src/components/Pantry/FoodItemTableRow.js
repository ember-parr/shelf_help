/* eslint-disable no-unused-vars */
import React, {useState, useContext} from "react"
import {FoodItemContext} from "../../providers/FoodItemProvider"
import { toast } from "react-toastify";



export const FoodItemTableRow = ({item}) => {
    const { deleteFoodItem, updateFoodItem } = useContext(FoodItemContext);

    console.log("FoodItemTableRow just ran")

    // SET STATE NEEDED WITHIN COMPONENT FOR GENERAL FUNCTIONS
    const [isLoading, setIsLoading] = useState(true)


    const moveToGrocery = () => {
        setIsLoading(true)
        console.log("add clicked : " + item.id)
        const foodToUpdate = {
            id: item.id,
            quantity: 0,
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
            window.location.href="/mypantry"
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
            window.location.href="/mypantry"
        })
    }

    
    // DISPLAYING INFO ON DOM 
        return (
            <>
            <tr >
                    <td>{ item.foodName }</td>
                    <td> <span onClick={() => moveToGrocery()}> 〰 </span> &emsp; <span onClick={() => deleteItem()}> ✖ </span> </td>
                    
                </tr>
            </>
        )
    
}