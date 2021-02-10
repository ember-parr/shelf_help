/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import {useHistory} from "react-router-dom";





const MealTableRow = ({date, dayCount}) => {
    const domHistory = useHistory();

    let recipeId = 2




    if (dayCount === 1) {
        return (
            <>
                <tr onClick={() => domHistory.push(`/menu/details/${recipeId}`)}>
                    <td></td>
                    <td>Burgers</td>
                    <td>Fries</td>
                    <td></td>
                </tr>
            </>
        )
    } else if (dayCount === 7) {
        return (
            <>
                <tr onClick={() => domHistory.push(`/menu/details/${recipeId}`)}>
                    <td><h5>Monday</h5></td>
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