import React from "react";
import { Navbar } from "react-bootstrap";
import { MDBContainer } from "mdb-react-ui-kit";
import logo from "../../asset/images/hhslogo.jpg";
import "../../asset/homepage.css";
export default function Header() {
  
    const gradientStyle = {
      backgroundImage: "linear-gradient(to top right, #0c332d)",
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
          width="140"
          height="90"
          className=" align-top"
          alt="Brand logo"
        />
        <span className="ml-2">
          <h1 style={gradientStyle}>Hazrath Hameed Shah Hazrath Muhib Shah</h1>
          <p style={{textAlign:"center",
                    fontFamily: "Arial Black, sans-serif",
        }}>(HHS-HMS 2018)</p>
        </span>
      </Navbar.Brand>
    </Navbar>
  );
}