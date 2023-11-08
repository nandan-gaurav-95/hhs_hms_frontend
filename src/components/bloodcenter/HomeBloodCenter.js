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

  return (
    <div className="background-wrapper" style={backgroundImageStyle}>
      <Header />
      <div className="centered-container">
        <div className="card upper-card">
          <h3>Add Blood Center Details</h3>
          <Button
            tag="a"
            className="btn btn-dark"
            onClick={handleAddBlood}
            style={{ width: "100px" }}
          >
            Proceed
          </Button>
          {/* <div className="proceed-button">
            <MDBDropdown>
              <MDBDropdownToggle
                tag="a"
                className="btn btn-dark"
               
              >
                proceed
              </MDBDropdownToggle>
              <MDBDropdownMenu>
              <NavLink to="/bloodcenter">
                  <MDBDropdownItem link>
                    <b>Blood Center</b>
                  </MDBDropdownItem>
                </NavLink>
                <NavLink to="/viewbloodcenter">
                  <MDBDropdownItem link>
                    <b>View Blood Center</b>
                  </MDBDropdownItem>
                </NavLink>
              </MDBDropdownMenu>
            </MDBDropdown>
          </div> */}

        </div>
        <div className="card upper-card">
          <h3>View Blood Center Details</h3>
          <Button
            tag="a"
            className="btn btn-dark"
            onClick={handleViewBlood}
            style={{ width: "100px" }}
          >
            Proceed
          </Button>
        </div>
      </div>
    </div>
  );
}