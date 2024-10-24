import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./home.css";

const Home = () => {
  return (
    <>
      <Container className="p-3">
        <Row>
          <Col md={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="src\assets\01-Bellavista-01.jpg" />
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                  "BellaVista casa vacanze" sita in Augusta (Sr) è una villa a 100 metri dal mare interamente ristrutturata nel
                  2024 .
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="src\assets\12-Bellavista-13.jpg" />
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                  La struttura di 240mq, con meravigliosa vista sul mare e sul monte Etna, è realizzata su due piani.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="src\Galleria-img\cd896773-2217-4f47-8b6b-c6ec1674df9e.JPG" />
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                  "BellaVista casa vacanze" gode di una posizione strategica che vi permetterà di immergervi nella bellezza di
                  colori e sapori tipici di questa parte della Sicilia.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Home;
