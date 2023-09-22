import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Registeradmin = () => {
  return (
    <>
      <section>
        <style>
          {`
  html, body {
    margin: auto;
    width: 50%;
    height: 50%;
    font-family: 'Raleway';
  }

  .row-container {
    border: 2px solid aliceblue;
    border-radius: 20px;
    margin-top: 20vh;
    padding: 30px;
    -webkit-box-shadow: 14px 30px 51px 8px rgba(0,0,0,0.75);
    -moz-box-shadow: 14px 30px 51px 8px rgba(0,0,0,0.75);
    box-shadow: 14px 30px 51px 8px rgba(0,0,0,0.75);
  }

  label, .form-check-lable, h1 {
    color: black;
  }
`}
        </style>
        <div
          style={{ display: "flex", justifyContent: "center", margin: "auto" }}
        >
          <form
            style={{
              backgroundImage: "url(images/12345.jpg)",
              width: "100%",
              height: "100%",
            }}
          >
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-md-3 row-container">
                  <h1 style={{ fontFamily: "unset" }}>
                    Đăng ký tài khoản Admin
                  </h1>
                  <br />
                  <div className="form-group my-3 ">
                    <label htmlFor="email" className="pb-1">
                      Tài Khoản
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Nhập tài khoản"
                    />
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="password" className="pb-1">
                      Mật Khẩu
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Nhập Mật khẩu"
                    />
                  </div>
                  <div className="container pt-4">
                    <div className="row text-dark text-center my-2">
                      <div className="col pt-3">
                        <span>Chưa có tài khoản</span>
                        <a>
                          <Link
                            className="navbar-brand text-danger"
                            to="/loginadmin"
                          >
                            Đăng Nhập Ngay
                          </Link>
                        </a>
                      </div>
                      <div className="col ">
                        {" "}
                        <button
                          type="submit"
                          className="btn btn-success my-2"
                          style={{ width: "100%" }}
                        >
                          ĐĂNG KÝ
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Registeradmin;
