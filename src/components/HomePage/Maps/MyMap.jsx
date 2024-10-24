import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// URL pubblico dell'icona standard di Leaflet
const customIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
});

function MyMapPage() {
  const position = [37.26205143489334, 15.232433199658846]; // Posizione della mappa

  return (
    <Container>
      {/* Layout a due colonne */}
      <Row>
        {/* Colonna sinistra - informazioni generali */}
        <Col md={6}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Contattaci</Card.Title>
              <Card.Text>
                Questa è una casa vacanze situata in una bellissima posizione vicino al mare. Perfetta per una fuga estiva o un
                soggiorno rilassante.
              </Card.Text>
              <Card.Text>
                <strong>Indirizzo:</strong> Via Grazia Deledda, 5, Augusta, Italia
              </Card.Text>
              <Card.Text>
                <strong>Telefono:</strong> +393332613191
              </Card.Text>
              <Card.Text>
                <strong>Email:</strong> roomsbellavista@gmail.com
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Colonna destra - mappa */}
        <Col md={6}>
          <MapContainer center={position} zoom={13} style={{ height: "400px", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} icon={customIcon}>
              <Popup>Questo è il punto pingato!</Popup>
            </Marker>
          </MapContainer>
        </Col>
      </Row>
    </Container>
  );
}

export default MyMapPage;
