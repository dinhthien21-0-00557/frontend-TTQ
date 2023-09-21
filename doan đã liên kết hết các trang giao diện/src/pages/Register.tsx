import * as React from "react";
import { useState, useEffect } from "react";

const Register = () => {
  return (
    <section>
      <div className="split-interfacee">
        <div className="right-panell">
          <div className="row bbb">
            <h2>ĐĂNG KÝ TÀI KHOẢN NGƯỜI DÙNG </h2>
          </div>
          <div className="row bbb">
            <h5>Tên tài khoản hoặc địa chỉ email *</h5>
          </div>
          <div className="row bbb">
            <input type="text" className="input-frame" />
          </div>
          <div className="row bbb">
            <h5>Mật Khẩu *</h5>
          </div>
          <div className="row bbb">
            <input type="text" className="input-frame" />
          </div>
          <div className="row bbb">
            <button className="my-button">Đăng Ký</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
