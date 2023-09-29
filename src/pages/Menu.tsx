import * as React from "react";

import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <section className="menu-headeer-cl">
      <div className="container">
        <nav>
          <ul className="menu-header row  a-i-c">
            {/* <li>
              <a className="t-x menu-margin" href="#">
                BÀN PHÍM <i className="fa-solid fa-caret-down" />
              </a> </li> */}
            {/* <ul className="menu-list"></ul> */}
            <li>
              <NavLink className="nav-link" to="/Sanphamhome">
                SẢN PHẨM
              </NavLink>
            </li>
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
            <li>
              <NavLink className="nav-link" to="/mouse">
                CHUỘT GAMING
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Menu;
