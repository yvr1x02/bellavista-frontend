import React, { useState, useEffect } from "react";
import "./header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  const [username, setUsername] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedRole = localStorage.getItem("role");
    if (storedUsername) {
      setUsername(storedUsername);
      setRole(storedRole);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    setUsername(null);
    setRole(null);
  };

  return (
    <>
      {/* Navbar principale */}
      <div className="hero-container p-1">
        <Navbar expand="lg" className="navbar-centrale rounded sticky">
          <Navbar.Brand href="/home">
            <img
              alt=""
              src="src/assets/00-Bellavista logo.jpg"
              width="160"
              height="100"
              className="d-inline-block align-centre mx-3 rounded"
            />
            Bella Vista
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/descrizione">Descrizione</Nav.Link>
              <Nav.Link href="/galleria">La nostra struttura</Nav.Link>
              <Nav.Link href="/prezzi">Prezzi</Nav.Link>
              <Nav.Link href="/preventivo">Richiedi Preventivo</Nav.Link>

              {/* Se l'utente ha il ruolo di admin, mostra la sezione Gestione */}
              {role === "ADMIN" && (
                <Nav.Link as={Link} to="/admin">
                  Gestione
                </Nav.Link>
              )}
            </Nav>

            <Nav className="mx-3">
              {/* Se l'utente è loggato, mostra l'username e un pulsante di logout, altrimenti mostra il link per il login */}
              {username ? (
                <>
                  <Navbar.Text className="welcome-navbar">Benvenuto, {username}</Navbar.Text>
                  <Nav.Link as={Link} to="/" onClick={handleLogout} className="logout">
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link as={Link} to="/">
                  Accedi!
                </Nav.Link>
              )}
              <Nav.Link href="https://www.instagram.com">
                <i className="bi bi-instagram"></i>
              </Nav.Link>
              <Nav.Link href="https://www.facebook.com">
                <i className="bi bi-facebook"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
