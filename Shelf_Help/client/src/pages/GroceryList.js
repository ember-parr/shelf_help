import React from "react"
import { FoodItemProvider } from "../providers/FoodItemProvider"
import {GroceryTable} from "../components/Groceries/GroceryTable";
import { Container } from "reactstrap";

const GroceryList = () =>
{
    return (
        <>
            <h2>Groceries To Buy</h2>
            <FoodItemProvider>
                <Container className="theamed-container" fluid="sm">
                    <GroceryTable />
                </Container>
            </FoodItemProvider>

        </>
    )
}

export default GroceryList;