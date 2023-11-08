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

const HomeVoucher = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      };

      const handleAddVoucher = () => {
        navigate("/voucher");
      };
      const handleViewVoucher = () => {
        navigate("/viewvoucher");
      };
  return (
    <div className="background-wrapper" style={backgroundImageStyle}>
    <Header />

      <div className="centered-container">
      <div className="card upper-card">
            <h3>Add Vouchers Details</h3>
            <div className="proceed-button">
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="btn btn-dark">
                  proceed
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <NavLink to="/voucher">
                    <MDBDropdownItem link>
                      <b>Voucher</b>
                    </MDBDropdownItem>{" "}
                  </NavLink>
                  <NavLink to="/viewvoucher">
                    <MDBDropdownItem link>
                      <b>View Voucher</b>
                    </MDBDropdownItem>{" "}
                  </NavLink>
                </MDBDropdownMenu>
              </MDBDropdown>
            </div>
          </div>   
      </div>
  </div>
  )
}

export default HomeVoucher;
