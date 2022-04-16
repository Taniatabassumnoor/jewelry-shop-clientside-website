import React from "react";
import { NavLink } from "react-router-dom";

const HomePageBanner = () => {
  return (
    <div className="">
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousalstyle"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://i.ibb.co/5BB1TBM/Concept-of-wedding-accessories-with-wedding-ring-close-up.jpg"
              className="d-block w-100"
              alt="..."
              style={{ widch: "400px", height: "600px", objectFit: "cover" }}
            />
            <div
              className="carousel-caption d-none d-md-block logo"
              style={{ paddingBottom: "200px", color: "black" }}
            >
              <small>Variety Of Color</small>
              <h1>"Elegant & Royal Collection"</h1>
              <NavLink to="/explore">
                <button
                  style={{
                    color: "#fff",
                    flexBasis: "initial",
                    minHeight: "40px",
                    fontFamily: "Sans-serif",
                    fontSize: "15px",
                    textTransform: "capitalize",
                    letterSpacing: 1.5,
                    backgroundColor: "#efcf4f",
                    borderStyle: "solid",
                    borderWidth: "1px 1px 1px 1px",
                    borderColor: "#01479b",
                    paddingTop: 0,
                    paddingBottom: 0,
                    border: "none",
                    padding: "12px 24px",
                    display: "inlineBlock",
                    lineHeight: 1,
                    borderRadius: "5px",
                    fill: "#FFFFFF",
                    textAlign: "center",
                    fontWeight: 700,
                    whiteSpace: "nowrap",

                    width: "auto",
                    mb: 2,
                    overflow: "visible",
                  }}
                >
                  View More
                </button>
              </NavLink>
            </div>
          </div>

          <div className="carousel-item ">
            <img
              src="https://i.ibb.co/18QF1xJ/closeup-beautiful-wedding-jewelry-set.jpg"
              className="d-block w-100"
              style={{ widch: "400px", height: "600px", objectFit: "cover" }}
              alt="..."
            />

            <div
              className="carousel-caption d-none  d-md-block logo text-dark"
              style={{ paddingBottom: "200px" }}
            >
              <small>Variety Of Color</small>
              <h1>"Elegant & Royal Collection"</h1>
              <NavLink to="/explore">
                <button
                  style={{
                    color: "#fff",
                    flexBasis: "initial",
                    minHeight: "40px",
                    fontFamily: "Sans-serif",
                    fontSize: "15px",
                    textTransform: "capitalize",
                    letterSpacing: 1.5,
                    backgroundColor: "#efcf4f",
                    borderStyle: "solid",
                    borderWidth: "1px 1px 1px 1px",
                    borderColor: "#01479b",
                    paddingTop: 0,
                    paddingBottom: 0,
                    border: "none",
                    padding: "12px 24px",
                    display: "inlineBlock",
                    lineHeight: 1,
                    borderRadius: "5px",
                    fill: "#FFFFFF",
                    textAlign: "center",
                    fontWeight: 700,
                    whiteSpace: "nowrap",

                    width: "auto",
                    mb: 2,
                    overflow: "visible",
                  }}
                >
                  View More
                </button>
              </NavLink>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://i.ibb.co/3kjFzHF/pexels-karen-la-rk-boshoff-7436102.jpg"
              className="d-block w-100"
              style={{ widch: "400px", height: "600px", objectFit: "cover" }}
              alt="..."
            />
            <div
              className="carousel-caption d-none d-md-block logo text-dark "
              style={{ paddingBottom: "200px" }}
            >
              <small>Variety Of Color</small>
              <h1>"Elegant & Royal Collection"</h1>
              <NavLink to="/explore">
                <button
                  style={{
                    color: "#fff",
                    flexBasis: "initial",
                    minHeight: "40px",
                    fontFamily: "Sans-serif",
                    fontSize: "15px",
                    textTransform: "capitalize",
                    letterSpacing: 1.5,
                    backgroundColor: "#efcf4f",
                    borderStyle: "solid",
                    borderWidth: "1px 1px 1px 1px",
                    borderColor: "#01479b",
                    paddingTop: 0,
                    paddingBottom: 0,
                    border: "none",
                    padding: "12px 24px",
                    display: "inlineBlock",
                    lineHeight: 1,
                    borderRadius: "5px",
                    fill: "#FFFFFF",
                    textAlign: "center",
                    fontWeight: 700,
                    whiteSpace: "nowrap",

                    width: "auto",
                    mb: 2,
                    overflow: "visible",
                  }}
                >
                  View More
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HomePageBanner;
