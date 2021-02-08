/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Card, Button, CardTitle, CardBody, Collapse, Col, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";


export const PantryFormListItem = ({food}) => {
    const [collapse, setCollapse] = useState(false);
    const [status, setStatus] = useState('Closed');
    const onEntering = () => setStatus('Opening...');
    const onEntered = () => setStatus('Opened');
    const onExiting = () => setStatus('Closing...');
    const onExited = () => setStatus('Closed');
    const toggle = () => setCollapse(!collapse);
    const [modal, setModal] = useState(false);
    const [childModal, setChildModal] = useState(false);
    const toggleModal = (id, name) => {
        setModal(!modal);
        setClicks(1);
    }

    const toggleChildModal = (id, name) => {
        setChildModal(!modal);
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



    // RETURNS JSX TO THE DOM 
    if (food.children.length > 0)
    {
        return (
            <>
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
                                            <Button color="primary" onClick={toggleModal}>Add To Pantry</Button>{' '}
                                        </ModalFooter>
                                    </Modal>






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
                                                            <Button color="primary" onClick={toggleChildModal}>Done</Button>

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
                        <Button color="primary" onClick={toggleModal}>Add To Pantry</Button>{' '}
                    </ModalFooter>
                </Modal>
        
        
            </>
            )
    }
}