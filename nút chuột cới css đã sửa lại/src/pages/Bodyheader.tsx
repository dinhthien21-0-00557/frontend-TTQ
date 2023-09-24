// import * as React from "react";
import { useState, useEffect } from "react";
import React from "react";
import Logo from "../assets/img/LOGO1.png";
import { Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

const Bodyheader = () => {
  return (
    <section className="color-header2">
      <div className="container">
        <div className="row">
          <div className="col">
            <a className="img-home" href="#">
              <img src={Logo} alt="" width={300} height={80} />
            </a>
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
              <Link className="navbar-brand" to="/loginuser">
                Đăng Nhập
              </Link>
              <span>|</span>
              <Link className="navbar-brand" to="./registeruser">
                Đăng Ký
              </Link>
              <span>|</span>
              <Link className="navbar-brand" to="./shoppingcart/">
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
