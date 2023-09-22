import * as React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/img/logo.jpg";
const Sanpham = () => {
  return (
    <>
      <div>
        <div className="left-side-menu border-dark border-4 border-end">
          <div className="slimscroll-menu">
            <div className="row p-4">
              <div className="col">
                <img src={logo} alt="" className=" img-fluid " />
              </div>
            </div>
            <div id="sidebar-menu ">
              <div className="text-secondary">
                <ul
                  className="metismenu text-start justify-content-start ps-0 ms-0   "
                  id="side-menu"
                >
                  <li
                    style={{ listStyle: "none", paddingLeft: 0, marginLeft: 0 }}
                  >
                    <div
                      style={{
                        textDecoration: "none",
                        display: "block",
                        padding: "15px 20px",
                        color: "#ffffff",
                        fontSize: "1.2em",
                        fontWeight: "bold",
                      }}
                    >
                      <i className="fa-solid fa-book-open pe-2" />
                      <span> Pages </span>
                      <span className="menu-arrow" />
                    </div>
                    <ul className="nav-second-level ms-5" aria-expanded="false">
                      <li>
                        <NavLink className="nav-link" to="#">
                          Sản phẩm
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="nav-link" to="/themsanpham">
                          Thêm sản phẩm
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="nav-link" to="/thongtindathang">
                          Thông tin đặt hàng
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="clearfix" />
          </div>
        </div>
        <div className="bg-secondary-subtle">
          <main className="main-content   ">
            <div className="bg" style={{ backgroundColor: "#343a40" }}>
              <div className="#">
                <div className="row p-4">
                  <div className="col-3 ps-5">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                      />
                      <div className="input-group-append">
                        <button className="btn btn-secondary" type="submit">
                          <i className="fa-solid fa-magnifying-glass" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col"></div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="row ps-5 pt-3  ">
                <div className="col">
                  <h2
                    className="display-6"
                    style={{ fontFamily: '"Times New Roman", Times, serif' }}
                  >
                    Sản Phẩm
                  </h2>
                </div>
                <div className="col text-end me-4 pt-3">
                  Pages &gt;{" "}
                  <span className="text-info  align-middle">Sản Phẩm</span>
                </div>
              </div>
            </div>
            <div className="row justify-content-end">
              <div className="col-3">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <div className="input-group-append">
                    <button className="btn btn-secondary" type="submit">
                      <i className="fa-solid fa-magnifying-glass" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body  pb-5 text-center p-4 ">
              <table className="table  table-bordered border border border-dark rounded-5  ">
                <thead>
                  <tr>
                    <th>IDSP</th>
                    <th>Tên SP</th>
                    <th>Thương hiệu</th>
                    <th>Mô tả</th>
                    <th>Giá</th>
                    <th className=" text-nowrap">Hoạt động</th>
                  </tr>
                </thead>
                <tbody className="align-middle">
                  <tr>
                    <td>01</td>
                    <td>
                      Bộ Keycap Childishness Ngây Thơ Siêu Dễ Thương, Chuẩn OEM,
                      Xuyên LED Cực Đẹp, 138 Nút.
                    </td>
                    <td>Childishness</td>
                    <td>
                      Bộ Keycap PBT 138 Nút &gt;&gt;&gt; Lưu ý: đây là bộ keycap
                      không phải bàn phím!Chất liệu: Nhựa PBT ( không bị bóng
                      khi sử dụng nhiều ). Sử dụng : Phím cơ. Có thể sử dụng cho
                      các bàn phím layout khác như 68,96.84,98…. Màu sắc : Hồng
                      Đặc điểm: Double Shot Xuyên LED Dưới Chân Trong Suốt.
                      Thiết kế đặc biệt với 2 phần, phần chân trong suốt cho LED
                      tỏa ra cực đẹp.
                    </td>
                    <td>499.000</td>
                    <td className=" text-nowrap">
                      <a href="#" className="btn btn-warning btn-sm ">
                        Edit
                      </a>
                      <a href="#" className="btn btn-danger btn-sm delete">
                        Delete
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>
                      Bộ Keycap Childishness Ngây Thơ Siêu Dễ Thương, Chuẩn OEM,
                      Xuyên LED Cực Đẹp, 138 Nút.
                    </td>
                    <td>Childishness</td>
                    <td>
                      Bộ Keycap PBT 138 Nút &gt;&gt;&gt; Lưu ý: đây là bộ keycap
                      không phải bàn phím!Chất liệu: Nhựa PBT ( không bị bóng
                      khi sử dụng nhiều ). Sử dụng : Phím cơ. Có thể sử dụng cho
                      các bàn phím layout khác như 68,96.84,98…. Màu sắc : Hồng
                      Đặc điểm: Double Shot Xuyên LED Dưới Chân Trong Suốt.
                      Thiết kế đặc biệt với 2 phần, phần chân trong suốt cho LED
                      tỏa ra cực đẹp.
                    </td>
                    <td>499.000</td>
                    <td className=" text-nowrap">
                      <a href="#" className="btn btn-warning btn-sm ">
                        Edit
                      </a>
                      <a href="#" className="btn btn-danger btn-sm delete">
                        Delete
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>
                      Bộ Keycap Childishness Ngây Thơ Siêu Dễ Thương, Chuẩn OEM,
                      Xuyên LED Cực Đẹp, 138 Nút.
                    </td>
                    <td>Childishness</td>
                    <td>
                      Bộ Keycap PBT 138 Nút &gt;&gt;&gt; Lưu ý: đây là bộ keycap
                      không phải bàn phím!Chất liệu: Nhựa PBT ( không bị bóng
                      khi sử dụng nhiều ). Sử dụng : Phím cơ. Có thể sử dụng cho
                      các bàn phím layout khác như 68,96.84,98…. Màu sắc : Hồng
                      Đặc điểm: Double Shot Xuyên LED Dưới Chân Trong Suốt.
                      Thiết kế đặc biệt với 2 phần, phần chân trong suốt cho LED
                      tỏa ra cực đẹp.
                    </td>
                    <td>499.000</td>
                    <td className=" text-nowrap">
                      <a href="#" className="btn btn-warning btn-sm ">
                        Edit
                      </a>
                      <a href="#" className="btn btn-danger btn-sm delete">
                        Delete
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>
                      Bộ Keycap Childishness Ngây Thơ Siêu Dễ Thương, Chuẩn OEM,
                      Xuyên LED Cực Đẹp, 138 Nút.
                    </td>
                    <td>Childishness</td>
                    <td>
                      Bộ Keycap PBT 138 Nút &gt;&gt;&gt; Lưu ý: đây là bộ keycap
                      không phải bàn phím!Chất liệu: Nhựa PBT ( không bị bóng
                      khi sử dụng nhiều ). Sử dụng : Phím cơ. Có thể sử dụng cho
                      các bàn phím layout khác như 68,96.84,98…. Màu sắc : Hồng
                      Đặc điểm: Double Shot Xuyên LED Dưới Chân Trong Suốt.
                      Thiết kế đặc biệt với 2 phần, phần chân trong suốt cho LED
                      tỏa ra cực đẹp.
                    </td>
                    <td>499.000</td>
                    <td className=" text-nowrap">
                      <a href="#" className="btn btn-warning btn-sm ">
                        Edit
                      </a>
                      <a href="#" className="btn btn-danger btn-sm delete">
                        Delete
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>
                      Bộ Keycap Childishness Ngây Thơ Siêu Dễ Thương, Chuẩn OEM,
                      Xuyên LED Cực Đẹp, 138 Nút.
                    </td>
                    <td>Childishness</td>
                    <td>
                      Bộ Keycap PBT 138 Nút &gt;&gt;&gt; Lưu ý: đây là bộ keycap
                      không phải bàn phím!Chất liệu: Nhựa PBT ( không bị bóng
                      khi sử dụng nhiều ). Sử dụng : Phím cơ. Có thể sử dụng cho
                      các bàn phím layout khác như 68,96.84,98…. Màu sắc : Hồng
                      Đặc điểm: Double Shot Xuyên LED Dưới Chân Trong Suốt.
                      Thiết kế đặc biệt với 2 phần, phần chân trong suốt cho LED
                      tỏa ra cực đẹp.
                    </td>
                    <td>499.000</td>
                    <td className=" text-nowrap">
                      <a href="#" className="btn btn-warning btn-sm ">
                        Edit
                      </a>
                      <a href="#" className="btn btn-danger btn-sm delete">
                        Delete
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>
                      Bộ Keycap Childishness Ngây Thơ Siêu Dễ Thương, Chuẩn OEM,
                      Xuyên LED Cực Đẹp, 138 Nút.
                    </td>
                    <td>Childishness</td>
                    <td>
                      Bộ Keycap PBT 138 Nút &gt;&gt;&gt; Lưu ý: đây là bộ keycap
                      không phải bàn phím!Chất liệu: Nhựa PBT ( không bị bóng
                      khi sử dụng nhiều ). Sử dụng : Phím cơ. Có thể sử dụng cho
                      các bàn phím layout khác như 68,96.84,98…. Màu sắc : Hồng
                      Đặc điểm: Double Shot Xuyên LED Dưới Chân Trong Suốt.
                      Thiết kế đặc biệt với 2 phần, phần chân trong suốt cho LED
                      tỏa ra cực đẹp.
                    </td>
                    <td>499.000</td>
                    <td className=" text-nowrap">
                      <a href="#" className="btn btn-warning btn-sm ">
                        Edit
                      </a>
                      <a href="#" className="btn btn-danger btn-sm delete">
                        Delete
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>
                      Bộ Keycap Childishness Ngây Thơ Siêu Dễ Thương, Chuẩn OEM,
                      Xuyên LED Cực Đẹp, 138 Nút.
                    </td>
                    <td>Childishness</td>
                    <td>
                      Bộ Keycap PBT 138 Nút &gt;&gt;&gt; Lưu ý: đây là bộ keycap
                      không phải bàn phím!Chất liệu: Nhựa PBT ( không bị bóng
                      khi sử dụng nhiều ). Sử dụng : Phím cơ. Có thể sử dụng cho
                      các bàn phím layout khác như 68,96.84,98…. Màu sắc : Hồng
                      Đặc điểm: Double Shot Xuyên LED Dưới Chân Trong Suốt.
                      Thiết kế đặc biệt với 2 phần, phần chân trong suốt cho LED
                      tỏa ra cực đẹp.
                    </td>
                    <td>499.000</td>
                    <td className=" text-nowrap">
                      <a href="#" className="btn btn-warning btn-sm ">
                        Edit
                      </a>
                      <a href="#" className="btn btn-danger btn-sm delete">
                        Delete
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div style={{ height: 200 }}></div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Sanpham;
