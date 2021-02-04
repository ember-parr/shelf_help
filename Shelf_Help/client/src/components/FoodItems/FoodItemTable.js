/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { FoodItemContext } from "../../providers/FoodItemProvider";
import { FoodItemTableRow } from "./FoodItemTableRow";
import { useHistory } from "react-router-dom";
import { Table, Button, Input } from "semantic-ui-react";


export const FoodItemTable = () => {
    const { getFoodItems, foodItems } = useContext(FoodItemContext);
    const user = parseInt(localStorage.user)
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

foodItems.forEach(food => {
    console.log("this is a food item quantity: " + food.quantity)
    console.log("the food is located in: " + food.location.name)
});

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
            <section className="sectionAboveHeader">
            <Button className="addNew-btn" onClick={() => domHistory.push("/")}>New Item</Button>

            <Input
            type="text"
            icon='search'
            onKeyUp={(keyEvent) => setSearchTerms(keyEvent.target.value.toLowerCase())}
            placeholder="Search Items... "
            className="searchTable"
            />



            <Button.Group floated='right'>
                <Button toggle className="filter-btn" onClick={todayIngredients}>Ingredients Needed Today</Button>
                    <Button.Or />
                <Button toggle className="filter-btn" onClick={weekIngredients}>Ingredients Needed This Week</Button>
                    <Button.Or />
                <Button toggle className="filter-btn" onClick={allIngredients}>View All Food Items</Button>
            </Button.Group>
            </section>

            
            <Table unstackable celled selectable collapsing compact size="small" className="pageComponent">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell width={1}>Ingredient</Table.HeaderCell>
                        <Table.HeaderCell width={1}>Quantity</Table.HeaderCell>
                        <Table.HeaderCell width={1}>Measurement</Table.HeaderCell>
                        <Table.HeaderCell width={1}>Storage</Table.HeaderCell>
                        <Table.HeaderCell width={1}>Used In...</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

            
                <Table.Body>
                {foodItems.map(item => {
                        return <FoodItemTableRow key={item.id} item={item} />
                    })}

                </Table.Body>
            </Table>


        </>
    )
}