import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

function GestionePrenotazioni() {
  const [prenotazioni, setPrenotazioni] = useState([]);

  useEffect(() => {
    // Recupera le prenotazioni dal backend
    fetch("http://localhost:3001/api/prenotazioni", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setPrenotazioni(data))
      .catch((error) => console.error("Errore nel recupero delle prenotazioni:", error));
  }, []);

  return (
    <div>
      <h2>Gestione Prenotazioni</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Ospite</th>
            <th>Data Inizio</th>
            <th>Data Fine</th>
            <th>Confermata</th>
          </tr>
        </thead>
        <tbody>
          {prenotazioni.map((prenotazione) => (
            <tr key={prenotazione.id}>
              <td>{prenotazione.id}</td>
              <td>
                {prenotazione.ospite.nome} {prenotazione.ospite.cognome}
              </td>
              <td>{prenotazione.dataInizio}</td>
              <td>{prenotazione.dataFine}</td>
              <td>{prenotazione.confermata ? "Sì" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default GestionePrenotazioni;
