import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBInput as Input,
  MDBBtn as Button,
} from "mdb-react-ui-kit";
import axios from "axios";
import { APIS } from "../constants/api";
import { EmployeeService } from "../../services/EmployeeService";
import Sidebar from "../admin/Sidebar";
const EmployeeForm = () => {
  const navigate = useNavigate();
  const initialState = {
    emp_id: "",
    empName: "",
    department:"",
    dob:"",
    gender:"",
    contactNumber: "",
    bloodgroup:"",
    address: "",
    aadhar:"",
    qualification:"",
    pan: "",
    dateOfHiring: "",
    dateOfLeaving: "",
    basicSalary:"",
    netSalary:"",
    grossSalary:"",
    allowance:"",
    deduction:"",
    pfEmployeeContribution: "",
    loanAmount: "",
    loanRepaymentAmount:"",
  };

  const [formData, setFormData] = useState({ initialState });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await EmployeeService.createEmployee(formData);
      if (response.status === 201) {
        console.log("Form data saved successfully");
        setFormData(initialState);
      } else {
        console.error("Error while saving from data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const allemployeedetails = (event) => {
    event.preventDefault();
    navigate("/allempolyee");
  };

  return (
    <div className="">
      <Sidebar>
        <h1 className=" mb-4 text-center">Empolyee Management</h1>
        <form onSubmit={handleSubmit}>
          <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
            <Col className="col-sm-5 ">
              <Input
                label="Employee Name"
                type="text"
                name="empName"
                value={formData.empName}
                onChange={handleChange}
              />
            </Col>
            <Col className="col-sm-5">
              <select
                className="form-select"
                id="Department"
                name="department"
                value={formData.department}
                onChange={handleChange}
              >
                <option value="">Select Department</option>
                <option value="Schools">Schools</option>
                <option value="ITI College">ITI College</option>
                <option value="Skill Center">Skill Center</option>
                <option value="Blood Collection Center">
                  Blood Collection Center
                </option>
                <option value="Hostel">Hostel</option>
                <option value="Masjid">Masjid</option>
                <option value="Dargah">Dargah</option>
              </select>
            </Col>
            
          </Row>
          <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
            <Col className="col-sm-5 ">
              <Input
                label="DOB"
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
            </Col>
            <Col className="col-sm-5">
              <select
                className="form-select"
                id="Gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </Col>
          </Row>
          <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
            <Col className="col-sm-5 ">
              <Input
                label="Contact Number"
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
              />
            </Col>
            <Col className="col-sm-5">
              <select
                className="form-select"
                id="Blood Group"
                name="bloodgroup"
                value={formData.bloodgroup}
                onChange={handleChange}
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </Col>
          </Row>
          <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
            {/* <Col className="col-sm-5 ">
              <Input
                label="Aadhar Card No"
                type="number"
                name="aadhar"
                value={formData.aadhar}
                onChange={handleChange}
              />
            </Col> */}
            <Col className="col-sm-5 ">
              <Input
                label="Address"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </Col>
           
            <Col className="col-sm-5 ">
              <Input
                label="Aadhar Card No"
                type="number"
                name="aadhar"
                value={formData.aadhar}
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
              <Input
                label="Qualification"
                type="text"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
              />
            </Col>
            {/* <Col className="col-sm-5 ">
              <Input
                label="Date Of Hiring"
                type="date"
                name="dateOfHiring"
                value={formData.dateOfHiring}
                onChange={handleChange}
              />
            </Col> */}
             <Col className="col-sm-5 ">
              <Input
                label="PAN Card No"
                type="text"
                name="pan"
                value={formData.pan}
                onChange={handleChange}
              />
            </Col>
           
            
          </Row>
          <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
              <Input
                label="Date Of Hiring"
                type="date"
                name="dateOfHiring"
                value={formData.dateOfHiring}
                onChange={handleChange}
              />
            </Col>
            <Col className="col-sm-5 ">
              <Input
                
                label="Date Of Leaving"
                type="date"
                name="dateOfLeaving"
                value={formData.dateOfLeaving}
                onChange={handleChange}
              />
            </Col> 
           
          </Row>
          <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
              <Input
                label="Basic Salary"
                type="text"
                name="basicSalary"
                value={formData.basicSalary}
                onChange={handleChange}
              />
            </Col>
          <Col className="col-sm-5 ">
              <Input
                label="Net Salary"
                type="text"
                name="netSalary"
                value={formData.netSalary}
                onChange={handleChange}
              />
            </Col>
           
            
          </Row>
          <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
         
          <Col className="col-sm-5 ">
              <Input
                label="Gross Salary"
                type="text"
                name="grossSalary"
                value={formData.grossSalary}
                onChange={handleChange}
              />
            </Col>
          <Col className="col-sm-5 ">
              <Input
                label="Allowance"
                type="text"
                name="allowance"
                value={formData.allowance}
                onChange={handleChange}
              />
            </Col>
          
            
           
          </Row>
          <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
              <Input
                label="Deduction"
                type="text"
                name="deduction"
                value={formData.deduction}
                onChange={handleChange}
              />
            </Col> 
          <Col className="col-sm-5 ">
              <Input
                label="PF Employee Contribution"
                type="text"
                name="pfEmployeeContribution"
                value={formData.pfEmployeeContribution}
                onChange={handleChange}
              />
            </Col>
            
            
          </Row>
          <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
              <Input
                label="Loan Amount"
                type="text"
                name="loanAmount"
                value={formData.loanAmount}
                onChange={handleChange}
              />
            </Col>
          <Col className="col-sm-5 ">
              <Input
                label="Loan Repayment Amount"
                type="text"
                name="loanRepaymentAmount"
                value={formData.loanRepaymentAmount}
                onChange={handleChange}
              />
            </Col>
            
          </Row>
          <div className="text-center mt-4 ">
            <Button >Submit</Button>
          </div>
        </form>
        <div className="text-center mt-4 form-group row ">
          <div className="col">
            <Button
              variant="primary"
              type="button"
              square
              onClick={allemployeedetails}
            >
              Show Employee
            </Button>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};
export default EmployeeForm;