/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useContext, useEffect } from 'react';
import { Jumbotron, Button, Container, Col, Row, Table, Modal, ModalBody, ModalHeader, FormGroup, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, ModalFooter } from 'reactstrap';
import { MealContext } from '../../providers/MealProvider';
import { MealTypeContext } from '../../providers/MealTypeProvider';
import { UserProfileContext } from '../../providers/UserProfileProvider';
import { toast } from "react-toastify";



export const RecipeHeader = ({recipe}) => {
    const { addMenu, singleRecipe } = useContext(MealContext)
    const { getMealTypes, mealTypes } = useContext(MealTypeContext)
    const { getCurrentUser } = useContext(UserProfileContext)
    const user = getCurrentUser();
    const [modal, setModal] = useState(false);
    const [collapse, setCollapse] = useState(false);
    const toggle = () => setCollapse(!collapse);
    const [dateSelection, setDateSelection] = useState(new Date())
    const [mealTypeChoice, setMealTypeChoice] = useState(6)
    const [isLoading, setIsLoading] = useState(true)
    const [dropdownMealTypeOpen, setDropdownMealTypeOpen] = useState(false);

    useEffect(() => {
        getMealTypes()
    }, [])

    const centerItUp = {
        textAlign: "center",
        flex: 1,
        justifyContent: "center"
    }

    //functions
    const openEditModal = () => {
        setModal(true)
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
            spoonacularRecipeId: recipe.id,
        }
        addMenu(mealToAdd)
        .then(()=> toast.info(`${mealToAdd.name} was successfully added!`))
        .then(() => closeEditModal())
        }
    }






    return (
        <>
        <div className="m-2">
            <Container className="theamed-container" fluid="sm">
                <Jumbotron>
                    <h1 className="display-3"> {recipe.title} </h1>
                    <p className="lead">&ensp; | &ensp; ready in {recipe.readyInMinutes} minutes &ensp; | &ensp; {recipe.servings} servings &ensp; | &ensp; </p>
                    <hr className="my-2" />
                    <Row className="justify-content-around">
                        <Button color="secondary" href={recipe.sourceUrl} target="_blanks">Visit Source</Button>
                        <Button color="info" onClick={() => openEditModal()} >Add to your menu</Button>
                    </Row>
                </Jumbotron>
            </Container>
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