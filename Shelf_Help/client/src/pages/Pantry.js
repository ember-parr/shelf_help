/* eslint-disable no-unused-vars */
import React from "react";
import { FoodItemTable } from "../components/FoodItems/FoodItemTable";
import {FoodItemProvider} from "../providers/FoodItemProvider";
import {Container} from "reactstrap"


const Pantry = () => {


    return (
        <>
            <div> 
                
                <h2>Pantry</h2>
                
                <FoodItemProvider>
                    <Container className="theamed-container" fluid="sm">
                        <FoodItemTable />
                        </Container>
                </FoodItemProvider>
            </div>


        </>
    )
}


export default Pantry;