
import React, {useState, useContext, useEffect, useCallback} from "react";
import { MealContext } from "../providers/MealProvider";
import { format, sub, add } from "date-fns"

export const MakeMealData = () => {
    const { getMeals, allMeals, getCertainMeal, singleMeal } = useContext(MealContext)
    const [ startDate, setStartDate ] = useState(new Date());


    let today = new Date();
    let todayWeekday = format(today, 'iiii')
    
    const fixDate = () => {
        if (todayWeekday === 'Sunday') {
            setStartDate(sub(today, {
                days: 6
            }))
        } else if (todayWeekday === 'Saturday') {
            setStartDate(sub(today, {
                days: 5
            }))
        } else if (todayWeekday === 'Friday') {
            setStartDate(sub(today, {
                days: 4
            }))
        } else if (todayWeekday === 'Thursday') {
            setStartDate(sub(today, {
                days: 3
            }))
        } else if (todayWeekday === 'Wednesday') {
            setStartDate(sub(today, {
                days: 2
            }))
        } else if (todayWeekday === 'Tuesday') {
            setStartDate(sub(today, {
                days: 1
            }))
        } else if (todayWeekday === 'Monday') {
            setStartDate(today)
        }
    }

    const entryMonday = useCallback(() => {
        let date = format(startDate, 'yyyy-MM-dd')
        console.log("start date: " + startDate)
        let breakfast = getCertainMeal(date, 1)
        let breakfastName = breakfast.name ? breakfast?.name : 'no breakfast menu' 
        let lunch = getCertainMeal(date, 2)
        let lunchName = lunch.name ? lunch?.name : 'no lunch menu'
        let dinner = getCertainMeal(date, 3)
        let dinnerName = dinner.name ? dinner?.name : 'no dinner menu'
        
        return {
            col1: 'Monday',
            col2: breakfastName,
            col3: lunchName,
            col4: dinnerName
        }
    }, [getCertainMeal, startDate])

    const entryTuesday = () => {
        let date = format(add(startDate, {
            days: 1
        }), 'yyyy-MM-dd')
        console.log("tuesday date: " + date)
        let breakfast = getCertainMeal(date, 1)
        let breakfastName = breakfast.name ? breakfast?.name : 'no breakfast menu' 

        let lunch = getCertainMeal(date, 2)
        let lunchName = lunch.name ? lunch?.name : 'no lunch menu'

        let dinner = getCertainMeal(date, 3)
        let dinnerName = dinner.name ? dinner?.name : 'no dinner menu'

        console.log(lunch)    
        console.log("wut " + dinner)
        // console.log(dinner)
        console.log(singleMeal)

        for (var i = 0; i < dinner; i++) {
            var myObject = dinner[i]
            var firstKey = Object.keys(myObject)[0];
            var value = myObject[firstKey];
            console.log(firstKey + " : " + value)
        }



        return {
            col1: 'Tuesday',
            col2: breakfastName,
            col3: lunchName,
            col4: dinnerName
        }
    }



    useEffect(() => {
        fixDate()
    }, [])

    if (entryMonday) {
        console.log(entryMonday())
        console.log(entryTuesday())
    }



    // getMeals()

    // let calendarData = []

    // const Monday = () => {

    // }
    // allMeals.forEach(meal => {
    //     calendarData.push({
    //         col1: weekday,
    //         col2: breakfast,
    //         col3: lunch,
    //         col4: dinner
    //     })
    // })

    return (
        <>

        <p>hi!</p>
        </>
    )
}