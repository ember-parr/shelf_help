/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Card, Button, CardTitle, CardBody, Collapse, Col, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";




export const QuantityModal = ({foodName, foodId}) => {
    
    const [modal, setModal] = useState(true);
    const toggle = () => setModal(!modal);

    console.log("quantityModal was called & started... what now?")
    return (
      <div>
        {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
        <Modal isOpen={modal} toggle={toggle} >
          <ModalHeader toggle={toggle}>How Many Would You Like To Add To Your Pantry?</ModalHeader>
          <ModalBody>
            A plus and minus symbol here please
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>Done</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }