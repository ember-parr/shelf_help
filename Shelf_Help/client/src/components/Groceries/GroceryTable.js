/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { FoodItemContext } from "../../providers/FoodItemProvider";
import { GroceryTableRow } from "./GroceryTableRow";
import { useHistory } from "react-router-dom";
import {Button, ButtonGroup, Table, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup} from "reactstrap"




export const GroceryTable = () => {
    const { getGroceryList, groceryItems } = useContext(FoodItemContext);
    const [ allFoods, setAllFoods ] = useState({});
    const [filteredFoods, setFiltered ] = useState([]);
    const todayFoodItems = []
    const weekFoodItems = []
    const domHistory = useHistory();

    

    useEffect(() => {
        getGroceryList()
        .then(foods => {
            setAllFoods(foods)
        })
        
    }, [])


    let todayIngredients = () => {
        setFiltered(todayFoodItems)
    }

    let weekIngredients = () => {
        setFiltered(weekFoodItems)
    }

    let allIngredients = () => {
        setFiltered(allFoods)
    }

    let openMyModal = (word) => {
        domHistory.push("/grocery/add")
    }

    

    return (
        <>
            <section className="m-2">
                    {/* <Button size="sm" className="addNew-btn m-2" onClick={() => openMyModal()}>Add An Item</Button> */}
                
            {/* <hr /> */}
                {/* <ButtonGroup size="sm" className="mb-3">
                    <Button> This Week's Shopping List </Button>
                    <Button> Ingredients Needed Today </Button>
                    <Button> Entire Grocery List</Button>
                </ButtonGroup>
                <br /> */}

            </section> 

            <Table hover responsive size="sm" >
                <thead>
                    <tr>
                        <th>Ingredient</th>
                        <th >Storage</th>
                        <th className="d-none d-md-block">Used In...</th>
                    </tr>
                </thead>

            
                <tbody>
                {groceryItems.map(item => {
                        return <GroceryTableRow key={item.id} item={item} />
                    })}

                </tbody>
            </Table>





        </>
    )
}