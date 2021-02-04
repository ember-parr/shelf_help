/* eslint-disable no-unused-vars */
// get food items from MY database. 
import React, {useState, createContext} from "react";
import firebase from "firebase/app";
import "firebase/auth";

export const FoodItemContext = createContext();

export const FoodItemProvider = (props) => {
    const [ foodItems, setFoodItems ] = useState([]);
    const [ searchTerms, setSearchTerms ] = useState([]);
    const getToken = () => firebase.auth().currentUser.getIdToken(); 
    const apiUrl = "/api/fooditem";


    // this function looks like a get all, but filters out other users food items on server side. 
    const getFoodItems = () => {
        return getToken().then((token) => 
            fetch(`${apiUrl}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => res.json())
            .then(setFoodItems)
                // SHOULD I FETCH FOOD ITEMS FROM SPOONACULAR HERE? 
        );
    };

    // const getFoodItemById = (id) => {
    //     return getToken().then((token) => {
    //         return fetch(`$${apiUrl}/${id}`, {
    //             method: "GET",
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         })
    //         .then((res) => res.json())
    //         .then((foods) => {
    //             setFoodItems(foods);
    //             // SHOULD I FETCH FOOD ITEMS FROM SPOONACULAR HERE? 
    //         });
    //     });
    // }


    return (
        <FoodItemContext.Provider
        value={{
            foodItems,
            getFoodItems,
            setSearchTerms,
            searchTerms
            
        }}>
            {props.children}
        </FoodItemContext.Provider>
    )


}