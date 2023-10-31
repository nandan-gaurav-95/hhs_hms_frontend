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

const HomeInventory = () => {
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
            <h3>Inventory Management</h3>
            <MDBDropdown>
              <MDBDropdownToggle tag="a" className="btn btn-dark">
                proceed
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <NavLink to="/addinventory">
                  <MDBDropdownItem link>
                    <b>Add Inventory</b>
                  </MDBDropdownItem>
                </NavLink>
                <NavLink to="/showinventory">
                  <MDBDropdownItem link>
                    <b>View Inventory</b>
                  </MDBDropdownItem>
                </NavLink>
                <NavLink to="/distributeinventory">
                  <MDBDropdownItem link>
                    <b>Distribute Inventory</b>
                  </MDBDropdownItem>
                </NavLink>
              </MDBDropdownMenu>
            </MDBDropdown>
          </div>
      </div>
  </div>
  )
}

export default HomeInventory
