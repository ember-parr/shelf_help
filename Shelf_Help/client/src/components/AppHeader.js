import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import { UserProfileContext } from "../providers/UserProfileProvider";

const AppHeader = () => {
  const { getCurrentUser, logout } = useContext(UserProfileContext);
  const user = getCurrentUser();
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const logoutAndReturn = () => {
    window.confirm("Are You Sure You Want To Log Out?")
    return logout().then(() => {
      toast.dark("You are now logged out");
      history.push("/login");
    });
  };

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand tag={Link} to="/">
          {/* <img
            id="header-logo"
            src="./../../public/images/favicon-duo.png"
            width="30"
            height="30"
            className="mr-1"
            alt="Shelfy"
          /> */}
          Shelf Help
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {user ? (
              <>
                <NavItem>
                  <NavLink to="/menu" tag={Link}>
                    Menu
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/mypantry" tag={Link}>
                    Pantry
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/grocerylist" tag={Link}>
                    Grocery List
                  </NavLink>
                </NavItem>
                {/* <NavItem>
                  <NavLink onClick={logoutAndReturn}>Logout</NavLink>
                </NavItem> */}
              </>
            ) : (
                <>
                  <NavItem>
                    <NavLink to="/login" tag={Link}>
                      Login
                  </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/register" tag={Link}>
                      Register
                  </NavLink>
                  </NavItem>
                </>
              )}
          </Nav>
          {user ? (
            <NavbarText className="d-sm-none d-md-block" onClick={logoutAndReturn}>
              Welcome {user.displayName}
            </NavbarText>
          ) : null}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default AppHeader;