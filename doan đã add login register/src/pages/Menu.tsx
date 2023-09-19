import * as React from "react";
import { useState, useEffect } from "react";

const Menu = () => {
  return (
    <section className="menu-headeer-cl">
      <div className="container">
        <nav>
          <ul className="menu-header row  a-i-c">
            <li>
              <a className="t-x menu-margin" href="#">
                BÀN PHÍM <i className="fa-solid fa-caret-down" />
              </a>
              <ul className="menu-list">
                <li>
                  <a href="">Phím Cơ</a>
                </li>
                <li>
                  <a href="">Giả Cơ</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="t-x menu-margin" href="#">
                CHUỘT GAMING
              </a>
            </li>
            <li>
              <a className="t-x menu-margin" href="#">
                TAI NGHE
              </a>
            </li>
            <li>
              <a className="t-x menu-margin" href="#">
                KEYCAPS
              </a>
            </li>
            <li>
              <a className="t-x menu-margin" href="#">
                PHỤ KIỆN
              </a>
            </li>
            <li>
              <a className="t-x menu-margin" href="#">
                BÀN GHẾ
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Menu;
