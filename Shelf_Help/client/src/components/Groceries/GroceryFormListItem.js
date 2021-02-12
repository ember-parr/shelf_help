/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-whitespace-before-property */
/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { Card, Button, CardTitle, CardBody, Collapse, Col, Modal, ModalHeader, ModalBody, ModalFooter, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Row  } from "reactstrap";
import {FoodItemContext} from "../../providers/FoodItemProvider"
import { UserProfileContext } from "../../providers/UserProfileProvider";
import { toast } from "react-toastify";


export const GroceryFormListItem = ({food}) => {
    const { getCurrentUser } = useContext(UserProfileContext)
    const [isLoading, setIsLoading] = useState(true)
    const history = useHistory();
    const {addFoodItem} = useContext(FoodItemContext);
    const user = getCurrentUser();
    
    
    console.log("GroceryFormListItem jsut ran")

    
  

    // useEffect(() => {
    //     getLocations()
    // }, [])




    // SAVING THE INGREDIENT TO THE USERS PANTRY
    const addIngredient = () => {
            setIsLoading(true)
            const foodToAdd = {
                quantity: 0,
                spoonacularIngredientId: food.id,
                measurement: " ",
                userId: user.id,
                locationId: 5,
                foodName: food.name
            }
            addFoodItem(foodToAdd)
            .then(() => toast.info(`${foodToAdd.foodName} successfully added!`))
            .then(() => history.push("/grocerylist"))
        
    }




        return (
            <>
                <Col sm="4" className="mb-4">
                <Card body>
                    <CardTitle tag="h5">{food.name}</CardTitle>
                    <Button onClick={() => addIngredient(food.id, food.name)}> Add To Grocery List </Button>
                </Card>
                </Col>
                
            </>
            )
    
}