import React from "react";
import "./serviceList.css";

function ServicesList() {
  const services = [
    "Aria condizionata",
    "Internet LAN - WI-FI",
    "TV",
    "Cucina interna",
    "Cucina esterna",
    "Lavastoviglie",
    "Forno",
    "Bollitore",
    "Frigo e freezer",
    "Macchina del caffè",
    "Asciugacapelli",
    "Asse da stiro e ferro da stiro",
    "Kit cucito",
    "Barbecue",
    "Zanzariere",
    "Kit pronto soccorso",
    "Estintore",
    "Rilevatore di fumo e monossido di carbonio",
    "Parcheggio",
    "Tavolo da Ping Pong",
    "Accesso privato al mare",
  ];

  return (
    <div className="services-container">
      {services.map((service, index) => (
        <div key={index} className="service-item">
          {service}
        </div>
      ))}
    </div>
  );
}

export default ServicesList;
