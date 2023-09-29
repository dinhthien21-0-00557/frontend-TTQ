import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { firestore } from "../data/firebase";
import Header from "./Header";
import Bodyheader from "./Bodyheader";
import Menu from "./Menu";
import Footercard from "./Footercard";

interface Product {
  TEN_SP: string;
  LOAI: string;
  GIA: string;
  IMAGES: string;
  id: string;
}

const Mouse = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const snapshot = await firestore
          .collection("PRODUCT")
          .where("LOAI", "==", "Chuột Gaming")
          .get();
        const productsData: Product[] = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            TEN_SP: data.TEN_SP,
            LOAI: data.LOAI,
            GIA: data.GIA,
            IMAGES: data.IMAGES,
          };
        });
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleClick = (id: string) => {
    navigate(`/detai/${id}`);
  };
  return (
    <>
      <Header />
      <Bodyheader />
      <Menu />
      <section className="directory-color">
        <div className="container">
          <div className="headdline">
            <h3>Chuột Gaming</h3>
          </div>
          <div className="product-form row j-b-c-t">
            {products.map((product, index) => (
              <div className="l-4 product-items col" key={index}>
                <div className="img-product-items">
                  <img src={product.IMAGES} alt={product.TEN_SP} />
                  <div className="product-items-body">
                    <div className="">
                      <span className="title-product-items">
                        {product.LOAI}
                      </span>
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
                          onClick={() => handleClick(product.id)}
                        >
                          <i className="bi-plus-lg" /> Xem Ngay
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footercard />
    </>
  );
};

export default Mouse;
