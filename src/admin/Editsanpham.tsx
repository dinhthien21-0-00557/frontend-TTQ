import React, { useEffect, useState } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import logo from "../assets/img/logo.jpg";
import { firestore } from "../data/firebase";

const EditSanpham: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [idInput, setIdInput] = useState("");
  const [ten, setTen] = useState("");
  const [images, setImages] = useState("");
  const [loai, setLoai] = useState("");
  const [thuongHieu, setThuongHieu] = useState("");
  const [moTa, setMoTa] = useState("");
  const [gia, setGia] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productRef = firestore.collection("PRODUCT").doc(id);
        const productDoc = await productRef.get();

        if (productDoc.exists) {
          const productData = productDoc.data();
          if (productData) {
            // Kiểm tra xem productData có tồn tại hay không
            setIdInput(productData.PRODUCT_ID);
            setTen(productData.TEN_SP);
            setImages(productData.IMAGES);
            setLoai(productData.LOAI);
            setThuongHieu(productData.THUONG_HIEU);
            setMoTa(productData.MOTA);
            setGia(productData.DON_GIA);
          }
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      PRODUCT_ID: idInput,
      TEN_SP: ten,
      IMAGES: images,
      LOAI: loai,
      THUONG_HIEU: thuongHieu,
      MOTA: moTa,
      DON_GIA: gia,
    };

    try {
      await firestore.collection("PRODUCT").doc(id).update(data);
      navigate("/sanpham");
    } catch (error) {
      console.error("Error updating product:", error);
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
                          Sản phẩm đã bán
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
                        value={idInput}
                        readOnly
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
                        value={ten}
                        onChange={(e) => setTen(e.target.value)}
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
                        value={images}
                        onChange={(e) => setImages(e.target.value)}
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
                        value={loai}
                        onChange={(e) => setLoai(e.target.value)}
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
                        value={thuongHieu}
                        onChange={(e) => setThuongHieu(e.target.value)}
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
                        value={moTa}
                        onChange={(e) => setMoTa(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="gia" className="form-label text-dark">
                        Giá
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="gia"
                        name="gia"
                        required
                        value={gia}
                        onChange={(e) => setGia(e.target.value)}
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
    </>
  );
};

export default EditSanpham;
