import React, { useContext, useEffect, useState,  } from "react";
import { Card, CardImg, CardColumns, CardBody, CardTitle, CardSubtitle, CardText, FormGroup, Input } from "reactstrap"
import { Container, Spinner, Row, Col, Jumbotron, Button } from 'reactstrap';
import { MealContext } from "../providers/MealProvider";


export const Dashboard = () => {
    const { getFunFact, funFact,  } = useContext(MealContext)
    
    useEffect(() => {
        getFunFact()
        setTimeout(function() {

            console.log(funFact)
        }, 750 )
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
                        <p className="lead">We've gathered some ideas for you to try something new! </p>

                        <CardColumns>
                            <Card>
                                <CardBody>
                                <CardTitle tag="h5">Card title</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                <CardText>CARDS TO MAPPIGN THROUGH GENERATED MENUES</CardText>
                                <Button>Button</Button>
                                </CardBody>
                            </Card>
                        </CardColumns>
                    </Col>
                    <Col lg="1"></Col>
                    <Col lg="3">
                        <p className="lead">You have Questions... We Have Answers...  </p>
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
                        </Card>
                    </Col>
                </Row>
            </Container>


        </>
    )
}