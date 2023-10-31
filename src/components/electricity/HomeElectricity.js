import React from "react";
import backgroundImage from "../../asset/images/HHMS_bG.jpg";
// import backgroundImage  from "../../asset/images/istockphoto-505757382-612x612.jpg";
// import backgroundImage  from "../../asset/images/HHMS bG.jpg"
import "../../asset/homepage.css";
import Header from "../common/Header";
import { NavLink } from "react-router-dom";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
export default function HomeElectricity() {
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className="background-wrapper" style={backgroundImageStyle}>
      <Header />
      <div className="card-container">
        <div className="card upper-card">
          <h3>Electricity</h3>
          <div className="proceed-button">
            <MDBDropdown>
              <MDBDropdownToggle tag="a" className="btn btn-dark">
                Proceed
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <NavLink to="/electricitybill">
                  <MDBDropdownItem link>
                    <b>Electricity Bill</b>
                  </MDBDropdownItem>{" "}
                </NavLink>
                <NavLink to="/viewelectricitybill">
                  <MDBDropdownItem link>
                    <b>View Electricity Bill</b>
                  </MDBDropdownItem>{" "}
                </NavLink>
                {/* <MDBDropdownItem>
                  <b>Tenants</b>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <b>Staff Quarters</b>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <b>Rented Homes</b>
                </MDBDropdownItem> */}
              </MDBDropdownMenu>
            </MDBDropdown>
          </div>
        </div>
      </div>
    </div>
  );
}