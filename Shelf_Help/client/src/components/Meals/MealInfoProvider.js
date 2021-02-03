// this needs to get the recipe information from spoonacular
// similar to ItemProvider in Totelly Project


import React, { createContext } from "react"

export const MealContext = createContext();

export const MealInfoProvider = (props) => {
    

    const getMealById = (id) => {
        return fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=66e7421be84e4b16a934c4ad2b86bfd4`)
        .then(result => result.json())
    }


    return (
        <MealContext.Provider value={{
            getMealById
        }}>
            {props.children}
        </MealContext.Provider>
    )
}