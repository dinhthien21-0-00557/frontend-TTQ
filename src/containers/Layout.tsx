import * as React from "react";
import { useState, useEffect } from "react";
import "../assets/css/Style.css";
import Bodyheader from "./../pages/Bodyheader";
import Headers from "./../pages/Header";
import Menu from "../pages/Menu";
import Slider from "../pages/Slider";
import Directory from "./../pages/Directory";
import Footercard from "../pages/Footercard";
import Detai from "../source/Directory-detai";

const Layout = () => {
  return (
    <>
      <Headers />
      <Bodyheader />
      <Menu />
      <Slider />
      <Directory />
      <Footercard />
      <Detai />
    </>
  );
};

export default Layout;
