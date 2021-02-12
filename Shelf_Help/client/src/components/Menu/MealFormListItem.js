/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-whitespace-before-property */
/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { Card, Button, CardTitle, CardBody, Collapse, Col, Modal, ModalHeader, ModalBody, ModalFooter, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, CardSubtitle, CardText  } from "reactstrap";
import {FoodItemContext} from "../../providers/FoodItemProvider"
import { UserProfileContext } from "../../providers/UserProfileProvider";
import { toast } from "react-toastify";
import { LocationContext } from "../../providers/LocationProvider";


export const MealFormListItem = ({recipe}) => {
    const history = useHistory();
    console.log("MealFormListItem just ran")

    return (
        <>
            <Col sm="4" className="mb-4">
                <Card body>
                    <CardBody>
                        <CardTitle tag="h5">{recipe?.title} </CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">cook time: {recipe.readyInMinutes} minutes</CardSubtitle>
                        <img width="100%" src={`${recipe.image}`} alt={`${recipe.title}`} />
                    </CardBody>
                    
                        <Button onClick={() => history.push(`/recipe/${recipe.id}`)}>View Recipe</Button>
                    
                </Card>
            </Col>


        </>
    )
}