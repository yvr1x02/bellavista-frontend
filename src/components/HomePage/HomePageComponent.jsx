import React from "react";
import Header from "./header/Header";
import Home from "./home/Home";
import About from "./about/About";
import Map from "./Maps/Map";
import "leaflet/dist/leaflet.css";

const MainComponent = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Map></Map>
    </>
  );
};

export default MainComponent;
