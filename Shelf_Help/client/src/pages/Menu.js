/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { MealTable } from "../components/MealMenu/MealTable";
// import { MenuProvider } from "../providers/MealProvider";
import { Button, ButtonGroup, Row, Col, Input, Form, FormGroup, Container } from "reactstrap";
import { useHistory } from "react-router-dom";

// very similar to CommentList.js file in Tabloid as far as getting the menu items individually. 
const Menu = () => {
    const domHistory = useHistory();
    const [viewToDisplay, setViewToDisplay] = useState("Today")
    const today = Date.now();
    const [startDate, setStartDate] = useState(today)
    const [dayCount, setDayCount] = useState(1)


    const todayView = () => {
      setViewToDisplay("Today")
      setStartDate(today)
      setDayCount(1)
    }

    const weekView = () => {
      setViewToDisplay("Week")
      setStartDate(today)
      setDayCount(7)
    }

    const monthView = () => {
      setViewToDisplay("Month")
      setStartDate(today)
      setDayCount(35)
    }



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
            <ButtonGroup size="sm" className="mb-3">
                <Button onClick={() => todayView()}> Today </Button>
                <Button onClick={() => weekView()}> Week </Button>
                <Button onClick={() => monthView()}> Month </Button>
            </ButtonGroup>
            </Col>
            </Row>
            <br />
        </section>
          <MealTable view={viewToDisplay} startDate={startDate} dayCount={dayCount} />
        </Container>
      {/* </MenuProvider> */}




    </div>
    </>
  );
};

export default Menu;