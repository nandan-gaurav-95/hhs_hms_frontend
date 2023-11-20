import React from "react";

import backgroundImage from "../../asset/images/HHMS_bG.jpg";
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

const HomeTenant = () => {
  const navigate = useNavigate();

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  const handleAddTenant = () => {
    navigate("/tenant");
  };
  const handleViewTenant = () => {
    navigate("/showtenant");
  };
  return (
    <div className="background-wrapper" style={backgroundImageStyle}>
      <Header />

      <div className="centered-container">
        <div className="card upper-card">
          <h3>Add Tenant Details</h3>
          <Button
            tag="a"
            className="btn btn-dark"
            onClick={handleAddTenant}
          >
            Proceed
          </Button>
        </div>
        <div className="card upper-card">
          <h3>View Tenant Details</h3>
          <Button
            tag="a"
            className="btn btn-dark"
            onClick={handleViewTenant}
          >
            Proceed
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeTenant;
