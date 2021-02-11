/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { FoodItemContext } from '../../../providers/FoodItemProvider';
import { ListGroup, ListGroupItem, Badge, CardColumns, Card, CardBody, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { UserProfileContext } from '../../../providers/UserProfileProvider';
import { toast } from "react-toastify"

export const RecipeIngredients = ({ingredients}) => {
    const { getFoodItems, foodItems, getGroceryList, groceryItems, addFoodItem } = useContext(FoodItemContext)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(()=> {
        getFoodItems().then(getGroceryList())
        console.log("useEffect runnign in ingredients file ")
    }, [])

    const { getCurrentUser } = useContext(UserProfileContext)
    const user = getCurrentUser();
    const [modal, setModal] = useState(false);
    const [collapse, setCollapse] = useState(false);
    const toggle = () => setCollapse(!collapse);
    const [modalFood, setModalFood] = useState()
    

    //functions
    const openEditModal = (food) => {
        setModal(true)
        setModalFood(food)
    }

    const closeEditModal = () => {
        setModal(false)
    }

    /*
****************************************************************************
THIS IS WHERE I'M STUCK
****************************************************************************
*/

    // const addIngredient = (food) => {
    //     setIsLoading(true)
    //     const foodToAdd = {
    //         quantity: 0,
    //         spoonacularIngredientId: food?.id,
    //         measurement: "",
    //         userId: user.id,
    //         locationId: 6,
    //         foodName: food?.name
    //     }
    //     addFoodItem(foodToAdd)
    //     .then(closeEditModal())
    //     .then(() => toast.info(`${foodToAdd.quantity} ${foodToAdd.foodName} successfully added to your grocery list!`))
    // }

/*
****************************************************************************
THIS IS WHERE I'M STUCK
****************************************************************************
*/







    if (ingredients.length > 0) {
        return (
            <>
                <big>Ingredients</big>
                <CardColumns >
                    {ingredients.map(food => {
                            if (foodItems.some(f => f.spoonacularIngredientId === food.id)) {
                                return <Card key={food.id}><CardBody>{food.original} &emsp; <Badge pill color="info">in pantry</Badge></CardBody></Card>
                            } else if (groceryItems.some(f => f.spoonacularIngredientId === food.id)) {
                                return <Card key={food.id}><CardBody>{food.original} &emsp; <Badge pill color="secondary">on grocery list</Badge></CardBody></Card>
                            } else { return <Card onClick={() => openEditModal()}><CardBody>{food.original}</CardBody> </Card> }
                        })}
                






                <Modal isOpen={modal} toggle={toggle} >
                    <ModalHeader toggle={() => closeEditModal()}>Add to grocery list? </ModalHeader>
                    <ModalBody>
                        
                        Would you like to add {modalFood?.name} to your grocery list?
                    </ModalBody>
                    <ModalFooter>
                        {/* <Button color="primary" onClick={addIngredient(modalFood)}>Yes</Button>{' '} */}
                    </ModalFooter>
                </Modal>
                </CardColumns>

            </>
        ) } else {
        return (
            <>
                <big>Ingredients</big>
                <i>ingredients took too long to load.. better luck next time  </i>
            </>
        )}








}