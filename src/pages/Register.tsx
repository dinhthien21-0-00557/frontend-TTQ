import * as React from "react";

import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/loginuser`);
  };
  return (
    <>
      <section className="register-bg">
        <div
          style={{ display: "flex", justifyContent: "center", margin: "auto" }}
        >
          <form>
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-md-3 row-containerr">
                  <h1>Đăng ký</h1>
                  <br />
                  <div className="form-group my-2 ">
                    <label htmlFor="taikhoan" className="pb-1">
                      Tài Khoản
                    </label>
                    <input
                      type="taikhoan"
                      className="form-control"
                      id="taikhoan"
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
                  <div className="form-group my-3">
                    <label htmlFor="username" className="pb-1">
                      Tên
                    </label>
                    <input
                      type="username"
                      className="form-control"
                      id="username"
                      placeholder="nhập họ và tên"
                    />
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="sodienthoai" className="pb-1">
                      Số Điện Thoại
                    </label>
                    <input
                      type="sodienthoai"
                      className="form-control"
                      id="sodienthoai"
                      placeholder="nhập số điện thoại"
                    />
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="diachi" className="pb-1">
                      Địa chỉ
                    </label>
                    <input
                      type="diachi"
                      className="form-control"
                      id="diachi"
                      placeholder="nhập địa chỉ"
                    />
                  </div>
                  <div className=" pt-4">
                    <div className="row text-dark text-center my-2">
                      <div className="col pt-3">
                        <span className="text-white">Đã có tài khoản </span>
                        <a>
                          <Link
                            className="navbar-brand text-danger"
                            to="/loginuser"
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
                          onClick={handleClick}
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

export default Register;
