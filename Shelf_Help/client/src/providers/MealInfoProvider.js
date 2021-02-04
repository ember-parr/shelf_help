// this needs to get the recipe information from spoonacular
// similar to ItemProvider in Totelly Project


import { MealItemObject } from "./MealItemObject"


export const MealInfoProvider = (recipeId) => {
    
    let mealInfo = {}
    const id = recipeId

    const getMealById = (id) => {
        return fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=66e7421be84e4b16a934c4ad2b86bfd4`)
        .then(result => result.json())
        .then((res) => {
            console.log("result from meal info provider: " + res);
            mealInfo = res;
        })
    }

    getMealById(id)


    return MealItemObject(mealInfo);
}