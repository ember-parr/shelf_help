/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useContext, useState, useEffect, createRef } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup, Container, Row } from 'reactstrap';
import { MealContext } from "../../providers/MealProvider";
import { MealTypeContext } from "../../providers/MealTypeProvider";
import { MealFormListItem } from './MealFormListItem';


export const MealForm = ({menuId}) => {
    const history = useHistory();
    const { searchSpoonacularRecipes, spoonResults, setSpoonResults, getRandomRecipe, randomRecipe } = useContext(MealContext)
    const [isLoading, setIsLoading] = useState(true);
    const [ searchWords, setSearchWords] = useState('')

    useEffect(() => {
        setSpoonResults([])
    }, [])

    const handleRecipeSearch = (wordsToSearch) => {
        setIsLoading(true)
        searchSpoonacularRecipes(wordsToSearch)
        setIsLoading(false)
    }



    return (
        <>
            <div className="m-2">
            <Container className="themed-container" fluid="sm">
            <h2>Find Your New Favorite Meal!</h2>
            <Form    >
                <FormGroup>
                    <Input type="text"  placeholder="Search Recipes " onChange={event => setSearchWords(event.target.value)}/>
                </FormGroup>
                <Button 
                    type="submit" 
                    onClick={(e) => {
                        e.preventDefault()
                        handleRecipeSearch(searchWords)
                    }
                    }
                    > SEARCH </Button>

                    
            </Form>
            <hr />

            <div className="mt-3">
                <Row>
                    {spoonResults.results?.map(recipeOption => {
                        return <MealFormListItem key={recipeOption.id} recipe={recipeOption} />
                    })}
                </Row>
            </div>
            </Container>
        </div>


        </>
    )
}