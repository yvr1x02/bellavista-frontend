import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Sunrise, Sunset } from "react-bootstrap-icons";

const ConvertInCelsius = (kelvin) => {
  return Math.floor(kelvin - 273.15);
};

const MyStats = ({ defaultCity }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const API_KEY = "ad5701b9283cb56236a8aa875b2c7552";

  const unixToTime = (unix) => {
    const date = new Date(unix * 1000);
    return date.toLocaleTimeString([], { hour: "numeric", minute: "numeric" });
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${API_KEY}`);
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setWeatherData({
          cityName: data.name,
          temperature: ConvertInCelsius(data.main.temp),
          weatherIcon: data.weather[0].icon,
          description: data.weather[0].description,
          minTemperature: ConvertInCelsius(data.main.temp_min),
          maxTemperature: ConvertInCelsius(data.main.temp_max),
          pressure: data.main.pressure,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          sunrise: unixToTime(data.sys.sunrise),
          sunset: unixToTime(data.sys.sunset),
        });
      } catch (error) {
        setError(error.message);
        console.error("Error fetching weather data:", error.message);
      }
    };

    fetchWeatherData();
  }, [defaultCity]);

  return (
    <>
      <div className="stats border border-1px solid black rounded">
        <h1 className="text-center">Benvenuto!</h1>
        <hr />
        {error && <p>{error}</p>}
        {weatherData && (
          <Row>
            <Col xs={12} md={4} lg={6} className="text-center">
              <img
                src={`http://openweathermap.org/img/w/${weatherData.weatherIcon}.png`}
                alt="Weather Icon"
                className="weather-icon"
                style={{ width: "20%", height: "auto" }}
              />
              <p className="weather-description">{weatherData.description}</p>
            </Col>
            <Col xs={12} md={8} lg={6} className="text-center">
              <h1>{weatherData.cityName}</h1>
              <h2>{weatherData.temperature} °C</h2>
              <p>
                Min: {weatherData.minTemperature} °C | Max: {weatherData.maxTemperature} °C
              </p>
            </Col>
          </Row>
        )}
      </div>
      {weatherData && (
        <div className="stats border border-1px solid black rounded mt-2">
          <Row>
            <Col xs={12} md={4} lg={4} className="text-center">
              <div>
                <h3>Vento:</h3>
                <h3>{weatherData.windSpeed} m/s</h3>
              </div>
            </Col>
            <Col xs={12} md={4} lg={4} className="text-center">
              <div>
                <h3>Umidità:</h3>
                <h3>{weatherData.humidity} %</h3>
              </div>
            </Col>
            <Col xs={12} md={4} lg={4} className="text-center">
              <div>
                <h3>Pressione:</h3>
                <h3>{weatherData.pressure} Pa</h3>
              </div>
            </Col>
          </Row>
        </div>
      )}
      {weatherData && (
        <div className="stats border border-1px solid black rounded mt-2">
          <Row>
            <Col xs={12} md={6} lg={6} className="text-center my-3">
              <h1>
                <Sunrise className="fs-1"></Sunrise>
              </h1>
              <div>
                <h3>Sunrise: {weatherData.sunrise}</h3>
              </div>
            </Col>
            <Col xs={12} md={6} lg={6} className="text-center my-3">
              <h1>
                <Sunset className="fs-1"></Sunset>
              </h1>
              <div>
                <h3>Sunset: {weatherData.sunset}</h3>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};

export default MyStats;
