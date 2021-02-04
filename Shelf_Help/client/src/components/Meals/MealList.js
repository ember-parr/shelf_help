/* eslint-disable react-hooks/exhaustive-deps */
// this needs to create an array of objects from the dates selected in the calendar view
// similar to item table in totelly project
import { useState, useContext, useEffect } from "react";
import { MealInfoProvider } from "../../providers/MealInfoProvider"
import { UserProfileContext } from "../../providers/UserProfileProvider";

export const MealList = (date, numOfDays) => {
    const { getToken } = useContext(UserProfileContext)
    const [mealEntries, setMealEntries ] = useState([])

    // get meal entries for date parameter provided for either one week or one day depending on num of days entered. 
    useEffect(() => {
        if (numOfDays === 1) {
            getToken().then((token) => 
                fetch(`/api/meal/day/${date}`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((res) => res.json())
                .then((meals) => {
                    setMealEntries(meals);
                    console.log("mealEntriesDAY: " + mealEntries);
                })
            );
        } else {
            getToken().then((token) => 
                fetch(`/api/meal/week/${date}`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((res) => res.json())
                .then((meals) => {
                    setMealEntries(meals);
                    console.log("mealentriesWEEK: " + mealEntries)
                })
            );
        }
    }, []);


    let allMeals = mealEntries.map(entry => MealInfoProvider(entry.SpoonacularRecipeId))
    console.log("ALL MEALS: " + allMeals)

    return allMeals;

}