import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "./admin.css";

function GestionePrenotazioni() {
  const [prenotazioni, setPrenotazioni] = useState([]);

  // Recupera le prenotazioni dal backend
  useEffect(() => {
    fetchPrenotazioni();
  }, []);

  const fetchPrenotazioni = () => {
    fetch("http://localhost:3001/api/prenotazioni", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setPrenotazioni(data))
      .catch((error) => console.error("Errore nel recupero delle prenotazioni:", error));
  };

  const handleConfermaPrenotazione = (id) => {
    fetch(`http://localhost:3001/api/prenotazioni/${id}/conferma`, {
      method: "PUT", //aggiornamento prenotazione
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ confermata: true }),
    })
      .then((response) => response.json())
      .then(() => {
        fetchPrenotazioni(); // Aggiorna la lista delle prenotazioni dopo l'aggiornamento
      })
      .catch((error) => console.error("Errore durante la conferma della prenotazione:", error));
  };

  // Funzione per eliminare la prenotazione
  const handleEliminaPrenotazione = (id) => {
    fetch(`http://localhost:3001/api/prenotazioni/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        fetchPrenotazioni(); // Aggiorna la lista delle prenotazioni dopo l'eliminazione
      })
      .catch((error) => console.error("Errore durante l'eliminazione della prenotazione:", error));
  };

  return (
    <div className="gestione-prenotazioni mx-5">
      <h2 className="gestione-prenotazioni">Prenotazioni</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Ospite</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Data Inizio</th>
            <th>Data Fine</th>
            <th>Note</th>
            <th>Confermata</th>
            <th>Azioni</th>
          </tr>
        </thead>
        <tbody>
          {prenotazioni.map((prenotazione) => (
            <tr key={prenotazione.id}>
              <td>{prenotazione.id}</td>
              <td>
                {prenotazione.ospite.nome} {prenotazione.ospite.cognome}
              </td>
              <td>{prenotazione.ospite.email}</td>
              <td>{prenotazione.ospite.telefono}</td>
              <td>{prenotazione.dataInizio}</td>
              <td>{prenotazione.dataFine}</td>
              <td>{prenotazione.note}</td>

              <td>{prenotazione.confermata ? "Sì" : "No"}</td>
              <td>
                {/* Pulsante per confermare la prenotazione */}
                {!prenotazione.confermata && (
                  <Button variant="success" onClick={() => handleConfermaPrenotazione(prenotazione.id)}>
                    Conferma
                  </Button>
                )}
                {/* Pulsante per eliminare la prenotazione */}
                <Button variant="danger" onClick={() => handleEliminaPrenotazione(prenotazione.id)} className="ms-2">
                  Elimina
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default GestionePrenotazioni;
