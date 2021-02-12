/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { FoodItemContext } from "../../providers/FoodItemProvider";
import { FoodItemTableRow } from "./FoodItemTableRow";
import { useHistory } from "react-router-dom";

import {Button, ButtonGroup, Table, Input, Form, FormGroup } from "reactstrap"


export const FoodItemTable = () => {
    const { getFoodItems, foodItems } = useContext(FoodItemContext);
    const domHistory = useHistory();
    const [ allFoods, setAllFoods ] = useState({});
    const [searchTerms, setSearchTerms] = useState("")
    const [filteredFoods, setFiltered ] = useState([]);
    const todayFoodItems = []
    const weekFoodItems = []
    

    useEffect(() => {
        getFoodItems()
        .then(foods => {
            setAllFoods(foods)
        })
        
    }, [])
    console.log("FoodItemTable just ran")

    let todayIngredients = () => {
        setFiltered(todayFoodItems)
    }

    let weekIngredients = () => {
        setFiltered(weekFoodItems)
    }

    let allIngredients = () => {
        setFiltered(allFoods)
    }

    

    return (
        <>
            <section className="m-2">
            <Button className="addNew-btn mb-3" onClick={() => domHistory.push("/pantry/add")}>Manually Add Item</Button>

            
                <br />
            </section> 

            
            <Table hover responsive size="sm" >
                <thead>
                    <tr>
                        <th>Ingredient</th>
                        <th>Move to Grocery List <span style={{fontSize: "0.7rem", color:"grey"}} >-or-</span> Delete</th>
                    </tr>
                </thead>

            
                <tbody>
                {foodItems.map(item => {
                        return <FoodItemTableRow key={item.id} item={item} />
                    })}

                </tbody>
            </Table>


        </>
    )
}