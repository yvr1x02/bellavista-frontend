import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col, Carousel, Alert, Image } from "react-bootstrap";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

  // Gestione del login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("username", data.username);
        localStorage.setItem("role", data.role); // Assicurati che il backend invii il ruolo dell'utente

        setSuccessMessage("Login effettuato con successo!");
        setError(null);

        // Reindirizzamento basato sul ruolo
        if (data.role === "ADMIN") {
          navigate("/admin"); // Pagina dedicata all'admin
        } else {
          navigate("/home"); // Pagina utente normale
        }
      } else {
        setError("Login fallito. Controlla le credenziali.");
        setSuccessMessage(null);
      }
    } catch (error) {
      console.error("Si è verificato un errore durante il login:", error);
      setError("Si è verificato un errore durante il login.");
      setSuccessMessage(null);
    }
  };

  // Gestione della registrazione
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        setSuccessMessage("Registrazione effettuata con successo! Ora puoi effettuare il login.");
        setError(null);
        setIsRegistering(false); // Torna alla modalità di login
      } else {
        setError("Registrazione fallita. Prova con un altro username.");
        setSuccessMessage(null);
      }
    } catch (error) {
      console.error("Si è verificato un errore durante la registrazione:", error);
      setError("Si è verificato un errore durante la registrazione.");
      setSuccessMessage(null);
    }
  };

  return (
    <>
      <div className="text-center mt-4">
        <Image src="path_to_your_logo/logo.png" alt="Logo" width="200" />
      </div>

      <Container className="mt-5">
        <Row className="justify-content-center">
          {/* Colonna sinistra con carosello */}
          <Col xs={12} md={6} className="mb-4">
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src="https://via.placeholder.com/500x300" alt="Prima immagine" />
                <Carousel.Caption>
                  <h3>Prima immagine</h3>
                  <p>Descrizione della prima immagine.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="https://via.placeholder.com/500x300" alt="Seconda immagine" />
                <Carousel.Caption>
                  <h3>Seconda immagine</h3>
                  <p>Descrizione della seconda immagine.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="https://via.placeholder.com/500x300" alt="Terza immagine" />
                <Carousel.Caption>
                  <h3>Terza immagine</h3>
                  <p>Descrizione della terza immagine.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>

          {/* Colonna destra con form di login/registrazione */}
          <Col xs={12} md={6}>
            <h2 className="text-center">{isRegistering ? "Registrati" : "Login"}</h2>
            <Form onSubmit={isRegistering ? handleRegister : handleLogin}>
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Inserisci il tuo username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mt-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Inserisci la tua password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-4" block>
                {isRegistering ? "Registrati" : "Accedi"}
              </Button>
            </Form>

            {error && (
              <Alert variant="danger" className="mt-3">
                {error}
              </Alert>
            )}
            {successMessage && (
              <Alert variant="success" className="mt-3">
                {successMessage}
              </Alert>
            )}

            <p className="text-center mt-3">
              {isRegistering ? (
                <>
                  Hai già un account?{" "}
                  <Button variant="link" onClick={() => setIsRegistering(false)}>
                    Accedi
                  </Button>
                </>
              ) : (
                <>
                  Non hai un account?{" "}
                  <Button variant="link" onClick={() => setIsRegistering(true)}>
                    Registrati
                  </Button>
                </>
              )}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
