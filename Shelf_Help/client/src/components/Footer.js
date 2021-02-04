import React from "react";
import { Container } from "reactstrap";
import "../Styles/Footer.css"



export const Footer = (props) => {
    return (
        <>
        <footer className="footer">
            <Container fluid={true} >
                <nav>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/emberparr/" target="_blank" rel="noreferrer"> Created By Ember Parr</a></li>
                        <li> &emsp; Capstone Project for Nashville Software School</li>
                    </ul>
                </nav>
                <div className="copyright">
                    &copy; 2021  Designed By <a href="http://www.emberparr.com" target="_blank" rel="noreferrer">Emberparr.com</a>
                </div>
            </Container>
        </footer>




        </>
    )
}
