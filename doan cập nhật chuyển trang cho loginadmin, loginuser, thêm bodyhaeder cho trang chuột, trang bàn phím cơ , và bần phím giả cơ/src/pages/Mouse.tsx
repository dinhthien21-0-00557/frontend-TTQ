import * as React from "react";
import { useState, useEffect } from "react";
import project1 from "../assets/img/project1.png";
import { Link, NavLink, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Detai from "./Detai";
import Logo from "../assets/img/logo.jpg";
const Mouse = () => {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  const showDetai = (e: any, id: number) => {
    if (e) e.preventDefault();
    navigate(`/detai/`);
  };
  return (
    <>
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
                <Link className="navbar-brand" to="./loginuser">
                  Đăng Nhập
                </Link>
                <span>|</span>
                <Link className="navbar-brand" to="./registeruser">
                  Đăng Ký
                </Link>
                <span>|</span>
                <Link className="navbar-brand" to="./shoppingcart">
                  Giỏ Hàng
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="menu-headeer-cl">
        <div className="container">
          <nav>
            <ul className="menu-header row  a-i-c">
              <li>
                <a className="t-x menu-margin" href="#">
                  BÀN PHÍM <i className="fa-solid fa-caret-down" />
                </a>
                <ul className="menu-list">
                  <li>
                    <NavLink className="nav-link" to="/keygiaco">
                      BÀN PHÍM GIẢ CƠ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/keyco">
                      BÀN PHÍM CƠ
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink className="nav-link" to="/mouse">
                  CHUỘT GAMING
                </NavLink>
              </li>
              <li>
                <a className="t-x menu-margin" href="#">
                  TAI NGHE
                </a>
              </li>
              <li>
                <a className="t-x menu-margin" href="#">
                  KEYCAPS
                </a>
              </li>
              <li>
                <a className="t-x menu-margin" href="#">
                  PHỤ KIỆN
                </a>
              </li>
              <li>
                <a className="t-x menu-margin" href="#">
                  BÀN GHẾ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      <section className="directory-color">
        <div className="container">
          <div className="headdline">
            <h3>Chuột Gaming</h3>
          </div>
          <div className="product-form row j-b-c-t">
            <div className="l-4 product-items col ">
              <div className="img-product-items">
                <img src={project1} alt="" width={320} height={346} />
                <div className="product-items-body">
                  <div className="">
                    <span className="title-product-items"> Bàn Phím </span>
                    <span className="comments-product-items">
                      Kit Custom Phím Cơ ZT84 LED RGB, 3 Modes, Hotswap 5 chân,
                      Full Sidivcone
                    </span>
                    <span className="price-product-items d-l-b">
                      {" "}
                      999.000 ₫{" "}
                    </span>
                    <div>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => showDetai(null, 0)}
                      >
                        <i className="bi-plus-lg" /> Xem Ngay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="l-4 product-items col ">
              <div className="img-product-items">
                <img src={project1} alt="" width={320} height={346} />
                <div className="product-items-body">
                  <div className="">
                    <span className="title-product-items"> Bàn Phím </span>
                    <span className="comments-product-items">
                      Kit Custom Phím Cơ ZT84 LED RGB, 3 Modes, Hotswap 5 chân,
                      Full Sidivcone
                    </span>
                    <span className="price-product-items d-l-b">
                      {" "}
                      999.000 ₫{" "}
                    </span>
                    <div>
                      <a href="#"> xem ngay </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="l-4 product-items col ">
              <div className="img-product-items">
                <img src={project1} alt="" width={320} height={346} />
                <div className="product-items-body">
                  <div className="#">
                    <span className="title-product-items"> Bàn Phím </span>
                    <span className="comments-product-items">
                      Kit Custom Phím Cơ ZT84 LED RGB, 3 Modes, Hotswap 5 chân,
                      Full Sidivcone
                    </span>
                    <span className="price-product-items d-l-b">
                      {" "}
                      999.000 ₫{" "}
                    </span>
                    <div>
                      <a href="#"> xem ngay </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="l-4 product-items col ">
              <div className="img-product-items">
                <img src={project1} alt="" width={320} height={346} />
                <div className="product-items-body">
                  <div className="#">
                    <span className="title-product-items"> Bàn Phím </span>
                    <span className="comments-product-items">
                      Kit Custom Phím Cơ ZT84 LED RGB, 3 Modes, Hotswap 5 chân,
                      Full Sidivcone
                    </span>
                    <span className="price-product-items d-l-b">
                      {" "}
                      999.000 ₫{" "}
                    </span>
                    <div>
                      <a href=""> xem ngay </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="l-4 product-items col ">
              <div className="img-product-items">
                <img src={project1} alt="" width={320} height={346} />
                <div className="product-items-body">
                  <div className="#">
                    <span className="title-product-items"> Bàn Phím </span>
                    <span className="comments-product-items">
                      Kit Custom Phím Cơ ZT84 LED RGB, 3 Modes, Hotswap 5 chân,
                      Full Sidivcone
                    </span>
                    <span className="price-product-items d-l-b">
                      {" "}
                      999.000 ₫{" "}
                    </span>
                    <div>
                      <a href=""> xem ngay </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="l-4 product-items col ">
              <div className="img-product-items">
                <img src={project1} alt="" width={320} height={346} />
                <div className="product-items-body">
                  <div className="#">
                    <span className="title-product-items"> Bàn Phím </span>
                    <span className="comments-product-items">
                      Kit Custom Phím Cơ ZT84 LED RGB, 3 Modes, Hotswap 5 chân,
                      Full Sidivcone
                    </span>
                    <span className="price-product-items d-l-b">
                      {" "}
                      999.000 ₫{" "}
                    </span>
                    <div>
                      <a href=""> xem ngay </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="l-4 product-items col ">
              <div className="img-product-items">
                <img src={project1} alt="" width={320} height={346} />
                <div className="product-items-body">
                  <div className="#">
                    <span className="title-product-items"> Bàn Phím </span>
                    <span className="comments-product-items">
                      Kit Custom Phím Cơ ZT84 LED RGB, 3 Modes, Hotswap 5 chân,
                      Full Sidivcone
                    </span>
                    <span className="price-product-items d-l-b">
                      {" "}
                      999.000 ₫{" "}
                    </span>
                    <div>
                      <a href=""> xem ngay </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="l-4 product-items col ">
              <div className="img-product-items">
                <img src={project1} alt="" width={320} height={346} />
                <div className="product-items-body">
                  <div className="#">
                    <span className="title-product-items"> Bàn Phím </span>
                    <span className="comments-product-items">
                      Kit Custom Phím Cơ ZT84 LED RGB, 3 Modes, Hotswap 5 chân,
                      Full Sidivcone
                    </span>
                    <span className="price-product-items d-l-b">
                      {" "}
                      999.000 ₫{" "}
                    </span>
                    <div>
                      <a href=""> xem ngay </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="l-4 product-items col ">
              <div className="img-product-items">
                <img src={project1} alt="" width={320} height={346} />
                <div className="product-items-body">
                  <div className="#">
                    <span className="title-product-items"> Bàn Phím </span>
                    <span className="comments-product-items">
                      Kit Custom Phím Cơ ZT84 LED RGB, 3 Modes, Hotswap 5 chân,
                      Full Sidivcone
                    </span>
                    <span className="price-product-items d-l-b">
                      {" "}
                      999.000 ₫{" "}
                    </span>
                    <div>
                      <a href=""> xem ngay </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="l-4 product-items col ">
              <div className="img-product-items">
                <img src={project1} alt="" width={320} height={346} />
                <div className="product-items-body">
                  <div className="#">
                    <span className="title-product-items"> Bàn Phím </span>
                    <span className="comments-product-items">
                      Kit Custom Phím Cơ ZT84 LED RGB, 3 Modes, Hotswap 5 chân,
                      Full Sidivcone
                    </span>
                    <span className="price-product-items d-l-b">
                      {" "}
                      999.000 ₫{" "}
                    </span>
                    <div>
                      <a href=""> xem ngay </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="l-4 product-items col ">
              <div className="img-product-items">
                <img src={project1} alt="" width={320} height={346} />
                <div className="product-items-body">
                  <div className="#">
                    <span className="title-product-items"> Bàn Phím </span>
                    <span className="comments-product-items">
                      Kit Custom Phím Cơ ZT84 LED RGB, 3 Modes, Hotswap 5 chân,
                      Full Sidivcone
                    </span>
                    <span className="price-product-items d-l-b">
                      {" "}
                      999.000 ₫{" "}
                    </span>
                    <div>
                      <a href=""> xem ngay </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="l-4 product-items col ">
              <div className="img-product-items">
                <img src={project1} alt="" width={320} height={346} />
                <div className="product-items-body">
                  <div className="#">
                    <span className="title-product-items"> Bàn Phím </span>
                    <span className="comments-product-items">
                      Kit Custom Phím Cơ ZT84 LED RGB, 3 Modes, Hotswap 5 chân,
                      Full Sidivcone
                    </span>
                    <span className="price-product-items d-l-b">
                      {" "}
                      999.000 ₫{" "}
                    </span>
                    <div>
                      <a href=""> xem ngay </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mouse;
