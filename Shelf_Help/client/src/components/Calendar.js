/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Table } from "reactstrap";
import { toast } from "react-toastify";

export const Calendar = () => {






    return (
    <>
        <div>
            <button>Add Menu Item</button> 
        </div>

        <Table>
        <thead>
        <tr>
            <th>Date</th>
            <th>Breakfast</th>
            <th>Lunch</th>
            <th>Dinner</th>
            <th>Snack</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">Monday, February 1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        <tr>
            <th scope="row">Tuesday, February 2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
        <tr>
            <th scope="row">Wednesday, February 3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
        </tr>
        <tr>
            <th scope="row">Thursday, February 4</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
        </tr>
        <tr >
            <th scope="row">Friday, February 5</th>
            <td>Taters </td>
            <td>the Bird</td>
            <td>@twitter</td>
        </tr>
        </tbody>
        </Table>

    </>
    )
}


export default Calendar;