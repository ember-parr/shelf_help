/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, {useContext, useEffect, useState, useRef} from 'react';
import { useParams } from 'react-router-dom';
import { Container, Spinner, Row, Col } from 'reactstrap';
import { RecipeHeader } from '../components/MealMenu/MealDetails/RecipeHeader';
import { RecipeIngredients } from '../components/MealMenu/MealDetails/RecipeIngredients';
import { RecipeInstructions } from '../components/MealMenu/MealDetails/RecipeInstructions';
import { MealContext } from '../providers/MealProvider';

export const Recipe = () => {
    const { getSingleSpoonacularRecipe, singleRecipe, singleIngredients, singleInstructions } = useContext(MealContext)
    const {recipeId} = useParams();

    useEffect(() => {
        getSingleSpoonacularRecipe(recipeId)
    }, [])


    return (
    <>
        <div className="m-2">
            <Container className="theamedContainer" fluid="sm">
                {singleRecipe ? <RecipeHeader recipe={singleRecipe} /> : <Spinner color="secondary" />} 

                <Row>
                    <Col lg="4">
                        {singleRecipe.image ? <img alt={singleRecipe.name} src={singleRecipe.image} /> : <Spinner color="secondary" /> }
                    </Col>
                    <Col lg="2"></Col>
                    <Col lg="6">
                        {singleIngredients ? <RecipeIngredients ingredients={singleIngredients} /> : <Spinner color="secondary" />}
                    </Col>    
                </Row>

                <Row>
                    {singleInstructions ? <RecipeInstructions instructions={singleInstructions} /> : <Spinner color="secondary" />}
                </Row>
            </Container>
            <br /><br /><br /><br />
        </div>



    </>
    )
}