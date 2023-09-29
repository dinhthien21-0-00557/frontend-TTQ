import * as React from "react";

import "../assets/css/Style.css";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Detai from "../pages/Detai";

import Home from "./Home";

import Sanpham from "../admin/Sanpham";
import Themsanpham from "./../admin/Themsanpham";
import Thongtindathang from "../admin/Thongtindamua";

import Mouse from "./../pages/Mouse";
import Bpco from "../pages/Bpco";
import Bpgiaco from "./../pages/Bpgiaco";

import Shoppingcart from "./../pages/Shoppingcart";
import Sanphamdamua from "./../pages/Sanphamdamua";
import EditSanpham from "../admin/Editsanpham";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import Sanphamhome from "../pages/Sanphamhome";

const Layout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="loginuser" element={<Login />} />
        <Route path="registeruser" element={<Register />} />
        <Route path="detai/:id" element={<Detai />} />
        <Route path="sanpham" element={<Sanpham />} />
        <Route path="themsanpham" element={<Themsanpham />} />
        <Route path="thongtindathang" element={<Thongtindathang />} />
        <Route path="admin" element={<Sanpham />} />
        <Route path="mouse" element={<Mouse />} />
        <Route path="keyco" element={<Bpco />} />
        <Route path="keygiaco" element={<Bpgiaco />} />
        <Route path="shoppingcart" element={<Shoppingcart />} />
        <Route path="shopping" element={<Sanphamdamua />} />
        <Route path="/editsanpham/:id" element={<EditSanpham />} />
        <Route path="sanphamhome" element={<Sanphamhome />} />
      </Routes>
    </>
  );
};

export default Layout;
