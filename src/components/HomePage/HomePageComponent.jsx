import React from "react";
import Header from "./header/Header";
import Home from "./home/Home";
import About from "./about/About";
import MyMap from "./Maps/MyMap";
import Prenotazioni from "../Prenotazioni/Prenotazioni";

const MainComponent = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <MyMap />
      <Prenotazioni></Prenotazioni>
    </>
  );
};

export default MainComponent;
