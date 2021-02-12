/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useContext, useEffect } from 'react';
import { useHistor, useHistory } from "react-router-dom";
import { Jumbotron, Card, CardBody, CardText, Button, Container, Col, Row, Table, Modal, ModalBody, ModalHeader, FormGroup, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, ModalFooter, CardColumns } from 'reactstrap';
import { toast } from "react-toastify";
import { MealContext } from '../../providers/MealProvider';


export const MealIdeas = ({mealIdeas}) => {
    const history = useHistory();
    

    if (mealIdeas.length > 0) {
    return (
    <>
        <p className="lead">We've gathered some ideas for you to try something new! </p>
        <sub>click meal card to view full recipe</sub>
        <br />

        <CardColumns>
            {mealIdeas.map(meal => {
                return (<>
                <Card key={meal.id} onClick={() => history.push(`/recipe/${meal.id}`)}>
                    <CardBody>
                        <CardText>{meal.title}</CardText>
                    </CardBody>
                </Card>
                </>)
            })}
        </CardColumns>


    </>
    )} else {
        return (<>
            <i>  </i>
        </>)
    }
}