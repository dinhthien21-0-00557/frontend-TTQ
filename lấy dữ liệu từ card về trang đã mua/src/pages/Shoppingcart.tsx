import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { firestore } from "../data/firebase";
import Header from "./Header";
import Bodyheader from "./Bodyheader";
import Menu from "./Menu";
import Footercard from "./Footercard";

interface CartItem {
  CARD_ID: string;
  IMAGES: string;
  TEN_SP: string;
  DON_GIA: string;
  SO_LUONG: number;
  TONG_GIA: string;
}

interface CartData {
  [key: string]: CartItem;
}

const Shoppingcart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const cartData = await firestore.collection("CARD").get();
        const cartItemsData: CartData = {};
        cartData.forEach((doc) => {
          const itemData = doc.data() as CartItem;
          cartItemsData[doc.id] = itemData;
        });
        setCartItems(Object.values(cartItemsData));
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };
    fetchCartItems();
  }, []);

  const handleBack = () => {
    navigate("/");
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
          <div className="d-flex a-i-s">
            <div className="fill-table">
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
                  {cartItems.map((item) => (
                    <tr>
                      <td style={{ width: "50px" }}>{item.CARD_ID} </td>
                      <td>
                        <img
                          className="img-fluid"
                          src={item.IMAGES}
                          alt={item.TEN_SP}
                          style={{ width: "100px", height: "100px" }}
                        />
                      </td>
                      <td>{item.TEN_SP}</td>
                      <td>{item.DON_GIA}</td>
                      <td>{item.SO_LUONG}</td>
                      <td>{item.TONG_GIA}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <Footercard />
    </>
  );
};

export default Shoppingcart;
