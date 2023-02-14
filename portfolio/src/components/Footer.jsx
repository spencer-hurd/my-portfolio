import {HiOutlineMail, HiOutlinePhone}  from "react-icons/hi";
import {AiOutlineGithub, AiFillLinkedin} from "react-icons/ai"
import {GrContactInfo} from 'react-icons/gr'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
const Footer = () => {
    const [contactShow, setContactShow] = useState(false);
    const contactRef = useRef(null);

    return(
    <footer>
            <Container className="footer">
                <Nav className="footer-nav">
                    <Nav.Link href="#">Back To Top</Nav.Link>
                    <Nav.Link href="#">Contact Me</Nav.Link>
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                    <div className="icons">
                        <a href="https://www.github.com/spencer-hurd" target={"_blank"}><AiOutlineGithub /></a>
                            <b>||</b>
                            <a href="https://www.linkedin.com/in/spencerhurd" target={"_blank"}><AiFillLinkedin /></a>
                            
                    </div>
                </Nav>
            </Container>
    </footer>                  
    )
}

export default Footer