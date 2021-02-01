/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import {Form, FormGroup, Card, CardBody, CardHeader, Input, Button, CardFooter, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { UserProfileContext } from "../providers/UserProfileProvider";
import { MenuItemForm } from "./MenuItemForm";

export const MealEntryCard = ({ menu , getMenu }) => {
    const [ pendingDelete, setPendingDelete ] = useState(false);
    const { getCurrentUser, getToken } = useContext(UserProfileContext);
    const user = getCurrentUser();

    const [ isEditing, setIsEditing ] = useState(false);


    const Delete = ( menu ) => {
        getToken().then(token => {
            return fetch(`/api/menu/${menu.id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }).then(() => {
                setPendingDelete(false);
                getMenu();
            })
        })
    }


    const editMenu = () => {
        setIsEditing(true);
    }
    const cancelEdit = () => {
        setIsEditing(false);
    }


    return (
        <>
            { isEditing ? <MenuItemForm menuItemToEdit={menu} cancelEdit={cancelEdit} getMenu={getMenu} /> :
                <Card key={menu.id} className="mt-2" onClick={() => setIsEditing(true)}>
                    <CardHeader>"CURLIES menu name goes here CLOSING CURLIES"</CardHeader>
                    <CardBody>
                        CURLIES menu meal type (breakfast/lunch/din din) goes here CLOSING CURLIES
                    </CardBody>
                    
                    <Modal isOpen={pendingDelete}>
                        <ModalHeader>Delete {menu.TypeId}?</ModalHeader>
                        <ModalBody>
                            Are you sure you want to delete this Menu Entry? This action cannot be
                            undone.
                </ModalBody>
                        <ModalFooter>
                            <Button onClick={(e) => setPendingDelete(false)}>No, Cancel</Button>
                            <Button
                                className="btn btn-outline-danger"
                                onClick={(e) => Delete(menu)}
                            >
                                Yes, Delete
                    </Button>
                        </ModalFooter>
                    </Modal>




                </Card>
            
            
            }





        </>
    )
}