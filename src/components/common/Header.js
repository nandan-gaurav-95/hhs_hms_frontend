import React from "react";
import { Navbar } from "react-bootstrap";
import { MDBContainer } from "mdb-react-ui-kit";
import logo from "../../asset/images/hhslogo.jpg";
import "../../asset/homepage.css";
export default function Header() {
  
    const gradientStyle = {
      backgroundImage: "linear-gradient(to right, #ff8a00, #da1b60, #ff0066)",
      WebkitBackgroundClip: "text",
      color: "transparent",
      letterSpacing: "1px", 
      fontFamily: "Arial Black, sans-serif",
    };
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
        <span className="ml-2">
          <h1 style={gradientStyle}>HHS HMS</h1>
        </span>
      </Navbar.Brand>
    </Navbar>
  );
}