/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { MealContext, MenuContext } from "../../providers/MealProvider";
import { MealTableRow } from "./MealTableRow";
import { MealWeekView } from "./MealWeekView";
import { useHistory } from "react-router-dom";
import { Button, ButtonGroup, Table, Input, Form, FormGroup } from "reactstrap";
import {format, add, sub } from "date-fns";
import { DailyMenu } from "./DailyMenu";

export const MealTable = () => {
    const [ viewDay, setViewDay ] = useState(new Date())
    const { getMeals, allMeals } = useContext(MealContext)
    const [ isLoading, setIsLoading ] = useState(false)

    useEffect(() => {
        getMeals()
        .then(setIsLoading(false))
        
    }, [])

    // console.log("viewDay: " + viewDay)
    // const today = new Date();
    // const displayDate = () => {
    //     if (viewDay === today) {
    //         return "today's menu"
    //     } else {
    //         return format(viewDay, 'iiii - LLL. Io')
    //     }
    // }

    // const setToToday = () => {
    //     setViewDay(new Date())
    // }

    // const backOneDay = () => {
    //     const result = sub(viewDay, {
    //         days: 1
    //     })
    //     setViewDay(result)
    // }

    // const forwardOneDay = () => {
    //     const result = add(viewDay, {
    //         days: 1
    //     })
    //     setViewDay(result)
    // }




    return (
        <>

        {/* <ButtonGroup size="sm" className="mb-3">
                <Button onClick={() => backOneDay()}> back </Button>
                <Button onClick={() => setToToday()}> today </Button>
                <Button onClick={() => forwardOneDay()}> foward </Button>
            </ButtonGroup> */}


        <Table hover responsive size="sm">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Meal</th>
                </tr>
            </thead>
            
            <tbody>
                {allMeals.map(menu => {
                    return <MealTableRow key={menu.id} menu={menu} />
                })}
            </tbody>
        </Table>
        </>
    )

}