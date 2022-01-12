import React from 'react';
import './Headers.css'
import {
  Container,
  Nav,
  Navbar
} from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
const Headers = () => {
  const { user, logout } = useAuth();
  const navDesign = {
    color: "red",
  };
    return (
<Navbar fixed="top" bg="dark" expand="lg" className="nav">
      <Container fluid>
        <Navbar.Brand
          href="#"
          className="navStyle logo"
          style={{ color: "white" }}
        >
          Twinkle Stone
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink className="navStyle" activeStyle={navDesign} to="/home">
              Home
            </NavLink>
            <NavLink
              className="navStyle"
              activeStyle={navDesign}
              to="/explore"
            >
              Explore Products
            </NavLink>
            <NavLink className="navStyle" activeStyle={navDesign} to="/about">
              About
            </NavLink>
            {user.email && <NavLink className="navStyle" activeStyle={navDesign} to="/dashboard">
              Dashboard
            </NavLink>}
          </Nav>
          <Nav>
          {user.displayName &&
                <div>
                  <img src={user?.image} alt="" />
                  <button className="btn me-3  text-light p-2" style={{ height: '50px' }}>{user.displayName}</button>
                </div>
              }         
            {user.email ? (
              <button
                onClick={logout}
                className="btn btn-outline-light rounded-pill"
              >
                Logout
              </button>
            ) : (
              <NavLink className="navStyle" activeStyle={navDesign} to="/login">
                <button className="btn btn-outline-light rounded-pill">
                  Login
                </button>
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Headers;