import React from "react";

import backgroundImage from "../../asset/images/HHMS_bG.jpg"
import "../../asset/homepage.css";
import Header from "../common/Header";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const HomeDargah = () => {
  const navigate = useNavigate();
    const backgroundImageStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      };
      const handleAddDargah = () => {
        navigate("/dargahcomplex");
      };
      const handleViewDargah = () => {
        navigate("/viewdargahcomplex");
      };
  return (
    <div className="background-wrapper" style={backgroundImageStyle}>
    <Header />

      <div className="centered-container">
      <div className="card upper-card">
            <h3>Add Dargah Complex Details</h3>
            <Button
            tag="a"
            className="btn btn-dark"
            onClick={handleAddDargah}
            
          >
            Proceed
          </Button>
          
          </div>
          <div className="card upper-card">
          <h3>View Dargah Complex Details</h3>
          <Button
            tag="a"
            className="btn btn-dark"
            onClick={handleViewDargah}
          >
            Proceed
          </Button>
        </div>     
      </div>
  </div>
  )
}

export default HomeDargah;
