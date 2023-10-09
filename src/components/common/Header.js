import React from "react";
import { Navbar } from "react-bootstrap";
import { MDBContainer } from "mdb-react-ui-kit";
import logo from "../../asset/images/hhs_logo.png";
import "../../asset/homepage.css";

export default function Header() {
  const h1Style = {
    marginRight: "40px",  
      padding: "0 130px",    
    paddingRight: "20px",
    textShadow: "2px 2px 0 #FFFACD, -2px -2px 0 #FFFACD, 2px -2px 0 #FFFACD, -2px 2px 0 #FFFACD"
  };

  return (
    <Navbar className="navbar">
      <Navbar.Brand href="#home" className="mx-3">
        <img
          src={logo}
          width="140"
          height="90"
          className="align-top"
          alt="Brand logo"
        />
      </Navbar.Brand>
      <Navbar.Brand href="#home" className="mx-3">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h1 className="text-center" style={h1Style}>
            Hazrath Hameed Shah Hazrath Muhib Shah
          </h1>
          {/* <p
            style={{
              textAlign: "center",
              fontFamily: "Arial Black, sans-serif",
            }}
          >
            (HHS-HMS 2018)
          </p> */}
        </div>
      </Navbar.Brand>
    </Navbar>
  );
}