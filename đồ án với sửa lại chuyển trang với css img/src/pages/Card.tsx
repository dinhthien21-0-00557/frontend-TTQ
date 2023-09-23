import * as React from "react";
import { useState, useEffect } from "react";

import anime from "../assets/img/anime.jpg";

const Card = () => {
  return (
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
            <div className="button-amount">
              <a href="#">Thanh Toán</a>
            </div>

            <div className="button-back">
              <a href="#">back</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
