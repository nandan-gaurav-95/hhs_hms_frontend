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
                  <MDBDropdownItem link>
                    <b>Schools</b>
                  </MDBDropdownItem>
                </NavLink>
                <MDBDropdownItem link>
                  <b>ITI College</b>
                </MDBDropdownItem>
                <MDBDropdownItem link>
                  <b>Skill Center</b>
                </MDBDropdownItem>
                <MDBDropdownItem link>
                  <b>Masjid</b>
                </MDBDropdownItem>
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
                  <MDBDropdownItem link>
                    <b>Add Property</b>
                  </MDBDropdownItem>
                </NavLink>
                <NavLink to="/allProperties">
                  <MDBDropdownItem link>
                    <b>View Property</b>
                  </MDBDropdownItem>
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
                  <MDBDropdownItem link>
                    <b>Add Inventory</b>
                  </MDBDropdownItem>
                </NavLink>
                <NavLink to="/showinventory">
                  <MDBDropdownItem link>
                    <b>View Inventory</b>
                  </MDBDropdownItem>
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
                  <NavLink to="/transaction">
                    <MDBDropdownItem link>
                      <b>All Transactions</b>
                    </MDBDropdownItem>
                  </NavLink>
                  <NavLink to="/paymentt">
                    <MDBDropdownItem link>
                      <b>Payments</b>
                    </MDBDropdownItem>
                  </NavLink>
                  <NavLink to="/receiptt">
                    <MDBDropdownItem link>
                      <b>Receipts</b>
                    </MDBDropdownItem>
                  </NavLink>
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
                  <NavLink to="/tenant">
                    <MDBDropdownItem link>
                      <b>Add Tenant</b>
                    </MDBDropdownItem>{" "}
                  </NavLink>
                  <NavLink to="/showtenant">
                    <MDBDropdownItem link>
                      <b>View Tenants</b>
                    </MDBDropdownItem>
                  </NavLink>
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
                  <NavLink to="/add">
                    <MDBDropdownItem link>
                      <b>Add Tapal</b>
                    </MDBDropdownItem>{" "}
                  </NavLink>
                  <NavLink to="/view">
                    <MDBDropdownItem link>
                      <b>View Tapal</b>
                    </MDBDropdownItem>
                  </NavLink>
                </MDBDropdownMenu>
              </MDBDropdown>
            </div>
          </div>
          <div className="card upper-card">
            <h3>Financial Assistance</h3>
            <div className="proceed-button">
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="btn btn-dark">
                  proceed
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <NavLink to="/medicalaid">
                    <MDBDropdownItem link>
                      <b>Medical Aid</b>
                    </MDBDropdownItem>{" "}
                  </NavLink>
                  <NavLink to="/scholarship">
                    <MDBDropdownItem link>
                      <b>Scholarship</b>
                    </MDBDropdownItem>{" "}
                  </NavLink>
                  <NavLink to="/pdf">
                    <MDBDropdownItem link>
                      <b>Receipts</b>
                    </MDBDropdownItem>{" "}
                  </NavLink>
                </MDBDropdownMenu>
              </MDBDropdown>
            </div>
          </div>
        </div>
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
                  <MDBDropdownItem>
                    <b>Tenants</b>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <b>Staff Quarters</b>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <b>Rented Homes</b>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </div>
          </div>
          <div className="card upper-card">
            <h3>Vouchers</h3>
            <div className="proceed-button">
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="btn btn-dark">
                  proceed
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <NavLink to="/voucher">
                    <MDBDropdownItem link>
                      <b>Voucher</b>
                    </MDBDropdownItem>{" "}
                  </NavLink>
                </MDBDropdownMenu>
              </MDBDropdown>
            </div>
          </div>
          <div className="card upper-card">
            <h3>Impressed Cashbook</h3>
            <div className="proceed-button">
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="btn btn-dark">
                  Proceed
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <NavLink to="/hostel">
                    <MDBDropdownItem link>
                      <b>Girls Hostel</b>
                    </MDBDropdownItem>
                  </NavLink>
                  <MDBDropdownItem>
                    <b>School </b>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <b>Blood Bank</b>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <b>Complex Office</b>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </div>
          </div>
          <div className="card upper-card">
            <h3>HHS & Dargah Complex</h3>
            <div className="proceed-button">
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="btn btn-dark">
                  proceed
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
                <NavLink to="/dargahcomplex">
                  <MDBDropdownItem link>
                    <b>Dargah Complex</b>
                  </MDBDropdownItem>
                </NavLink>
                <NavLink to="/viewdargahcomplex">
                  <MDBDropdownItem link>
                    <b>View Dargah Complex</b>
                  </MDBDropdownItem>
                </NavLink>
                </MDBDropdownMenu>
              </MDBDropdown>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card upper-card">
            <h3>Medical</h3>
            <div className="proceed-button">
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="btn btn-dark">
                  Proceed
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                <NavLink to="/bloodcenter">
                  <MDBDropdownItem link>
                    <b>Blood Center</b>
                  </MDBDropdownItem>
                </NavLink>
                <NavLink to="/ambulancevan">
                  <MDBDropdownItem link>
                    <b>Ambulance Van</b>
                  </MDBDropdownItem>
                </NavLink>
                <NavLink to="/medicalack">
                  <MDBDropdownItem link>
                    <b>Medical Acknowledgment</b>
                  </MDBDropdownItem>
                </NavLink>
                </MDBDropdownMenu>
              </MDBDropdown>
            </div>
          </div>
          <div className="card upper-card">
            <h3>Parking</h3>
            <div className="proceed-button">
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="btn btn-dark">
                  proceed
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <NavLink to="/parking">
                    <MDBDropdownItem link>
                      <b>Parking</b>
                    </MDBDropdownItem>{" "}
                  </NavLink>
                </MDBDropdownMenu>
              </MDBDropdown>
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
}