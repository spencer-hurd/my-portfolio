import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import Container from "react-bootstrap/Container";
import React from "react";
import Nav from "react-bootstrap/Nav";
import "./Styles/Footer.css";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const scrollToContact = () => {
    window.scrollTo(735, 92);
    const emailInput = document.querySelector("#email");
    emailInput.select();
  };
  return (
    <footer>
      <Container className="footer">
        <Nav className="footer-nav">
          <Nav.Link className="footer-link" href="#" onClick={scrollToTop}>
            Back To Top
          </Nav.Link>
          <Nav.Link className="footer-link" href="#" onClick={scrollToContact}>
            Contact Me
          </Nav.Link>
          <Nav.Link className="footer-link" href="/">
            Home
          </Nav.Link>
          <Nav.Link className="footer-link" href="/about">
            About
          </Nav.Link>
          <Nav.Link className="footer-link" href="/portfolio">
            Portfolio
          </Nav.Link>
          <div className="icons">
            <a href="https://www.github.com/spencer-hurd" target={"_blank"}>
              <AiOutlineGithub />
            </a>
            <b>||</b>
            <a href="https://www.linkedin.com/in/spencerhurd" target={"_blank"}>
              <AiFillLinkedin />
            </a>
          </div>
        </Nav>
      </Container>
    </footer>
  );
};

export default Footer;
