/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { MealContext } from "../../providers/MealProvider";
import { MealTableRow } from "./MealTableRow";
import { Table } from "reactstrap";

export const MealTable = () => {
    const { getMeals, allMeals } = useContext(MealContext)
    const [ isLoading, setIsLoading ] = useState(false)
    console.log("MealTable just ran")
    useEffect(() => {
        getMeals()
        .then(setIsLoading(false))
    }, [])

    return (
    <>
        <Table hover responsive size="sm">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Meal</th>
                </tr>
            </thead>
            
            <tbody>
                {allMeals.map(menu => {
                    return <MealTableRow key={menu.id} menu={menu} spoonId={menu.spoonacularRecipeId}/>
                })}
            </tbody>
        </Table>
    </>
    )

}