/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, {useState, useContext, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { MealContext } from "../../providers/MealProvider";
import { format, parseISO } from "date-fns"
import { Modal, ModalHeader, ModalBody, Row, Dropdown, Input, FormGroup, DropdownMenu, DropdownItem, DropdownToggle, Button, ModalFooter } from "reactstrap";
import { toast } from "react-toastify";
import { MealTypeContext } from "../../providers/MealTypeProvider";




export const MealTableRow = ({menu, spoonId}) => {
    const { updateMenu } = useContext(MealContext);
    const { getMealTypes, mealTypes } = useContext(MealTypeContext)
    const history = useHistory();
    // DATE AND MEALTYPE ARE INITIALIZED WITH THE MENUS DATA SO NO CHANGE ON UPDATEMENU FUNCTION
    const [dateSelection, setDateSelection] = useState(menu.date)
    const [mealTypeChoice, setMealTypeChoice] = useState(menu.mealType)

    // SET STATE NEEDED WITHIN COMPONENT FOR GENERAL FUNCTIONS
    const [isLoading, setIsLoading] = useState(true)

    // OPENING & CLOSING THE MODAL (open by clicking table row, close by clicking 'X' in modal or saving update)
    const [modal, setModal] = useState(false);
    const [collapse, setCollapse] = useState(false);
    const toggle = () => setCollapse(!collapse);

    // HELP DATE APPEAR LESS AWFUL & RE-RENDER WHEN MENUS ARE UPDATED OR RELOADED. (strange behavior with date-fns, betterDate function solved but is not pretty)
    useEffect(() => {
        betterDate()
        console.log("in use effect spoon id is: " + spoonId)
    }, [menu])

    let betterDate =() => {
        let stepOne = parseISO(menu.date)
        return format(stepOne, 'MM-dd')
    }

    // SIMPLE STYLING FOR MODAL CONSISTANCY
    const centerItUp = {
        textAlign: "center",
        flex: 1,
        justifyContent: "center"
    }

    // OPEN AND CLOSE THE EDIT MENU MODAL
    const openEditModal = () => {
        console.log("on open edit spoon id is: " + menu.spoonacularIngredientId)
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

    // UPDATING THE MENU IN THE DATABASE (note to self... don't name a function the same as an import. so many headaches)
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

    // DELETING A MENU ENTRY IN THE DATABASE
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

    const goToDetails = () => {
        let spoonyId = menu.spoonacularIngredientId
        console.log("spoon id is: " + menu.spoonacularIngredientId)
        if (menu.spoonacularIngredientId) {
            history.push(`/menu/details/${menu.spoonacularIngredientId}`)
        } else {
            console.log("error on GoToDetails function")
        }
    }

    return (
    <>
        <tr onClick={() => openEditModal()}>
            <td> <b>{betterDate()}</b> <br /> {menu?.mealType.name}</td>
            <td> <big> {menu?.name} </big></td>
        </tr>


        <Modal isOpen={modal} toggle={toggle} spoony={menu.spoonacularIngredientId}>
            <ModalHeader style={centerItUp} toggle={() => closeEditModal()}>update {menu.name} </ModalHeader>
                <i style={centerItUp} className="m-2"> currently in your meal plan for {menu.mealType.name} on {betterDate()}</i>
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
                        defaultValue={menu.date}
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

                <Row style={centerItUp} className="mt-2">
                    <Button color="info" size="md" onClick={ () => history.push(`/menu/details/${spoonId}`)}>View Details</Button>
                </Row>

            </ModalBody>
            <ModalFooter className="justify-content-between">
                <Button color="secondary" onClick={() => deleteMenu()}>Delete</Button> <Button color="info" onClick={() => updateTheMenu()}>Update</Button>
            </ModalFooter>
        </Modal>
    </>
    )
}