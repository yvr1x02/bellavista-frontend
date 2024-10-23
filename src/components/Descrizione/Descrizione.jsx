import { useEffect, useState } from "react";
import { Card, ListGroup, ListGroupItem, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./descrizione.css";
import ServicesList from "./Serviceslist";
import Servizi from "./Servizi";
import Header from "../HomePage/header/Header";

function Descrizione() {
  return (
    <>
      <Header></Header>

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
