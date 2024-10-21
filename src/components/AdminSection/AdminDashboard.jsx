import React, { useEffect, useState } from "react";
import { Carousel, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function AdminDashboard() {
  const [username, setUsername] = useState(null);
  const [role, setRole] = useState(null); // Stato per memorizzare il ruolo

  // Recupera l'username e il ruolo da localStorage al caricamento della pagina
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedRole = localStorage.getItem("role");
    if (storedUsername) {
      setUsername(storedUsername);
      setRole(storedRole); // Imposta lo stato con il ruolo dell'utente loggato
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username"); // Rimuove il nome utente da localStorage
    localStorage.removeItem("role"); // Rimuove il ruolo
    setUsername(null); // Aggiorna lo stato per nascondere l'username e mostrare "Accedi"
    setRole(null); // Resetta anche il ruolo
  };
  return (
    <div className="hero-container">
      <Navbar expand="lg" className="navbar-centrale rounded">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="src/assets/00-Bellavista logo.jpg"
            width="140"
            height="80"
            className="d-inline-block align-centre mx-3 rounded"
          />
          Bella Vista
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/link">About</Nav.Link>
            <NavDropdown title="I nostri servizi" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>

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
                <Navbar.Text>Benvenuto, {username}</Navbar.Text>
                <Nav.Link as={Link} to="/" onClick={handleLogout}>
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
      {/* Carosello di immagini */}
      <Carousel>
        <Carousel.Item>
          <img className="carousel-img d-block w-100" src="src/assets/04-Bellavista-9.jpg" alt="Prima immagine" />
          <Carousel.Caption>
            <h3>Prima immagine</h3>
            <p>Descrizione della prima immagine.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img d-block w-100"
            src="src/assets/cd896773-2217-4f47-8b6b-c6ec1674df9e.JPG"
            alt="Seconda immagine"
          />
          <Carousel.Caption>
            <h3>Seconda immagine</h3>
            <p>Descrizione della seconda immagine.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-img d-block w-100" src="src/assets/15-Bellavista-40.jpg" alt="Terza immagine" />
          <Carousel.Caption>
            <h3>Terza immagine</h3>
            <p>Descrizione della terza immagine.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      -
    </div>
  );
}

export default AdminDashboard;
