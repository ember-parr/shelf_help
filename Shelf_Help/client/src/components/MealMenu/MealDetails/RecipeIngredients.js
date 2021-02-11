/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { FoodItemContext } from '../../../providers/FoodItemProvider';
import { ListGroup, ListGroupItem, Badge, CardColumns, Card, CardBody } from 'reactstrap';

export const RecipeIngredients = ({ingredients}) => {
    const { getFoodItems, foodItems, getGroceryList, groceryItems } = useContext(FoodItemContext)

    useEffect(()=> {
        getFoodItems().then(getGroceryList())
        console.log("useEffect runnign in ingredients file ")
    }, [])



    if (ingredients.length > 0) {
    return (
        <>
            <big>Ingredients</big>
            <CardColumns>
                {ingredients.map(food => {
                        if (foodItems.some(f => f.spoonacularIngredientId === food.id)) {
                            return <Card key={food.id}><CardBody>{food.original} &emsp; <Badge pill color="info">in pantry</Badge></CardBody></Card>
                        } else if (groceryItems.some(f => f.spoonacularIngredientId === food.id)) {
                            return <Card key={food.id}><CardBody>{food.original} &emsp; <Badge pill color="secondary">on grocery list</Badge></CardBody></Card>
                        } else { return <Card ><CardBody>{food.original}</CardBody> </Card> }
                    })}
            </CardColumns>


        </>
    )
    } else {
        return (
        <>
            <big>Ingredients</big>
            <i>ingredients took too long to load.. better luck next time :( </i>
        </>
        )
    }
}