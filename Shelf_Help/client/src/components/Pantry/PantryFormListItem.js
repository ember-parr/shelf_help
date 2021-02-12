/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-whitespace-before-property */
/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { Card, Button, CardTitle, CardBody, Collapse, Col, Modal, ModalHeader, ModalBody, ModalFooter, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Row  } from "reactstrap";
import {FoodItemContext} from "../../providers/FoodItemProvider"
import { UserProfileContext } from "../../providers/UserProfileProvider";
import { toast } from "react-toastify";
import { LocationContext } from "../../providers/LocationProvider";


export const PantryFormListItem = ({food}) => {
    const { getCurrentUser } = useContext(UserProfileContext)
    const { locations, getLocations } = useContext(LocationContext)
    const [isLoading, setIsLoading] = useState(true)
    const history = useHistory();
    const [collapse, setCollapse] = useState(false);
    const {addFoodItem} = useContext(FoodItemContext);
    const [status, setStatus] = useState('Closed');
    const onEntering = () => setStatus('Opening...');
    const onEntered = () => setStatus('Opened');
    const onExiting = () => setStatus('Closing...');
    const onExited = () => setStatus('Closed');
    const toggle = () => setCollapse(!collapse);
    const [modal, setModal] = useState(false);
    const [childModal, setChildModal] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownStorageOpen, setDropdownStorageOpen] = useState(false);
    const [measurementChoice, setMeasurementChoice] = useState("")
    const [storageChoice, setStorageChoice] = useState({})
    const user = getCurrentUser();
    const toggleModal = (id, name) => {
        setModal(!modal);
        setStorageChoice({})
        setMeasurementChoice("")
        setClicks(1);
    }
    const toggleChildModal = (id, name) => {
        setChildModal(!childModal);
        setClicks(1);
    }

    const dropdownToggle = () => {
        setDropdownOpen(!dropdownOpen);
    }

    const dropdownStorageToggle = () => {
        setDropdownStorageOpen(!dropdownStorageOpen);
    }
    console.log("PantryFormListItem jsut ran")

    // FUNCTIONS FOR INCREMENTAL COUNTER ON FORM MODAL
    const [clicks, setClicks] = useState(1)
    const IncrementItem = () => {
        setClicks(clicks + 1)
    }
    const DecreaseItem = () => {
        if (clicks > 1 ) {
            setClicks(clicks - 1)
        }
    }
    const iconStyling = {
        fontSize: 30
    }
    const centerItUp = {
        textAlign: "center"
    }

    useEffect(() => {
        getLocations()
    }, [])




    // SAVING THE INGREDIENT TO THE USERS PANTRY
    const addIngredient = () => {
        // if (!measurementChoice) {
        //     toast.error("Please Select A Unit of Measurement");
        // } else
         if (!storageChoice.name) {
            toast.error("Please select a storage option")
        } else {
            setIsLoading(true)
            const foodToAdd = {
                quantity: clicks,
                spoonacularIngredientId: food.id,
                measurement: " ",
                userId: user.id,
                locationId: storageChoice.id,
                foodName: food.name
            }
            addFoodItem(foodToAdd)
            .then(() => toast.info(`${foodToAdd.quantity} ${foodToAdd.foodName} successfully added!`))
            .then(() => history.push("/mypantry"))
        }
    }




        return (
            <>
            {/* INGREDIENTS WITHOUT CHILDREN JUST HAVE A BUTTON TO ADD TO PANTRY  */}
                <Col sm="4" className="mb-4">
                <Card body>
                    <CardTitle tag="h5">{food.name}</CardTitle>
                    <Button onClick={() => toggleModal(food.id, food.name)}> Add To My Pantry </Button>
                </Card>
                </Col>
                <Modal isOpen={modal} toggle={toggle} >
                    <ModalHeader toggle={toggleModal}>{food.name} quantity... </ModalHeader>
                    <ModalBody>
                        {/* <Row className="mb-4" style={centerItUp}> */}
                            {/* <Col lg="2"></Col>
                            <Col lg="3"> */}
                                {/* <Dropdown isOpen={dropdownOpen} toggle={dropdownToggle}>
                                    <DropdownToggle caret>
                                        Measurement
                                    </DropdownToggle>
                                    <DropdownMenu>S
                                        <DropdownItem header>select one option</DropdownItem>
                                        <DropdownItem divider />
                                        {food.possibleUnits.map(option => {
                                            return <DropdownItem onClick={() => setMeasurementChoice(option)}>{option}</DropdownItem>
                                        })}
                                    </DropdownMenu>
                                </Dropdown> */}
                            {/* </Col>
                            <Col lg="1"></Col> */}
                            <Row  className="justify-content-around">

                            <Col lg="3">
                                <Dropdown isOpen={dropdownStorageOpen} toggle={dropdownStorageToggle}>
                                    
                                        { storageChoice.name ? <DropdownToggle caret>{storageChoice.name}</DropdownToggle> : <DropdownToggle caret>Storage</DropdownToggle> }
                                    
                                    <DropdownMenu>
                                        <DropdownItem header>select one option</DropdownItem>
                                        <DropdownItem divider />
                                        {locations.map(option => {
                                            return <DropdownItem onClick={() => setStorageChoice(option)}>{option.name}</DropdownItem>
                                        })}
                                    </DropdownMenu>
                                </Dropdown>
                            </Col>
                            {/* <Col lg="3"></Col> */}
                        </Row>
                        <Row style={iconStyling} >
                            <Col lg="4"></Col>
                            <Col lg="1">
                                <i class="fas fa-minus-square" onClick={() => DecreaseItem()}></i>
                            </Col>
                            <Col lg="1" style={centerItUp}>
                                {clicks}
                            </Col>
                            <Col lg="1">
                                <i class="fas fa-plus-square" onClick={() => IncrementItem()}></i>
                            </Col>
                            {/* <Col lg="2">
                                {measurementChoice ? <p>{measurementChoice}(s)</p> : <p> </p>}
                            </Col> */}
                            <Col lg="3"> &emsp; </Col>
                        </Row>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={addIngredient}>Add To Pantry</Button>{' '}
                    </ModalFooter>
                </Modal>
            </>
            )
    
}