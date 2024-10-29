import React from "react";
import { Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row>
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
        </Row>
        <p>© 2024 BellaVista. Tutti i diritti riservati.</p>
      </Container>
    </footer>
  );
};

export default Footer;
