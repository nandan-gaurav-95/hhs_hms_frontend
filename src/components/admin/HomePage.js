import React from "react";
import Sidebar from "./Sidebar";
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
export default function HomePage() {
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
   
  };
  return (
    <div className="background-wrapper" style={backgroundImageStyle}>
        <Header />
      <Sidebar>
        <div className="card-container">
           <div className="card upper-card">
            <h3>Institutation Management</h3>
            <MDBDropdown>
              <MDBDropdownToggle tag="a" className="btn btn-dark">
                proceed
              </MDBDropdownToggle>
              <MDBDropdownMenu>
              <NavLink to="/school">
                  <MDBDropdownItem link ><b>Schools</b></MDBDropdownItem>
              </NavLink>
                <MDBDropdownItem link><b>ITI College</b></MDBDropdownItem>
                <MDBDropdownItem link><b>Blood Collections Center</b></MDBDropdownItem>
                <MDBDropdownItem link><b>Skill Center</b></MDBDropdownItem>
                <MDBDropdownItem link><b>Masjid</b></MDBDropdownItem>
                <MDBDropdownItem link><b>HHS Complex</b></MDBDropdownItem>
                <MDBDropdownItem link><b>Hostel</b></MDBDropdownItem>
                <MDBDropdownItem link><b>Dargah</b></MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </div> 

          <div className="card upper-card">
            <h3>Property Management</h3>
            <MDBDropdown>
              <MDBDropdownToggle tag="a" className="btn btn-dark">
                proceed
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <NavLink to="/properties">
                <MDBDropdownItem link><b>Add Property</b></MDBDropdownItem>
                </NavLink>
                <NavLink to="/allProperties">
                <MDBDropdownItem link><b>View Property</b></MDBDropdownItem>
                </NavLink>
              </MDBDropdownMenu>
            </MDBDropdown>
          </div>

          <div className="card upper-card">
            <h3>Inventory Management</h3>
            <MDBDropdown>
              <MDBDropdownToggle tag="a" className="btn btn-dark">
                proceed
              </MDBDropdownToggle>
              <MDBDropdownMenu>
              <NavLink to="/addinventory">

                  <MDBDropdownItem link><b>Add Inventory</b></MDBDropdownItem>

              </NavLink>
              <NavLink to="/showinventory">
                <MDBDropdownItem link><b>View Inventory</b></MDBDropdownItem>
                </NavLink>
                <NavLink to="/distributeinventory">
                  <MDBDropdownItem link>
                    <b>Distribute Inventory</b>
                  </MDBDropdownItem>
                </NavLink>
              </MDBDropdownMenu>
            </MDBDropdown>
          </div>

          <div className="card upper-card">
            <h3>Employee Management</h3>
            <MDBDropdown>
              <MDBDropdownToggle tag="a" className="btn btn-dark">
                proceed
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <NavLink to="/employee"><MDBDropdownItem link><b>Add Employee</b></MDBDropdownItem> </NavLink>
                <NavLink to="/allemployee">
                  <MDBDropdownItem link><b>View Employees</b></MDBDropdownItem>
                </NavLink>
                {/* <NavLink to="/nonconsumableform"><MDBDropdownItem link><b>Payroll Details</b></MDBDropdownItem></NavLink> */}
              </MDBDropdownMenu>
            </MDBDropdown>
          </div>
        

        </div>
        <div className="card-container">
        <div className="card upper-card">
      <h3>Daybook</h3>
       <div className="proceed-button">
      <MDBDropdown>
      <MDBDropdownToggle tag="a" className="btn btn-dark">
        proceed
      </MDBDropdownToggle>
      <MDBDropdownMenu>
      {/* <NavLink to="/transaction"><MDBDropdownItem link><b>All Transactions</b></MDBDropdownItem></NavLink> */}
      <NavLink to="/paymentt"><MDBDropdownItem link><b>Payments</b></MDBDropdownItem></NavLink>
      <NavLink to="/receiptt"><MDBDropdownItem link><b>Receipts</b></MDBDropdownItem></NavLink>
      </MDBDropdownMenu>
    </MDBDropdown>
  </div>
</div> 
<div className="card upper-card">
      <h3>Tenant Management</h3>
       <div className="proceed-button">
      <MDBDropdown>
      <MDBDropdownToggle tag="a" className="btn btn-dark">
        proceed
      </MDBDropdownToggle>
      <MDBDropdownMenu>
      <NavLink to="/tenant"><MDBDropdownItem link><b>Add Tenant</b></MDBDropdownItem> </NavLink>
        <NavLink to= "/showtenant"><MDBDropdownItem link><b>View Tenants</b></MDBDropdownItem></NavLink>
        {/* <NavLink to= "/payment"><MDBDropdownItem link><b>Payments</b></MDBDropdownItem></NavLink>
       <NavLink to="/receipt"> <MDBDropdownItem link><b>Receipts</b></MDBDropdownItem></NavLink> */}
      </MDBDropdownMenu>
    </MDBDropdown>
  </div>
</div> 
<div className="card upper-card">
      <h3>Tapal</h3>
       <div className="proceed-button">
      <MDBDropdown>
      <MDBDropdownToggle tag="a" className="btn btn-dark">
        proceed
      </MDBDropdownToggle>
      <MDBDropdownMenu>
      <NavLink to="/add"><MDBDropdownItem link><b>Add Tapal</b></MDBDropdownItem> </NavLink>
        <NavLink to= "/view"><MDBDropdownItem link><b>View Tapal</b></MDBDropdownItem></NavLink>
      </MDBDropdownMenu>
    </MDBDropdown>
  </div>
</div>
</div>
      </Sidebar>
    </div>
  );
}