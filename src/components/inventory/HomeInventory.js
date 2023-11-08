import React from "react";

import backgroundImage from "../../asset/images/HHMS_bG.jpg";
import "../../asset/homepage.css";
import Header from "../common/Header";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const HomeInventory = () => {
  const navigate = useNavigate();
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const handleAddInventory = () => {
    navigate("/addinventory");
  };
  const handleViewInventory = () => {
    navigate("/showinventory");
  };
  const handleDistributeInventory = () => {
    navigate("/distributeinventory");
  };
  return (
    <div className="background-wrapper" style={backgroundImageStyle}>
      <Header />

      <div className="centered-container">
        <div className="card upper-card">
          <h3>Add Inventory Details</h3>
          <Button
            tag="a"
            className="btn btn-dark"
            onClick={handleAddInventory}
            style={{ width: "100px" }}
          >
            Proceed
          </Button>
        </div>
        <div className="card upper-card">
          <h3>View Inventory Details</h3>
          <Button
            tag="a"
            className="btn btn-dark"
            onClick={handleViewInventory}
            style={{ width: "100px" }}
          >
            Proceed
          </Button>
        </div>
        <div className="card upper-card">
          <h3>Distribute Inventory Details</h3>
          <Button
            tag="a"
            className="btn btn-dark"
            onClick={handleDistributeInventory}
            style={{ width: "100px" }}
          >
            Proceed
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeInventory;
