import * as React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { firestore } from "../data/firebase";
import logo from "../assets/img/logo.jpg";

interface Product {
  id: string;

  IMAGES: string;
  PRODUCT_ID: string;
  TEN_SP: string;
  LOAI: string;
  THUONG_HIEU: string;
  MOTA: string;
  DON_GIA: string;
}

const Sanpham = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const snapshot = await firestore.collection("PRODUCT").get();
        const productsData: Product[] = snapshot.docs.map((doc: any) => ({
          id: doc.id,
          IMAGES: doc.data().IMAGES,
          PRODUCT_ID: doc.data().PRODUCT_ID,
          TEN_SP: doc.data().TEN_SP,
          LOAI: doc.data().LOAI,
          THUONG_HIEU: doc.data().THUONG_HIEU,
          MOTA: doc.data().MOTA,
          DON_GIA: doc.data().DON_GIA,
        }));
        productsData.forEach((product) => {
          if (!product.PRODUCT_ID) {
            product.PRODUCT_ID = "0";
          }
        });

        productsData.sort(
          (a, b) => parseInt(a.PRODUCT_ID) - parseInt(b.PRODUCT_ID)
        );
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);
  const handleDelete = async (id: string) => {
    try {
      await firestore.collection("PRODUCT").doc(id).delete();
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

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
                    <ul className="nav-second-level ms-5">
                      <li>
                        <NavLink className="nav-link" to="#">
                          Sản phẩm
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="nav-link" to="/Themsanpham">
                          Thêm sản phẩm
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="nav-link" to="/thongtindathang">
                          Sản phẩm dã bán
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
            <div className=" pt-5">
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

            <div className="card-body pb-5 text-center p-4">
              <table className="table table-bordered border border border-dark rounded-5">
                <thead>
                  <tr>
                    <th>IDSP</th>
                    <th>Ảnh</th>
                    <th>Tên SP</th>
                    <th>Loại</th>
                    <th>Thương hiệu</th>
                    <th>Mô tả</th>
                    <th>Giá</th>
                    <th className="text-nowrap">Hoạt động</th>
                  </tr>
                </thead>
                <tbody className="align-middle">
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td>{product.PRODUCT_ID}</td>
                      <td>
                        <img
                          src={product.IMAGES}
                          alt=""
                          style={{ width: "100px", maxHeight: "70px" }}
                        />
                      </td>
                      <td>{product.TEN_SP}</td>
                      <td>{product.LOAI}</td>
                      <td>{product.THUONG_HIEU}</td>
                      <td>{product.MOTA}</td>
                      <td>{product.DON_GIA}</td>
                      <td className="text-nowrap">
                        <NavLink
                          to={`/editsanpham/${product.id}`}
                          className="btn btn-warning btn-sm"
                        >
                          Edit
                        </NavLink>
                        <button
                          className="btn btn-danger btn-sm delete"
                          onClick={() => handleDelete(product.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
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
