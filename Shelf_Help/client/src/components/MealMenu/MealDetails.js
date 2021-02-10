/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { MealContext } from "../../providers/MealProvider"
import { Jumbotron, Button, Container, Col, Row, Table, Modal, ModalBody, ModalHeader, FormGroup, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, ModalFooter } from 'reactstrap';
import { useHistory, useParams } from 'react-router-dom';
import { IngredientStatusTable } from "./IngredientsStatusTable";
import { MealTypeContext } from '../../providers/MealTypeProvider';
import { toast } from "react-toastify"
import { UserProfileContext } from '../../providers/UserProfileProvider';



export const MealDetails = () => {
    const { getSingleSpoonacularRecipe, singleRecipe, addMenu } = useContext(MealContext)
    const { getMealTypes, mealTypes } = useContext(MealTypeContext)
    const { getCurrentUser } = useContext(UserProfileContext)
    const user = getCurrentUser();
    const {recipeId} = useParams();
    const history = useHistory();
    const [ recipeIngredients, setRecipeIngredients] = useState([])

    // OPENING & CLOSING THE MODAL (open by clicking table row, close by clicking 'X' in modal or saving update)
    const [modal, setModal] = useState(false);
    const [collapse, setCollapse] = useState(false);
    const toggle = () => setCollapse(!collapse);

    useEffect(() => {
        getSingleSpoonacularRecipe(recipeId)
        setRecipeIngredients(singleRecipe.extendedIngredients)
    }, [])


    // SIMPLE STYLING FOR MODAL CONSISTANCY
    const centerItUp = {
        textAlign: "center",
        flex: 1,
    justifyContent: "center"
    }

    // DATE AND MEALTYPE ARE INITIALIZED WITH THE MENUS DATA SO NO CHANGE ON UPDATEMENU FUNCTION
    const [dateSelection, setDateSelection] = useState(new Date())
    const [mealTypeChoice, setMealTypeChoice] = useState(6)

    // SET STATE NEEDED WITHIN COMPONENT FOR GENERAL FUNCTIONS
    const [isLoading, setIsLoading] = useState(true)

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
    const [dropdownMealTypeOpen, setDropdownMealTypeOpen] = useState(false);
    const dropdownMealTypeToggle = () => {
        setDropdownMealTypeOpen(!dropdownMealTypeOpen)
    }


    console.log(singleRecipe?.extendedIngredients)

    const instructions = () => {
        if (singleRecipe.analyzedInstructions) {
            console.log("yes single recipe")
            {singleRecipe.analyzedInstructions.map(step => {
                <tr>
                    <td>{step.name}</td>
                </tr>
            })}
        } else {
            console.log("no single recipe")
            return(<tr>
                <td>error</td>
            </tr>)
    }}


    const addMealEntry = () => {
        if (!dateSelection) {
            toast.error("Please select a date")
        } else if (!mealTypeChoice) {
            toast.error("Please select a meal type")
        } else {
        setIsLoading(true)
        const mealToAdd = {
            mealTypeId: mealTypeChoice.id,
            name: singleRecipe.title,
            date: dateSelection,
            userId: user.id,
            custom: false,
            spoonacularIngredientId: singleRecipe.id
        }
        addMenu(mealToAdd)
        .then(()=> toast.info(`${mealToAdd.name} was successfully added!`))
        .then(() => history.push("/menu/"))
    }

    }
    


    return (
    <>
        <div className="m-2">
            <Container className="themed-container" fluid="sm">
            <Jumbotron>
                <h1 className="display-3"> {singleRecipe?.title} </h1>
                <p className="lead"> &ensp; | &ensp; Ready in {singleRecipe.readyInMinutes} minutes &ensp; | &ensp; {singleRecipe.servings} servings &ensp; | &ensp;</p>
                <hr className="my-2" />
                {/* <p>{singleRecipe.summary}</p> */}
                
                <Button color="secondary" href={singleRecipe.sourceUrl} target="_blank">Visit Source</Button>
                <Button color="info" onClick={() => openEditModal()} >Add To Your Menu!</Button>
                <br /><sub> Courtesy of: {singleRecipe.sourceName} | {singleRecipe.creditsText}</sub>
            </Jumbotron>
            <Row>
                <Col lg="5">
                    <img alt={singleRecipe.name} src={singleRecipe.image} />
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
                    <tbody>
                        {instructions()}
                    </tbody>
                </Table>
            </Row>
            </Container>
            <br /><br /><br /><br />
        </div>



        <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={() => closeEditModal()}>add {singleRecipe.name} to your meal plan</ModalHeader>
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