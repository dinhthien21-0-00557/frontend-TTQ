import * as React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import anh10 from "../assets/img/anh10.jpg";
import Logo from "../assets/img/logo.jpg";
const Detai = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const showShoppingcart = (e: any, id: number) => {
    if (e) e.preventDefault();
    navigate(`/shoppingcart/`);
  };
  return (
    <section className="detai">
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
                <Link className="navbar-brand" to="/loginuser">
                  Đăng Nhập
                </Link>
                <span></span>
                <Link className="navbar-brand" to="/registeruser">
                  Đăng Ký
                </Link>
                <span></span>
                <Link className="navbar-brand" to="/shoppingcart">
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
      <div className="container mt-5">
        <div className="row j-b">
          <div className="col img-products-ct">
            <a href="#">
              <img src={anh10} alt="" width={1500} height={1000} />
            </a>
          </div>
          <div className="col products-ct">
            <h5 className="h-detai">
              Bàn phím cơ Numpad LEOBOG K21 RGB 3 Modes, Hotswap 5 chân, Không
              dây.
            </h5>
            <hr className="hr-detai" />
            <span>
              Bàn phím cơ không dây dạng numpad 21 phím LEOBOG K21 RGB.
            </span>
            <span>Số phím: 21 phím.</span>
            <span>LED: RGB có thể tùy chỉnh bằng phần mềm.</span>
            <span>Mạch: Hotswap 5 chân thay đổi switch dễ dàng. </span>
            <span>Vỏ thiết kế trong suốt bằng nhựa PC độc đáo. </span>
            <span>
              Kết nối 3 chế độ: Cáp Type-C, Bluetooth, wireless 2,4Ghz đa dụng
              tiện lợi.
            </span>
            <span>Pin: 600Mah. </span>
            <span>Cáp rời type-c bằng nhựa và được bện xoắn cực đẹp. </span>
            <span>Switch đi kèm là switch Linear của Leobog. </span>
            <span>Keycap nhựa PC trong suốt. </span>
            {/* <div class="select-products">
    <select name="" id="">
      <option value="">Đen led RGB</option>
      <option value="">Trắng led RGB</option>
    </select>
  </div> */}
            <div className="number-products-ct a-i-c">
              <div className="col a-i-c">
                <input type="number" />
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => showShoppingcart(null, 0)}
                >
                  <i className="bi-plus-lg" />
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detai;
