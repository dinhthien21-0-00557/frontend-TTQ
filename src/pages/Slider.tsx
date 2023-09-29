import * as React from "react";

import banphimsale1 from "../assets/img/banphimsale1.jpg";
import banphimsale2 from "../assets/img/bàn phím sale 2.jpg";
import banphim3 from "../assets/img/bàn phím sale 3.jpg";

const Slider = () => {
  return (
    <section className="sliders-color">
      <div className="container">
        <div
          id="carouselExample"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="6000">
              <img src={banphimsale1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={banphimsale2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={banphim3} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slider;
