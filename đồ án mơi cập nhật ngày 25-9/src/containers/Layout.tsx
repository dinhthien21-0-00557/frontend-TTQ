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
import Sanpham from "../admin/Sanpham";
import Themsanpham from "./../admin/Themsanpham";
import Thongtindathang from "./../admin/Thongtindathang";
import Admin from "../contaiadmin/Admin";
import Mouse from "./../pages/Mouse";
import Bpco from "../pages/Bpco";
import Bpgiaco from "./../pages/Bpgiaco";
import Loginadmin from "./../pages/Loginadmin";
import Registeradmin from "./../pages/Registeradmin";
import Shoppingcart from "./../pages/Shoppingcart";
import Sanphamdamua from "./../pages/Sanphamdamua";

const Layout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="loginuser" element={<Login />} />
        <Route path="registeruser" element={<Register />} />
        <Route path="loginadmin" element={<Loginadmin />} />
        <Route path="registeradmin" element={<Registeradmin />} />
        <Route path="detai" element={<Detai />} />
        <Route path="sanpham" element={<Sanpham />} />
        <Route path="themsanpham" element={<Themsanpham />} />
        <Route path="thongtindathang" element={<Thongtindathang />} />
        <Route path="admin" element={<Loginadmin />} />
        <Route path="mouse" element={<Mouse />} />
        <Route path="keyco" element={<Bpco />} />
        <Route path="keygiaco" element={<Bpgiaco />} />
        <Route path="shoppingcart" element={<Shoppingcart />} />
        <Route path="shopping" element={<Sanphamdamua />} />
      </Routes>
    </>
  );
};

export default Layout;
