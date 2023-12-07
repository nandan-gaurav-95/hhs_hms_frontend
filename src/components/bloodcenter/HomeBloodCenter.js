import React from "react";
import backgroundImage from "../../asset/images/HHMS_bG.jpg";
import "../../asset/homepage.css";
import Header from "../common/Header";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function HomeBloodCenter() {
  const navigate = useNavigate();

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const handleAddBlood = () => {
    navigate("/bloodcenter");
  };
  const handleViewBlood = () => {
    navigate("/viewbloodcenter");
  };
  const handleReceiveBlood = () => {
    navigate("/receiveblood");
  };
  const handleBloodReceiversInv = () => {
    navigate("/receiversbloodinv");
  };
  const handleBloodInv = () => {
    navigate("/bloodgroupInv");
  };

  return (
    <div className="background-login" style={backgroundImageStyle}>
      <Header />
      <div className="centered-container">
        <div className="row">

        <div className="card upper-card">
        <div className="card-content">
          <h3>Blood Donars Details</h3>
          <Button
            tag="a"
            className="btn btn-dark"
            onClick={handleAddBlood}
          >
            Proceed
          </Button>
          </div>

        </div>
        <div className="card upper-card">
        <div className="card-content">
          <h3>Blood Donar Inventory</h3>
          <Button
            tag="a"
            className="btn btn-dark"
            onClick={handleViewBlood}
          >
            Proceed
          </Button>
          </div>
        </div> 
        <div className="card upper-card">
        <div className="card-content">
          <h3>Blood Group Inventory</h3>
          <Button
            tag="a"
            className="btn btn-dark"
            onClick={handleBloodInv}
          >
            Proceed
          </Button>
          </div>
        </div> 
       
      </div>
        </div>
      <div className="row">
      <div className="card upper-card">
        <div className="card-content">
          <h3>Blood Receiver Details</h3>
          <Button
            tag="a"
            className="btn btn-dark"
            onClick={handleReceiveBlood}
          >
            Proceed
          </Button>
          </div>
        </div>
        <div className="card upper-card">
        <div className="card-content">
          <h3>Blood Receivers Inventory</h3>
          <Button
            tag="a"
            className="btn btn-dark"
            onClick={handleBloodReceiversInv}
          >
            Proceed
          </Button>
          </div>
        </div>

      </div>
    </div>
  );
}