import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { firestore } from "../data/firebase";
import Header from "./Header";
import Bodyheader from "./Bodyheader";
import Menu from "./Menu";
import Footercard from "./Footercard";
import Logo from "../assets/img/LOGO1.png";

interface CartItem {
  id: string;
  CARD_ID: string;
  IMAGES: string;
  TEN_SP: string;
  DON_GIA: string;
  SO_LUONG: number;
  TONG_TIEN: string;
}

const Shoppingcart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cartData = await firestore.collection("CARD").get();
        const cartItemsData = cartData.docs.map(
          (doc) => doc.data() as CartItem
        );
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
  const handleDeleteItemByCardId = (CARD_ID: string) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.CARD_ID !== CARD_ID
    );
    setCartItems(updatedCartItems);
  };
  const handleThanhToan = () => {
    navigate("/shopping");
  };
  return (
    <>
      <Header />
      <section className="color-header2">
        <div className="container">
          <div className="row">
            <div className="col">
              <a className="img-home" href="#">
                <img src={Logo} alt="" width={300} height={80} />
              </a>
            </div>
            <div className="col-flex">
              <span className="form-input">
                <span className="input-header">
                  <input type="text" placeholder="Tìm kiếm" />
                </span>
                <a href="#" className="search">
                  <i className="fa-solid fa-magnifying-glass" />
                </a>
              </span>
              <div className="col pad-header">
                <Link className="navbar-brand  me-2" to="/loginuser">
                  Đăng Nhập
                </Link>
                <span></span>
                <Link className="navbar-brand pe-2" to="/registeruser">
                  Đăng Ký
                </Link>
                <span></span>
                <Link className="navbar-brand" to="/shoppingcart">
                  Đã Mua
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                        <tr key={item.id}>
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
                              onClick={() =>
                                handleDeleteItemByCardId(item.CARD_ID)
                              }
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
