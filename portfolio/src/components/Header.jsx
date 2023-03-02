import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState } from "react";
import ReactModal from "react-modal";
import ContactForm from "./ContactForm";
const Header = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <header>
        <Navbar>
          <div className="title">
            <a href="/">
              <img id="logo" src="src/assets/sh-logo.png" />{" "}
            </a>
            <div className="header-text">
              <Navbar.Brand id="header-name" href="/">
                Spencer Hurd
              </Navbar.Brand>
              <br />
              <Navbar.Text>
                <b className="header-title">Full Stack Software Engineer</b>
                <div className="socials">
                  <a
                    href="https://www.github.com/spencer-hurd"
                    target={"_blank"}
                  >
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
              </Navbar.Text>
            </div>
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto header-links">
              <Nav.Link className="header-link" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="header-link" href="/about">
                About
              </Nav.Link>
              <Nav.Link className="header-link" href="/portfolio">
                Portfolio
              </Nav.Link>
              <button className="header-link" onClick={openModal}>
                Contact Me
              </button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={"contact-modal"}
        overlayClassName="contact-overlay"
        contentLabel="Contact Form Modal"
      >
        <ContactForm closeModal={closeModal} />
      </ReactModal>
    </div>
  );
};

export default Header;
