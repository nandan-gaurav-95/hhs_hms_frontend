import React from "react";
import { Navbar } from "react-bootstrap";
import { MDBContainer } from "mdb-react-ui-kit";
import logo from "../../asset/images/hhslogo.jpg";


export default function Header() {

  return (
    <Navbar className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
      {/* logo */}
      <Navbar.Brand href="#home" className="d-flex justify-content-start mx-3">
        <img
          src={logo}
          width="45"
          height="45"
          className=" align-top"
          alt="Brand logo"
        />
      </Navbar.Brand>
      {/* texpidea text */}
      <Navbar.Brand className="text-center text-secondary">
        <h3>HHS HMS Complex</h3>
      </Navbar.Brand>

      {/* search bar */}
      {/* <Navbar.Brand className="d-flex form-inputs flex-row align-content-center justify-content-center w-75">
        <div className="d-flex">
       <input type="text" className="form-control w-100" style={{'borderRadius':'5px 0 0 5px' }} />
        <div className="input-group-append">
          <button className="btn btn-primary w-100" style={{'borderRadius':'0 5px 5px 0' }}>
            <i className="fas fa-search ">
              <FaSistrix />
            </i>
          </button>
        </div>
       </div>

      </Navbar.Brand> */}

      {/* login profile picture */}
      {/* <Navbar.Brand>
        <MDBContainer className="d-flex justify-content-center">
          <img
            src={avatar}
            className="rounded-circle shadow-4"
            style={{ width: "50px" }}
            alt="Avatar"
          />
        </MDBContainer>
      </Navbar.Brand> */}
    </Navbar>
  );
}
