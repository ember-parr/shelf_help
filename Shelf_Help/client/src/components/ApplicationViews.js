import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserProfileContext, UserProfileProvider } from "../providers/UserProfileProvider";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Menu from "../pages/Menu"
import Pantry from "../pages/Pantry"
import GroceryList from "../pages/GroceryList";
import Dashboard from "../pages/Dashboard";
import {FoodItemProvider} from "../providers/FoodItemProvider";
import {LocationProvider} from "../providers/LocationProvider";
import GroceryForm from "./Groceries/GroceryForm";
import PantryForm from "./FoodItems/PantryForm";

const ApplicationViews = () => {
    const { isLoggedIn } = useContext(UserProfileContext);

    return (
        <Switch>
            <UserProfileProvider >
            <Route path="/" exact>
                {isLoggedIn ? <Dashboard /> : <Redirect to="/login" />}
            </Route>

            <Route path="/menu" exact>
                {isLoggedIn ? <Menu /> : <Redirect to="/login" />}
            </Route>

            <FoodItemProvider>
                <LocationProvider>
                    <Route path="/mypantry" exact>
                        {isLoggedIn ? <Pantry /> : <Redirect to="/login" />}
                    </Route>
                </LocationProvider>
            </FoodItemProvider>

            <FoodItemProvider>
                <LocationProvider>
                    <Route path="/pantry/add">
                        {isLoggedIn ? <PantryForm /> : <Redirect to="/login" />}
                    </Route>
                </LocationProvider>
            </FoodItemProvider>


            <Route path="/grocerylist" exact>
                    {isLoggedIn ? <GroceryList /> : <Redirect to="/login" />}
            </Route>

            <FoodItemProvider>
                <LocationProvider>
                    <Route path="/grocery/add" exact>
                        {isLoggedIn ? <GroceryForm /> : <Redirect to="/login" />}
                    </Route>
                </LocationProvider>
            </FoodItemProvider>

            <Route path="/login">
                <Login />
            </Route>

            <Route path="/register">
                <Register />
            </Route>

            </UserProfileProvider>
        </Switch>
    );
};

export default ApplicationViews;