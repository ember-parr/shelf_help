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
    const [funFact, setFunFact] = useState()
    const [ mealIdeas, setMealIdeas ] = useState()
    const spoonKey = process.env.REACT_APP_SPOON_KEY

    const getFunFact = () => {
        fetch (`https://api.spoonacular.com/food/jokes/random?apiKey=${spoonKey}`)
        .then((res) => JSON.parse(res))
        .then(output => setFunFact(output.keys))
        
    }


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
        fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${searchedWords}&number=9&addChildren=true&apiKey=${spoonKey}&metaInformation=true&addRecipeInformation=true`)
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
        fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${spoonKey}`)
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

    const dashboardMealIdeas = () => {
        fetch(`https://api.spoonacular.com/mealplanner/generate?timeFrame=week&apiKey=${spoonKey}`)
        .then((res) => res.json())
        .then(output => {
            setMealIdeas(output)
        })
    }

    const dashboardQuickSearch = (searchWords) => {
        fetch(`https://api.spoonacular.com/recipes/quickAnswer${searchWords}&apiKey=${spoonKey}`)
        .then((res) => res.json())
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
            singleInstructions,
            getFunFact,
            funFact,
            dashboardQuickSearch,
            dashboardMealIdeas,
            mealIdeas
        }}>
            {props.children}
        </MealContext.Provider>
    )
}

