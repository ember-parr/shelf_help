/* eslint-disable no-unused-vars */
// get food items from MY database. 
import React, {useState, createContext} from "react";
import firebase from "firebase/app";
import "firebase/auth";


export const IngredientDetailContext = createContext();

export const IngredientDetailProvider = (props) => {
    const [ingredient, setIngredient] = useState([])
    const apiKey = "350c741bf82e41378e9b1359a60deadd"
    const apiUrl =  'https://api.spoonacular.com'

    const getIngredientById = (id) => {
        return fetch(`${apiUrl}/food/ingredients/${id}/information?apiKey=${apiKey}`)
        .then(result => result.json())
        .then((res) => {
            setIngredient(res)
        })
    }


    return (
        <IngredientDetailContext.Provider value = {{ingredient, getIngredientById}} >{props.children} </IngredientDetailContext.Provider>
    )
}