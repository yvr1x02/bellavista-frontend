import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = "ad5701b9283cb56236a8aa875b2c7552";
  const city = "Augusta,IT";

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=it`)
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error("Errore nel recupero dei dati meteo:", error));
  }, []);

  return (
    <Card className="display-flex justify-content-center mb-3">
      <Card.Body className="text-center">
        <Card.Title>Meteo a Augusta</Card.Title>
        <hr />
        {weatherData ? (
          <>
            <Card.Text>Temperatura: {weatherData.main.temp}°C</Card.Text>
            <Card.Text>Condizioni: {weatherData.weather[0].description}</Card.Text>
            <Card.Text>Umidità: {weatherData.main.humidity}%</Card.Text>
            <Card.Text>Vento: {weatherData.wind.speed} m/s</Card.Text>
            <hr />
            <Row className="mt-3">
              <Col xs={6} className="text-center">
                <i className="fas fa-sun fs-1"></i>
                <Card.Text>
                  Alba:{" "}
                  {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" })}
                </Card.Text>
              </Col>
              <Col xs={6} className="text-center">
                <i className="fas fa-moon fs-1"></i>
                <Card.Text>
                  Tramonto:{" "}
                  {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" })}
                </Card.Text>
              </Col>
            </Row>
          </>
        ) : (
          <Card.Text>Caricamento meteo...</Card.Text>
        )}
      </Card.Body>
    </Card>
  );
};

export default Weather;
