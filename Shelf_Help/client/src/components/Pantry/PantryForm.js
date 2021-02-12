/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useContext, useState, useEffect } from 'react';
import { Button, Input, Form, FormGroup, Container, Row } from 'reactstrap';
import { FoodItemContext } from "../../providers/FoodItemProvider";
import { PantryFormListItem } from './PantryFormListItem';


const PantryForm = () => {
    const { searchSpoonacularIngredients, spoonResults, foodItems, getFoodById, setSpoonResults } = useContext(FoodItemContext)
    const [isLoading, setIsLoading] = useState(true);
    const [snoopy, setSnoopy] = useState('')

    useEffect(() => {
        setSpoonResults([])
    }, [])

    const handleFoodSearch = (wordsToSearch) => {
        setIsLoading(true)
        searchSpoonacularIngredients(wordsToSearch)
        setIsLoading(false)
    }
    console.log("pantry form just ran")
    

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
            <hr />

            <div className="mt-3">
                <Row>
                    {spoonResults.results?.map(ingredientOption => {
                        return <PantryFormListItem key={ingredientOption.id} food={ingredientOption} />
                    })}
                </Row>
            </div>
            </Container>
        </div>
    );
}

export default PantryForm;