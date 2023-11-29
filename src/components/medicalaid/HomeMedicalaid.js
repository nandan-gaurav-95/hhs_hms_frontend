import React from "react";

// import Sidebar from "./Sidebar";
import backgroundImage from "../../asset/images/HHMS_bG.jpg";
// import backgroundImage  from "../../asset/images/istockphoto-505757382-612x612.jpg";
// import backgroundImage  from "../../asset/images/HHMS bG.jpg"
import "../../asset/homepage.css";
import Header from "../common/Header";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function HomeMedicalaid() {
  const navigate = useNavigate();

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  const handleAddMedicalAid = () => {
    navigate("/medicalaid");
  };
  const handleViewMedicalAid = () => {
    navigate("/viewmedicalaid");
  };

  return (
    <div className="background-login" style={backgroundImageStyle}>
      <Header />
      <div className="centered-container">
        <div className="card upper-card">
        <div className="card-content">
          <h3>Add Medical Aid Details</h3>
          <Button
            tag="a"
            className="btn btn-dark"
            onClick={handleAddMedicalAid}
          >
            Proceed
          </Button>
          </div>
        </div>
        <div className="card upper-card">
        <div className="card-content">
          <h3>View Medical Aid Details</h3>
          <Button
            tag="a"
            className="btn btn-dark"
            onClick={handleViewMedicalAid}
          >
            Proceed
          </Button>
          </div>
        </div>
      </div>
    </div>
  );
}