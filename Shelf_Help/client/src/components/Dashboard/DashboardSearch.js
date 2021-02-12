/* eslint-disable no-unused-vars */
import React, { useState, useRef, useContext, useEffect } from 'react';
import { useHistor, useHistory } from "react-router-dom";
import { Jumbotron, Card, CardBody, CardTitle, CardText, Button, Container, Col, Row, Table, Modal, ModalBody, ModalHeader, FormGroup, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, ModalFooter, CardColumns } from 'reactstrap';
import { toast } from "react-toastify";
import { MealContext } from '../../providers/MealProvider';


export const DashboardSearch = () => {
    const history = useHistory();
    const { dashboardQuickSearch, searchResult } = useContext(MealContext)

    const [userInput, setUserInput] = useState('')

    const submitSearch = (userInput) => {
        dashboardQuickSearch(userInput)
    }




    

    
    return (
    <>
        <p className="lead">Lets have some fun... </p>
            <Button onClick={() => submitSearch('tell me a joke')}>Joke</Button>
            &emsp;
            <Button onClick={() => submitSearch('tell me a food fact')}>Fun Fact</Button>
            <br />
            <br />
            


            <Card body outline color="info">
                <CardTitle tag="h5"> </CardTitle>
                <CardText>{searchResult}</CardText>
            </Card>


    </>
    )
}