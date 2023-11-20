import React from "react";
import backgroundImage from "../../asset/images/HHMS_bG.jpg";
import "../../asset/homepage.css";
import Header from "../common/Header";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function HomeParking() {
  const navigate = useNavigate();

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  const handleAddParking = () => {
    navigate("/parking");
  };
  const handleViewParking = () => {
    navigate("/viewparking");
  };

  return (
    <div className="background-login" style={backgroundImageStyle}>
      <Header />
      <div className="centered-container">
        <div className="card upper-card">
        <div className="card-content">
          <h3>Add Parking Details</h3>
          <Button
            tag="a"
            className="btn btn-dark"
            onClick={handleAddParking}
            
          >
            Proceed
          </Button>
          </div>
        </div>
        <div className="card upper-card">
        <div className="card-content">
          <h3>View Parking Details</h3>
          <Button
            tag="a"
            className="btn btn-dark"
            onClick={handleViewParking}
          >
            Proceed
          </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
