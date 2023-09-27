import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { firestore } from "../data/firebase";
import Header from "./Header";
import Bodyheader from "./Bodyheader";
import Menu from "./Menu";
import Footercard from "./Footercard";
import Logo from "../assets/img/LOGO1.png";

interface Card {
  id: string;
  CARD_ID: string;
  IMAGES: string;
  TEN_SP: string;
  DON_GIA: string;
  SO_LUONG: number;
  TONG_TIEN: string;
}

const Shoppingcart = () => {
  const [cartItems, setCartItems] = useState<Card[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cartData = await firestore.collection("CARD").get();
        const cartItemsData = cartData.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            CARD_ID: data.CARD_ID,
            IMAGES: data.IMAGES,
            TEN_SP: data.TEN_SP,
            DON_GIA: data.DON_GIA,
            SO_LUONG: data.SO_LUONG,
            TONG_TIEN: data.TONG_TIEN,
          } as Card;
        });
        setCartItems(cartItemsData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const totalAmount = cartItems.reduce((total, item) => {
    return total + parseFloat(item.TONG_TIEN.replace(/[^\d.]/g, ""));
  }, 0);

  const handleDelete = async (id: string) => {
    try {
      await firestore.collection("CARD").doc(id).delete();
      setCartItems(cartItems.filter((card) => card.id !== id));
    } catch (error) {
      console.error("Error deleting card:", error);
    }
  };

  const handleThanhToan = () => {
    navigate("/shopping");
  };
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
                        <th>Hoạt Động</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <tr key={item.CARD_ID}>
                          <td style={{ width: "50px" }}>{item.CARD_ID}</td>
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
                          <td>
                            <button
                              className="btn btn-danger btn-sm delete"
                              onClick={() => handleDelete(item.id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="form-thanhtoan">
                <div className="number-product">
                  <span> ổng tiền: {totalAmount} VND </span>
                </div>
                <div>
                  <button
                    type="button"
                    className="button-amount"
                    onClick={handleThanhToan}
                  >
                    <i className="bi-plus-lg" /> Thanh toán
                  </button>
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

export default Shoppingcart;
