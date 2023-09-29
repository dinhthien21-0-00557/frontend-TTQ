import React, { useState, useEffect } from "react";
import Header from "../pages/Header";
import Bodyheader from "./../pages/Bodyheader";
import Menu from "./../pages/Menu";
import Footercard from "./../pages/Footercard";
import { firestore } from "../data/firebase";
interface HistoryData {
  HISTORY_ID: string;
  TEN_SP: string;
  SO_LUONG: number;
  IMAGES: string;
  TONG_TIEN: string;
  DON_GIA: string;
}

const Sanphamdamua = () => {
  const [historyItems, setHistoryItems] = useState<HistoryData[]>([]);

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
          } as HistoryData;
        });
        setHistoryItems(historyItemsData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Bodyheader />
      <Menu />
      <section className="bg-secondary pb-5 ">
        <div className="container ">
          <div className="row pt-5 ">
            <div className="col text-white pb-2 align-middle">
              <h3>Sản phẩm đã mua</h3>
            </div>
          </div>
          <div className="d-flex a-i-s ">
            <div className="fill-table ">
              <div className="row">
                <div className="col me-4">
                  <table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Ảnh</th>
                        <th>Tên</th>
                        <th>Đơn Giá</th>
                        <th>Số Lượng</th>
                        <th style={{ width: "350px" }}>Thành tiền</th>
                      </tr>
                    </thead>
                    <tbody>
                      {historyItems.map((item) => (
                        <tr key={item.HISTORY_ID}>
                          <td style={{ width: "50px" }}>{item.HISTORY_ID}</td>
                          <td>
                            <img
                              className="img-fluid"
                              src={item.IMAGES}
                              alt=""
                              style={{ width: "100px", height: "100px" }}
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
            </div>
          </div>
        </div>
      </section>
      <Footercard />
    </>
  );
};

export default Sanphamdamua;
