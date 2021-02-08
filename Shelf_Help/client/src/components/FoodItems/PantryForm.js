/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useContext, useState, useEffect, createRef } from 'react';
import { useParams } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup, Container } from 'reactstrap';
import { FoodItemContext } from "../../providers/FoodItemProvider";
import { LocationContext } from "../../providers/LocationProvider";


const PantryForm = () => {
    const { searchSpoonacularIngredients, spoonResults, foodItems, getFoodById } = useContext(FoodItemContext)
    const { locations, getLocations } = useContext(LocationContext)
    const [food, setFood] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const {foodId} = useParams();
    const [snoopy, setSnoopy] = useState('')


    useEffect(() => {
        getLocations().then(() => {
            if(foodId){
                getFoodById(foodId)
                .then(singleFood => {
                    setFood(singleFood)
                    setIsLoading(false)
                })
            } else {
                setIsLoading(false)
            }
        })
    }, [])


    
    const handleFoodSearch = (wordsToSearch) => {
        console.log("sent with click: " + wordsToSearch)
    }

    

    return (
        <div className="m-2">
            <Container className="themed-container" fluid="sm">
            <h2>Add a new item to your pantry's ingredient inventory</h2>
            <Form    >
                <FormGroup>
                    <Input type="text"  placeholder="Search Ingredient to Add" onChange={event => setSnoopy(event.target.value)}/>
                </FormGroup>
                <Button 
                    type="submit" 
                    onClick={(e) => {
                        e.preventDefault()
                        handleFoodSearch(snoopy)
                    }
                    }
                    > SEARCH </Button>
            </Form>
            </Container>
        </div>
    );
}

export default PantryForm;