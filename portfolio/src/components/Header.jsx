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
const Header = () => {
    const [contactShow, setContactShow] = useState(false);
    const contactRef = useRef(null);
    
    return(
    <header>   
        <Navbar>
        <div className="title">

            <a href="/"><img id="logo" src="src/assets/sh-logo.png"/> </a>   
            <div className="header-text">
                <Navbar.Brand id="header-name" href="/">Spencer Hurd</Navbar.Brand>
                <br/>
                <Navbar.Text><b className="header-title">Full Stack Software Engineer</b>
                <div className="socials">
                    <a href="https://www.github.com/spencer-hurd" target={"_blank"}><AiOutlineGithub /></a>
                    <b>||</b>
                    <a href="https://www.linkedin.com/in/spencerhurd" target={"_blank"}><AiFillLinkedin /></a>
                </div>
                </Navbar.Text>
            </div>
        </div>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto header-links">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
            </Navbar>
    </header>          
        
    )
}

export default Header