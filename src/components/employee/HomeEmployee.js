import React from "react";
import backgroundImage from "../../asset/images/HHMS_bG.jpg";
import "../../asset/homepage.css";
import Header from "../common/Header";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function HomeEmployee() {
  const navigate = useNavigate();
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const handleAddEmployee = () => {
    navigate("/employee");
  };
  const handleViewEmployee = () => {
    navigate("/allemployee");
  };

  return (
    <div className="background-wrapper" style={backgroundImageStyle}>
      <Header />
      <div className="centered-container">
        <div className="card upper-card">
          <h3>Add Employee Details</h3>

          <Button
            tag="a"
            className="btn btn-dark"
            onClick={handleAddEmployee}
            style={{ width: "100px" }}
          >
            Proceed
          </Button>
        </div>
        <div className="card upper-card">
          <h3>View Employee Details</h3>
          <Button
            tag="a"
            className="btn btn-dark"
            onClick={handleViewEmployee}
            style={{ width: "100px" }}
          >
            Proceed
          </Button>
        </div>
      </div>
    </div>
  );
}
