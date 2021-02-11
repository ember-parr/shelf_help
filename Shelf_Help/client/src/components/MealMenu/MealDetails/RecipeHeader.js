/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef } from 'react';
import { Jumbotron, Button, Container, Row } from 'reactstrap';



export const RecipeHeader = ({recipe}) => {
    

    //functions
    const openEditModal = () => {
        // setModal(true)
    }

    return (
        <>
        <div className="m-2">
            <Container className="theamed-container" fluid="sm">
                <Jumbotron>
                    <h1 className="display-3"> {recipe.title} </h1>
                    <p className="lead">&ensp; | &ensp; ready in {recipe.readyInMinutes} minutes &ensp; | &ensp; {recipe.servings} servings &ensp; | &ensp; </p>
                    <hr className="my-2" />
                    <Row className="justify-content-around">
                        <Button color="secondary" href={recipe.sourceUrl} target="_blanks">Visit Source</Button>
                        <Button color="info" onClick={() => openEditModal} >Add to your menu</Button>
                    </Row>
                </Jumbotron>
            </Container>
        </div>



        </>
    )
}