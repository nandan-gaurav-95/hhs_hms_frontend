import React from "react";
import backgroundImage from "../../asset/images/HHMS_bG.jpg";
import "../../asset/homepage.css";
import Header from "../common/Header";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function HomeMedicalAck() {
  const navigate = useNavigate();

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  const handleAddMedical = () => {
    navigate("/medicalack");
  };
  const handleViewMedical= () => {
    navigate("/viewmedicalack");
  };

  return (
    <div className="background-login" style={backgroundImageStyle}>
      <Header />
      <div className="centered-container">
        <div className="card upper-card">
        <div className="card-content">
          <h3>Add Medical Details</h3>
          <Button
            tag="a"
            className="btn btn-dark"
            onClick={handleAddMedical}
          >
            Proceed
          </Button>
         </div>
        </div>
        <div className="card upper-card">
        <div className="card-content">
          <h3>View Medical Details</h3>
          <Button
            tag="a"
            className="btn btn-dark"
            onClick={handleViewMedical}
          >
            Proceed
          </Button>
          </div>
        </div>
      </div>
    </div>
  );
}