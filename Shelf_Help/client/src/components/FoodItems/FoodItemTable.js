/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { FoodItemContext } from "../../providers/FoodItemProvider";
import { FoodItemTableRow } from "./FoodItemTableRow";
import { useHistory } from "react-router-dom";
import { Table, Button, Input } from "semantic-ui-react";
import { IngredientDetailContext } from "../../providers/IngredientDetailProvider";


export const FoodItemTable = () => {
    const { getFoodItems, foodItems } = useContext(FoodItemContext);
    const { getIngredientById, ingredient } = useContext(IngredientDetailContext)
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

    // useEffect(() => {
    //     getIngredientById(9040)
    //     .then(ingredient => {
    //         setTheThing(ingredient)
    //     })
    // })

    console.log("Ingredient: " + ingredient.originalName)
    console.log("The Thing: " + theThing.aisle)

    let foodsToDisplay = []

// foodItems.forEach(food => {
//     const id = food.id;
//     const quantity = food.quantity;
//     const storage = food.location.name;
//     let foodName;

//     getIngredientById(food.spoonacularIngredientId)
//     .then(res => {
//         foodName = `${res}`
//     })

//     foodsToDisplay.push({
//         id: id,
//         quantity: quantity,
//         storage: storage,
//         foodName: foodName
//     })
// });

console.log("foods to display: " + foodsToDisplay)

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