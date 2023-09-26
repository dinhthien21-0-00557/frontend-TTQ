import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import anime from "../assets/img/anime.jpg";
import Header from "../pages/Header";
import Bodyheader from "./../pages/Bodyheader";
import Menu from "./../pages/Menu";
import Footercard from "./../pages/Footercard";

const Shoppingcart = () => {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  const showShopping = (e: any, id: number) => {
    if (e) e.preventDefault();
    navigate(`/shopping/`);
  };
  return (
    <>
      <Header />
      <Bodyheader />
      <Menu />
      <section className="card-bg">
        <div className="container">
          <div className="row header-card j-b-c-t">
            <div className="col card-headline">
              <h3>SHONGPING CARD !!!!!!!!!!!!!!!!!!!</h3>
            </div>
          </div>
          <div className="d-flex a-i-s">
            <div className="fill-table">
              <table className="table">
                <thead>
                  <tr className="menu-card">
                    <th>Sản Phẩm</th>
                    <th>Đơn Giá</th>
                    <th>Số Lượng</th>
                    <th>Thành tiền</th>
                    <th>&nbsp;&nbsp;&nbsp;&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="table-img-card">
                      <span className="card-title-img">
                        <img src={anime} width={50} height={50} alt="" />
                      </span>
                      <span> Bần phím cơ ngon bổ rẻ </span>
                    </td>
                    <td>120.000</td>
                    <td>
                      <input className="input-card" type="number" />
                    </td>
                    <td>0000000</td>
                    <td>
                      <a href="#">
                        <i
                          className="fa-solid fa-trash-can"
                          style={{ color: "#d53434" }}
                        >
                          {" "}
                        </i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="table-img-card">
                      <span className="card-title-img">
                        <img src={anime} width={50} height={50} alt="" />
                      </span>
                      <span> Bần phím cơ ngon bổ rẻ </span>
                    </td>
                    <td>120.000</td>
                    <td>
                      <input className="input-card" type="number" />
                    </td>
                    <td>0000000</td>
                    <td>
                      <a href="#">
                        <i
                          className="fa-solid fa-trash-can"
                          style={{ color: "#d53434" }}
                        >
                          {" "}
                        </i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="table-img-card">
                      <span className="card-title-img">
                        <img src={anime} width={50} height={50} alt="" />
                      </span>
                      <span> Bần phím cơ ngon bổ rẻ </span>
                    </td>
                    <td>120.000</td>
                    <td>
                      <input className="input-card" type="number" />
                    </td>
                    <td>0000000</td>
                    <td>
                      <a href="#">
                        <i
                          className="fa-solid fa-trash-can"
                          style={{ color: "#d53434" }}
                        >
                          {" "}
                        </i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="form-thanhtoan">
              <div className="number-product">
                <span> Tổng Số Sản Phẩm: </span>
              </div>
              <div className="into-amount">
                <span> Thành Tiền: </span>
              </div>
              <div>
                <button
                  type="button"
                  className="button-amount"
                  onClick={() => showShopping(null, 0)}
                >
                  <i className="bi-plus-lg" /> Thanh toán
                </button>
              </div>

              <div>
                <button
                  type="button"
                  className="button-back"
                  onClick={handleBack}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footercard />
    </>
  );
};

export default Shoppingcart;
