/* eslint-disable no-unused-vars */
import React, { useState, useRef, useContext, useEffect } from 'react';
import { useHistor, useHistory } from "react-router-dom";
import { Jumbotron, Card, CardBody, CardTitle, CardText, Button, Container, Col, Row, Table, Modal, ModalBody, ModalHeader, FormGroup, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, ModalFooter, CardColumns } from 'reactstrap';
import { toast } from "react-toastify";
import { MealContext } from '../../providers/MealProvider';


export const DashboardSearch = ({searchWords}) => {
    const history = useHistory();
    

    if (searchWords) {
    return (
    <>
                        <Card body outline color="info">
                            <CardTitle tag="h5"> </CardTitle>
                            <CardText></CardText>
                        </Card>


    </>
    )} else {
        return (<>
            <i>  </i>
        </>)
    }
}