/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useContext, useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import { FoodItemContext } from "../../providers/FoodItemProvider"


const GroceryForm = () => {
    const { searchSpoonacularIngredients, spoonResults } = useContext(FoodItemContext)
    const [searchTerms, setSearchTerms] = useState("")
    const [ searchOutput, setResults ] = useState([])

    // useEffect(() => {
    //     if (searchTerms !== "") {
    //         searchSpoonacularIngredients(searchTerms)
    //         .then(console.log("search output: " + searchOutput))
    //     }
    // })

    const searchForFood = (wordsToSearch) => {
        searchSpoonacularIngredients(wordsToSearch)
        console.log("words to search: " + wordsToSearch);
        console.log("spoon results: " + spoonResults)
    }


    return (
        <div>
            <h2>Add a new item to your grocery list</h2>
            <Form onSubmit={event=> {
                    event.preventDefault() 
                    searchForFood("milk")}}>
                <FormGroup>
                    <Input type="text" name="searchTerms" id="searchTerms" placeholder="Search Groceries to Add" />
                </FormGroup>
                <Button type="submit" > SEARCH </Button>
            </Form>
        </div>
    );
}

export default GroceryForm;