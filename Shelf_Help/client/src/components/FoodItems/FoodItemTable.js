/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { FoodItemContext } from "../../providers/FoodItemProvider";
import { FoodItemTableRow } from "./FoodItemTableRow";
import { useHistory } from "react-router-dom";

import {Button, ButtonGroup, Table, Input, Form, FormGroup, Label, FormText} from "reactstrap"


export const FoodItemTable = () => {
    const { getFoodItems, foodItems } = useContext(FoodItemContext);
    const user = parseInt(localStorage.user)
    const domHistory = useHistory();
    const [ allFoods, setAllFoods ] = useState({});
    const [searchTerms, setSearchTerms] = useState("")
    const [filteredFoods, setFiltered ] = useState([]);
    const [theThing, setTheThing] = useState({})
    const todayFoodItems = []
    const weekFoodItems = []
    

    useEffect(() => {
        getFoodItems()
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

    return (
        <>
            <section className="m-2">
            <Button className="addNew-btn mb-3" onClick={() => domHistory.push("/pantry/add")}>Manually Add Item</Button>

            <Form>
                <FormGroup>
                    <Input type="text" name="searchTerms" id="searchTerms" placeholder="Search Pantry" onKeyUp={(keyEvent) => setSearchTerms(keyEvent.target.value.toLowerCase())}/>
                </FormGroup>
            </Form>



                <ButtonGroup size="sm" className="mb-3">
                    <Button> This Week's Ingredients </Button>
                    <Button> Today's Ingredients </Button>
                    <Button> All Ingredients</Button>
                </ButtonGroup>
                <br />
            </section> 

            
            <Table hover responsive size="sm" >
                <thead>
                    <tr>
                        <th>Ingredient</th>
                        <th>Quantity</th>
                        <th  className="d-none d-sm-block">Measurement</th>
                        <th >Storage</th>
                        <th className="d-none d-md-block">Used In...</th>
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