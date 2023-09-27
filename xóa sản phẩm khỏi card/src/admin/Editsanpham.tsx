import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import logo from "../assets/img/logo.jpg";
import firebase from "firebase/app";
import { firestore } from "../data/firebase";

const EditSanpham: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const idInput = document.getElementById("id") as HTMLInputElement;
    const tenInput = document.getElementById("ten") as HTMLInputElement;
    const imagesInput = document.getElementById("images") as HTMLInputElement;
    const loaiInput = document.getElementById("loai") as HTMLInputElement;
    const thuonghieuInput = document.getElementById(
      "thuonghieu"
    ) as HTMLInputElement;
    const motaInput = document.getElementById("mota") as HTMLTextAreaElement;
    const giaInput = document.getElementById("gia") as HTMLInputElement;

    const data = {
      PRODUCT_ID: idInput.value,
      TEN_SP: tenInput.value,
      IMAGES: imagesInput.value,
      LOAI: loaiInput.value,
      THUONG_HIEU: thuonghieuInput.value,
      MOTA: motaInput.value,
      DON_GIA: giaInput.value,
    };

    try {
      await firestore.collection("PRODUCT").doc(id).update(data);
      setSuccessMessage("Sửa sản phẩm thành công!");
      console.log("Sửa sản phẩm thành công!");
    } catch (error) {
      console.error("Error updating product:", error);
      setSuccessMessage("Đã xảy ra lỗi khi cập nhật sản phẩm.");
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
                    <ul className="nav-second-level ms-5" aria-expanded="false">
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
                        <NavLink className="nav-link" to="/thongtindathang">
                          Thông tin đặt hàng
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="nav-link" to="#">
                          Edit sản phẩm
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
                    Edit sản phẩm
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
                  <form className="d-flex flex-column">
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
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-secondary align-self-end"
                      style={{ width: 400 }}
                      onClick={handleSubmit}
                    >
                      Sửa Sản Phẩm
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div style={{ height: 200 }}></div>
          </main>
        </div>
      </div>
      {successMessage && (
        <div className="alert alert-success" role="alert">
          {successMessage}
        </div>
      )}
    </>
  );
};

export default EditSanpham;
