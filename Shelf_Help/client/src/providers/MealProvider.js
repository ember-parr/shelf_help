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
    const [ spoonResults, setSpoonResults ] = useState([])
    const [ singleRecipe, setSingleRecipe ] = useState({})
    const [ singleIngredients, setSinglesIngredients] = useState()
    const [ singleInstructions, setSingleInstructions] = useState()


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

    // get all meals for a specific day
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


    // search spoonacular for a recipe by query string
    const searchSpoonacularRecipes = (searchedWords) => {
        fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${searchedWords}&number=8&addChildren=true&apiKey=350c741bf82e41378e9b1359a60deadd&metaInformation=true&addRecipeInformation=true`)
        .then((res) => res.json())
        .then(output => {
            setSpoonResults(output)
        })
    }
    



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



    // get a single recipe from spoonacular
    const getSingleSpoonacularRecipe = (recipeId) => {
        fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=350c741bf82e41378e9b1359a60deadd`)
        .then((res) => res.json())
        .then(output => {
            setSingleRecipe(output)
            setSinglesIngredients(output.extendedIngredients)
            setSingleInstructions(output.instructions)
        })
    }





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


    // add a new menu entry to the database
    const addMenu = menu => {
        return getToken().then((token) => {
            fetch(`${apiUrl}`, {
                method: "POST",
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
            updateMenu,
            setSpoonResults,
            searchSpoonacularRecipes,
            spoonResults,
            getSingleSpoonacularRecipe,
            singleRecipe,
            addMenu,
            singleIngredients,
            singleInstructions
        }}>
            {props.children}
        </MealContext.Provider>
    )
}



// spoonyone@emberparr.com & temporary password API KEY: d77d78f9357b477094b10096abd85b71 [out]
// spoonytwo@emberparr.com & initials w. bday APIKEY: 5c60c91675ec4b6299f1bc901dc8def9 [out]
// devops gmail email API KEY: 66e7421be84e4b16a934c4ad2b86bfd4 [out]
// ember21892 gmail API KEY: 350c741bf82e41378e9b1359a60deadd