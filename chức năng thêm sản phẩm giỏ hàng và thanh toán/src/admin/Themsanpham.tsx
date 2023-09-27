import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.jpg";
import firebase from "firebase/app";
import { firestore } from "../data/firebase";

interface FormData {
  id: string;
  ten: string;
  images: string;
  loai: string;
  thuonghieu: string;
  mota: string;
  gia: string;
}

const Themsanpham: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    id: "",
    ten: "",
    images: "",
    loai: "",
    thuonghieu: "",
    mota: "",
    gia: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const addProduct = (product: {
    DON_GIA: string;
    LOAI: string;
    IMAGES: string;
    MOTA: string;
    PRODUCT_ID: string;
    TEN_SP: string;
    THUONG_HIEU: string;
  }) => {
    const productsRef = firestore.collection("PRODUCT");
    productsRef.add(product);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const product = {
      DON_GIA: formData.gia,
      LOAI: formData.loai,
      MOTA: formData.mota,
      IMAGES: formData.images,
      PRODUCT_ID: formData.id,
      TEN_SP: formData.ten,
      THUONG_HIEU: formData.thuonghieu,
    };

    addProduct(product);
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
                    <ul className="nav-second-level ms-5" aria-expanded="false">
                      <li>
                        <NavLink className="nav-link" to="/sanpham">
                          Sản phẩm
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="nav-link" to="#">
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
                    Thêm Sản Phẩm
                  </h2>
                </div>
                <div className="col text-end me-4 pt-3">
                  Pages &gt;{" "}
                  <span className="text-info  align-middle">Thêm Sản Phẩm</span>
                </div>
              </div>
            </div>
            <div className="p-3">
              <div className=" border border border-dark ">
                <div className=" bg-white p-4">
                  <form className="d-flex flex-column" onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="id" className="form-label text-dark">
                        IDSP
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="id"
                        name="id"
                        required
                        value={formData.id}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="ten" className="form-label text-dark">
                        Tên sản phẩm
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="ten"
                        name="ten"
                        required
                        value={formData.ten}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="images" className="form-label text-dark">
                        Hình ảnh
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="images"
                        name="images"
                        required
                        value={formData.images}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="loai" className="form-label text-dark">
                        Loại
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="loai"
                        name="loai"
                        required
                        value={formData.loai}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="thuonghieu"
                        className="form-label text-dark"
                      >
                        Thương Hiệu
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="thuonghieu"
                        name="thuonghieu"
                        required
                        value={formData.thuonghieu}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="mota" className="form-label text-dark">
                        Mô Tả
                      </label>
                      <textarea
                        className="form-control"
                        id="mota"
                        name="mota"
                        required
                        value={formData.mota}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="gia" className="form-label text-dark">
                        Giá
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="gia"
                        name="gia"
                        required
                        value={formData.gia}
                        onChange={handleChange}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-secondary align-self-end"
                      style={{ width: 400 }}
                    >
                      Thêm Sản Phẩm
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div style={{ height: 200 }}></div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Themsanpham;
