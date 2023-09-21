import * as React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

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
                  <NavLink className="nav-link" to="/keygiaco">
                    BÀN PHÍM GIẢ CƠ
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/keyco">
                    BÀN PHÍM CƠ
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink className="nav-link" to="/mouse">
                CHUỘT GAMING
              </NavLink>
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
