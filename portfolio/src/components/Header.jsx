import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState } from "react";
import ReactModal from "react-modal";
import ContactForm from "./ContactForm";
import "./Styles/Header.css";
const Header = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <Navbar
      collapseOnSelect="true"
      key="md"
      id="header"
      fixed="top"
      expand="md"
    >
      <div className="title">
        <div className="header-text">
          <Navbar.Brand href="/">
            <img id="logo" src="src/assets/sh-logo.png" />{" "}
          </Navbar.Brand>
          <Navbar.Text>
            <div className="name-div">
              <b id="header-name">Spencer Hurd</b>
              <div className="socials">
                <a href="https://www.github.com/spencer-hurd" target={"_blank"}>
                  <AiOutlineGithub />
                </a>
                <b>||</b>
                <a
                  href="https://www.linkedin.com/in/spencerhurd"
                  target={"_blank"}
                >
                  <AiFillLinkedin />
                </a>
              </div>
            </div>
            <br />
            <b className="header-title">Full Stack Software Engineer</b>
          </Navbar.Text>
        </div>
      </div>
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
      <Navbar.Offcanvas
        id={`offcanvasNavbar-expand-md`}
        aria-labelledby={`offcanvasNavbarLabel-expand-md`}
        placement="end"
      >
        {" "}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto header-links">
            <Nav.Link eventKey="1" className="header-link" href="/">
              Home
            </Nav.Link>
            <Nav.Link eventKey="2" className="header-link" href="/about">
              About
            </Nav.Link>
            <Nav.Link eventKey="3" className="header-link" href="/portfolio">
              Portfolio
            </Nav.Link>
            <Nav.Link
              eventKey="4"
              className="header-link nav-link"
              onClick={openModal}
            >
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className={"contact-modal"}
          overlayClassName="contact-overlay"
          contentLabel="Contact Form Modal"
          id="contact-modal"
        >
          <ContactForm closeModal={closeModal} />
        </ReactModal>
      </Navbar.Offcanvas>
    </Navbar>
  );
};

export default Header;
