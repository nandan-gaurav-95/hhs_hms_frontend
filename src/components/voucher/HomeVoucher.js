import React from "react";

import backgroundImage from "../../asset/images/HHMS_bG.jpg"
import "../../asset/homepage.css";
import Header from "../common/Header";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";

const HomeVoucher = () => {
  const navigate = useNavigate();

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
            <Button
            tag="a"
            className="btn btn-dark"
            onClick={handleAddVoucher}
          >
            Proceed
          </Button>
  
          </div> 
          <div className="card upper-card">
          <h3>View Voucher Details</h3>
          <Button
            tag="a"
            className="btn btn-dark"
            onClick={handleViewVoucher}
          >
            Proceed
          </Button>
        </div>  
      </div>
  </div>
  )
}

export default HomeVoucher;
