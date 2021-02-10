/* eslint-disable no-unused-vars */
// get food items from MY database. 
import React, {useState, createContext} from "react";
import firebase from "firebase/app";
import "firebase/auth";

export const MealContext = createContext();

export const MealProvider = (props) => {
    const getToken = () => firebase.auth().currentUser.getIdToken(); 
    const apiUrl = "/api/menu";
    const [ singleMeal, setSingleMeal ] = useState([])
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


    const getDaysMeals = (date) => {
        return getToken().then((token) =>
        fetch(`${apiUrl}/range/${date}/${date}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => res.json())
        )
    }


    // get specific meal by date and meal type
    // const getCertainMeal = (date, type) => {
    //     return getToken().then((token) =>
    //     fetch(`${apiUrl}/day/${date}/${type}`, {
    //         method: "GET",
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //         },
    //     })
    //     .then((res) => res.json())
    //     .then(output => setSingleMeal(JSON.stringify(output)))
    //     )
    // }



    // get meals within date range
    const getMealsByDateRange = (startDate, endDate) => {
        return getToken().then((token) =>
        fetch(`${apiUrl}/range/${startDate}/${endDate}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => res.json())
        )
    }



    // search spoonacular for recipe by name (words searched in MenuForm.js)





    // get recipe details by recipe id


    

    // add a new Recipe to SQL database





    // update an existing recipe in SQL database
    const updateMenu = (menu) => {
        return getToken().then((token) => {
            fetch(`${apiUrl}/${menu.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(menu)
            })
        })
    }




    // send the data out
    return (
        <MealContext.Provider
        value = {{
            getMeals,
            allMeals,
            getMealById,
            getMealsByDateRange,
            getDaysMeals,
            singleMeal,
            updateMenu
        }}>
            {props.children}
        </MealContext.Provider>
    )
}