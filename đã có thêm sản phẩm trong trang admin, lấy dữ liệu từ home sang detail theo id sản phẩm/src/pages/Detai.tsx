import * as React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import Logo from "../assets/img/logo.jpg";
import { firestore } from "../data/firebase";
import Footercard from "./Footercard";

interface Product {
  id: string;
  DON_GIA: string;
  IMAGES: string;
  LOAI: string;
  MOTA: string;
  PRODUCT_ID: string;
  TEN_SP: string;
  THUONG_HIEU: string;
}

const Detai = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);

  const handleBack = () => {
    navigate("/");
  };

  const showShoppingCart = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/shoppingcart");
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const productDoc = await firestore.collection("PRODUCT").doc(id).get();
        if (productDoc.exists) {
          const productData = productDoc.data() as Product;
          setProduct(productData);
        } else {
          console.error("Product not found");
        }
      } catch (error) {
        console.error("Error fetching product detail:", error);
      }
    };
    fetchProductDetail();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <section className="detai">
      <section className="color-header2">
        <div className="container">
          <div className="row">
            <div className="col">
              <button
                type="button"
                className="btn btn-#54535300 me-1"
                onClick={handleBack}
              >
                <img src={Logo} alt="" width={300} height={80} />
              </button>
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
                <Link className="navbar-brand" to="/loginuser">
                  Đăng Nhập
                </Link>
                <span></span>
                <Link className="navbar-brand" to="/registeruser">
                  Đăng Ký
                </Link>
                <span></span>
                <Link className="navbar-brand" to="/shoppingcart">
                  Giỏ Hàng
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
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
      <div className="container mt-5 mb-5">
        <div className="row j-b">
          <div className="col img-products-ct">
            <a href="#">
              <img src={product.IMAGES} alt="" width={1500} height={1000} />
            </a>
          </div>
          <div className="col products-ct">
            <h5 className="h-detai">{product.TEN_SP}</h5>
            <hr className="hr-detai" />
            <span>{product.MOTA}</span>
            <span>Loại: {product.LOAI}</span>
            <span>Thương hiệu: {product.THUONG_HIEU}</span>
            <span>Đơn giá: {product.DON_GIA}</span>
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col-4 text-end pe-0">
                    <button
                      onClick={handleDecreaseQuantity}
                      style={{ width: "50px" }}
                    >
                      -
                    </button>
                  </div>
                  <div className="col-4 ps-0 pe-0 ">
                    <input type="number" value={quantity} readOnly />
                  </div>
                  <div className="col-4 text-start ps-0">
                    <button
                      onClick={handleIncreaseQuantity}
                      style={{ width: "50px" }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={showShoppingCart}
                >
                  <i className="bi-plus-lg" />
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footercard />
    </section>
  );
};

export default Detai;
