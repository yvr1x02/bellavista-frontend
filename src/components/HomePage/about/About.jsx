import { Card, Col, Container, Row } from "react-bootstrap";
import "./about.css";

const About = () => {
  return (
    <>
      <Card.Img variant="top" src="src\assets\27-Bellavista-75.jpg" className="bellavista-img rounded p-5 " />
      <Container>
        <Row>
          <Col md={6} className="d-flex align-items-center justify-content-center text-center">
            <h2>"La vacanza. Nuovi sorrisi, nuovi luoghi da vedere e amare, nuove risposte da scoprire e da vivere"</h2>
          </Col>
          <Col md={6} className="d-flex align-items-center justify-content-center text-center">
            <h2>È facile essere felici in Sicilia.</h2>
          </Col>
        </Row>
      </Container>

      <div className="p-4 mx-3">
        <hr />
        <p>
          La Sicilia è una terra meravigliosa, tutta da scoprire: i suoi colori mozzafiato spaziano dal turchese del mare al verde
          della rigogliosa vegetazione punteggiata da fiori profumatissimi, che arricchiscono anche le terre più brulle alle
          pendici dell’Etna. E i suoi piccoli borghi sembrano uscire da una cartolina, luoghi incantevoli dove la gente è calorosa
          e ospitale e si possono assaporare bontà uniche al mondo. Insomma, come non innamorarsi? Tantissimi filosofi, scrittori
          e poeti ne sono rimasti affascinati.
          <hr />
        </p>
      </div>
      <Container>
        <Row>
          <Col md={12}>
            <h2>
              <Container>
                <Row>
                  <Col md={12} className="d-flex align-items-center justify-content-center text-center pb-5 m-3">
                    <h2>
                      I vostri Host Andrea e Alessandra vi danno il benvenuto al <br /> "Bellavista casa vacanze"
                    </h2>
                  </Col>
                </Row>
              </Container>
            </h2>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
