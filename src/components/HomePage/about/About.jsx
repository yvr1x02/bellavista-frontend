import { Card } from "react-bootstrap";
import "./about.css";

const About = () => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src="src\assets\27-Bellavista-75.jpg" className="bellavista-img rounded p-5" />
      </Card>

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
    </>
  );
};

export default About;
