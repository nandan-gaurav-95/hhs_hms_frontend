import React from "react";
import { Navbar } from "react-bootstrap";
import { MDBContainer } from "mdb-react-ui-kit";
import logo from "../../asset/images/hhs_logo.png";
import "../../asset/homepage.css";
import { Link } from "react-router-dom";
import "../../asset/style.css";

export default function Header() {
  // const h1Style = {
  // };

  return (
    <Navbar className="navbar">
      <Navbar.Brand href="#home" className="mx-3">
        <Link to="/">
          <img
            src={logo}
            width="140"
            height="90"
            className="align-top"
            alt="Brand logo"
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Brand href="#home" className="mx-3">
        <div className="headertext">
          <h1 className="h1-custom-style">
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