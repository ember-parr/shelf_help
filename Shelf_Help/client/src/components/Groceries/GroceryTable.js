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

    console.log("GroceryTable just ran")

    useEffect(() => {
        getGroceryList()
        .then(foods => {
            setAllFoods(foods)
        })
        
    }, [])


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

            <Table responsive size="sm" >
                <thead>
                    <tr>
                        <th>Ingredient</th>
                        <th className="d-none d-md-block">Purchased <span style={{fontSize: "0.7rem", color:"grey"}} >-or-</span> Delete </th>
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