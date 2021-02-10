/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, {useState, useContext, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { MealContext } from "../../providers/MealProvider";
import { format, add, eachDayOfInterval } from "date-fns"

export const MealWeekView = ({startDate}) => {
    const domHistory = useHistory();
    const { getMealsByDateRange } = useContext(MealContext)
    const [ menuDetails, setMenuDetails ] = useState([])
    const [ allMenuEntries, setMealEntries ] = useState([])


    // get dates within this range
    const datesOfWeek = eachDayOfInterval({
        start: startDate,
        end: add(startDate, {
            days: 6
        })
    })
    const searchableDates = datesOfWeek.map(date => format(date, 'yyyy-MM-dd'))
    const formattedDates = datesOfWeek.map(date => format(date, 'iiii - LLL. Io'))

    useEffect(() => {
        setMenuDetails([])
        setMealEntries([])
    })

    // get meal info from SQL database
    const getMealEntriesWithinDateRange = () => {
        const date = searchableDates[0]
        const endDate = searchableDates[6]
        console.log("getMealEntriesWithinDateRange function is running (start/end dates): " + date + " / " + endDate)
        getMealsByDateRange(date, endDate)
        .then((output) => {
            setMealEntries(output)
            console.log("entries length: " + allMenuEntries.length)
            putDetailsIn()
        })
    }

    // get details of each recipe from spoonacular
    const putDetailsIn = () => {
        console.log("put details in function is running & allMenuEntries length is: " + allMenuEntries.length)
        allMenuEntries.forEach(meal => getRecipeDetailsFromSpoon(meal.spoonacularRecipeId))
    }

    const getRecipeDetailsFromSpoon = (spoonId) => {
        console.log("getting recipe details for: " + spoonId)
        fetch(`https://api.spoonacular.com/recipes/${spoonId}/information?apiKey=5c60c91675ec4b6299f1bc901dc8def9`)
            .then((res) => res.json())
                .then(spoonOutput => {
                    setMenuDetails(spoonOutput)
                    console.log("spoonOutput: " + spoonOutput?.title)
                })
    }

    // const getAllMealDataTogether = (date, mealTypeId) => {
    //     const mealName = 
    // }
    

    const testingFunctions = ( id ) => {
        const testDate = searchableDates[id]
        const testEntry = allMenuEntries[id]
        const testDetails = menuDetails[id]


        console.log("Day: " + testDate)
        console.log("SQL id: " + testEntry?.id)
        console.log("SQL's spoonacularID: " + testEntry?.spoonacularRecipeId)
        console.log("Spoons recipe id: " + testDetails?.id)
        console.log("Spoons recipe name: " + testDetails?.title)
        console.log("meal type: " + testEntry?.mealType.name)
    }

    useEffect(() => {
        getMealEntriesWithinDateRange()
    }, [])

    testingFunctions(0)
    testingFunctions(1)
    testingFunctions(2)
    testingFunctions(3)
    



    // dummy data: 
    let recipeId = 2;

    return (
        <>
            <tr onClick={() => domHistory.push(`/menu/details/${recipeId}`)}>
                <td><h5>monday</h5></td>
                <td>Burgers</td>
                <td>Fries</td>
                <td></td>
                <td></td>
            </tr>
            <tr onClick={() => domHistory.push(`/menu/details/${recipeId}`)}>
                <td><h5>Tuesday</h5></td>
                <td>Burgers</td>
                <td>Fries</td>
                <td></td>
                <td></td>
            </tr>
            <tr onClick={() => domHistory.push(`/menu/details/${recipeId}`)}>
                <td><h5>Wednesday</h5></td>
                <td>Burgers</td>
                <td>Fries</td>
                <td></td>
                <td>smoothies</td>
            </tr>
            <tr onClick={() => domHistory.push(`/menu/details/${recipeId}`)}>
                <td><h5>Thursday</h5></td>
                <td>Burgers</td>
                <td>Fries</td>
                <td>Salmon</td>
                <td></td>
            </tr>
            <tr onClick={() => domHistory.push(`/menu/details/${recipeId}`)}>
                <td><h5>Friday</h5></td>
                <td>Burgers</td>
                <td>Fries</td>
                <td></td>
                <td></td>
            </tr>
            <tr onClick={() => domHistory.push(`/menu/details/${recipeId}`)}>
                <td><h5>Saturday</h5></td>
                <td>Burgers</td>
                <td>Fries</td>
                <td></td>
                <td></td>
            </tr>
            <tr onClick={() => domHistory.push(`/menu/details/${recipeId}`)}>
                <td><h5>Sunday</h5></td>
                <td>Burgers</td>
                <td>Fries</td>
                <td>Steak</td>
                <td></td>
            </tr>
        </>
    )









}