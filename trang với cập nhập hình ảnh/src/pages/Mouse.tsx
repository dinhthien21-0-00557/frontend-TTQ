import * as React from "react";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Detai from "./Detai";

import chuot1 from "../assets/img/chuot1.jpg";
import chuot2 from "../assets/img/chuot2.jpg";
import chuot3 from "../assets/img/chuot3.jpg";
import chuot4 from "../assets/img/chuot4.jpg";
import chuot5 from "../assets/img/chuot5.png";
import chuot6 from "../assets/img/chuot6.jpg";
import chuot7 from "../assets/img/chuot7.jpg";
import chuot8 from "../assets/img/chuot8.jpg";
import chuot9 from "../assets/img/chuot9.jpg";
import chuot10 from "../assets/img/chuot10.jpg";
import chuot11 from "../assets/img/chuot11.jpg";
import chuot12 from "../assets/img/chuot12.jpg";

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
    <section className="directory-color">
      <div className="container">
        <button
          type="button"
          className="btn btn-danger me-1"
          onClick={handleBack}
        >
          Về trang chủ
        </button>
        <div className="headdline">
          <h3>Chuột Gaming</h3>
        </div>
        <div className="product-form row j-b-c-t">
          <div className="l-4 product-items col ">
            <div className="img-product-items">
              <img src={chuot1} alt="" width={320} height={346} />
              <div className="product-items-body">
                <div className="">
                  <span className="title-product-items"> Bàn Phím </span>
                  <span className="comments-product-items">
                    Kit Custom Phím Cơ ZT84 LED RGB, 3 Modes, Hotswap 5 chân,
                    Full Sidivcone
                  </span>
                  <span className="price-product-items d-l-b"> 999.000 ₫ </span>
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
              <img src={chuot2} alt="" width={320} height={346} />
              <div className="product-items-body">
                <div className="">
                  <span className="title-product-items"> Bàn Phím </span>
                  <span className="comments-product-items">
                    Kit Custom Phím Cơ ZT84 LED RGB, 3 Modes, Hotswap 5 chân,
                    Full Sidivcone
                  </span>
                  <span className="price-product-items d-l-b"> 999.000 ₫ </span>
                  <div>
                    <a href="#"> xem ngay </a>
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
                  <span className="title-product-items"> Bàn Phím </span>
                  <span className="comments-product-items">
                    Kit Custom Phím Cơ ZT84 LED RGB, 3 Modes, Hotswap 5 chân,
                    Full Sidivcone
                  </span>
                  <span className="price-product-items d-l-b"> 999.000 ₫ </span>
                  <div>
                    <a href="#"> xem ngay </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="l-4 product-items col ">
            <div className="img-product-items">
              <img src={chuot4} alt="" width={320} height={346} />
              <div className="product-items-body">
                <div className="#">
                  <span className="title-product-items"> Bàn Phím </span>
                  <span className="comments-product-items">
                    Kit Custom Phím Cơ ZT84 LED RGB, 3 Modes, Hotswap 5 chân,
                    Full Sidivcone
                  </span>
                  <span className="price-product-items d-l-b"> 999.000 ₫ </span>
                  <div>
                    <a href=""> xem ngay </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="l-4 product-items col ">
            <div className="img-product-items">
              <img src={chuot5} alt="" width={320} height={346} />
              <div className="product-items-body">
                <div className="#">
                  <span className="title-product-items"> Bàn Phím </span>
                  <span className="comments-product-items">
                    Kit Custom Phím Cơ ZT84 LED RGB, 3 Modes, Hotswap 5 chân,
                    Full Sidivcone
                  </span>
                  <span className="price-product-items d-l-b"> 999.000 ₫ </span>
                  <div>
                    <a href=""> xem ngay </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="l-4 product-items col ">
            <div className="img-product-items">
              <img src={chuot6} alt="" width={320} height={346} />
              <div className="product-items-body">
                <div className="#">
                  <span className="title-product-items"> Bàn Phím </span>
                  <span className="comments-product-items">
                    Kit Custom Phím Cơ ZT84 LED RGB, 3 Modes, Hotswap 5 chân,
                    Full Sidivcone
                  </span>
                  <span className="price-product-items d-l-b"> 999.000 ₫ </span>
                  <div>
                    <a href=""> xem ngay </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="l-4 product-items col ">
            <div className="img-product-items">
              <img src={chuot7} alt="" width={320} height={346} />
              <div className="product-items-body">
                <div className="#">
                  <span className="title-product-items"> Bàn Phím </span>
                  <span className="comments-product-items">
                    Kit Custom Phím Cơ ZT84 LED RGB, 3 Modes, Hotswap 5 chân,
                    Full Sidivcone
                  </span>
                  <span className="price-product-items d-l-b"> 999.000 ₫ </span>
                  <div>
                    <a href=""> xem ngay </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="l-4 product-items col ">
            <div className="img-product-items">
              <img src={chuot8} alt="" width={320} height={346} />
              <div className="product-items-body">
                <div className="#">
                  <span className="title-product-items"> Bàn Phím </span>
                  <span className="comments-product-items">
                    Kit Custom Phím Cơ ZT84 LED RGB, 3 Modes, Hotswap 5 chân,
                    Full Sidivcone
                  </span>
                  <span className="price-product-items d-l-b"> 999.000 ₫ </span>
                  <div>
                    <a href=""> xem ngay </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="l-4 product-items col ">
            <div className="img-product-items">
              <img src={chuot9} alt="" width={320} height={346} />
              <div className="product-items-body">
                <div className="#">
                  <span className="title-product-items"> Bàn Phím </span>
                  <span className="comments-product-items">
                    Kit Custom Phím Cơ ZT84 LED RGB, 3 Modes, Hotswap 5 chân,
                    Full Sidivcone
                  </span>
                  <span className="price-product-items d-l-b"> 999.000 ₫ </span>
                  <div>
                    <a href=""> xem ngay </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="l-4 product-items col ">
            <div className="img-product-items">
              <img src={chuot10} alt="" width={320} height={346} />
              <div className="product-items-body">
                <div className="#">
                  <span className="title-product-items"> Bàn Phím </span>
                  <span className="comments-product-items">
                    Kit Custom Phím Cơ ZT84 LED RGB, 3 Modes, Hotswap 5 chân,
                    Full Sidivcone
                  </span>
                  <span className="price-product-items d-l-b"> 999.000 ₫ </span>
                  <div>
                    <a href=""> xem ngay </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="l-4 product-items col ">
            <div className="img-product-items">
              <img src={chuot11} alt="" width={320} height={346} />
              <div className="product-items-body">
                <div className="#">
                  <span className="title-product-items"> Bàn Phím </span>
                  <span className="comments-product-items">
                    Kit Custom Phím Cơ ZT84 LED RGB, 3 Modes, Hotswap 5 chân,
                    Full Sidivcone
                  </span>
                  <span className="price-product-items d-l-b"> 999.000 ₫ </span>
                  <div>
                    <a href=""> xem ngay </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="l-4 product-items col ">
            <div className="img-product-items">
              <img src={chuot12} alt="" width={320} height={346} />
              <div className="product-items-body">
                <div className="#">
                  <span className="title-product-items"> Bàn Phím </span>
                  <span className="comments-product-items">
                    Kit Custom Phím Cơ ZT84 LED RGB, 3 Modes, Hotswap 5 chân,
                    Full Sidivcone
                  </span>
                  <span className="price-product-items d-l-b"> 999.000 ₫ </span>
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

export default Mouse;
