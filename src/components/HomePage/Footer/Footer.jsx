import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 ">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Contattaci</h5>
            <p>
              Questa è una casa vacanze situata in una bellissima posizione vicino al mare. Perfetta per una fuga estiva o un
              soggiorno rilassante.
            </p>
          </Col>
          <Col md={6}>
            <h5>Informazioni di Contatto</h5>
            <p>
              <strong>Indirizzo:</strong> Via Grazia Deledda, 5, Augusta, Italia
            </p>
            <p>
              <strong>Telefono:</strong> +393332613191
            </p>
            <p>
              <strong>Email:</strong> roomsbellavista@gmail.com
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
