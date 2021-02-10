/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { MealTable } from "../components/MealMenu/MealTable";
// import { MenuProvider } from "../providers/MealProvider";
import { Button, ButtonGroup, Row, Col, Input, Form, FormGroup, Container } from "reactstrap";
import { useHistory } from "react-router-dom";

// very similar to CommentList.js file in Tabloid as far as getting the menu items individually. 
const Menu = () => {
    const domHistory = useHistory();



  return (
    <>
    <div>

      {/* <MenuProvider> */}
        <Container className="theamed-container" fluid="sm">
        <section className="m-2">
          <Row>
            <Col>
            <Button color="info" size="sm" onClick={() => domHistory.push("/menu/add")}>Add Meal to Menu</Button>
            </Col>
            <Col>
            
            </Col>
            </Row>
            <br />
        </section>
          
          <MealTable />
        </Container>
      {/* </MenuProvider> */}




    </div>
    </>
  );
};

export default Menu;