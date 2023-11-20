import React from "react";

// import Sidebar from "./Sidebar";
import backgroundImage from "../../asset/images/HHMS_bG.jpg";
// import backgroundImage  from "../../asset/images/istockphoto-505757382-612x612.jpg";
// import backgroundImage  from "../../asset/images/HHMS bG.jpg"
import "../../asset/homepage.css";
import Header from "../common/Header";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function HomeProperty() {
  const navigate = useNavigate();

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  const handleAddProperties = () => {
    navigate("/properties");
  };
  const handleAllProperties = () => {
    navigate("/allProperties");
  };

  return (
    <div className="background-wrapper" style={backgroundImageStyle}>
      <Header />
      <div className="centered-container">
        <div className="card upper-card">
          <h3>Add Property Details</h3>
          <Button
            tag="a"
            className="btn btn-dark"
            onClick={handleAddProperties}
          >
            Proceed
          </Button>
        </div>
        <div className="card upper-card">
          <h3>View Property Details</h3>
          <Button
            tag="a"
            className="btn btn-dark"
            onClick={handleAllProperties}
          >
            Proceed
          </Button>
        </div>
      </div>
    </div>
  );
}
