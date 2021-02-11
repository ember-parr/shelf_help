/* eslint-disable no-unused-vars */
// get food items from MY database. 
import React, {useState, createContext} from "react";
import firebase from "firebase/app";
import "firebase/auth";

export const MealTypeContext = createContext();

export const MealTypeProvider = (props) => {
    const [ mealTypes, setMealTypes ] = useState([]);
    const getToken = () => firebase.auth().currentUser.getIdToken();
    const apiUrl = "/api/mealtype";


    // gets all locations from the database
    const getMealTypes = () => {
        return getToken().then((token) => 
            fetch(`${apiUrl}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => res.json())
            .then(setMealTypes)            
            );
    };

    



    return (
        <MealTypeContext.Provider 
            value= {{mealTypes, getMealTypes}}
        > 
        {props.children} 
        </MealTypeContext.Provider>
    )
}