import React, { useState, useEffect } from "react";
import { firestore } from "../data/firebase";
import logo from "../assets/img/logo.jpg";
import { NavLink } from "react-router-dom";

interface HistoryItem {
  HISTORY_ID: string;
  TEN_SP: string;
  SO_LUONG: number;
  IMAGES: string;
  TONG_TIEN: string;
  DON_GIA: string;
}

const Thongtindathang = () => {
  const [historyData, setHistoryData] = useState<HistoryItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const historyData = await firestore.collection("HISTORY").get();
        const historyItemsData = historyData.docs.map((doc) => {
          const data = doc.data();
          return {
            HISTORY_ID: data.HISTORY_ID,
            TEN_SP: data.TEN_SP,
            SO_LUONG: data.SO_LUONG,
            IMAGES: data.IMAGES,
            TONG_TIEN: data.TONG_TIEN,
            DON_GIA: data.DON_GIA,
          } as HistoryItem;
        });
        setHistoryData(historyItemsData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  return (
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
                  <ul className="nav-second-level ms-5">
                    <li>
                      <NavLink className="nav-link" to="/sanpham">
                        Sản phẩm
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-link" to="/themsanpham">
                        Thêm sản phẩm
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-link" to="#">
                        Sản phẩm đã bán
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
          <div className="pt-5">
            <div className="row ps-5 pt-3  ">
              <div className="col">
                <h2
                  className="display-6"
                  style={{ fontFamily: '"Times New Roman", Times, serif' }}
                >
                  Sản phẩm đã bán
                </h2>
              </div>
              <div className="col text-end me-4 pt-3">
                Pages &gt;{" "}
                <span className="text-info  align-middle">Sản phẩm đã bán</span>
              </div>
            </div>
          </div>

          <div className="p-3">
            <div className="card-body  pb-5 text-center ">
              <table className="table  table-bordered border border border-dark rounded-5 ">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Hình ảnh</th>
                    <th>Tên sản phẩm</th>
                    <th>Đơn giá</th>
                    <th>Số lượng</th>
                    <th>Thành tiền</th>
                  </tr>
                </thead>
                <tbody className="align-middle">
                  {historyData.map((item) => (
                    <tr key={item.HISTORY_ID}>
                      <td>{item.HISTORY_ID}</td>
                      <td>
                        <img
                          src={item.IMAGES}
                          width={50}
                          height={50}
                          alt=""
                          style={{ objectFit: "cover" }}
                        />
                      </td>
                      <td>{item.TEN_SP}</td>
                      <td>{item.DON_GIA}</td>
                      <td>{item.SO_LUONG}</td>
                      <td>{item.TONG_TIEN}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div style={{ height: 400 }}></div>
        </main>
      </div>
    </div>
  );
};

export default Thongtindathang;
