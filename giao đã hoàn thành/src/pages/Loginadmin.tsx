import * as React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
const Loginadmin = () => {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  const showAdmin = (e: any, id: number) => {
    if (e) e.preventDefault();
    navigate(`/sanpham/`);
  };

  return (
    <>
      <section className="loginadmin-bg">
        <div>
          <form>
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-md-3 row-container">
                  <h1 style={{ fontFamily: "unset" }}>
                    Đăng nhập tài khoản Admin
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
                  <div className="row">
                    <input type="checkbox" id="myCheckbox" />
                    <label htmlFor="myCheckbox">Ghi nhớ mật khẩu</label>
                  </div>
                  <div className=" pt-4">
                    <div className="row text-dark text-center my-2">
                      <div className="col pt-3">
                        <span className="text-white">Chưa có tài khoản </span>
                        <a>
                          <Link
                            className="navbar-brand text-danger"
                            to="/registeradmin"
                          >
                            Đăng ký ngay
                          </Link>
                        </a>
                      </div>
                      <div className="col ">
                        {" "}
                        <button
                          type="submit"
                          className="btn btn-success my-2"
                          style={{ width: "100%" }}
                          onClick={() => showAdmin(null, 0)}
                        >
                          ĐĂNG NHẬP
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

export default Loginadmin;
