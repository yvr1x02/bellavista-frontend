import { useEffect, useState } from "react";
import { Card, CardText, CardTitle, Image } from "react-bootstrap";
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
          <Card.Text className="d-flex justify-content-center">
            <p>
              <i className="bi bi-people mx-3"></i>8 Ospiti
            </p>
            <p>
              <i className="bi bi-door-open mx-3"></i>4 Camere da letto
            </p>
            <p>
              <i className="fa-solid fa-bed mx-3"></i>4 Letti
            </p>
            <p>
              <i className="fa-solid fa-bath mx-3"></i>4 Bagni
            </p>
          </Card.Text>
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
            <div className="d-flex justify-content-center gap-3 mt-4">
              <Image
                src="src\Galleria-img\chiesa-madre-avola.jpg"
                roundedCircle
                width={200}
                height={200}
                style={{ objectFit: "cover" }}
                className="desc-img m-4"
              />
              <Image
                src="src\Galleria-img\Ortigia-isola-di-Siracusa-Sicilia.jpg"
                roundedCircle
                width={200}
                height={200}
                style={{ objectFit: "cover" }}
                className="desc-img m-4"
              />
              <Image
                src="src\Galleria-img\20210310132722-etna-sicilia-gettyimages-894433170.jpg"
                roundedCircle
                width={200}
                height={200}
                className="desc-img m-4"
              />
              <Image
                src="src\Galleria-img\shutterstock_413073736.jpg"
                roundedCircle
                width={200}
                height={200}
                style={{ objectFit: "cover" }}
                className="desc-img m-4"
              />
              <Image
                src="src\Galleria-img\download.jpg"
                roundedCircle
                width={200}
                height={200}
                style={{ objectFit: "cover" }}
                className="desc-img m-4"
              />
            </div>
            <Card.Title className="text-center fs-2 p-3">Punti forti della casa:</Card.Title>
            <Card.Text className="d-flex justify-content-center">
              <p style={{ border: "1px solid #ccc", padding: "8px", borderRadius: "5px", margin: "0 5px" }}>
                <i className="bi bi-p-circle mx-3"></i>Parcheggio
              </p>
              <p style={{ border: "1px solid #ccc", padding: "8px", borderRadius: "5px", margin: "0 5px" }}>
                <i className="fa-solid fa-paw mx-3"></i>Animali Benvenuti
              </p>

              <p style={{ border: "1px solid #ccc", padding: "8px", borderRadius: "5px", margin: "0 5px" }}>
                <i className="fa-solid fa-wifi mx-3"></i>Banda larga wireless Internet
              </p>
            </Card.Text>
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
