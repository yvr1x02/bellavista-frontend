import { Button, Card, Col, Row } from "react-bootstrap";
import "./home.css";

const Home = () => {
  return (
    <>
      <Card className="text-center">
        <Card.Header className="card-header p-5">
          <img src="src\assets\00-Bellavista logo.jpg" className="logo-home rounded"></img>
        </Card.Header>
        <Card.Body className="card-body">
          <Card.Title>Casa Vacanze ad Augusta</Card.Title>
          <Card.Text className=" card-text mx-5 px-5 p-3">
            <span className="strong-text">"BellaVista casa vacanze"</span> sita in{" "}
            <span className="strong-text">Augusta (Sr)</span> è una villa{" "}
            <span className="strong-text">a 100 metri dal mare</span> interamente ristrutturata nel 2024 ed è organizzata per
            accogliere fino a <span className="strong-text">8 persone.</span> <br /> La struttura di 240mq, con meravigliosa{" "}
            <span className="strong-text">vista sul mare e sul monte Etna</span>, è realizzata su due piani.{" "}
            <span className="strong-text">Il livello principale</span> è un piano rialzato in cui si trovano un ampio salone, due
            camere da letto con bagno, sala da pranzo e cucina; sullo stesso livello si trova una veranda esterna con una seconda
            cucina, barbecue e doccia. <br /> Mediante la scala interna si accede al{" "}
            <span className="strong-text">piano superiore</span> che dispone di una camera da letto con bagno e un'altra camera da
            letto con bagno esterno. Sullo stesso piano si trova la zona lavanderia. "BellaVista casa vacanze"{" "}
            <span>gode di una posizione strategica</span> che vi permetterà di immergervi nella bellezza di colori e sapori tipici
            di questa parte della Sicilia: si trova <span className="strong-text">al centro tra Siracusa e Catania</span> (a circa
            30 km di distanza entrambe). <br /> Notevoli le città con spiaggia di
            <span className="strong-text"> Avola, Noto, Fontane Bianche</span>. Vicinissima a{" "}
            <span className="strong-text">
              Cava Grande del Cassibile, Siracusa con la sua splendida Ortigia e il suo Teatro Greco, l'oasi di Vendicari,
              Marzamemi. Il Barocco Catanese, i paesi etenei, Taormina{" "}
            </span>{" "}
            fanno da cornice alla nostra Sicilia. <br /> Inoltre a circa 700 metri si trova un grande supermercato, due panifici,
            due farmacie e due bar. Per chi raggiunge la Sicilia in aereo,
            <span className="strong-text"> l'aeroporto di riferimento è Catania</span>.
          </Card.Text>
          <Button variant="primary">Scopri le nostre camere!</Button>
        </Card.Body>
      </Card>
      <Card className="my-3 p-3 custom-card">
        <Row className="align-items-center">
          {/* Colonna immagine a sinistra */}
          <Col md={4}>
            <Card.Img src="src\assets\00-Bellavista logo.jpg" className="img-left" />
          </Col>
          {/* Colonna descrizione a destra */}
          <Col md={8}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                <span className="strong-text">"BellaVista casa vacanze"</span> sita in{" "}
                <span className="strong-text">Augusta (Sr)</span> è una villa{" "}
                <span className="strong-text">a 100 metri dal mare</span> interamente ristrutturata nel 2024 ed è organizzata per
                accogliere fino a <span className="strong-text">8 persone.</span> <br /> La struttura di 240mq, con meravigliosa{" "}
                <span className="strong-text">vista sul mare e sul monte Etna</span>, è realizzata su due piani.{" "}
                <span className="strong-text">Il livello principale</span> è un piano rialzato in cui si trovano un ampio salone,
                due camere da letto con bagno, sala da pranzo e cucina; sullo stesso livello si trova una veranda esterna con una
                seconda cucina, barbecue e doccia. <br /> Mediante la scala interna si accede al{" "}
                <span className="strong-text">piano superiore</span> che dispone di una camera da letto con bagno e un'altra
                camera da letto con bagno esterno. Sullo stesso piano si trova la zona lavanderia. "BellaVista casa vacanze"{" "}
                <span>gode di una posizione strategica</span> che vi permetterà di immergervi nella bellezza di colori e sapori
                tipici di questa parte della Sicilia: si trova{" "}
                <span className="strong-text">al centro tra Siracusa e Catania</span> (a circa 30 km di distanza entrambe). <br />{" "}
                Notevoli le città con spiaggia di
                <span className="strong-text"> Avola, Noto, Fontane Bianche</span>. Vicinissima a{" "}
                <span className="strong-text">
                  Cava Grande del Cassibile, Siracusa con la sua splendida Ortigia e il suo Teatro Greco, l'oasi di Vendicari,
                  Marzamemi. Il Barocco Catanese, i paesi etenei, Taormina{" "}
                </span>{" "}
                fanno da cornice alla nostra Sicilia. <br /> Inoltre a circa 700 metri si trova un grande supermercato, due
                panifici, due farmacie e due bar. Per chi raggiunge la Sicilia in aereo,
                <span className="strong-text"> l'aeroporto di riferimento è Catania</span>.
              </Card.Text>
              <Button className="align-items-centre">Scopri le nostre camere!</Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
};
export default Home;
