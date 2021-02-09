/* eslint-disable no-unused-vars */
import React, {useState, useContext, useEffect} from "react"
import { Button, Col, Modal, ModalHeader, ModalBody, ModalFooter, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Media  } from "reactstrap";
import {FoodItemContext} from "../../providers/FoodItemProvider"
import { UserProfileContext } from "../../providers/UserProfileProvider";
import { toast } from "react-toastify";
import { LocationContext } from "../../providers/LocationProvider";



export const FoodItemTableRow = ({item}) => {
    // PROVIDERS FOR DATA NEEDED WITHIN COMPONENT
    const { getCurrentUser } = useContext(UserProfileContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { deleteFoodItem, updateFoodItem } = useContext(FoodItemContext);
    const user = getCurrentUser();

    // SET STATE NEEDED WITHIN COMPONENT FOR GENERAL FUNCTIONS
    const [isLoading, setIsLoading] = useState(true)

    // OPENING & CLOSING THE MODAL (open by clicking table row, close by clicking 'X' in modal or saving update)
    const [modal, setModal] = useState(false);
    const [collapse, setCollapse] = useState(false);
    const toggle = () => setCollapse(!collapse);

    
    // FOR UPDATING & DISPLAYING QUANTITY OF FOOD ITEM
    const [clicks, setClicks] = useState(item.quantity) 
    const IncrementItem = () => {
        setClicks(clicks + 1)}
        const DecreaseItem = () => {
        if (clicks > 1 ) {
            setClicks(clicks - 1)
        }}

    // FOR MEASUREMENT DROPDOWN MENU
    const [dropdownMeasurementOpen, setDropdownMeasurementOpen] = useState(false);
    const dropdownMeasurementToggle = () => {
        setDropdownMeasurementOpen(!dropdownMeasurementOpen);}
    const [measurementChoice, setMeasurementChoice] = useState(item.measurement)

    // FOR STORAGE (location) DROPDOWN MENU
    const [dropdownStorageOpen, setDropdownStorageOpen] = useState(false);
    const dropdownStorageToggle = () => {
        setDropdownStorageOpen(!dropdownStorageOpen);}
    const [storageChoice, setStorageChoice] = useState(item.location)

    
        
    // STYLING TO CENTER CONTENT ON MODAL
    const centerItUp = {
        textAlign: "center",
        flex: 1,
    justifyContent: "center"
    }


    // ACTIONS OCCUR WHEN MODAL STATE IS CHANGED
    const [spoonDetails, setSpoonDetails] = useState(null)

    useEffect(() => {
        if (spoonDetails) {
            console.log("this ran when spoon details changed.... ")
            console.log("spoonDetails.name inside useEffect... " + spoonDetails?.name)
            console.log("spoonDetails.possibleUnits inside useEffect: " + typeof(spoonDetails.possibleUnits))
        }
    }, [spoonDetails])

    const getSpoonDetails = () => {
        console.log("getSpoonDetails function has run... ")
        fetch(`https://api.spoonacular.com/food/ingredients/${item.spoonacularIngredientId}/information?apiKey=350c741bf82e41378e9b1359a60deadd`)
        .then((res) => res.json())
        .then(output => {
            setSpoonDetails(output)
        })}

    const openEditModal = () => {
        setIsLoading(true)
        getLocations()
        setModal(true)
        setIsLoading(false)
        getSpoonDetails()}

    const closeEditModal = () => {
        setModal(false)
        console.log("modal closed!")
    }


    // STYLING FOR PLUS AND MINUS ICONS IN UPDATE MODAL
    const iconStyling = {
        fontSize: 22,
        justifyContent: "spaceAround"
    }

    // UPDATING THE INGREDIENT IN THE DATABASE
    const updateIngredient = () => {
        setIsLoading(true)
        const foodToUpdate = {
            id: item.id,
            quantity: clicks,
            spoonacularIngredientId: spoonDetails.id,
            measurement: measurementChoice,
            userId: user.id,
            locationId: storageChoice.id,
            foodName: item.foodName
        }
        console.log("foodToUpdate: " + foodToUpdate.quantity + " " + foodToUpdate.measurement + " " + foodToUpdate.locationId + " aka: " + storageChoice.name)
        updateFoodItem(foodToUpdate)
        .then(() => {
            setIsLoading(false)
            toast.info(`${item.foodName} successfully updated!`)
            closeEditModal()
        })
        .then(()=> {
            window.location.href="/mypantry"
        })
    }

    // DELETING AN INGREDIENT IN THE DATABASE
    const deleteIngredient = () => {
        setIsLoading(true)
        deleteFoodItem(item)
        .then(() => {
            setIsLoading(false)
            toast.info(`${item.foodName} deleted`)
            closeEditModal()
        })
        .then(()=> {
            window.location.href="/mypantry"
        })
    }

    
    // DISPLAYING INFO ON DOM 
        return (
            <>
            {/* START OF TABLE ROW FOR FOOD ITEM */}
                <tr onClick={() => openEditModal()}>
                    <td>{ item.foodName }</td>
                    <td >{ item.quantity }</td>
                    <td  className="d-none d-sm-block">{ item.measurement }</td>
                    <td>{ item.location.name }</td>
                    <td className="d-none d-md-block"> Using in some recipess.... EDIT THIS</td>
                </tr>
            {/* END OF TABLE ROW FOR FOOD ITEM */}


            {/* START OF MODAL FOR UPDATING FOOD ITEM */}
                <Modal isOpen={modal} toggle={toggle} >
                    <ModalHeader toggle={() => closeEditModal()}>update {item.foodName} </ModalHeader>
                    <ModalBody>

                    {/* IMAGE WITHIN MODAL */}
                        <Row>
                            <Col lg="3"> </Col>
                            {/* <Media src={foodImage} alt="stock pic of the food" thumbnail /> */}
                            <Col lg="2"></Col>
                        </Row>
                    {/* END OF IMAGE WITHIN MODAL */}

                    {/* START OF UNIT OF MEASUREMENT ROW WITHIN MODAL */}
                        <Row style={centerItUp} className="mb-2">
                            <Col lg="1"></Col>
                            <Col lg="5"> unit of measurement </Col>
                            <Col lg="4">
                                <Dropdown size="sm" isOpen={dropdownMeasurementOpen} toggle={dropdownMeasurementToggle}> 
                                    { measurementChoice ? <DropdownToggle caret>{measurementChoice}</DropdownToggle> : <DropdownToggle caret>Measurement</DropdownToggle> } 
                                    <DropdownMenu>
                                        <DropdownItem header>select one option</DropdownItem>
                                        <DropdownItem divider />
                                        {spoonDetails?.possibleUnits.map(option => {
                                            return <DropdownItem onClick={() => setMeasurementChoice(option)}>{option}</DropdownItem>
                                        })}
                                    </DropdownMenu>
                                </Dropdown>
                            </Col>
                            <Col lg="2"></Col>
                        </Row>
                    {/* END OF UNIT OF MEASUREMENT ROW WITHIN MODAL */}


                    {/* START OF QUANTITY ROW WITHIN MODAL */}
                        <Row style={centerItUp} className="mb-2">
                            <Col lg="1"></Col>
                            <Col lg="4"> update quantity </Col>
                            <Col lg="2"></Col>
                            <Col lg="0.75" style={iconStyling}>
                                <i className="fas fa-minus-square" onClick={() => DecreaseItem()}></i>
                            </Col>
                            <Col lg="1" style={centerItUp}>
                                {clicks}
                            </Col>
                            <Col lg="0.75" style={iconStyling}>
                                <i className="fas fa-plus-square" onClick={() => IncrementItem()}></i>
                            </Col>
                            <Col lg="2" ></Col>
                        </Row>
                    {/* END OF QUANTITY ROW WITHIN MODAL */}


                    {/* START OF STORAGE LOCATION ROW WITHIN MODAL */}
                        <Row style={centerItUp} className="mb-2">
                            <Col lg="1"></Col>
                            <Col lg="4"> update storage </Col>
                            <Col lg="1"></Col>
                            <Col lg="4">
                                <Dropdown size="sm" isOpen={dropdownStorageOpen} toggle={dropdownStorageToggle}> 
                                    { storageChoice.name ? <DropdownToggle caret>{storageChoice.name}</DropdownToggle> : <DropdownToggle caret>Measurement</DropdownToggle> } 
                                    <DropdownMenu>
                                        <DropdownItem header>select one option</DropdownItem>
                                        <DropdownItem divider />
                                        {locations.map(option => {
                                            return <DropdownItem key={option.id} onClick={() => setStorageChoice(option)}>{option.name}</DropdownItem>
                                        })}
                                    </DropdownMenu>
                                </Dropdown>
                            </Col>
                            <Col lg="2"></Col>
                        </Row>
                    {/* START OF STORAGE LOCATION ROW WITHIN MODAL */}


                        {/* MODAL FOOTER WITH SAVE UPDATE BUTTON */}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => updateIngredient()}>Update</Button>{' '}<Button color="danger" onClick={() => deleteIngredient()}>Delete</Button>
                    </ModalFooter>
                </Modal>
            {/* END OF MODAL FOR UPDATING FOOD ITEM */}
            </>
        )
    
}