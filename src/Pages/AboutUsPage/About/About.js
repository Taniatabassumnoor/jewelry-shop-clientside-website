import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Col, Row } from "react-bootstrap";
import './About.css';
const About = () => {
    return (
        <div>
      <div className="about margin">
        <div className="about1">
          <h2 className="text-light">About Us</h2>
        </div>
      </div>
      <div className="container">
        <Row lg={2} sm={12} className="mt-5">
          <Col sm={12}>
            <div className="img-hover-zoom">
              <img
              style={{width:"50%"}}
                className="img-fluid"
                src="https://i.ibb.co/k5RnwdH/Person-Image.png"
                alt=""
              />
            </div>
          </Col>
          <Col className='mt-5' sm={12}>
            <span style={{marginBottom:"5%"}}>CEO of Twinkle Stone</span>
            <h3 style={{marginBottom:"5%"}}> Silvia Marron</h3>
            <p  style={{marginBottom:"20%"}}>
            Are you searching best designer Jewellary collection ??? We are here to provide you best designer all kind of jewellary collection & will make you happy.Are you searching best designer Jewellary collection ??? We are here to provide you best designer all kind of jewellary collection & will make you happy.Are you searching best designer Jewellary collection ??? We are here to provide you best designer all kind of jewellary collection & will make you happy.
            </p>
          </Col>
        </Row>
        <Row lg={2} className="mt-5">
          <Col sm={12}>
            <span>Designer Head of Twinkle Stone</span>
            <h3>Victoria Paul</h3>
            <p>
            Are you searching best designer Jewellary collection ??? We are here to provide you best designer all kind of jewellary collection & will make you happy.Are you searching best designer Jewellary collection ??? We are here to provide you best designer all kind of jewellary collection & will make you happy.Are you searching best designer Jewellary collection ??? We are here to provide you best designer all kind of jewellary collection & will make you happy.
            </p>
          </Col>
          <Col sm={12}>
            <div className="img-hover-zoom">
              <img
                className="img-fluid"
                src="https://i.ibb.co/zRvr1kC/Studio-portrait-of-successful-young-Caucasian-businesswoman-wearing-costume-and-glasses-standing-wit.jpg"
                alt=""
              />
            </div>
          </Col>
        </Row>
        <Row lg={2} className="mt-5">
          <Col sm={12}>
            <div className="img-hover-zoom">
              <img
                className="img-fluid"
                src="https://i.ibb.co/7yRy3Lx/Picture-of-cheerful-curly-business-girl-wearing-glasses-over-white-background.jpg"
                alt=""
              />
            </div>
          </Col>
          <Col sm={12}>
            <span>Cheif Manager of Twinkle Stone</span>
            <h3>Hillary Jabousha</h3>
            <p>
            Are you searching best designer Jewellary collection ??? We are here to provide you best designer all kind of jewellary collection & will make you happy.Are you searching best designer Jewellary collection ??? We are here to provide you best designer all kind of jewellary collection & will make you happy.Are you searching best designer Jewellary collection ??? We are here to provide you best designer all kind of jewellary collection & will make you happy.
            </p>
          </Col>
        </Row>
        <Row lg={2} className="mt-5 mb-5">
          <Col sm={12}>
            <span>Consultant</span>
            <h3>Catherine Morgan</h3>
            <p>
            Are you searching best designer Jewellary collection ??? We are here to provide you best designer all kind of jewellary collection & will make you happy.Are you searching best designer Jewellary collection ??? We are here to provide you best designer all kind of jewellary collection & will make you happy.Are you searching best designer Jewellary collection ??? We are here to provide you best designer all kind of jewellary collection & will make you happy.
            </p>
          </Col>
          <Col sm={12}>
            <div className="img-hover-zoom">
              <img
                className="img-fluid"
                src="https://i.ibb.co/j6StwRz/Pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction-at-camera-b.jpg"
                alt=""
              />
            </div>
          </Col>
        </Row>
      </div>
      {/* another section */}
      {/* <div className="about-banner text-light mt-5 mb-5 p-5 ">
        <h5 className=" text-center m-5">Reasons to shop with us</h5>
        <div className="container">
          <Row lg={3} className="">
            <Col sm={12}>
              <h6>24/7 FRIENDLY SUPPORT</h6>
              <span>
                Our support team always ready for you to 7 days a week
              </span>
            </Col>
            <Col sm={12}>
              <h6>7 DAYS EASY RETURN</h6>
              <span>
                Product any fault within 7 days for an immediately exchange
              </span>
            </Col>
            <Col sm={12}>
              <h6>QUALITY GUARANTEED</h6>
              <span>
                If your product aren't perfect return then for a full refund
              </span>
            </Col>
          </Row>
        </div>
      </div> */}
    </div>
        
    );
};

export default About;