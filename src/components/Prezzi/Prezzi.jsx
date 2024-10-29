import { Accordion } from "react-bootstrap";
import Header from "../HomePage/header/Header";
import "./prezzi.css"; // Importa il file CSS

function Prezzi() {
  return (
    <>
      <Header></Header>

      {/* Container per centrare l'accordion */}
      <div className="prezzi-container">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Prezzi</Accordion.Header>
            <Accordion.Body>
              Le nostre tariffe possono variare di giorno in giorno. Seleziona un periodo per vedere il prezzo esatto del tuo
              soggiorno.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Politica e Note</Accordion.Header>
            <Accordion.Body>
              <h4>Programmazione dei pagamenti</h4>
              <p>100% dell'importo totale sono dovuti al momento della prenotazione. Saldo residuo: Da pagare più tardi</p>
              <h5>Deposito cauzionale</h5>
              <p>Non è richiesta nessuna cauzione.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Politica di cancellazione</Accordion.Header>
            <Accordion.Body>
              <p>Nessun pagamento anticipato è rimborsabile</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}

export default Prezzi;
