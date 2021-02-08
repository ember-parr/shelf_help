/* eslint-disable no-unused-vars */
/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useContext, useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup, Container } from 'reactstrap';
import { FoodItemContext } from "../../providers/FoodItemProvider"


const PantryForm = () => {
    const { searchSpoonacularIngredients, spoonResults } = useContext(FoodItemContext)
    const [spoonSearchWords, setSpoonSearchTerms] = useState("")
    const [ searchOutput, setResults ] = useState({})

    // useEffect(() => {
    //     if (searchTerms !== "") {
    //         searchSpoonacularIngredients(searchTerms)
    //         .then(console.log("search output: " + searchOutput))
    //     }
    // })

    
    const handleFoodSearch = (e) => {
        const newFoodSearch = { ...searchOutput }
        newFoodSearch[e.target.name] = e.target.value
        setResults(newFoodSearch)



        // e.preventDefault()
        // setSpoonSearchTerms(e.target.value)
        console.log("handle food search output: " + searchOutput)
    }

    console.log("solo food search state: " + spoonSearchWords)

        // console.log("ouside of function spoonSearchWords: " + spoonSearchWords );


    return (
        <div className="m-2">
            <Container className="themed-container" fluid="sm">
            <h2>Add a new item to your pantry's ingredient inventory</h2>
            <Form    >
                <FormGroup>
                    <Input type="text" name="name" id="searchTerms" placeholder="Search Ingredient to Add" />
                </FormGroup>
                <Button 
                    type="submit" 
                    onClick={(e) => {
                        e.preventDefault()
                        handleFoodSearch()
                    }
                    }
                    > SEARCH </Button>
            </Form>
            </Container>
        </div>
    );
}

export default PantryForm;