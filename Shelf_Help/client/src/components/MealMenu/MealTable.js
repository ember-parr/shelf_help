/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
// import { MenuContext } from "../../providers/MealProvider";
import { MealTableRow } from "./MealTableRow";
import { useHistory } from "react-router-dom";
import { Button, ButtonGroup, Table, Input, Form, FormGroup } from "reactstrap";
import {format, endOfDay } from "date-fns";

export const MealTable = ({view, dayCount, startDate}) => {
    // const { getMenues } = useContext(MenuContext);
    const domHistory = useHistory();
    let todaysDate = format(new Date(), 'M-d-yyy')
    console.log("today's date: " + todaysDate)


    if (view === "Today") {
        return (
            <>
            <h3>Today's Menu</h3>
            <Table hover responsive size="sm">
                <thead>
                    <tr>
                        <th></th>
                        <th>main dish</th>
                        <th>sides</th>
                        <th>dessert</th>
                    </tr>
                </thead>

                <tbody>
                    <MealTableRow date={startDate} dayCount={dayCount} />
                </tbody>
            </Table>
            </>
        )
    } else if (view === "Week") {
        return (
            <>
            <h3>Weekly Menu</h3>
            <Table hover responsive size="sm">
                <thead>
                    <tr>
                        <th></th>
                        <th>Breakfast</th>
                        <th>Lunch</th>
                        <th>Dinner</th>
                        <th>Snacks / Other</th>
                    </tr>
                </thead>
                <tbody>
                    <MealTableRow date={startDate} dayCount={dayCount} />
                </tbody>
            </Table>
            </>
        )
    } else {
        return (
            <>
            <h3>Monthly Menu</h3>
            <Table dark hover responsive size="sm">
                <thead>
                    <tr>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        <th>Sunday</th>
                    </tr>
                </thead>
                <tbody>
                    <MealTableRow date={startDate} dayCount={dayCount} />
                </tbody>
            </Table>
            </>
        )
    }

}