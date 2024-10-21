import { useEffect, useState } from "react";
import { Card, ListGroup, ListGroupItem, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./descrizione.css";
import ServicesList from "./Serviceslist";
import Servizi from "./Servizi";

function Descrizione() {
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
    <>
      <Navbar expand="lg" className="navbar-centrale rounded text-white">
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
            <Nav.Link href="/link">Contattaci</Nav.Link>
            <Nav.Link href="/link">Descrizione</Nav.Link>
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
            <Nav.Link href="https://www.instagram.com/bellavista_casa_vacanze?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <i className="bi bi-instagram"></i>
            </Nav.Link>
            <Nav.Link href="https://www.facebook.com">
              <i className="bi bi-facebook"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Card>
        <Card.Img variant="top" src="src\assets\16-Bellavista-42.jpg" className="descrizione-img p-1" />
      </Card>
      <Card className="p-5">
        <Card.Body className="rounded">
          <Card.Title className="text-center fs-2 p-3">BellaVista casa vacanze</Card.Title>
          <Card.Text className="text-center">
            "BellaVista casa vacanze" sita in Augusta (Sr) è una villa a 100 metri dal mare interamente ristrutturata nel 2024 ed
            è organizzata per accogliere fino a 8 persone. La struttura di 240mq, con meravigliosa vista sul mare e sul monte
            Etna, è realizzata su due piani. Il livello principale è un piano rialzato in cui si trovano un ampio salone, due
            camere da letto con bagno, sala da pranzo e cucina; sullo stesso livello si trova una veranda esterna con una seconda
            cucina, barbecue e doccia. Mediante la scala interna si accede al piano superiore che dispone di una camera da letto
            con bagno e un'altra camera da letto con bagno esterno. Sullo stesso piano si trova la zona lavanderia. "BellaVista
            casa vacanze" gode di una posizione strategica che vi permetterà di immergervi nella bellezza di colori e sapori
            tipici di questa parte della Sicilia: si trova al centro tra Siracusa e Catania (a circa 30 km di distanza entrambe).
            Notevoli le città con spiaggia di Avola, Noto, Fontane Bianche. Vicinissima a Cava Grande del Cassibile, Siracusa con
            la sua splendida Ortigia e il suo Teatro Greco, l'oasi di Vendicari, Marzamemi. Il Barocco Catanese, i paesi etenei,
            Taormina fanno da cornice alla nostra Sicilia. Inoltre a circa 700 metri si trova un grande supermercato, due
            panifici, due farmacie e due bar. Per chi raggiunge la Sicilia in aereo, l'aeroporto di riferimento è Catania.
            <br></br> <br /> <h3>Dotazioni:</h3>
          </Card.Text>
          <ServicesList></ServicesList>
        </Card.Body>
      </Card>
      <Servizi></Servizi>
    </>
  );
}

export default Descrizione;
