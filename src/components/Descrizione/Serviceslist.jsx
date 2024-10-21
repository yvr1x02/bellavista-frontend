import ListGroup from "react-bootstrap/ListGroup";
import "./serviceList.css";

function ServicesList() {
  return (
    <ListGroup className="border border-none">
      <ListGroup.Item className="list">Aria condizionata</ListGroup.Item>
      <ListGroup.Item className="list">Internet LAN - WI-FI</ListGroup.Item>
      <ListGroup.Item className="list">TV</ListGroup.Item>
      <ListGroup.Item className="list">Cucina interna</ListGroup.Item>
      <ListGroup.Item className="list">Cucina esterna</ListGroup.Item>
      <ListGroup.Item className="list">Lavastoviglie</ListGroup.Item>
      <ListGroup.Item className="list">Forno</ListGroup.Item>
      <ListGroup.Item className="list">Bollitore</ListGroup.Item>
      <ListGroup.Item className="list">Frigo e freezer</ListGroup.Item>
      <ListGroup.Item className="list">Macchina del caffè</ListGroup.Item>
      <ListGroup.Item className="list">Asciugacapelli</ListGroup.Item>
      <ListGroup.Item className="list">Asse da stiro e ferro da stiro</ListGroup.Item>
      <ListGroup.Item className="list">Kit cucito</ListGroup.Item>
      <ListGroup.Item className="list">Barbecue</ListGroup.Item>
      <ListGroup.Item className="list">Zanzariere</ListGroup.Item>
      <ListGroup.Item className="list">Kit pronto soccorso</ListGroup.Item>
      <ListGroup.Item className="list">Estintore</ListGroup.Item>
      <ListGroup.Item className="list">Rilevatore di fumo e monossido di carbonio</ListGroup.Item>
      <ListGroup.Item className="list">Parcheggio</ListGroup.Item>
      <ListGroup.Item className="list">Tavolo da Ping Pong</ListGroup.Item>
      <ListGroup.Item className="list">Accesso privato al mare</ListGroup.Item>
    </ListGroup>
  );
}

export default ServicesList;
