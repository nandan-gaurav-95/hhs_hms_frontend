import React from "react";

import backgroundImage from "../../asset/images/HHMS_bG.jpg";

import "../../asset/homepage.css";
import Header from "../common/Header";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const HomeTapal = () => {
  const navigate = useNavigate();

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const handleAddTapal = () => {
    navigate("/addtapal");
  };
  const handleViewTapal = () => {
    navigate("/viewtapal");
  };
  return (
    <div className="background-login" style={backgroundImageStyle}>
      <Header />
      <div className="centered-container">
        <div className="card upper-card">
          <div className="card-content">
            <h3>Add Tapal Details</h3>
            <Button tag="a" className="btn btn-dark" onClick={handleAddTapal}>
              Proceed
            </Button>
          </div>
        </div>
        <div className="card upper-card">
          <div className="card-content">
            <h3>View Tapal Details</h3>
            <Button
              tag="a"
              className="btn btn-dark"
              onClick={handleViewTapal}
            >
              Proceed
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTapal;