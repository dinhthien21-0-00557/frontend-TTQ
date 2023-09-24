// import * as React from "react";
import { useState, useEffect } from "react";
import React from "react";

const Headers = () => {
  return (
    <section className="header-color">
      <div className="container">
        <div className="row j-b header-form">
          <div className="col header-left">
            <span>
              <i className="fa-solid fa-location-dot" /> Quận Gò Vấp/ Quang
              Trung/ Phường 11/ Hẻm 656
            </span>
            <span>|</span>
            <span>
              <i className="fa-regular fa-clock" /> 8.00 / 20.00
            </span>
            <span>|</span>
            <span>
              <i className="fa-solid fa-phone" /> 0972.483.152
            </span>
          </div>
          <div className="col header-right">
            <span>
              <i className="fa-regular fa-envelope" /> Email:
              congtytnhh1thanhvien@gmail.com
            </span>
            <span>|</span>
            <span>
              <i className="fa-regular fa-bell" /> Thông báo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headers;
