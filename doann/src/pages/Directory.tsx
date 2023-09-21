import * as React from "react";
import { useState, useEffect } from "react";
import project1 from "../assets/img/project1.png";
import { useNavigate } from "react-router-dom";

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
          <h3>Sản Phẩm Mới ra mắt</h3>
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
              <img src={project1} alt="" width={320} height={346} />
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
              <img src={project1} alt="" width={320} height={346} />
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
              <img src={project1} alt="" width={320} height={346} />
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
              <img src={project1} alt="" width={320} height={346} />
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
              <img src={project1} alt="" width={320} height={346} />
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
              <img src={project1} alt="" width={320} height={346} />
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
              <img src={project1} alt="" width={320} height={346} />
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

export default Directory;
