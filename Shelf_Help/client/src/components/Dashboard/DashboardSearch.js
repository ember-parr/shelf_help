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

    const submitSearch = () => {
        dashboardQuickSearch(userInput)
    }




    

    if (searchResult) {
    return (
    <>
        <p className="lead">Lets have some fun... </p>
            <FormGroup>
                <Input
                type="search"
                name="search"
                id="exampleSearch"
                placeholder="type to search... "
                onChange={(event) => setUserInput(event.target.value)}
                />
                <Button onClick={() => submitSearch(userInput)}>Enter</Button>
            </FormGroup>


            <Card body outline color="info">
                <CardTitle tag="h5"> </CardTitle>
                <CardText>{searchResult}</CardText>
            </Card>


    </>
    )} else {
        return (<>
            <i>  </i>
        </>)
    }
}