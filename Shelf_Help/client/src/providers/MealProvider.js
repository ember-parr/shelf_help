/* eslint-disable no-unused-vars */
// get food items from MY database. 
import React, {useState, createContext} from "react";
import firebase from "firebase/app";
import "firebase/auth";

export const MealContext = createContext();

export const MealProvider = (props) => {
    const getToken = () => firebase.auth().currentUser.getIdToken(); 
    const apiUrl = "/api/menu";
    const [ allMeals, setAllMeals ] = useState([])


    // get this users menu entries
    const getMeals = () => {
        return getToken().then((token) => 
            fetch(`${apiUrl}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => res.json())
            .then(setAllMeals)
        );
    }



    // get single menu by id
    const getMealById = (id) => {
        return getToken().then((token) =>
            fetch(`${apiUrl}/${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => res.json())
            )
    }




    // get meals for single day
    const getMealBySingleDate = (date) => {
        return getToken().then((token) =>
        fetch(`${apiUrl}/day/${date}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => res.json())
        )
    }



    // get this week's menu



    // search spoonacular for recipe by name (words searched in MenuForm.js)





    // get recipe details by recipe id


    

    // add a new Recipe to SQL database





    // update an existing recipe in SQL database




    // send the data out
    return (
        <MealContext.Provider
        value = {{
            getMeals,
            allMeals,
            getMealById,
            getMealBySingleDate
        }}>
            {props.children}
        </MealContext.Provider>
    )
}