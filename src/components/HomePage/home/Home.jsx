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
                <Card.Title>Card Title 1</Card.Title>
                <Card.Text>
                  "BellaVista casa vacanze" sita in Augusta (Sr) è una villa a 100 metri dal mare interamente ristrutturata nel
                  2024 ed è organizzata per accogliere fino a 8 persone.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="src\assets\12-Bellavista-13.jpg" />
              <Card.Body>
                <Card.Title>Card Title 2</Card.Title>
                <Card.Text>
                  La struttura di 240mq, con meravigliosa vista sul mare e sul monte Etna, è realizzata su due piani.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title 3</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Home;
