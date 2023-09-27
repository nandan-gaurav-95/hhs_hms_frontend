import React from "react";
import Sidebar from "./Sidebar";

import "../../asset/homepage.css";
import Header from "../common/Header";

import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
export default function HomePage() {
  return (
    <div>
        <Header />
      <Sidebar>
        <div className="card-container">
          {/* <div className="card upper-card">
            <h3>Institutation Management</h3>
            <MDBDropdown>
              <MDBDropdownToggle tag="a" className="btn btn-dark">
                proceed
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem link><b>Schools</b></MDBDropdownItem>
                <MDBDropdownItem link><b>ITI College</b></MDBDropdownItem>
                <MDBDropdownItem link><b>Blood Collections Center</b></MDBDropdownItem>
                <MDBDropdownItem link><b>Skill Center</b></MDBDropdownItem>
                <MDBDropdownItem link><b>Masjid</b></MDBDropdownItem>
                <MDBDropdownItem link><b>HHS Complex</b></MDBDropdownItem>
                <MDBDropdownItem link><b>Hostel</b></MDBDropdownItem>
                <MDBDropdownItem link><b>Dargah</b></MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </div> */}

          <div className="card upper-card">
            <h3>Property Management</h3>
            <MDBDropdown>
              <MDBDropdownToggle tag="a" className="btn btn-dark">
                proceed
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem link><b>Schools</b></MDBDropdownItem>
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
            <h3>Inventory Management</h3>
            <MDBDropdown>
              <MDBDropdownToggle tag="a" className="btn btn-dark">
                proceed
              </MDBDropdownToggle>
              <MDBDropdownMenu>
              <MDBDropdownItem link><b>Consumable</b></MDBDropdownItem>
                <MDBDropdownItem link><b>Non-Consumable</b></MDBDropdownItem>
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
              <MDBDropdownItem link><b>View Employees</b></MDBDropdownItem>
                <MDBDropdownItem link><b>Payroll Details</b></MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </div>
          <div className="card upper-card">
            <h3>Daybook</h3>
            <MDBDropdown>
              <MDBDropdownToggle tag="a" className="btn btn-dark">
                proceed
              </MDBDropdownToggle>
              <MDBDropdownMenu>
              <MDBDropdownItem link><b>All Transactions</b></MDBDropdownItem>
                <MDBDropdownItem link><b>Payments</b></MDBDropdownItem>
                <MDBDropdownItem link><b>Receipts</b></MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </div>
        </div>
        {/* <div className="card-container">
          <div className="card daybook-card">
            <h3>Daybook</h3>
            <MDBDropdown>
              <MDBDropdownToggle tag="a" className="btn btn-dark">
                proceed
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem link>Action</MDBDropdownItem>
                <MDBDropdownItem link>Another action</MDBDropdownItem>
                <MDBDropdownItem link>Something else here</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </div>
        </div> */}
      </Sidebar>
    </div>
  );
}