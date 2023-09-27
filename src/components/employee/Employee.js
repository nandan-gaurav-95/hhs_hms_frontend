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
    department: "",
    dob: "",
    gender: "",
    contactNumber: "",
    bloodgroup: "",
    address: "",
    aadhar: "",
    qualification: "",
    pan: "",
    dateOfHiring: "",
    dateOfLeaving: "",
    basicSalary: "",
    netSalary: "",
    grossSalary: "",
    allowance: "",
    deduction: "",
    pfEmployeeContribution: "",
    loanAmount: "",
    loanRepaymentAmount: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const response = await EmployeeService.createEmployee(formData);
      if (response.status === 201) {
        console.log("Form data saved successfully");
        setFormData(initialState);
        setErrors({});
      } else {
        console.error("Error while saving from data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const validateForm = (data) => {
    const errors = {};

    // Validate empName
    if (!data.empName) {
      errors.empName = "Employee Name is required.";
    }

    // Validate department
    if (!data.department) {
      errors.department = "Department is required.";
    }

    // Validate dob
    if (!data.dob) {
      errors.dob = "Date of Birth is required.";
    }

    // Validate gender
    if (!data.gender) {
      errors.gender = "Gender is required.";
    }

    // Validate contactNumber
    if (!data.contactNumber || !/^[0-9]{10}$/.test(data.contactNumber)) {
        errors.contactNumber = "Please enter a valid 10-digit contact number.";
      }

    // Validate bloodgroup
    if (!data.bloodgroup) {
      errors.bloodgroup = "Blood Group is required.";
    }

    // Validate address
    if (!data.address) {
      errors.address = "Address is required.";
    }

    // Validate aadhar
    if (!data.aadhar || !/^\d{12}$/.test(data.aadhar)) {
      errors.aadhar = "Please enter a valid 12-digit Aadhar card number.";
    }

    // Validate qualification
    if (!data.qualification) {
      errors.qualification = "Qualification is required.";
    }

    // Validate pan
    if (!data.pan || !/^[A-Za-z]{5}\d{4}[A-Za-z]{1}$/.test(data.pan)) {
      errors.pan = "Please enter a valid PAN card number.";
    }

    // Validate dateOfHiring
    if (!data.dateOfHiring) {
      errors.dateOfHiring = "Date of Hiring is required.";
    }

    // Continue validating other fields...

    return errors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    // Clear the corresponding error when the input changes
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Clear the error for this field
    }));
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const allemployeedetails = (event) => {
    event.preventDefault();
    navigate("/allemployees");
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
                required
                />
                {errors.empName && (
                  <div className="text-danger">{errors.empName}</div>
                )}
            </Col>
            <Col className="col-sm-5">
              <select
                className="form-select"
                id="Department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
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
              {errors.department && (
                <div className="text-danger">{errors.department}</div>
              )}
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
                required
                />
                {errors.date && (
                  <div className="text-danger">{errors.date}</div>
                )}
            </Col>
            <Col className="col-sm-5">
              <select
                className="form-select"
                id="Gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
              {errors.gender && (
                <div className="text-danger">{errors.gender}</div>
              )}
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
                required
              />
               {errors.contactNumber && (
                <div className="text-danger">{errors.contactNumber}</div>
              )}
            </Col>
            <Col className="col-sm-5">
              <select
                className="form-select"
                id="Blood Group"
                name="bloodgroup"
                value={formData.bloodgroup}
                onChange={handleChange}
                required
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
              {errors.bloodgroup && (
                <div className="text-danger">{errors.bloodgroup}</div>
              )}
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
                required
                />
                 {errors.address && (
                  <div className="text-danger">{errors.address}</div>
                )}
            </Col>
           
            <Col className="col-sm-5 ">
              <Input
                label="Aadhar Card No"
                type="number"
                name="aadhar"
                value={formData.aadhar}
                onChange={handleChange}
                required
              />
              {errors.aadhar && (
                <div className="text-danger">{errors.aadhar}</div>
              )}
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
                required
              />
              {errors.qualification && (
                <div className="text-danger">{errors.qualification}</div>
              )}
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
                required
              />
               {errors.pan && <div className="text-danger">{errors.pan}</div>}
      
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
                required
                />
                 {errors.dateOfHiring && <div className="text-danger">{errors.dateOfHiring}</div>}
        
            </Col>
            <Col className="col-sm-5 ">
              <Input
                
                label="Date Of Leaving"
                type="date"
                name="dateOfLeaving"
                value={formData.dateOfLeaving}
                onChange={handleChange}
                required
                />
                 {errors.dateOfLeaving && <div className="text-danger">{errors.dateOfLeaving}</div>}
        
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
                required
                />
                {errors.basicSalary && (
                  <div className="text-danger">{errors.basicSalary}</div>
                )}
            </Col>
          <Col className="col-sm-5 ">
              <Input
                label="Net Salary"
                type="text"
                name="netSalary"
                value={formData.netSalary}
                onChange={handleChange}
                required
                />
                {errors.netSalary && (
                  <div className="text-danger">{errors.netSalary}</div>
                )}
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
                required
                />
                {errors.grossSalary && (
                  <div className="text-danger">{errors.grossSalary}</div>
                )}
            </Col>
          <Col className="col-sm-5 ">
              <Input
                label="Allowance"
                type="text"
                name="allowance"
                value={formData.allowance}
                onChange={handleChange}
                required
                />
                {errors.allowance && (
                  <div className="text-danger">{errors.allowance}</div>
                )}
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
                required
                />
                {errors.deduction && (
                  <div className="text-danger">{errors.deduction}</div>
                )}
            </Col> 
          <Col className="col-sm-5 ">
              <Input
                label="PF Employee Contribution"
                type="text"
                name="pfEmployeeContribution"
                value={formData.pfEmployeeContribution}
                onChange={handleChange}
                required
                />
                {errors.pfEmployeeContribution && (
                  <div className="text-danger">{errors.pfEmployeeContribution}</div>
                )}
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
                required
                />
                {errors.loanAmount && (
                  <div className="text-danger">{errors.loanAmount}</div>
                )}
            </Col>
          <Col className="col-sm-5 ">
              <Input
                label="Loan Repayment Amount"
                type="text"
                name="loanRepaymentAmount"
                value={formData.loanRepaymentAmount}
                onChange={handleChange}
                required
                />
                {errors.loanRepaymentAmount && (
                  <div className="text-danger">{errors.loanRepaymentAmount}</div>
                )}
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