/* eslint-disable no-unused-vars */
// get food items from MY database. 
import React, {useState, createContext} from "react";
import firebase from "firebase/app";
import "firebase/auth";

export const LocationContext = createContext();

export const LocationProvider = (props) => {
    const [locations, setLocations] = useState([]);
    const getToken = () => firebase.auth().currentUser.getIdToken();
    const apiUrl = "/api/location";


    // gets all locations from the database
    const getLocations = () => {
        return getToken().then((token) => 
            fetch(`${apiUrl}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => res.json())
            .then(setLocations)            
            );
    };

    



    return (
        <LocationContext.Provider value= {{locations, getLocations}}> {props.children} </LocationContext.Provider>
    )
}