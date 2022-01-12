import React, { useState } from "react";
import "./Login.css";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink, useLocation, useHistory } from "react-router-dom";

import { CircularProgress } from "@mui/material";
import useAuth from "../../../../Hooks/useAuth";
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, isLoading ,error} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const handleOnchange = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = { ...loginData };
      newLoginData[field] = value;
      setLoginData(newLoginData);
    };
    const handleLoginSubmit = (e) => {
      loginUser(loginData?.email, loginData?.password, location, history);
      e.preventDefault();
    };
    return (
        <div className="container mb-5">
      <Container style={{ marginTop: "100px" }}>
        <Row  lg={2}>
          <Col style={{marginTop:"10%"}} xs={12} md={6}>
            {!isLoading && (
              <form onSubmit={handleLoginSubmit} className="login-form">
                <h4>Login Form</h4>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  onChange={handleOnchange}
                />
                <input
                  required
                  placeholder="Your password"
                  type="password"
                  name="password"
                  onChange={handleOnchange}
                />{" "}
                <br />
                <button className="btn btn-dark" type="submit">
                  Login
                </button>{" "}
                <br />
                <NavLink
                  to="/register"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "bolder",
                    paddingLeft: "10px",
                  }}
                >
                  New User? Please Register
                </NavLink>
              </form>
            )}

            {isLoading && <CircularProgress />}
            {error }
          </Col>
          <Col item xs={12} md={6}>
            <img
            style={{width: '80%', marginTop: '8%'}}
              
              src="https://i.ibb.co/znT8rGD/login.png"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
    );
};

export default Login;