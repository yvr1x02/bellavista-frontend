import React from "react";
import Header from "./header/Header";
import Home from "./home/Home";
import About from "./about/About";
import MyMap from "./Maps/MyMap";
import Prenotazioni from "../Prenotazioni/Prenotazioni";
import { Carousel } from "react-bootstrap";
import CompleteHeader from "./CompleteHeader/CompleteHeader";

const MainComponent = () => {
  return (
    <>
      <CompleteHeader></CompleteHeader>
      <Carousel></Carousel>
      <Home />
      <About />
      <MyMap />
    </>
  );
};

export default MainComponent;
