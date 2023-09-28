import * as React from "react";
import { useState, useEffect } from "react";
import "../assets/css/Style.css";
import Headers from "./../pages/Header";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Detai from "../pages/Detai";

import Home from "./Home";
import Bodyheader from "./../pages/Bodyheader";
import Sanpham from "../admin/Sanpham";
import Themsanpham from "./../admin/Themsanpham";
import Thongtindathang from "../admin/Thongtindamua";
import Admin from "../contaiadmin/Admin";
import Mouse from "./../pages/Mouse";
import Bpco from "../pages/Bpco";
import Bpgiaco from "./../pages/Bpgiaco";

import Shoppingcart from "./../pages/Shoppingcart";
import Sanphamdamua from "./../pages/Sanphamdamua";
import EditSanpham from "../admin/Editsanpham";

const Layout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

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
      </Routes>
    </>
  );
};

export default Layout;
