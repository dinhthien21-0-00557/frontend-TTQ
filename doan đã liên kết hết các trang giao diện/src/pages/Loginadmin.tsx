import * as React from "react";
import { useState, useEffect } from "react";
const Loginadmin = () => {
  return (
    <>
      <section>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    html, body{\n   margin-left:70% ;   width: 50%;\n      height: 50%;\n      font-family: 'Raleway';\n    }\n    .row-container{\n      border: 2px solid aliceblue;\n      border-radius: 20px; \n      margin-top: 20vh; \n      padding: 30px;\n      -webkit-box-shadow: 14px 30px 51px 8px rgba(0,0,0,0.75);\n      -moz-box-shadow: 14px 30px 51px 8px rgba(0,0,0,0.75);\n      box-shadow: 14px 30px 51px 8px rgba(0,0,0,0.75);\n    }\n    label, .form-check-lable, h1{\n      color: white;\n      text-shadow: 2px 2px 10px black;\n    }\n  \n  ",
          }}
        />
        <div className="justify-content-center align-items-center">
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
                  <h1>Log in</h1>
                  <br />
                  <div className="form-group my-3">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email/Tên Đăng Nhập/Số Điện Thoại"
                    />
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="password"
                    />
                  </div>
                  <div className="form-check my-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberMe"
                    />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Check me out
                    </label>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-12 g-md-2">
                        <button
                          type="submit"
                          className="btn btn-success my-2"
                          style={{ width: "100%" }}
                        >
                          Login
                        </button>
                        <div className="col text-light text-center my-2">
                          <span> Bạn Biết đến trang của chúng tối thế nào</span>
                          <a
                            className="text-danger"
                            href="http://127.0.0.1:5500/BAIKT/%C4%91%C4%83ngk%C3%BDt%C3%A0ikho%E1%BA%A3n.html"
                          >
                            {" "}
                            RGISTER
                          </a>
                        </div>
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

export default Loginadmin;
