/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, {useState, useContext, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { MealContext } from "../../providers/MealProvider";
import { format, add, eachDayOfInterval } from "date-fns"

export const MealSummary = ({mealDate, indexValue}) => {
    const domHistory = useHistory();
    const { getCertainMeal } = useContext(MealContext);
    const [ breakfastMenu, setBreakfastMenu ] = useState({})
    const [ breakfastDetails, setBreakfastdetails ] = useState({})
    const [ lunchMenu, setLunchMenu ] = useState({})
    const [ lunchDetails, setLunchDetails ] = useState({})
    const [ dinnerMenu, setDinnerMenu ] = useState({})
    const [ dinnerDetails, setDinnerDetails ] = useState({})
    const [ otherDetails, setOtherDetails ] = useState([])
    const [ mealWeekDay, setMealWeekDay ] = useState("")
    
    
    let i = 0;
    useEffect(() => {
        gatherBreakfastInfo()
        
    }, [])

    const datesOfWeek = eachDayOfInterval({
        start: mealDate,
        end: add(mealDate, {
            days: 6
        })
    })
    const mealDateFormatedForSearch =  datesOfWeek.map(date => format(date, 'yyyy-MM-dd'))
    const mealDatesFormated = datesOfWeek.map(date => format(date, 'iii - LLL. Io'))

    const gatherBreakfastInfo = () => {
        setMealWeekDay(mealDatesFormated[i])
        let date;
        let typeId;
        let spoonId;
        getCertainMeal(mealDateFormatedForSearch[i], 1).then((result) => setBreakfastMenu(result))
        if (breakfastMenu === undefined) {
            console.log("nothing to see for breakfast")
        } else {
            for (var key in breakfastMenu) {
                if (!breakfastMenu.hasOwnProperty(key)) continue;
                var obj = breakfastMenu[key]
                for ( var prop in obj) {
                    if (!obj.hasOwnProperty(prop)) continue;
                    console.log("prop loop return: " + prop + " = " + obj[prop])
                    if (prop === 'mealTypeId')
                        typeId = obj[prop]
                    if (prop === 'date')
                        date = obj[prop]
                    if (prop === 'spoonacularRecipeId')
                        spoonId = obj[prop]
                }
            }
            console.log("BREAKFAST searchDate: " + mealDateFormatedForSearch[i] + " typeId = " + typeId + " -- date = " + date + " -- spoonId: " + spoonId)
            if (spoonId) {gatherMealDetails(spoonId, 1)}
        }
        gatherLunchInfo()
    }

    const gatherLunchInfo = () => {
        let date;
        let typeId;
        let spoonId;
        getCertainMeal(mealDateFormatedForSearch[1], 2).then((result) => setLunchMenu(result))
        if (lunchMenu === undefined) {
            console.log("nothing to see for lunch")
        } else {
            for (var key in lunchMenu) {
                if (!lunchMenu.hasOwnProperty(key)) continue;
                var obj = lunchMenu[key]
                for ( var prop in obj) {
                    if (!obj.hasOwnProperty(prop)) continue;
                    console.log("prop loop return: " + prop + " = " + obj[prop])
                    if (prop === 'mealTypeId')
                        typeId = obj[prop]
                    if (prop === 'date')
                        date = obj[prop]
                    if (prop === 'spoonacularRecipeId')
                        spoonId = obj[prop]
                }
            }
            console.log("LUNCH searchDate: " + mealDateFormatedForSearch[1] + " typeId = " + typeId + " -- date = " + date + " -- spoonId: " + spoonId)
            if (spoonId) {gatherMealDetails(spoonId, 2)}
        }
        gatherDinnerInfo()
    }


    const gatherDinnerInfo = () => {
        let date;
        let typeId;
        let spoonId;
        getCertainMeal(mealDateFormatedForSearch[1], 3).then((result) => setDinnerMenu(result))
        if (dinnerMenu === undefined) {
            console.log("nothing to see for dinner")
        } else {
            for (var key in dinnerMenu) {
                if (!dinnerMenu.hasOwnProperty(key)) continue;
                var obj = dinnerMenu[key]
                for ( var prop in obj) {
                    if (!obj.hasOwnProperty(prop)) continue;
                    console.log("prop loop return: " + prop + " = " + obj[prop])
                    if (prop === 'mealTypeId')
                        typeId = obj[prop]
                    if (prop === 'date')
                        date = obj[prop]
                    if (prop === 'spoonacularRecipeId')
                        spoonId = obj[prop]
                }
            }
            console.log("Dinner searchDate: " + mealDateFormatedForSearch[1] + " typeId = " + typeId + " -- date = " + date + " -- spoonId: " + spoonId)
            if (spoonId) {
                gatherMealDetails(spoonId, 3)
            }
        }
    }

    const gatherMealDetails = (spoonId, typeId) => {
        fetch(`https://api.spoonacular.com/recipes/${spoonId}/information?apiKey=d77d78f9357b477094b10096abd85b71`)
            .then((res) => res.json())
            .then(spoonOutput => {
                if (typeId === 1) {
                    setBreakfastdetails(spoonOutput)
                    console.log("breakfast details: " + breakfastDetails)
                } else if (typeId === 2) {
                    setLunchDetails(spoonOutput)
                    console.log("lunch details: " + lunchDetails)
                } else if (typeId === 3) {
                    setDinnerDetails(spoonOutput)
                    console.log("dinner details: " + dinnerDetails)
                }
            })
    }

    


        return (
        <tr>
            <td><h5>{mealWeekDay}</h5></td>
            <td>{breakfastDetails.title}<br /><sub>{breakfastDetails.readyInMinutes}</sub></td>
            <td>{lunchDetails.title}<br /><sub>{lunchDetails.readyInMinutes}</sub></td>
            <td>{dinnerDetails.title}<br /><sub>{dinnerDetails?.readyInMinutes}</sub></td>
            {/* <td>{otherDetails.map(entry => { return <p>{entry}</p> })}</td> */}
        </tr>
        )
    }

