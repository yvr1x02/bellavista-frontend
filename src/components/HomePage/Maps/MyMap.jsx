import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Weather from "./Weather";

const customIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
});

function MyMapPage() {
  const position = [37.26211399775372, 15.232437346380372];
  return (
    <Container>
      {/* Layout a due colonne */}
      <Row>
        {/* Colonna sinistra - meteo */}
        <Col md={6}>
          <Weather></Weather>
        </Col>

        {/* Colonna destra - mappa */}
        <Col md={6}>
          <MapContainer center={position} zoom={15} style={{ height: "400px", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} icon={customIcon}>
              <Popup>Bella Vista</Popup>
            </Marker>
          </MapContainer>
        </Col>
      </Row>
    </Container>
  );
}

export default MyMapPage;
