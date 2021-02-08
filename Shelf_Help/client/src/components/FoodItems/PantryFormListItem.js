/* eslint-disable no-whitespace-before-property */
/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { Card, Button, CardTitle, CardBody, Collapse, Col, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import {FoodItemContext} from "../../providers/FoodItemProvider"
import { UserProfileContext } from "../../providers/UserProfileProvider";


export const PantryFormListItem = ({food}) => {
    const { getCurrentUser } = useContext(UserProfileContext)
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
    const user = getCurrentUser();
    const toggleModal = (id, name) => {
        setModal(!modal);
        setClicks(1);
    }
    const toggleChildModal = (id, name) => {
        setChildModal(!childModal);
        setClicks(1);
    }

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
        textAlign: "center",
        fontSize: 30
    }




    // SAVING THE INGREDIENT TO THE USERS PANTRY
    const addIngredient = () => {
        setIsLoading(true)
        console.log("clicks: " + clicks + " spoonacular id: " + food.id + " userId " + user.id + " food name: " + food.name)
        console.log("")
        const foodToAdd = {
            quantity: clicks,
            spoonacularIngredientId: food.id,
            measurement: "tablespoons",
            userId: user.id,
            locationId: 1,
            foodName: food.name
        }
        console.log("food to add all together as an object: " + foodToAdd)
        addFoodItem(foodToAdd)

        .then(() => history.push("/mypantry"))
    }













    // RETURNS JSX TO THE DOM 
    if (food.children.length > 0)
    {
        return (
            <>
            {/* AFTER USER SEARCHES FOR A FOOD ITEM TO ADD TO PANTRY, RETURNED ITEMS WITH CHILDREN SHOW WITH OPTION TO VIEW VARIETIES  */}
                <Col sm="4" className="mb-4">
                    <Card body>
                        <CardTitle tag="h5">{food.name}</CardTitle>
                        <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Varieties</Button>
                        <Collapse
                            isOpen={collapse}
                            onEntering={onEntering}
                            onEntered={onEntered}
                            onExiting={onExiting}
                            onExited={onExited}
                        >
                            <Card>
                            <CardBody>
                                <p key={food.id}>{food.name}{"  "} <Button color="secondary" size="sm" onClick={()=> toggleModal(food.id, food.name)}>Add To My Pantry</Button> </p>
                                    <Modal isOpen={modal} toggle={toggle} >
                                        <ModalHeader toggle={toggleModal}>{food.name} quantity... </ModalHeader>
                                        <ModalBody>
                                            <span style={iconStyling}>
                                                <i class="fas fa-minus-square" onClick={() => DecreaseItem()}></i>
                                                {"   "}{clicks}{"   "}
                                                <i class="fas fa-plus-square" onClick={() => IncrementItem()}></i>
                                            </span>
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="primary" onClick={addIngredient}>Add To Pantry</Button>{' '}
                                        </ModalFooter>
                                    </Modal>
            {/* MAPS THROUGH CHILDREN OF THE INGREDIENT (VARIETIES) & HAS SAME BEHAVIOR AS REGULAR INGREDIENTS.  */}
                                {food.children.map(child => {
                                    return (<>
                                        <p key={child.id}>{child.name}{"  "} <Button color="secondary" size="sm" onClick={()=> toggleChildModal(child.id, child.name)}>Add To My Pantry</Button> </p>
                                                    <Modal isOpen={childModal} toggle={toggleChildModal} >
                                                        <ModalHeader toggle={toggleChildModal}>{child.name} quantity...</ModalHeader>
                                                        <ModalBody>

                                                        <span style={iconStyling}>
                                                            <i class="fas fa-minus-square" onClick={() => DecreaseItem()}></i>


                                                            
                                                            {"   "}{clicks}{"   "}
                                                            <i class="fas fa-plus-square" onClick={() => IncrementItem()}></i>
                                                        </span>
                                                        </ModalBody>
                                                        <ModalFooter>
                                                            <Button color="primary" onClick={addIngredient}>Done</Button>

                                                        </ModalFooter>
                                                    </Modal>
                                        </>
                                    )
                                })}
                            </CardBody>
                            </Card>
                        </Collapse>
                    </Card>
                </Col>
            </>
        )
    } else {
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
                        <span style={iconStyling}>
                            <i class="fas fa-minus-square" onClick={() => DecreaseItem()}></i>
                            {"   "}{clicks}{"   "}
                            <i class="fas fa-plus-square" onClick={() => IncrementItem()}></i>
                        </span>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={addIngredient}>Add To Pantry</Button>{' '}
                    </ModalFooter>
                </Modal>
            </>
            )
    }
}