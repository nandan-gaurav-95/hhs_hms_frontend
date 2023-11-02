import React from "react";
import backgroundImage from "../../asset/images/HHMS_bG.jpg";
import "../../asset/homepage.css";
import Header from "../common/Header";
import { NavLink } from "react-router-dom";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBBtn as Button,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
export default function HomeMedicalAck() {
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className="background-wrapper" style={backgroundImageStyle}>
      <Header />
      <div className="card-container">
        <div className="card upper-card">
          <h3>Medical Ack</h3>
          <div className="proceed-button">
            <MDBDropdown>
              <MDBDropdownToggle
                tag="a"
                className="btn btn-dark"
               
              >
                proceed
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <NavLink to="/medicalack">
                  <MDBDropdownItem link>
                    <b>Medical Acknowledgment</b>
                  </MDBDropdownItem>
                </NavLink>
                <NavLink to="/viewmedicalack">
                  <MDBDropdownItem link>
                    <b>View Medical Acknowledgment</b>
                  </MDBDropdownItem>
                </NavLink>
              </MDBDropdownMenu>
            </MDBDropdown>
          </div>
        </div>
      </div>
    </div>
  );
}