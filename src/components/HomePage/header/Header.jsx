import React from "react";
import "./header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";

function Header() {
  return (
    <>
      {/* navbar superiore */}
      <Navbar className="mx-3" expand="lg">
        <Button variant="primary" className="mx-3">
          Richiedi preventivo
        </Button>
        <Navbar.Text className="mx-3">TEL 0931999734 / WHATSAPP 3342532043 / BELLAVISTA@INFO.IT</Navbar.Text>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="mx-3">CHI SIAMO /</Navbar.Text>
          <Nav.Link href="https://www.instagram.com">
            <i className="bi bi-instagram mx-3"></i>
          </Nav.Link>
          <Nav.Link href="https://www.facebook.com">
            <i className="bi bi-facebook"></i>
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>

      {/* navabar centrale */}

      <div className="hero-container">
        <Navbar expand="lg" className=" navbar-centrale rounded ">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="src\assets\00-Bellavista logo.jpg"
              width="140"
              height="80"
              className="d-inline-block align-centre mx-3 rounded"
            />
            Bella Vista
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav " />
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

            <Nav className="mx-3">
              <Nav.Link href="https://www.instagram.com">
                <i className="bi bi-instagram"></i>
              </Nav.Link>
              <Nav.Link href="https://www.facebook.com">
                <i className="bi bi-facebook"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* Carosello di immagini */}
        <Carousel>
          <Carousel.Item>
            <img className="carousel-img d-block w-100" src="src\assets\04-Bellavista-9.jpg" alt="Prima immagine" />
            <Carousel.Caption>
              <h3>Prima immagine</h3>
              <p>Descrizione della prima immagine.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img d-block w-100"
              src="src\assets\cd896773-2217-4f47-8b6b-c6ec1674df9e.JPG"
              alt="Seconda immagine"
            />
            <Carousel.Caption>
              <h3>Seconda immagine</h3>
              <p>Descrizione della seconda immagine.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-img d-block w-100" src="src\assets\15-Bellavista-40.jpg" alt="Terza immagine" />
            <Carousel.Caption>
              <h3>Terza immagine</h3>
              <p>Descrizione della terza immagine.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Header;
