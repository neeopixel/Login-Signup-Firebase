import React from "react";
import { Outlet } from "react-router-dom";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../images/logo.svg";

export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/Login-Signup-Firebase">
            <img
              alt=""
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            React Bootstrap
          </Navbar.Brand>
        </Container>
        <Container className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link href="/Login-Signup-Firebase/Dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/Login-Signup-Firebase/Signin">Sign In</Nav.Link>
            <Nav.Link href="/Login-Signup-Firebase/SignUp">Sign Up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}
