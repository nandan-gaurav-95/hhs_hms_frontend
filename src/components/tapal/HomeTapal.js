import React from "react";

import backgroundImage from "../../asset/images/HHMS_bG.jpg"
import "../../asset/homepage.css";
import Header from "../common/Header";
import { NavLink } from "react-router-dom";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";

const HomeTapal = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      };
  return (
    <div className="background-wrapper" style={backgroundImageStyle}>
    <Header />

    <div className="card upper-card">
            <h3>Tapal</h3>
            <div className="proceed-button">
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="btn btn-dark">
                  proceed
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <NavLink to="/addtapal">
                    <MDBDropdownItem link>
                      <b>Add Tapal</b>
                    </MDBDropdownItem>{" "}
                  </NavLink>
                  <NavLink to="/viewtapal">
                    <MDBDropdownItem link>
                      <b>View Tapal</b>
                    </MDBDropdownItem>
                  </NavLink>
                </MDBDropdownMenu>
              </MDBDropdown>
            </div>
          </div>
  </div>
  )
}

export default HomeTapal;
