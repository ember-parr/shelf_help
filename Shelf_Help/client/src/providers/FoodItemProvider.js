/* eslint-disable no-unused-vars */
// get food items from MY database. 
import React, {useState, createContext} from "react";
import firebase from "firebase/app";
import "firebase/auth";

export const FoodItemContext = createContext();

export const FoodItemProvider = (props) => {
    const [ foodItems, setFoodItems ] = useState([]);
    const [ searchTerms, setSearchTerms ] = useState([]);
    const [ spoonResults, setSpoonResults ] = useState([])
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

    // this function gets individual food item by it's id
    const getFoodById = (id) => {
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

    // this function gets all of the users food items from the database that has a quantity of 0
    const getGroceryList = () => {
        return getToken().then((token) => {
            fetch(`${apiUrl}/groceries`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => res.json())
            .then(setFoodItems)
        })
    }

    const searchSpoonacularIngredients = (searchedWords) => {
        fetch(`https://api.spoonacular.com/food/ingredients/search?query=${searchedWords}&number=8&addChildren=true&apiKey=d77d78f9357b477094b10096abd85b71&metaInformation=true`)
        .then((res) => res.json())
        .then(output => {
            setSpoonResults(output)
            console.log(output)
        })
        
    }

    const addFoodItem = Item => {
        return getToken().then((token) => {
            fetch(`${apiUrl}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(Item)
            })
        })
        
        
    }


    return (
        <FoodItemContext.Provider
        value={{
            foodItems,
            getFoodItems,
            setSearchTerms,
            searchTerms,
            getGroceryList,
            searchSpoonacularIngredients,
            spoonResults,
            getFoodById,
            addFoodItem,
            setSpoonResults
        }}>
            {props.children}
        </FoodItemContext.Provider>
    )


}