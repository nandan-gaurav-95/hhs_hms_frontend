import React from "react";
import backgroundImage from "../../asset/images/HHMS_bG.jpg";
// import backgroundImage  from "../../asset/images/istockphoto-505757382-612x612.jpg";
// import backgroundImage  from "../../asset/images/HHMS bG.jpg"
import "../../asset/homepage.css";
import Header from "../common/Header";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function HomeHHSComplex() {
  const navigate = useNavigate();
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  
  const handleAddHHScomplex = () => {
    navigate("/hhscomplex");
  };
  const handleViewHHScomplex = () => {
    navigate("/viewhhscomplex");
  };

  return (
    <div className="background-wrapper" style={backgroundImageStyle}>
      <Header />
      <div className="centered-container">
        <div className="card upper-card">
          <h3>Add HHS Complex Details</h3>
          {/* <div className="proceed-button">
            <MDBDropdown>
              <MDBDropdownToggle tag="a" className="btn btn-dark">
                Proceed
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                  <NavLink to="/hhscomplex">
                    <MDBDropdownItem link>
                      <b>HHS Complex</b>
                    </MDBDropdownItem>
                  </NavLink>
                  <NavLink to="/viewhhscomplex">
                    <MDBDropdownItem link>
                      <b>View HHS Complex</b>
                    </MDBDropdownItem>
                  </NavLink>
                </MDBDropdownMenu>
            </MDBDropdown>
          </div> */}
<Button
            tag="a"
            className="btn btn-dark"
            onClick={handleAddHHScomplex}
            
          >
            Proceed
          </Button>

        </div>
        <div className="card upper-card">
          <h3>View HHS Complex Details</h3>
          <Button
            tag="a"
            className="btn btn-dark"
            onClick={handleViewHHScomplex}
           
          >
            Proceed
          </Button>
        </div>
      </div>
    </div>
  );
}