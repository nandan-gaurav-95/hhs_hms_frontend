import React from "react";
import backgroundImage from "../../asset/images/HHMS_bG.jpg";
// import backgroundImage  from "../../asset/images/istockphoto-505757382-612x612.jpg";
// import backgroundImage  from "../../asset/images/HHMS bG.jpg"
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
export default function HomeElectricity() {
  const navigate = useNavigate();

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const handleAddElectricity = () => {
    navigate("/electricitybill");
  };
  const handleViewElectricity = () => {
    navigate("/viewelectricitybill");
  };

  return (
    <div className="background-login" style={backgroundImageStyle}>
      <Header />
      <div className="centered-container">
        <div className="card upper-card">
        <div className="card-content">
          <h3>Add Electricity Details</h3>
          <Button
            tag="a"
            className="btn btn-dark"
            onClick={handleAddElectricity}
           
          >
            Proceed
          </Button>
          </div>
        </div>
        <div className="card upper-card">
        <div className="card-content">
          <h3>View Electricity Details</h3>
          <Button
            tag="a"
            className="btn btn-dark"
            onClick={handleViewElectricity}
            
          >
            Proceed
          </Button>
          </div>
        </div>
      </div>
    </div>
  );
}