/* eslint-disable no-unused-vars */
// get food items from MY database. 
import React, {useState, createContext} from "react";
import firebase from "firebase/app";
import "firebase/auth";

export const FoodItemContext = createContext();

export const FoodItemProvider = (props) => {
    const [ foodItems, setFoodItems ] = useState([]);
    const [ groceryItems, setGroceryItems ] = useState([]);
    const [ searchTerms, setSearchTerms ] = useState([]);
    const [ spoonResults, setSpoonResults ] = useState([])
    const [ spoonDetails, setSpoonDetails ] = useState({})
    const getToken = () => firebase.auth().currentUser.getIdToken(); 
    const apiUrl = "/api/fooditem";
    const spoonKey = process.env.REACT_APP_SPOON_KEY


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
            .then(setGroceryItems)
        })
    }


    // this function searches spoonacular for an ingredient by query string (words searched in PantryForm.js)
    const searchSpoonacularIngredients = (searchedWords) => {
        fetch(`https://api.spoonacular.com/food/ingredients/search?query=${searchedWords}&number=30&addChildren=true&apiKey=${spoonKey}&metaInformation=true`)
        .then((res) => res.json())
        .then(output => {
            setSpoonResults(output)
        })
    }

    // get ingredient details from spoonacular using ingredient id
    const getSpoonacularIngredById = (id) => {
        fetch(`https://api.spoonacular.com/food/ingredients/${id}/information?apiKey=${spoonKey}`)
        .then((res) => res.json())
        .then(output => {
            setSpoonDetails(output)
        })
    }


    // add a new item to the FoodItems SQL database. 
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

    // update existing FoodItem in SQL database
    const updateFoodItem = Item => {
        return getToken().then((token) => {
            fetch(`${apiUrl}/${Item.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(Item)
            })
        })
    }

    const deleteFoodItem = Item => {
        return getToken().then((token) => {
            fetch(`${apiUrl}/${Item.id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
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
            groceryItems,
            searchSpoonacularIngredients,
            spoonResults,
            getFoodById,
            addFoodItem,
            setSpoonResults,
            getSpoonacularIngredById,
            spoonDetails,
            updateFoodItem,
            deleteFoodItem
        }}>
            {props.children}
        </FoodItemContext.Provider>
    )


}
