/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState,  } from "react";
import { Image, Transformation } from "cloudinary-react";
import { Card, Media, CardTitle, CardSubtitle, CardText, FormGroup, Input } from "reactstrap"
import { Container, Spinner, Row, Col, Jumbotron, Button } from 'reactstrap';
import { MealContext } from "../providers/MealProvider";
import HorizontalLogo  from "../Styles/HorizontalLogo.png";
import { MealIdeas } from "../components/Dashboard/DashboardMealIdeas";
import { DashboardSearch } from "../components/Dashboard/DashboardSearch";


export const Dashboard = () => {
    const { getFunFact, funFact, dashboardMealIdeas, mealIdeas  } = useContext(MealContext)


    const parentSizing = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
    const imgSizing ={
        justifyContent: "center",
        width: "99%",
        height: "auto",
    }
    
    
    // useEffect(() => {
    //     getFunFact()
    //     setTimeout(function() {

    //         console.log(funFact)
    //     }, 750 )
    // }, [])

    useEffect(() => {
        dashboardMealIdeas()
    }, [])

    



    return (
        <>
            <div className="m-2">
            <Container  fluid="sm">
                <Jumbotron className="pt-0" style={parentSizing}>
                    <Col >
                <Media  fluid>
                    <Media  object src="https://res.cloudinary.com/emberparr/image/upload/v1613093575/Shelf%20Help/Horizontal-Logo_dcrrx7_2_xkij4a.png" style={imgSizing} alt="Generic placeholder image" />
                </Media></Col>
                    <p className="lead"> Created by Ember Parr &emsp; | &emsp; Full Stack Capstone Project &emsp; | &emsp; February 2022 </p>
                    <hr className="my-2" />
                    <Row className="justify-content-around">
                        <p>{funFact ? {funFact} : " "}</p>
                        </Row>
                        
                </Jumbotron>
            

                <Row>
                    <Col lg="8">
                        
                            {mealIdeas ? <MealIdeas mealIdeas={mealIdeas.recipes} /> : <i>unable to load recipe ideas</i>}
                    </Col>
                    <Col lg="1"></Col>
                    <Col lg="3">
                            <DashboardSearch />
                    </Col>
                </Row>
            </Container>
        </div>

        </>
    )
}