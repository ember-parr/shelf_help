/* eslint-disable no-unused-vars */
import React from "react";
import { Header, Icon, Image } from 'semantic-ui-react';
import { FoodItemTable } from "../components/FoodItems/FoodItemTable";
import {FoodItemProvider} from "../providers/FoodItemProvider";
import GroceryList from "./GroceryList";


const Pantry = () => {


    return (
        <>
            <div> 
                <Header as='h2' icon textAlign='center'>
                <Icon name='cube' circular />
                <Header.Content>Pantry</Header.Content>
                </Header>
                <FoodItemProvider>
                    <FoodItemTable />
                </FoodItemProvider>
            </div>


        </>
    )
}


export default Pantry;