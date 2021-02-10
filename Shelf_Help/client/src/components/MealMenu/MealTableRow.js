/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, {useState, useContext, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { MealContext } from "../../providers/MealProvider";
import { format, add, parse, parseISO, setDate } from "date-fns"
import { useTable, Modal, ModalHeader, ModalBody, Row, Col, Dropdown, Input, Form, FormGroup, DropdownMenu, DropdownItem, Label, DropdownToggle, Button, ModalFooter } from "reactstrap";
import { UserProfileContext } from "../../providers/UserProfileProvider";
import { toast } from "react-toastify";
import { MealTypeContext } from "../../providers/MealTypeProvider";




export const MealTableRow = ({menu}) => {
    const { getCertainMeal, allMeals, getDaysMeals, getMeals, updateMenu } = useContext(MealContext);
    const { getMealTypes, mealTypes } = useContext(MealTypeContext)
    const { getCurrentUser } = useContext(UserProfileContext)
    const User = getCurrentUser();

    // SET STATE NEEDED WITHIN COMPONENT FOR GENERAL FUNCTIONS
    const [isLoading, setIsLoading] = useState(true)

    // OPENING & CLOSING THE MODAL (open by clicking table row, close by clicking 'X' in modal or saving update)
    const [modal, setModal] = useState(false);
    const [collapse, setCollapse] = useState(false);
    const toggle = () => setCollapse(!collapse);

    useEffect(() => {
        betterDate()
    }, [menu])

    let betterDate =() => {
        let stepOne = parseISO(menu.date)
        // bestDate = format(stepOne, 'yyyy-MM-dd')
        return format(stepOne, 'iiii - LLL. Io')
    }

    const centerItUp = {
        textAlign: "center",
        flex: 1,
    justifyContent: "center"
    }

    const openEditModal = () => {
        setIsLoading(true)
        getMealTypes()
        setModal(true)
        setIsLoading(false)}

    const closeEditModal = () => {
        setModal(false)
        console.log("modal closed!")
    }


    const [dropdownMealTypeOpen, setDropdownMealTypeOpen] = useState(false);
    const dropdownMealTypeToggle = () => {
        setDropdownMealTypeOpen(!dropdownMealTypeOpen);}
    const [mealTypeChoice, setMealTypeChoice] = useState(menu.mealType)

    const [dateSelection, setDateSelection] = useState(menu.date)
        console.log("initial date: " + menu.date)
        console.log("dateSelection state right now: " + dateSelection)


    // UPDATING THE INGREDIENT IN THE DATABASE
    const updateTheMenu = () => {
        setIsLoading(true)
        const mealToUpdate = {
            id: menu.id,
            mealTypeId: mealTypeChoice.id,
            name: menu.name,
            date: dateSelection,
            userId: menu.userId,
            custom: false,
            spoonacularIngredientId: menu.spoonacularIngredientId
        }
        updateMenu(mealToUpdate)
        .then(() => {
            setIsLoading(false)
            toast.info(`${menu.name} successfully updated!`)
            closeEditModal()
        })
        .then(()=> {
            window.location.href="/menu"
        })
    }


    

    // DELETING AN INGREDIENT IN THE DATABASE
    const deleteMenu = () => {
        setIsLoading(true)
        deleteMenu(menu)
        .then(() => {
            setIsLoading(false)
            toast.info(`${menu.name} deleted`)
            closeEditModal()
        })
        .then(()=> {
            window.location.href="/menu"
        })
    }

    return (
        <>
            <tr onClick={() => openEditModal()}>
                <td> <b>{betterDate()}</b> <br /> {menu?.mealType.name}</td>
                <td> <h4> {menu?.name} </h4></td>
            </tr>


        <Modal isOpen={modal} toggle={toggle} >
                    <ModalHeader toggle={() => closeEditModal()}>update {menu.name} </ModalHeader>
                        <i className="m-2">in your meal plan for {mealTypeChoice.name} on {betterDate()}</i>
                        
                    <ModalBody>

                    {/* START OF UNIT OF MEASUREMENT ROW WITHIN MODAL */}
                        <Row style={centerItUp} className="mb-2">
                            <big>Date: &ensp;</big>{" "}
                            <FormGroup>
                                <Input
                                type="date"
                                name="date"
                                id="mealDate"
                                placeholder="date for this meal"
                                defaultValue={menu.date}
                                onChange={(event) => setDateSelection(event.target.value)}
                                />
                            </FormGroup>
                        </Row>
                    {/* END OF UNIT OF MEASUREMENT ROW WITHIN MODAL */}



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
                    {/* START OF STORAGE LOCATION ROW WITHIN MODAL */}

                    <Row style={centerItUp} className="mt-2">
                        <Button color="info" size="md">Choose Another Recipe</Button>
                    </Row>


                        {/* MODAL FOOTER WITH SAVE UPDATE BUTTON */}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => updateTheMenu()}>Update</Button>{' '}<Button color="danger" onClick={() => deleteMenu()}>Delete</Button>
                    </ModalFooter>
                </Modal>
            {/* END OF MODAL FOR UPDATING FOOD ITEM */}
        </>
    )
}