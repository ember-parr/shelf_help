/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState, useRef, useLayoutEffect, useCallback } from 'react';
import { MealContext } from "../../providers/MealProvider"
import { Spinner, Jumbotron, Button, Container, Col, Row, Table, Modal, ModalBody, ModalHeader, FormGroup, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, ModalFooter } from 'reactstrap';
import { useHistory, useParams } from 'react-router-dom';
import { IngredientStatusTable } from "./IngredientsStatusTable";
import { MealTypeContext } from '../../providers/MealTypeProvider';
import { toast } from "react-toastify"
import { UserProfileContext } from '../../providers/UserProfileProvider';



export const MealDetails = () => {
    const { getSingleSpoonacularRecipe,  addMenu, singleRecipe } = useContext(MealContext)
    const { getMealTypes, mealTypes } = useContext(MealTypeContext)
    const { getCurrentUser } = useContext(UserProfileContext)
    const user = getCurrentUser();
    const {recipeId} = useParams();

    const history = useHistory();
    
    const [recipe, setRecipe] = useState({})
    const [dateSelection, setDateSelection] = useState(new Date())
    const [mealTypeChoice, setMealTypeChoice] = useState(6)
    const [isLoading, setIsLoading] = useState(true)
    const [dropdownMealTypeOpen, setDropdownMealTypeOpen] = useState(false);
    
    // OPENING & CLOSING THE MODAL (open by clicking table row, close by clicking 'X' in modal or saving update)
    const [modal, setModal] = useState(false);
    const [collapse, setCollapse] = useState(false);
    const toggle = () => setCollapse(!collapse);
    
    console.log("recipe id: " + recipeId)
    
    
    // useEffect(() => {
    //     getSingleSpoonacularRecipe(recipeId)
    //     console.log("useEffect in MealDetails")
    //     setRecipe(singleRecipe)
    //     console.log("recipe ingred: " + recipeIngredients)
    // }, [])
    
    const recipeIngredients = recipe.extendedIngredients
    const recipeInstructions  = recipe.analyzedInstructions

    // if (singleRecipe) {
    //     setRecipe(singleRecipe)
    //     console.log("single recipe loaded: " + recipe)
    // }

    // const firstRender = useRef(true);
    // useLayoutEffect(() => {
    //     if (firstRender.current) {
    //         firstRender.current = false;
    //         return;
    //     }
    //     getSingleSpoonacularRecipe(recipeId)
    //     console.log("layoutEffect running... ")
    // })

    // useEffect(() => {
    //     console.log("empty useEffect is running")
    // }, [recipeId])
    // getSingleSpoonacularRecipe(recipeId)
    // setRecipeIngredients(recipe.extendedIngredients)


    // SIMPLE STYLING FOR MODAL CONSISTANCY
    const centerItUp = {
        textAlign: "center",
        flex: 1,
        justifyContent: "center"
    }

    // OPEN AND CLOSE THE EDIT MENU MODAL
    const openEditModal = () => {
        setIsLoading(true)
        getMealTypes()
        setModal(true)
        setIsLoading(false)
    }
    const closeEditModal = () => {
        setModal(false)
    }

    // HANDLE BEHAVIOR AND FUNTIONALITY OF MEALTYPE DROPDOWN MENU AND HANDLING STATE CHANGE / UPDATED MENU SAVE
    const dropdownMealTypeToggle = () => {
        setDropdownMealTypeOpen(!dropdownMealTypeOpen)
    }




    const addMealEntry = () => {
        if (!dateSelection) {
            toast.error("Please select a date")
        } else if (!mealTypeChoice) {
            toast.error("Please select a meal type")
        } else {
        setIsLoading(true)
        const mealToAdd = {
            mealTypeId: mealTypeChoice.id,
            name: recipe.title,
            date: dateSelection,
            userId: user.id,
            custom: false,
            spoonacularIngredientId: recipe.id
        }
        addMenu(mealToAdd)
        .then(()=> toast.info(`${mealToAdd.name} was successfully added!`))
        .then(() => history.push("/menu/"))
    }

    }

    let instructionsToRender;
    if(recipeInstructions) {
        instructionsToRender = recipeInstructions.map(step => {
            return <tr key={step.number}> <td>{step.number}</td> <td>{step.name}</td> <td></td></tr>
        })
    } else {
        instructionsToRender = <tr><Spinner color="secondary" /></tr>
    }
    
    const alternateImage = {
        backgroundImage: `https://spoonacular.com/cdn/ingredients_250x250/${recipe.image}`
    }


    return (
    <>
        <div className="m-2">
            <Container className="themed-container" fluid="sm">
            <Jumbotron>
                <h1 className="display-3"> {singleRecipe.title} </h1>
                <p className="lead"> &ensp; | &ensp; Ready in {recipe.readyInMinutes} minutes &ensp; | &ensp; {recipe.servings} servings &ensp; | &ensp;</p>
                <hr className="my-2" />
                {/* <p>{recipe.summary}</p> */}
                <Row className="justify-content-around">
                <Button color="secondary" href={recipe.sourceUrl} target="_blank">Visit Source</Button>
                <Button color="info" onClick={() => openEditModal} >Add To Your Menu!</Button>
                </Row>
                <br /><sub> Courtesy of: {recipe.sourceName} | {recipe.creditsText}</sub>
            </Jumbotron>
            <Row>
                <Col lg="5" style={alternateImage}>
                    <img  alt={recipe.name} src={recipe.image} />
                </Col>
                <Col lg="2"></Col>
                <Col lg="5">
                    <big>Ingredients</big>
                    <hr />
                    <IngredientStatusTable recipeIngred={recipeIngredients} />
                </Col>
            </Row>
            <Row>
                <Table dark>
                    <thead>
                        <tr>
                            <th>Steps</th>
                            <th>Instructions</th>
                        </tr>
                    </thead>
                    <tbody>{instructionsToRender}</tbody>
                </Table>
            </Row>
            </Container>
            <br /><br /><br /><br />
        </div>



        <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={() => closeEditModal()}>add {recipe.name} to your meal plan</ModalHeader>
            <ModalBody>

            {/* START OF UNIT OF DATE ROW WITHIN MODAL */}
                <Row style={centerItUp} className="mb-2">
                    <big>Date: &ensp;</big>{" "}
                    <FormGroup>
                        <Input
                        type="date"
                        name="date"
                        id="mealDate"
                        placeholder="date for this meal"
                        onChange={(event) => setDateSelection(event.target.value)}
                        />
                    </FormGroup>
                </Row>
            {/* END OF UNIT OF DATE ROW WITHIN MODAL */}



            {/* START OF MEAL TYPE ROW WITHIN MODAL */}
                <Row style={centerItUp} className="mb-4">
                    <big>Meal Type: &ensp;</big>
                        <Dropdown size="sm" isOpen={dropdownMealTypeOpen} toggle={dropdownMealTypeToggle}> 
                            { mealTypeChoice.name ? <DropdownToggle caret>{mealTypeChoice.name}</DropdownToggle> : <DropdownToggle caret>Options</DropdownToggle> } 
                            <DropdownMenu>
                                <DropdownItem header>select one option</DropdownItem>
                                <DropdownItem divider />
                                {mealTypes.map(option => {
                                    return <DropdownItem key={option.id} onClick={() => setMealTypeChoice(option)}>{option.name}</DropdownItem>
                                })}
                            </DropdownMenu>
                        </Dropdown>
                    
                </Row>
            {/* END OF MEAL TYPE ROW WITHIN MODAL */}

            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={() => addMealEntry()}>Save</Button>
            </ModalFooter>
        </Modal>









    </>
    )
}