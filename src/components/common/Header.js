import React from "react";
import { Navbar } from "react-bootstrap";
import { MDBContainer } from "mdb-react-ui-kit";
import logo from "../../asset/images/hhslogo.jpg";
import "../../asset/homepage.css";
export default function Header() {
  
    // const gradientStyle = {
    //   backgroundImage: "linear-gradient(to top right, #0a8270, #7cff6b)",
    //   WebkitBackgroundClip: "text",
    //   // color: "transparent",
    //   letterSpacing: "1px", 
    //   fontFamily: "Arial Black, sans-serif",
    // };
  return (
    <Navbar className="navbar justify-content-between">
      <Navbar.Brand href="#home" className=" mx-3">
        <img
          src={logo}
          width="140"
          height="90"
          className=" align-top"
          alt="Brand logo"
        />
        <span className="hhshms ml-2">
          <h1 >Hazrath Hameed Shah Hazrath Muhib Shah</h1>
          <p style={{textAlign:"center",
                    fontFamily: "Arial Black, sans-serif",
        }}>(HHS-HMS 2018)</p>
        </span>
      </Navbar.Brand>
    </Navbar>
  );
}