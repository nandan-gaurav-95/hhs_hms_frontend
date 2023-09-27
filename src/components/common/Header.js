import React from "react";
import { Navbar } from "react-bootstrap";
import { MDBContainer } from "mdb-react-ui-kit";
import logo from "../../asset/images/hhslogo.jpg";
import "../../asset/homepage.css";
export default function Header() {
  return (
    <Navbar className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
      <Navbar.Brand href="#home" className="d-flex justify-content-start mx-3">
        <img
          src={logo}
          width="90"
          height="60"
          className=" align-top"
          alt="Brand logo"
        />
      </Navbar.Brand>

      <Navbar.Brand className="text-center text-secondary mx-auto ">
        <h1 className="custom-text">HHS HMS Complex</h1>
      </Navbar.Brand>
    </Navbar>
  );
}