// import * as React from "react";
import { useState, useEffect } from "react";
import React from "react";
import Logo from "../assets/img/LOGO1.png";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

const Bodyheader = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <section className="color-header2">
      <div className="container">
        <div className="row">
          <div className="col">
            <button
              type="button"
              className="btn btn-#54535300 me-1"
              onClick={handleBack}
            >
              <img src={Logo} alt="" width={300} height={80} />
            </button>
          </div>
          <div className="col-flex">
            <span className="form-input">
              <span className="input-header">
                <input type="text" placeholder="Tìm kiếm" />
              </span>
              <a href="#" className="search">
                <i className="fa-solid fa-magnifying-glass" />
              </a>
            </span>
            <div className="col pad-header">
              <Link className="navbar-brand" to="/shoppingcart">
                Giỏ Hàng
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bodyheader;
