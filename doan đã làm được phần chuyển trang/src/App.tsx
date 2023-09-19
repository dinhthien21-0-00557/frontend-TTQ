import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./containers/Layout";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/user" element={<Layout />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
