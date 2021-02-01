/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Form, FormGroup, Card, CardBody, Label, Input, Button, CardHeader, ButtonGroup } from "reactstrap";
import { UserProfileContext } from "../providers/UserProfileProvider";

// basing off of CommentForm in Tabloid

export const MenuItemForm = ({ menuItemToEdit, getMenu, cancelEdit }) => {
    const { getCurrentUser, getToken } = useContext(UserProfileContext); // exactly the same as Tabloid
    const user = getCurrentUser(); // same as Tabloid
    const [ date, setDate ] = useState("");  //like 'subject' in Tabloid
    const [ custom, setCustom ] = useState(false);
    const [ spoonacularId, setSpoonacularId] = useState();
    const [ typeId, setTypeId ] = useState();
    const [ isLoading, setIsLoading ] = useState(true);

    const { menuId } = useParams();
    const history = useHistory();

    // based off of addComment in Tabloid
    const addMenuItem = (menu) => {
        return getToken().then((token) => {
            fetch('/api/Menu', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(menu)
            })
        }).then(() => getMenu())
    }

    const updateMenu = () => {
        return getToken() 
            .then((token) => {
                return fetch(`/api/menu/${menuItemToEdit.id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "applicaiton/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({ id: menuItemToEdit.id, 
                                            date: date, 
                                            custom:custom, 
                                            spoonacular_recipeId: spoonacularId,
                                            TypeId: typeId,
                                            userId: user.id}),
                })
            }).then(() => {
                cancelEdit();
                getMenu();
            })
    }

    const submit = (e) => {
        const menu = {
            date, 
            custom, 
            spoonacularId,
            typeId
        };
        console.log(menu);
        addMenuItem(menu)
    }

    useEffect(() => {
        if (menuItemToEdit) {
            console.log(getMenu)
            return getToken().then((token) => {
                fetch(`/api/menu/${menuItemToEdit.id}`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}` // The token gets added to the Authorization header
                    }
                }).then(res => res.json())
                    .then(data => {
                        console.log(data)
                        setDate(data.date)
                        setCustom(false)
                        setSpoonacularId(data.spoonacularId)
                        setTypeId(data.typeId)
                        setIsLoading(false)
                    })

            })
        } else {
            setIsLoading(false)
        }
    }, [])

    return (
        <Card className="mt-2">
            <CardHeader>Add A New Meal to Your Menu</CardHeader>
            <CardBody>
                <Form onSubmit={submit}>
                    <FormGroup>
                        <Label for="date">Date</Label>
                        <Input
                            id="date"
                            type="date"
                            defaultValue={date}
                            onChange={(e) => setDate(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="spoonacularId"></Label>
                        <Input type="textarea"
                            id="spoonacularId"
                            onChange={(e) => setSpoonacularId(e.target.value)}
                            defaultValue={spoonacularId}
                            placeholder="SpoonacularId"
                        />

                    </FormGroup>
                    {menuItemToEdit ? <ButtonGroup size="sm">
                        <Button onClick={updateMenu}>
                            Save
              </Button>
                        <Button outline color="danger" onClick={cancelEdit}>
                            Cancel
              </Button>
                    </ButtonGroup> :

                        <Button type="submit" color="info" size="sm">
                            SUBMIT
            </Button>
                    }
                </Form>
            </CardBody>
        </Card>


    )
}