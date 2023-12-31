import React from "react";
import backgroundImage from "../../asset/images/HHMS_bG.jpg";
import "../../asset/homepage.css";
import Header from "../common/Header";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";


export default function HomeGirlsHostel() {
  const navigate = useNavigate();

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const handleAddHostel = () => {
    navigate("/hostel");
  };
  const handleViewHostel = () => {
    navigate("/viewgirlshostel");
  };

  return (
    <div className="background-login" style={backgroundImageStyle}>
      <Header />
      <div className="centered-container">
        <div className="card upper-card">
        <div className="card-content">
          <h3>Add Hostel Details</h3>

          <Button
            tag="a"
            className="btn btn-dark"
            onClick={handleAddHostel}
          >
            Proceed
          </Button>
          </div>
        </div>
        <div className="card upper-card">
        <div className="card-content">
          <h3>View Hostel Details</h3>
          <Button
            tag="a"
            className="btn btn-dark"
            onClick={handleViewHostel}
          >
            Proceed
          </Button>
          </div>
        </div>
      </div>
    </div>
  );
}