import React from "react";
import backgroundImage from "../../asset/images/HHMS_bG.jpg";
import "../../asset/homepage.css";
import Header from "../common/Header";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";


export default function HomeAmbulanceVan() {
  const navigate = useNavigate();

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const handleAddAmbulance = () => {
    navigate("/ambulancevan");
  };
  const handleViewAmbulance = () => {
    navigate("/viewambulancevan");
  };

  return (
    <div className="background-login" style={backgroundImageStyle}>
      <Header />
      <div className="centered-container">
        <div className="card upper-card">
        <div className="card-content">
          <h3>Add Ambulance trip Details</h3>
          <Button
            tag="a"
            className="btn btn-dark"
            onClick={handleAddAmbulance}
            
          >
            Proceed
          </Button>
          </div>
          {/* <div className="proceed-button">
            <MDBDropdown>
              <MDBDropdownToggle
                tag="a"
                className="btn btn-dark"
               
              >
                proceed
              </MDBDropdownToggle>
              <MDBDropdownMenu>
              <NavLink to="/ambulancevan">
                  <MDBDropdownItem link>
                    <b>Ambulance Van</b>
                  </MDBDropdownItem>
                </NavLink>
                <NavLink to="/viewambulancevan">
                  <MDBDropdownItem link>
                    <b>View Ambulance Van</b>
                  </MDBDropdownItem>
                </NavLink>
              </MDBDropdownMenu>
            </MDBDropdown>
          </div> */}
        </div>
        <div className="card upper-card">
        <div className="card-content">
          <h3>View Ambulance Details</h3>
          <Button
            tag="a"
            className="btn btn-dark"
            onClick={handleViewAmbulance}
            
          >
            Proceed
          </Button>
          </div>
        </div>
      </div>
    </div>
  );
}