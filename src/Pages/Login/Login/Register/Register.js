
import { Container, Grid, CircularProgress, Alert } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";

const Register = () => {
  const { user, registerUser, isLoading, error } = useAuth();
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const handleOnchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("your password did not match");
      return;
    }
    registerUser(
      loginData?.email,
      loginData?.password,
      loginData.name,
      history
    );
    e.preventDefault();
  };
    return (
        <Container style={{ marginTop: "100px" }}>
        <div className="container">
          <Grid container spacing={2}>
            <Grid sx={{ mt: 8 }} item xs={12} md={6} className="pe-5">
              {!isLoading && (
                <form onSubmit={handleLoginSubmit} className="login-form mb-5">
                  <h4>Please Register</h4>
                  <input
                    required
                    placeholder="Your Name"
                    id="standard-basic"
                    label="Your Name"
                    name="name"
                    onChange={handleOnchange}
                  />{" "}
                  <br />
                  <input
                    required
                    placeholder="Your Email"
                    sx={{ width: 1, m: 2 }}
                    id="standard-basic"
                    type="email"
                    name="email"
                    onChange={handleOnchange}
                  />{" "}
                  <br />
                  <input
                    required
                    placeholder="Your Password"
                    id="standard-basic"
                    type="password"
                    label="Your password"
                    variant="standard"
                    name="password"
                    onChange={handleOnchange}
                  />{" "}
                  <br />
                  <input
                    required
                    placeholder="Retype Your Password"
                    type="password"
                    label="Retype Your password"
                    name="password2"
                    onChange={handleOnchange}
                  />{" "}
                  <br />
                  <button type="submit" className="btn btn-dark">
                    Register
                  </button>
                  <NavLink
                    to="/login"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: "bolder",
                      paddingLeft: "10px",
                    }}
                  >  <br/>
                    Already Register ? Please Login
                  </NavLink>
                </form>
              )}
              {isLoading && <CircularProgress />}
              {user?.email && (
                <Alert severity="success">User Created Successfully </Alert>
              )}
              {error && <Alert severity="error">{error} </Alert>}
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                style={{width: '80%', marginTop: '8%'}}
              
                src="https://i.ibb.co/znT8rGD/login.png"
                alt=""
              />
            </Grid>
          </Grid>
        </div>
      </Container>
    );
};

export default Register;