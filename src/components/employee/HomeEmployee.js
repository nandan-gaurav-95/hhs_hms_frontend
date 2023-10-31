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
export default function HomeEmployee() {
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
          <h3>Employee Management</h3>
          <MDBDropdown>
            <MDBDropdownToggle tag="a" className="btn btn-dark">
              proceed
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <NavLink to="/employee">
                <MDBDropdownItem link>
                  <b>Add Employee</b>
                </MDBDropdownItem>{" "}
              </NavLink>
              <NavLink to="/allemployee">
                <MDBDropdownItem link>
                  <b>View Employees</b>
                </MDBDropdownItem>
              </NavLink>
            </MDBDropdownMenu>
          </MDBDropdown>
        </div>
      </div>
    </div>
  );
}