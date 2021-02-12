/* eslint-disable no-unused-vars */
import React from "react";
import { MealTable } from "../components/Menu/MealTable";
// import { MenuProvider } from "../providers/MealProvider";
import { Button, Row, Container } from "reactstrap";
import { useHistory } from "react-router-dom";

// very similar to CommentList.js file in Tabloid as far as getting the menu items individually. 
const Menu = () => {
    const domHistory = useHistory();



  return (
    <>
    <div>
      <h2>My Menu</h2>
        <Container fluid="sm" className="theamed-container">
          <section className="m-2" >
            <Button className="addNew-btn mt-2"  onClick={() => domHistory.push("/menu/add/")}>Add Meal to Menu</Button>
          </section>
          <MealTable />
        </Container>
    </div>
    </>
  );
};

export default Menu;