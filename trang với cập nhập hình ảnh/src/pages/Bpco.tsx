import * as React from "react";
import { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

import banphim1 from "../assets/img/banphim1.jpg";
import banphim2 from "../assets/img/banphim2.jpg";
import banphim3 from "../assets/img/banphim3.jpg";
import banphim4 from "../assets/img/banphim4.jpg";
import banphim5 from "../assets/img/banphim5.jpg";
import banphim6 from "../assets/img/banphim6.jpg";
import banphim7 from "../assets/img/banphim7.jpg";
import banphim8 from "../assets/img/banphim8.jpg";
import banphim9 from "../assets/img/banphim9.jpg";
import banphim10 from "../assets/img/banphim10.jpg";
import banphim11 from "../assets/img/banphim11.jpg";
import banphim12 from "../assets/img/banphim12.jpg";

const Keyboard = () => {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  const showBanphimco = (e: any, id: number) => {
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
          <h3>Bàn Phím cơ</h3>
        </div>
        <div className="product-form row j-b-c-t">
          <div className="l-4 product-items col ">
            <div className="img-product-items">
              <img src={banphim1} alt="" width={320} height={346} />
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
                      onClick={() => showBanphimco(null, 0)}
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
              <img src={banphim3} alt="" width={320} height={346} />
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
              <img src={banphim4} alt="" width={320} height={346} />
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
              <img src={banphim5} alt="" width={320} height={346} />
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
              <img src={banphim6} alt="" width={320} height={346} />
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
              <img src={banphim7} alt="" width={320} height={346} />
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
              <img src={banphim8} alt="" width={320} height={346} />
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
              <img src={banphim9} alt="" width={320} height={346} />
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
              <img src={banphim10} alt="" width={320} height={346} />
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
              <img src={banphim11} alt="" width={320} height={346} />
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
              <img src={banphim12} alt="" width={320} height={346} />
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

export default Keyboard;
