import * as React from "react";
import { useState, useEffect } from "react";
import tichxanh from "../assets/img/logoSaleNoti.png";

const Footercard = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="row bo">
          <div className="col footer-car">
            <h3>BOSSGEAR BMT</h3>
            <hr />
            <span>TÊN HKD: BOSSGEAR BMT.</span>
            <span>Chủ sở hữu: VŨ ĐÌNH THIÊN.</span>
            <span>
              GPKD SỐ: 40A8050722 Do Sở Kế Hoạch &amp; Đầu Tư Tỉnh Đắk Lắk cấp
              ngày 25 tháng 10 năm 2022.
            </span>
            <span>MST: 8325689637. </span>
          </div>
          <div className="col footer-car">
            <h3>Thông tin liên hệ</h3>
            <hr />
            <span>
              Địa chỉ: QUẬN GÒ VẤP, ĐƯỜNG QUANG TRUNG, HẺM 656/74/62, PHƯỜNG 11,
            </span>
            <span>SĐT: 0972.483.152</span>
            <span>ĐC Email: shopbanlinhkien@gmail.com</span>
            <span>Zalo: 0972.483.152 (THIỆN)</span>
            <span>GOVAP.VN</span>
          </div>
          <div className="col footer-img">
            <a className=" " href="">
              <img src={tichxanh} alt="" width={300} height={100} />
            </a>
          </div>
        </div>
        <br />
        <br />
      </div>
    </section>
  );
};

export default Footercard;
