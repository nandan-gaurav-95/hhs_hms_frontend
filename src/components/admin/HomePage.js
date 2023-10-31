import React from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "./Sidebar";
import backgroundImage from "../../asset/images/HHMS_bG.jpg";
import "../../asset/homepage.css";
import Header from "../common/Header";
import { NavLink } from "react-router-dom";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
export default function HomePage() {
  const navigate = useNavigate();
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  const handlePropertyLogin = () => {
    navigate("/loginprop");
  };
  const handleInventoryLogin = () => {
    navigate("/logininventory");
  };
  const handleEmployeeLogin = () => {
    navigate("/loginemployee");
  };
  const handleTenantLogin = () => {
    navigate("/logintenant");
  };
  const handleTapalLogin = () => {
    navigate("/logintapal");
  };
  const handleElectricityLogin = () => {
    navigate("/loginelectricity");
  };
  const handleVoucherLogin = () => {
    navigate("/loginvoucher");
  };
  const handleHHSComplexLogin = () => {
    navigate("/loginhhscomplex");
  };

  const handleDargahLogin = () => {
    navigate("/logindargah");
  };
  const handleMedicalAckLogin = () => {
    navigate("/loginmedicalack");
  };
  const handleAmbulanceVanLogin = () => {
    navigate("/loginambulancevan");
  };
  const handleBloodCenterLogin = () => {
    navigate("/loginbloodcenter");
  };

  const handleParkingLogin = () => {
    navigate("/loginparking");
  };
  return (
    <div className="background-wrapper" style={backgroundImageStyle}>
      <Header />
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
           
              <Button tag="a" className="btn btn-dark" onClick={handlePropertyLogin} >
                LOGIN
              </Button>
          </div>

          <div className="card upper-card">
            <h3>Inventory Management</h3>
              <Button tag="a" className="btn btn-dark" onClick={handleInventoryLogin} >
                LOGIN
              </Button>
          </div>

          <div className="card upper-card">
            <h3>Employee Management</h3>
              <Button tag="a" className="btn btn-dark" onClick={handleEmployeeLogin}>
                login
              </Button>
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
                <Button tag="a" className="btn btn-dark" onClick={handleTenantLogin}>
                  Login
                </Button>
            </div>
          </div>
          <div className="card upper-card">
            <h3>Tapal</h3>
            <div className="proceed-button">
            <Button tag="a" className="btn btn-dark" onClick={handleTapalLogin}>
                  Login
                </Button>
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
                  <NavLink to="/">
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
                <Button tag="a" className="btn btn-dark" onClick={handleElectricityLogin}>
                  login
                </Button>
            </div>
          </div>
          <div className="card upper-card">
            <h3>Vouchers</h3>
            <div className="proceed-button">
            <Button tag="a" className="btn btn-dark" onClick={handleVoucherLogin}>
                  Login
                </Button>
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
            <h3>HHS Complex</h3>
            <div className="proceed-button">
                <Button tag="a" className="btn btn-dark" onClick={handleHHSComplexLogin}>
                  login
                </Button>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card upper-card">
            <h3>Dargah Complex</h3>
            <div className="proceed-button">
            <Button tag="a" className="btn btn-dark" onClick={handleDargahLogin}>
                  login
                </Button>
            </div>
          </div>
          <div className="card upper-card">
            <h3>Medical Ack</h3>
            <div className="proceed-button">
            <Button tag="a" className="btn btn-dark" onClick={handleMedicalAckLogin}>
                  login
                </Button>
            </div>
          </div>
          <div className="card upper-card">
            <h3>Ambulance Van</h3>
            <div className="proceed-button">
            
                <Button tag="a" className="btn btn-dark" onClick={handleAmbulanceVanLogin}>
                  login
                </Button>
            
            </div>
          </div>
          <div className="card upper-card">
            <h3>Blood Center</h3>
            <div className="proceed-button">
                <Button tag="a" className="btn btn-dark" onClick={handleBloodCenterLogin}>
                  login
                </Button>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card upper-card">
            <h3>Parking</h3>
            <div className="proceed-button">
               <Button tag="a" className="btn btn-dark" onClick={handleParkingLogin}>
                  login
                </Button>
            </div>
          </div>
        </div>
      
    </div>
  );
}