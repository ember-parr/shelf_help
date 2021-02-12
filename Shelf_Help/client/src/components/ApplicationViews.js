import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserProfileContext, UserProfileProvider } from "../providers/UserProfileProvider";
import {FoodItemProvider} from "../providers/FoodItemProvider";
import {LocationProvider} from "../providers/LocationProvider";
import { MealTypeProvider } from "../providers/MealTypeProvider";
import {MealProvider} from "../providers/MealProvider";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Menu from "../pages/Menu"
import Pantry from "../pages/Pantry"
import GroceryList from "../pages/GroceryList";
import { Dashboard } from "../pages/Dashboard";
import { Recipe } from "../pages/Recipe";
import PantryForm from "./Pantry/PantryForm";

const ApplicationViews = () => {
    const { isLoggedIn } = useContext(UserProfileContext);

    return (
        <Switch>
            <UserProfileProvider>
                <MealProvider>
                    <FoodItemProvider>
                        <LocationProvider>
                            <MealTypeProvider>

                                <Route path="/" exact>
                                    {isLoggedIn ? <Dashboard /> : <Redirect to="/login" />}
                                </Route>

                                <Route path="/menu" exact>
                                    {isLoggedIn ? <Menu /> : <Redirect to="/login" />}
                                </Route>

                                <Route path="/recipe/:recipeId" exact>
                                    {isLoggedIn ? <Recipe /> : <Redirect to="/login" />}
                                </Route>

                                <Route path="/mypantry" exact>
                                    {isLoggedIn ? <Pantry /> : <Redirect to="/login" />}
                                </Route>

                                <Route path="/pantry/add" exact>
                                    {isLoggedIn ? <PantryForm /> : <Redirect to="/login" />}
                                </Route>


                                <Route path="/grocerylist" exact>
                                        {isLoggedIn ? <GroceryList /> : <Redirect to="/login" />}
                                </Route>

                                <Route path="/login">
                                    <Login />
                                </Route>

                                <Route path="/register">
                                    <Register />
                                </Route>
                            </MealTypeProvider>
                        </LocationProvider>
                    </FoodItemProvider>
                </MealProvider>
            </UserProfileProvider>
        </Switch>
    );
};

export default ApplicationViews;