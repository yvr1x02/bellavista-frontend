import React from "react";
import "./header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";

function Header() {
  return (
    <>
      <div className="hero-container">
        <Navbar expand="lg" className="bg-body-tertiary navbar-centered">
          <Navbar.Brand href="#home">
            <img alt="" src="/img/logo.svg" width="30" height="30" className="d-inline-block align-top" />
            Bella Vista
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <NavDropdown title="I nostri servizi" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav>
              <Nav.Link href="https://www.instagram.com">
                <i className="bi bi-instagram"></i>
              </Nav.Link>
              <Nav.Link href="https://www.facebook.com">
                <i className="bi bi-facebook"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Image src="src/assets/example.jpg" fluid className="hero-image" />
      </div>
    </>
  );
}

export default Header;
