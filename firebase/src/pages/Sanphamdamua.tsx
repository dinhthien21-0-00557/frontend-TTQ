import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import anime from "../assets/img/anime.jpg";
const Sanphamdamua = () => {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <>
      <div className="containerr">
        <div className="headerr">
          <h1>Sản phẩm đã mua</h1>
        </div>
        <div className="hinhsp">
          <div className="productt">
            <img src={anime} width={50} height={50} alt="" />
            <div className="tensp">
              <h2>Bàn phím cơ ngon bổ rẻ</h2>
            </div>
            <div className="soluongsp">
              <p>Số lượng: 1</p>
            </div>
            <div className="giasp">
              <p>Giá: 120.000</p>
            </div>
          </div>
        </div>
        <div className="backk ">
          <button
            type="button"
            className="btn btn-danger me-1"
            onClick={handleBack}
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default Sanphamdamua;
