/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { ListGroup, ListGroupItem, Badge, CardColumns, Card, CardBody } from 'reactstrap';
import { FoodItemContext } from '../../providers/FoodItemProvider';


export const IngredientStatusTable = ({recipeIngred}) => {
    const { getFoodItems, foodItems, getGroceryList, groceryItems } = useContext(FoodItemContext)
    const [ recipeIngredients, setRecipeIngredients] = useState([])

    useEffect(() => {
        setRecipeIngredients(recipeIngred)
    })


    useEffect(() => {
        getFoodItems().then(getGroceryList())
        console.log("useEffect runnign in ingredietn status table ")
    }, [recipeIngred])




    if (recipeIngredients) {

        return (
            <>
            {/* <ListGroup horizontal>

                    {recipeIngredients.map(food => {
                        if (foodItems.some(f => f.spoonacularIngredientId === food.id)) {
                            return <ListGroupItem className="justify-content-between">{food.original} &emsp; <Badge pill color="info">in pantry</Badge></ListGroupItem>
                        } else if (groceryItems.some(f => f.spoonacularIngredientId === food.id)) {
                            return <ListGroupItem className="justify-content-between">{food.original} &emsp; <Badge pill color="secondary">on grocery list</Badge></ListGroupItem>
                        } else { return <ListGroupItem className="justify-content-between">{food.original} </ListGroupItem> }
                    })}
            </ListGroup> */}

            <CardColumns>
                {recipeIngredients.map(food => {
                        if (foodItems.some(f => f.spoonacularIngredientId === food.id)) {
                            return <Card ><CardBody>{food.original} &emsp; <Badge pill color="info">in pantry</Badge></CardBody></Card>
                        } else if (groceryItems.some(f => f.spoonacularIngredientId === food.id)) {
                            return <Card ><CardBody>{food.original} &emsp; <Badge pill color="secondary">on grocery list</Badge></CardBody></Card>
                        } else { return <Card ><CardBody>{food.original}</CardBody> </Card> }
                    })}
            </CardColumns>

        </>
    )
    } else {
        return (
            <>
                <ListGroup flush>
                    <ListGroupItem>Error</ListGroupItem>
                </ListGroup>
            </>
        )
    }
}