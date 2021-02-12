/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState,  } from "react";
import { Card, CardImg, CardColumns, CardBody, CardTitle, CardSubtitle, CardText, FormGroup, Input } from "reactstrap"
import { Container, Spinner, Row, Col, Jumbotron, Button } from 'reactstrap';
import { MealContext } from "../providers/MealProvider";
import { MealIdeas } from "../components/Dashboard/DashboardMealIdeas";


export const Dashboard = () => {
    const { getFunFact, funFact, dashboardMealIdeas, mealIdeas  } = useContext(MealContext)
    
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
            <Container className="theamed-container" fluid="sm">
                <Jumbotron>
                    <h1 className="display-3"> Shelf Help </h1>
                    
                    <p className="lead"> Created by Ember Parr &emsp; | &emsp; Full Stack Capstone Project &emsp; | &emsp; February 2022 </p>
                    <hr className="my-2" />
                    <Row className="justify-content-around">
                        <p>{funFact ? {funFact} : " "}</p>
                        </Row>
                        
                </Jumbotron>
            </Container>
        </div>
            <Container fluid="md">

                <Row>

                    <Col lg="8">
                        
                            {mealIdeas ? <MealIdeas mealIdeas={mealIdeas} /> : <Spinner color="secondary" />}
                    </Col>
                    <Col lg="1"></Col>
                    <Col lg="3">
                        {/* <p className="lead">You have Questions... We Have Answers...  </p>
                        <FormGroup>
                            <Input
                            type="search"
                            name="search"
                            id="exampleSearch"
                            placeholder="search placeholder"
                            />
                        </FormGroup>
                        <Card body outline color="info">
                            <CardTitle tag="h5"> </CardTitle>
                            <CardText></CardText>
                        </Card> */}
                    </Col>
                </Row>
            </Container>


        </>
    )
}