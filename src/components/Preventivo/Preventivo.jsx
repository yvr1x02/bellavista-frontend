import React, { useState, useEffect } from "react";
import { Form, Button, ListGroup, Card, Dropdown, Alert } from "react-bootstrap";
import Header from "../HomePage/header/Header";

function Preventivo() {
  const [prenotazioni, setPrenotazioni] = useState([]);
  const [ospiti, setOspiti] = useState([]);
  const [ospiteSelezionato, setOspiteSelezionato] = useState(null);
  const [nuovoOspiteNome, setNuovoOspiteNome] = useState("");
  const [nuovoOspiteCognome, setNuovoOspiteCognome] = useState("");
  const [nuovoOspiteEmail, setNuovoOspiteEmail] = useState("");
  const [nuovoOspiteTelefono, setNuovoOspiteTelefono] = useState("");
  const [dataInizio, setDataInizio] = useState("");
  const [dataFine, setDataFine] = useState("");
  const [note, setNote] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);

  // Effettua una chiamata API per ottenere tutte le prenotazioni e gli ospiti all'inizio
  useEffect(() => {
    fetch("http://localhost:3001/api/prenotazioni")
      .then((response) => response.json())
      .then((data) => setPrenotazioni(data))
      .catch((error) => console.error("Errore durante il caricamento delle prenotazioni:", error));

    fetch("http://localhost:3001/api/ospiti", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => setOspiti(data))
      .catch((error) => console.error("Errore durante il caricamento degli ospiti:", error));
  }, []);

  // Gestisce l'invio del form per creare una prenotazione
  const handleSubmitPrenotazione = (e) => {
    e.preventDefault();

    if (!ospiteSelezionato) {
      alert("Seleziona un ospite prima di creare la prenotazione");
      return;
    }

    const newPrenotazione = {
      ospite: {
        id: ospiteSelezionato,
      },
      dataInizio,
      dataFine,
      note,
    };

    fetch("http://localhost:3001/api/prenotazioni", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPrenotazione),
    })
      .then((response) => response.json())
      .then((data) => {
        setPrenotazioni([...prenotazioni, data]);
        setDataInizio("");
        setDataFine("");
        setNote("");
        setIsSuccess(true);
        setAlertMessage("Prenotazione creata con successo!");
      })
      .catch((error) => console.error("Errore durante la creazione della prenotazione:", error));
    setIsSuccess(false);
    setAlertMessage("Errore nella creazione della prenotazione");
  };

  const handleSubmitOspite = (e) => {
    e.preventDefault();

    const newOspite = {
      nome: nuovoOspiteNome,
      cognome: nuovoOspiteCognome,
      email: nuovoOspiteEmail,
      telefono: nuovoOspiteTelefono,
    };

    fetch("http://localhost:3001/api/ospiti", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOspite),
    })
      .then((response) => response.json())
      .then((data) => {
        setOspiti([...ospiti, data]);
        setOspiteSelezionato(data.id);
        console.log("Ospite creato:", data);
        setNuovoOspiteNome("");
        setNuovoOspiteCognome("");
        setNuovoOspiteEmail("");
        setNuovoOspiteTelefono("");
      })
      .catch((error) => console.error("Errore durante la creazione dell'ospite:", error));
  };

  return (
    <>
      <Header></Header>
      <div className="container mt-5">
        <h2>Richiedi Preventivo</h2>

        {/* Sezione per selezionare o creare un nuovo ospite */}
        <Card className="mb-4">
          <Card.Body>
            <h4>Seleziona un Ospite</h4>
            <Dropdown onSelect={(eventKey) => setOspiteSelezionato(eventKey)}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {ospiteSelezionato ? ospiti.find((ospite) => ospite.id === ospiteSelezionato).nome : "Seleziona Ospite"}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {ospiti.map((ospite) => (
                  <Dropdown.Item key={ospite.id} eventKey={ospite.id}>
                    {ospite.nome} {ospite.cognome}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <hr />

            <h4>Nuovo Ospite</h4>
            <Form onSubmit={handleSubmitOspite}>
              <Form.Group className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" value={nuovoOspiteNome} onChange={(e) => setNuovoOspiteNome(e.target.value)} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Cognome</Form.Label>
                <Form.Control
                  type="text"
                  value={nuovoOspiteCognome}
                  onChange={(e) => setNuovoOspiteCognome(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={nuovoOspiteEmail}
                  onChange={(e) => setNuovoOspiteEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                  type="tel"
                  value={nuovoOspiteTelefono}
                  onChange={(e) => setNuovoOspiteTelefono(e.target.value)}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Crea Ospite
              </Button>
            </Form>
          </Card.Body>
        </Card>

        {/* Form per aggiungere una nuova prenotazione */}
        <Card className="mb-4">
          <Card.Body>
            <h4>Crea Prenotazione</h4>
            <Form onSubmit={handleSubmitPrenotazione}>
              <Form.Group className="mb-3">
                <Form.Label>Data Inizio</Form.Label>
                <Form.Control type="date" value={dataInizio} onChange={(e) => setDataInizio(e.target.value)} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Data Fine</Form.Label>
                <Form.Control type="date" value={dataFine} onChange={(e) => setDataFine(e.target.value)} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Note</Form.Label>
                <Form.Control
                  as="textarea"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Inserisci eventuali note"
                />
              </Form.Group>

              <Button variant="primary" type="submit" disabled={!ospiteSelezionato}>
                Aggiungi Prenotazione
              </Button>
            </Form>
          </Card.Body>
        </Card>

        {alertMessage && (
          <Alert variant={isSuccess ? "success" : "danger"} onClose={() => setAlertMessage("")} dismissible>
            {alertMessage}
          </Alert>
        )}
      </div>
    </>
  );
}

export default Preventivo;
