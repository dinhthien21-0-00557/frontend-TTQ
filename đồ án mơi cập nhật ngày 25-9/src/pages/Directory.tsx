import * as React from "react";
import { useState, useEffect } from "react";
import project1 from "../assets/img/project1.png";
import { useNavigate } from "react-router-dom";
import { firestore } from "../data/firebase";

interface Product {
  TEN_SP: string;
  LOAI: string;
  GIA: string;
  IMAGES: string;
}

const Directory = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const snapshot = await firestore.collection("PRODUCT").get();
        const productsData: Product[] = snapshot.docs.map(
          (doc) => doc.data() as Product
        );
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const showDetail = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    navigate(`/detai/${index}`);
  };

  return (
    <section className="directory-color">
      <div className="container">
        <div className="headdline">
          <h3>Sản Phẩm Mới ra mắt</h3>
        </div>
        <div className="product-form row j-b-c-t">
          {products.map((product, index) => (
            <div className="l-4 product-items col" key={index}>
              <div className="img-product-items">
                <img src={product.IMAGES} alt={product.TEN_SP} />
                <div className="product-items-body">
                  <div className="">
                    <span className="title-product-items">{product.LOAI}</span>
                    <span className="comments-product-items">
                      {product.TEN_SP}
                    </span>
                    <span className="price-product-items d-l-b">
                      {product.GIA}
                    </span>
                    <div>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={(e) => showDetail(e, index)}
                      >
                        <i className="bi-plus-lg" /> Xem Ngay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="l-4 product-items col ">
            <div className="img-product-items">
              <img src={project1} alt="" width={320} height={346} />
              <div className="product-items-body">
                <div className="">
                  <span className="title-product-items"> Bàn Phím </span>
                  <span className="comments-product-items">
                    Kit Custom Phím Cơ ZT84 LED RGB, 3 Modes, Hotswap 5 chân,
                    Full Sidivcone
                  </span>
                  <span className="price-product-items d-l-b"> 999.000 ₫ </span>
                  <div>
                    <a href="#"> xem ngay </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="l-4 product-items col ">
            <div className="img-product-items">
              <img src={project1} alt="" width={320} height={346} />
              <div className="product-items-body">
                <div className="#">
                  <span className="title-product-items"> Bàn Phím </span>
                  <span className="comments-product-items">
                    Kit Custom Phím Cơ ZT84 LED RGB, 3 Modes, Hotswap 5 chân,
                    Full Sidivcone
                  </span>
                  <span className="price-product-items d-l-b"> 999.000 ₫ </span>
                  <div>
                    <a href="#"> xem ngay </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="l-4 product-items col ">
            <div className="img-product-items">
              <img src={project1} alt="" width={320} height={346} />
              <div className="product-items-body">
                <div className="#">
                  <span className="title-product-items"> Bàn Phím </span>
                  <span className="comments-product-items">
                    Kit Custom Phím Cơ ZT84 LED RGB, 3 Modes, Hotswap 5 chân,
                    Full Sidivcone
                  </span>
                  <span className="price-product-items d-l-b"> 999.000 ₫ </span>
                  <div>
                    <a href=""> xem ngay </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="l-4 product-items col ">
            <div className="img-product-items">
              <img src={project1} alt="" width={320} height={346} />
              <div className="product-items-body">
                <div className="#">
                  <span className="title-product-items"> Bàn Phím </span>
                  <span className="comments-product-items">
                    Kit Custom Phím Cơ ZT84 LED RGB, 3 Modes, Hotswap 5 chân,
                    Full Sidivcone
                  </span>
                  <span className="price-product-items d-l-b"> 999.000 ₫ </span>
                  <div>
                    <a href=""> xem ngay </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="l-4 product-items col ">
            <div className="img-product-items">
              <img src={project1} alt="" width={320} height={346} />
              <div className="product-items-body">
                <div className="#">
                  <span className="title-product-items"> Bàn Phím </span>
                  <span className="comments-product-items">
                    Kit Custom Phím Cơ ZT84 LED RGB, 3 Modes, Hotswap 5 chân,
                    Full Sidivcone
                  </span>
                  <span className="price-product-items d-l-b"> 999.000 ₫ </span>
                  <div>
                    <a href=""> xem ngay </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="l-4 product-items col ">
            <div className="img-product-items">
              <img src={project1} alt="" width={320} height={346} />
              <div className="product-items-body">
                <div className="#">
                  <span className="title-product-items"> Bàn Phím </span>
                  <span className="comments-product-items">
                    Kit Custom Phím Cơ ZT84 LED RGB, 3 Modes, Hotswap 5 chân,
                    Full Sidivcone
                  </span>
                  <span className="price-product-items d-l-b"> 999.000 ₫ </span>
                  <div>
                    <a href=""> xem ngay </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="l-4 product-items col ">
            <div className="img-product-items">
              <img src={project1} alt="" width={320} height={346} />
              <div className="product-items-body">
                <div className="#">
                  <span className="title-product-items"> Bàn Phím </span>
                  <span className="comments-product-items">
                    Kit Custom Phím Cơ ZT84 LED RGB, 3 Modes, Hotswap 5 chân,
                    Full Sidivcone
                  </span>
                  <span className="price-product-items d-l-b"> 999.000 ₫ </span>
                  <div>
                    <a href=""> xem ngay </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Directory;
