import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="text-center text-lg-start bg-dark text-light">
        {/* <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div  className=" d-none d-lg-block"></div>
          <div>
            
          </div>
        </section> */}
        <section className="">
          <div className="container text-center text-md-start p-4 mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Twinkle Stone
                </h6>
                <p>
                Are you searching best designer Jewellary collection ??? We are here to provide you best designer all kind of jewellary collection & will make you happy.
                </p>

                <Link to="/" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="/" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="/" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </Link>
            <Link to="/" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="/" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </Link>
            <Link to="/" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </Link>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset footer">
                  Diamond Rings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset footer">
                  Earrings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset footer">
                  Necklace
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset footer">
                  Bracelets
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset footer">
                  Armlets
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset footer">
                  Anklets
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Information</h6>
                <p>
                  <a href="#!" className="text-reset footer">
                    Accounts
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset footer">
                    Terms
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset footer">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset footer">
                    Help
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset footer">
                    Questions
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset footer">
                    Membership
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                <i class="fas fa-map-marker-alt"></i>  503 Old Buffalo Street Northwest #205, New York-3087.
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  twinklestone@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 01 656 567 45
                </p>
                <img style={{width: "50%"}} src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2022 Copyright: Twinkle Stone
        </div>
      </footer>
    </div>
  );
};

export default Footer;