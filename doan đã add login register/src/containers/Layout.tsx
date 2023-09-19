import * as React from "react";
import { useState, useEffect } from "react";
import "../assets/css/Style.css";
import Headers from "./../pages/Header";

import Login from "./../pages/Login";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Detai from "../pages/Detai";
import Register from "../pages/Register";
import Home from "./Home";
import Bodyheader from "./../pages/Bodyheader";

const Layout = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="detai" element={<Detai />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
};

export default Layout;
