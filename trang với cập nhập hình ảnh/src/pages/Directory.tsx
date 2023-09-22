import * as React from "react";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import chuot1 from "../assets/img/chuot1.jpg";

import banphim2 from "../assets/img/banphim2.jpg";

import chuot2 from "../assets/img/chuot2.jpg";

import phimgiaco1 from "../assets/img/phimgiaco1.jpg";

import banphim3 from "../assets/img/banphim3.jpg";

import phimgiaco2 from "../assets/img/phimgiaco2.jpg";

import chuot3 from "../assets/img/chuot3.jpg";

import banphim4 from "../assets/img/banphim4.jpg";

const Directory = () => {
  const navigate = useNavigate();

  const showDetai = (e: any, id: number) => {
    if (e) e.preventDefault();
    navigate(`/detai/`);
  };

  return (
    <section className="directory-color">
      <div className="container">
        <div className="headdline">
          <h3>Sản Phẩm Nổi Bật</h3>
        </div>
        <div className="product-form row j-b-c-t">
          <div className="l-4 product-items col ">
            <div className="img-product-items">
              <img src={chuot1} alt="" width={320} height={346} />
              <div className="product-items-body">
                <div className="">
                  <span className="title-product-items"> Chuột </span>
                  <span className="comments-product-items">
                    Chuột Gaming ZIDLI M86 Thiết Kế Lưới, LED RGB , Siêu Nhẹ
                    69G, Công Thái Học, 16000 DPI, Có Phần Mềm.
                  </span>
                  <span className="price-product-items d-l-b"> 299.000 ₫ </span>
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
              <img src={banphim2} alt="" width={320} height={346} />
              <div className="product-items-body">
                <div className="">
                  <span className="title-product-items"> Bàn Phím </span>
                  <span className="comments-product-items">
                    Bàn Phím Cơ Không Dây 3 Modes Attack Shark K75 Pro, LED RGB,
                    Hotswap 5 Chân, Keycap Trong Suốt, Núm Xoay.
                  </span>
                  <span className="price-product-items d-l-b">
                    {" "}
                    1.100.000 ₫{" "}
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
              <img src={chuot2} alt="" width={320} height={346} />
              <div className="product-items-body">
                <div className="#">
                  <span className="title-product-items"> Chuột </span>
                  <span className="comments-product-items">
                    Chuột Gaming ZIDLI M85, LED RGB , Siêu Nhẹ 69G, Công Thái
                    Học, 16000 DPI, Có Phần Mềm.
                  </span>
                  <span className="price-product-items d-l-b"> 299.000 ₫</span>
                  <div>
                    <a href="#"> xem ngay </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="l-4 product-items col ">
            <div className="img-product-items">
              <img src={phimgiaco1} alt="" width={320} height={346} />
              <div className="product-items-body">
                <div className="#">
                  <span className="title-product-items"> Bàn Phím Giả Cơ </span>
                  <span className="comments-product-items">
                    Bàn phím giả cơ V700 RGB Layout 60% Phím Trong Suốt
                  </span>
                  <span className="price-product-items d-l-b"> 369.000 ₫ </span>
                  <div>
                    <a href=""> xem ngay </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="l-4 product-items col ">
            <div className="img-product-items">
              <img src={banphim3} alt="" width={320} height={346} />
              <div className="product-items-body">
                <div className="#">
                  <span className="title-product-items"> Bàn Phím </span>
                  <span className="comments-product-items">
                    Bàn Phím Cơ Attack Shark K86 RGB, 3 Modes , Có màn Hình, Núm
                    Vặn, Hot Swap 5 Chân.
                  </span>
                  <span className="price-product-items d-l-b">
                    {" "}
                    1.100.000 ₫{" "}
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
              <img src={phimgiaco2} alt="" width={320} height={346} />
              <div className="product-items-body">
                <div className="#">
                  <span className="title-product-items"> Bàn Phím </span>
                  <span className="comments-product-items">
                    Bàn Phím Giả Cơ Gaming V600 LED RGB 7 Chế Độ LED, Layout 98
                  </span>
                  <span className="price-product-items d-l-b"> 349.000 ₫ </span>
                  <div>
                    <a href=""> xem ngay </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="l-4 product-items col ">
            <div className="img-product-items">
              <img src={chuot3} alt="" width={320} height={346} />
              <div className="product-items-body">
                <div className="#">
                  <span className="title-product-items"> Chuột </span>
                  <span className="comments-product-items">
                    Chuột Gaming Không Dây Attack Shark X2 PRO, 3 Mode:
                    Bluetooth, 2.4G, RGB Pro
                  </span>
                  <span className="price-product-items d-l-b"> 499.000 ₫</span>
                  <div>
                    <a href=""> xem ngay </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="l-4 product-items col ">
            <div className="img-product-items">
              <img src={banphim4} alt="" width={320} height={346} />
              <div className="product-items-body">
                <div className="#">
                  <span className="title-product-items"> Bàn Phím </span>
                  <span className="comments-product-items">
                    Bàn Phím Giả Cơ Gaming L200 LED RGB 6 Chế Độ LED, Fullsize,
                    Keycap Pudding cực đẹp!
                  </span>
                  <span className="price-product-items d-l-b">
                    {" "}
                    349.000 ₫ – 359.000 ₫{" "}
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
  );
};

export default Directory;
