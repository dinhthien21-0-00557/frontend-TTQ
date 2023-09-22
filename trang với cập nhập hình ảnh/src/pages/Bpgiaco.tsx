import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import phimgiaco1 from "../assets/img/phimgiaco1.jpg";
import phimgiaco2 from "../assets/img/phimgiaco2.jpg";
import phimgiaco3 from "../assets/img/phimgiaco3.jpg";
import phimgiaco4 from "../assets/img/phimgiaco4.jpg";
import phimgiaco5 from "../assets/img/phimgiaco5.jpg";
import phimgiaco6 from "../assets/img/phimgiaco6.jpg";
import phimgiaco7 from "../assets/img/phimgiaco7.jpg";
import phimgiaco8 from "../assets/img/phimgiaco8.jpg";

const Bpgiaco = () => {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  const showBpgiaco = (e: any, id: number) => {
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
          <h3>Bàn phím giả cơ</h3>
        </div>
        <div className="product-form row j-b-c-t">
          <div className="l-4 product-items col ">
            <div className="img-product-items">
              <img src={phimgiaco1} alt="" width={320} height={346} />
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
                      onClick={() => showBpgiaco(null, 0)}
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
              <img src={phimgiaco2} alt="" width={320} height={346} />
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
              <img src={phimgiaco3} alt="" width={320} height={346} />
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
              <img src={phimgiaco4} alt="" width={320} height={346} />
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
              <img src={phimgiaco5} alt="" width={320} height={346} />
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
              <img src={phimgiaco6} alt="" width={320} height={346} />
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
              <img src={phimgiaco7} alt="" width={320} height={346} />
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
              <img src={phimgiaco8} alt="" width={320} height={346} />
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

export default Bpgiaco;
