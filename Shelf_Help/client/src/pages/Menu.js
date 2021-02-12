/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { MealTable } from "../components/Menu/MealTable";
// import { MenuProvider } from "../providers/MealProvider";
import { Button, ButtonGroup, Row, Col, Input, Form, FormGroup, Container } from "reactstrap";
import { useHistory } from "react-router-dom";

// very similar to CommentList.js file in Tabloid as far as getting the menu items individually. 
const Menu = () => {
    const domHistory = useHistory();



  return (
    <>
    <div>

        <Container className="theamed-container" fluid="sm">
        <section className="m-2" >
            <Button className="center mt-2" color="info" size="md" onClick={() => domHistory.push("/menu/add/")}>Add Meal to Menu</Button>
          <Row>
            
            <Col>
            
            </Col>
            </Row>
            <br />
        </section>
          
          <MealTable />
        </Container>




    </div>
    </>
  );
};

export default Menu;