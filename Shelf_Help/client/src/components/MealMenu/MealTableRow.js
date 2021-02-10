/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, {useState, useContext, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { MealContext } from "../../providers/MealProvider";
import { format, add, parse } from "date-fns"




export const MealTableRow = ({date, dayCount}) => {
    const domHistory = useHistory();
    const { getMealById, getMealsByDateRange } = useContext(MealContext)
    let todaysDate = format(new Date(), 'yyyy-MM-dd')
    const [ todayFullMenu, setTodayMenu ] = useState([])
    const [ todayMenuEntries, setTodayEntries ] = useState([])
    const [ todayMenuDetails, setTodayDetails ] = useState([])

    

    // get date range to search -- use dayOne as start date & dayTwo as end date for range
    const dayOne = format(date, 'yyyy-MM-dd')
    const addDays = add(date, {
        days: dayCount - 1
    })
    const dayTwo = format(addDays, 'yyyy-MM-dd')




    // get meal info from SQL database 
    const getMealRangeEntries = () => {
        console.log("getting meal range entries in 3... 2... 1... ")
        getMealEntriesWithinDateRange(dayThree, dayFour)
    }

    const getMealEntriesWithinDateRange = (startDate, endDate) => {
        console.log("getMealEntriesWithinDateRange function is running (start/end dates): " + startDate + " / " + endDate)
        getMealsByDateRange(startDate, endDate)
        .then((output) => {
            output.forEach(meal => {
                todayMenuEntries.push({
                    id: meal.id,
                    spoonacularRecipeId: meal.spoonacularRecipeId,
                    mealTypeId: meal.mealTypeId,
                    userId: meal.userId,
                })
                putDetailsIn();
                console.log("menu entries length: " + todayMenuEntries.length)
            })
        })
        // .then(putDetailsIn())
    }

    
    
    // get details of each recipe from spoonacular
    const putDetailsIn = () => {
        console.log("put details in function is running & todayMenuEntries length is: " + todayMenuEntries.length)
        todayMenuEntries.forEach(meal => getRecipeDetailsFromSpoon(meal.spoonacularRecipeId))
        // testingFunctionality()
    }

    

    const getRecipeDetailsFromSpoon = (spoonId) => {
        fetch(`https://api.spoonacular.com/recipes/${spoonId}/information?apiKey=5c60c91675ec4b6299f1bc901dc8def9`)
            .then((res) => res.json())
                .then(spoonOutput => {
                    todayMenuDetails.push(spoonOutput)
                    console.log(" menu detail length: " + todayMenuDetails.length)
                })
    }


    const testingFunctionality = () => {
        console.log("index 0")
        console.log("entry: " + todayMenuEntries[0].spoonacularRecipeId)
        console.log("database: " + todayMenuDetails.lastIndexOf)
        console.log(" ")
        // console.log("index 1")
        // console.log("entry: " + todayMenuEntries[1].spoonacularRecipeId)
        // console.log("database: " + todayMenuDetails[1].id)
        // console.log(" ")
        // console.log("index 2")
        // console.log("entry: " + todayMenuEntries[2].spoonacularRecipeId)
        // console.log("database: " + todayMenuDetails[2].id)
        // console.log(" ")
        // console.log("index 3")
        // console.log("entry: " + todayMenuEntries[3].spoonacularRecipeId)
        // console.log("database: " + todayMenuDetails[3].id)
        // console.log(" ")
    }


    // dummy data to delete
    const dayThree = '2021-01-05'
    const dayFour = '2021-01-05'
    let recipeId = 2


    // on page load, sets today entries array to empty
    useEffect(() => {
        setTodayEntries([])
        setTodayDetails([])
        console.log("use effect is happening! current todayMenuEntries length: " + todayMenuEntries.length)
    }, [])


    
    if (dayCount === 1) {
        return (
            <>
                <tr onClick={() => getMealRangeEntries()}>
                    <td><h5>Breakfast</h5></td>
                    <td>Toasted bagle with preserves <br /> -- cook time: 15 minutes --</td>
                    <td>Fruit cup</td>
                    <td></td>
                </tr>
                <tr onClick={() => domHistory.push(`/menu/details/${recipeId}`)}>
                    <td><h5>Lunch</h5></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr onClick={() => domHistory.push(`/menu/details/${recipeId}`)}>
                    <td><h5>Dinner</h5></td>
                    {/* <td>{singleMeal?.title} <br /> -- cook time: {singleMeal?.readyInMinutes} minutes --</td> */}
                    <td>Fries</td>
                    <td></td>
                </tr>
                <tr onClick={() => domHistory.push(`/menu/details/${recipeId}`)}>
                    <td><h5>Snack</h5></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </>
        )
    } else {
        return (
            <>
                {/* WEEK ONE */}
                <tr> 
                    <td height="50"><sup align="left">08</sup><br />eggs <br /> sandwich <br /> chicken</td>
                    <td ><sup align="left">09<br /></sup>eggs <br /> sandwich <br /> chicken</td>
                    <td ><sup>10</sup><br />eggs <br /> sandwich <br /> chicken</td>
                    <td ><sup>11</sup><br />eggs <br /> sandwich <br /> chicken</td>
                    <td ><sup>12</sup><br />eggs <br /> sandwich <br /> chicken</td>
                    <td ><sup>13</sup><br />eggs <br /> sandwich <br /> chicken</td>
                    <td ><sup>14</sup><br />eggs <br /> sandwich <br /> chicken </td>
                </tr>
                
                <tr>
                    <td align="left"><sup>15</sup><br />eggs <br /> sandwich <br /> chicken</td>
                    <td align="left"><sup>16</sup><br />eggs <br /> sandwich <br /> chicken</td>
                    <td align="left"><sup>17</sup></td>
                    <td align="left"><sup>18</sup></td>
                    <td align="left"><sup>19</sup></td>
                    <td align="left"><sup>20</sup></td>
                    <td align="left"><sup>21</sup></td>
                </tr>
                <tr>
                    <td align="left"><sup>22</sup></td>
                    <td align="left"><sup>23</sup></td>
                    <td align="left"><sup>24</sup></td>
                    <td align="left"><sup>25</sup></td>
                    <td align="left"><sup>26</sup></td>
                    <td align="left"><sup>27</sup></td>
                    <td align="left"><sup>28</sup></td>
                </tr>
                <tr>
                    <td align="left"><sup>01</sup></td>
                    <td align="left"><sup>02</sup></td>
                    <td align="left"><sup>03</sup></td>
                    <td align="left"><sup>04</sup></td>
                    <td align="left"><sup>05</sup></td>
                    <td align="left"><sup>06</sup></td>
                    <td align="left"><sup>07</sup></td>
                </tr>
                <tr>
                    <td align="left"><sup>09</sup></td>
                    <td align="left"><sup>10</sup></td>
                    <td align="left"><sup>11</sup></td>
                    <td align="left"><sup>12</sup></td>
                    <td align="left"><sup>13</sup></td>
                    <td align="left"><sup>14</sup></td>
                    <td align="left"><sup>15</sup></td>
                </tr>
            </>
        )
    }
}