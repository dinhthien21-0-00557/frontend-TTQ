import * as React from "react";
import { useState, useEffect } from "react";
import Header from "../pages/Header";
import Bodyheader from "./../pages/Bodyheader";
import Menu from "./../pages/Menu";
import Slider from "./../pages/Slider";
import Footercard from "./../pages/Footercard";
import Directory from "./../pages/Directory";
const Home = () => {
  return (
    <>
      <Header />
      <Bodyheader />
      <Directory />
      <Menu />
      <Slider />
      <Footercard />
    </>
  );
};

export default Home;
