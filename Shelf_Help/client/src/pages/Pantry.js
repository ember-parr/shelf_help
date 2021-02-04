/* eslint-disable no-unused-vars */
import React from "react";
import {Button, ButtonGroup} from "reactstrap"
import { FoodItemTable } from "../components/FoodItems/FoodItemTable";
import {FoodItemProvider} from "../providers/FoodItemProvider";


const Pantry = () => {


    return (
        <>
            <div> 
                
                <h2>Pantry</h2>
                <ButtonGroup size="sm">
                    <Button> This Week's Ingredients </Button>
                    <Button> Today's Ingredients </Button>
                    <Button> All Ingredients</Button>
                </ButtonGroup>
                <FoodItemProvider>
                        <FoodItemTable />
                </FoodItemProvider>
            </div>


        </>
    )
}


export default Pantry;