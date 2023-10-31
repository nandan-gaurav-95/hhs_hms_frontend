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
export default function HomeParking() {
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
          <h3>Parking</h3>
          <div className="proceed-button">
            <MDBDropdown>
              <MDBDropdownToggle
                tag="a"
                className="btn btn-dark"
               
              >
                proceed
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                  <NavLink to="/parking">
                    <MDBDropdownItem link>
                      <b>Parking</b>
                    </MDBDropdownItem>{" "}
                  </NavLink>
                  <NavLink to="/viewparking">
                    <MDBDropdownItem link>
                      <b>View Parking</b>
                    </MDBDropdownItem>{" "}
                  </NavLink>
                </MDBDropdownMenu>
            </MDBDropdown>
          </div>
        </div>
      </div>
    </div>
  );
}