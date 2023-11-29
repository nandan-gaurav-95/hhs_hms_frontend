import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBBtn as Button,
} from "mdb-react-ui-kit";
import Sidebar from "../admin/Sidebar";
import Header from "../common/Header";

import { BiArrowBack } from "react-icons/bi";
import axios from "axios";
import { APIS } from "../constants/api";

function EmployeeDetails() {
  const { id } = useParams() || {};
  const [empData, setEmpData] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [updatedEmployee, setUpdatedEmployee] = useState(
    empData.employee || {}
  );
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${APIS.GETEMPLOYEEBYID}/${id}`);
        const { status, data } = response;

        console.log("Hiii", response.data);
        if (status === 200) {
          setEmpData(data);
          setUpdatedEmployee(data);
        } else {
          console.error("Error while fetching property data");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  if (loading) {
    // Handle loading state here (e.g., display a loading spinner)
    return <div>Loading...</div>;
  }

  // if (!propData) {
  //   // Handle the case when data is not available
  //   return <div>Data not available</div>;
  // }

  const handleEditMode = async () => {
    setEditMode(!editMode);
    if (editMode) {
      try {
        const response = await axios.put(
          `${APIS.UPDATEEMPLOYEEBYID}/${id}`,
          updatedEmployee
        );
        if (response.status === 200) {
          console.log("Employee details updated successfully");
          navigate(`/employee-details/${id}`);
        } else {
          console.error("Error while updating property data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      // Enter edit mode
      setEditMode(true);
    }
  };

  const goBack = (event) => {
    // event.preventDefault();
    navigate("/allempolyee");
  };

  const handleChange = (event) => {
    // Update input value in edit mode
    const { name, value } = event.target;
    console.log(value);
    setUpdatedEmployee((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="editcontainer">
      <Header />
      <div className="mainedit">
        <div className="arrow-back-container">
          <BiArrowBack className="addbacklogo" onClick={() => navigate(-1)} />
        </div>

        <Col>
          <h1 className="propertydetails">
            Details of {updatedEmployee?.empName}
          </h1>
        </Col>
      </div>

      <Row className="detailsrow">
        <ul className="list-group">
          <Row className="detailsrow">
            <Col className="column">
              <strong>Empolyee ID:</strong>
              <input
                className="list-group-item input-field"
                type="text"
                name="emp_id"
                value={updatedEmployee.emp_id}
                onChange={handleChange}
                readOnly
              />

              <strong>Employee Name</strong>

              <input
                className="list-group-item input-field"
                type="text"
                name="empName"
                value={updatedEmployee.empName}
                onChange={handleChange}
              />

              <strong>Department:</strong>

              <input
                className="list-group-item input-field"
                type="text"
                name="department"
                value={updatedEmployee.department}
                onChange={handleChange}
              />

              <strong>DOB:</strong>

              <input
                className="list-group-item input-field"
                type="date"
                name="dob"
                value={updatedEmployee.dob}
                onChange={handleChange}
              />

              <strong>Gender:</strong>
              <input
                className="list-group-item input-field"
                type="text"
                name="gender"
                value={updatedEmployee.gender}
                onChange={handleChange}
              />

              <strong>Contact Number:</strong>
              <input
                className="list-group-item input-field"
                type="tel"
                name="contactNum"
                value={updatedEmployee.contactNum}
                onChange={handleChange}
              />

              <strong>Blood Group:</strong>
              <select
                className="list-group-item input-field"
                id="Blood Group"
                name="bloodgroup"
                value={updatedEmployee.bloodgroup}
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
              <strong>Aadhar Number:</strong>
              <input
                className="list-group-item input-field"
                type="number"
                name="aadhar"
                value={updatedEmployee.aadhar}
                onChange={handleChange}
                required
              />

              <strong>Qualification:</strong>
              <input
                className="list-group-item input-field"
                type="text"
                name="qualification"
                value={updatedEmployee.qualification}
                onChange={handleChange}
                required
              />

              <strong>PAN Number:</strong>
              <input
                className="list-group-item input-field"
                type="text"
                name="pan"
                value={updatedEmployee.pan}
                onChange={handleChange}
                required
              />
            </Col>
            <Col className="column">
              <strong>Position:</strong>
              <input
                className="list-group-item input-field "
                type="text"
                name="position"
                value={updatedEmployee.position}
                onChange={handleChange}
                required
              />

              <strong>Basic Salary:</strong>
              <input
                className="list-group-item input-field "
                type="text"
                name="basicSalary"
                value={updatedEmployee.basicSalary}
                onChange={handleChange}
                required
              />

              <strong>Net Salary:</strong>

              <input
                className="list-group-item input-field"
                type="text"
                name="netSalary"
                value={updatedEmployee.netSalary}
                onChange={handleChange}
                required
              />

              <strong>Gross Salary:</strong>

              <input
                className="list-group-item input-field"
                type="text"
                name="grossSalary"
                value={updatedEmployee.grossSalary}
                onChange={handleChange}
                required
              />

              <strong>Allowance:</strong>

              <input
                className="list-group-item input-field"
                type="text"
                name="allowance"
                value={updatedEmployee.allowance}
                onChange={handleChange}
                required
              />
              <strong>Deduction:</strong>

              <input
                className="list-group-item input-field"
                type="text"
                name="deduction"
                value={updatedEmployee.deduction}
                onChange={handleChange}
                required
              />

              <strong>Loan Amount:</strong>

              <input
                className="list-group-item input-field"
                type="text"
                name="loanAmount"
                value={updatedEmployee.loanAmount}
                onChange={handleChange}
                required
              />
              <strong>Loan Repayment Amount:</strong>

              <input
                className="list-group-item input-field"
                type="text"
                name="loanRepaymentAmount"
                value={updatedEmployee.loanRepaymentAmount}
                onChange={handleChange}
                required
              />
              {/* <strong>PF Employee Contribution:</strong>
  
                <input
                 className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                 type="text"
                 name="pfEmployeeContribution"
                 value={updatedEmployee.pfEmployeeContribution}
                 onChange={handleChange}
                 required
                /> */}
              <strong>Inventory Item</strong>
              <input
                className="list-group-item input-field"
                type="text"
                name="inventoryItem"
                value={updatedEmployee.inventoryItem}
                onChange={handleChange}
                required
              />
              <strong>Date Of Hiring:</strong>
              <input
                className="list-group-item input-field"
                type="date"
                name="dateOfHiring"
                value={updatedEmployee.dateOfHiring}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>
        </ul>
      </Row>
      <Row className="form-group ">
        <Col md-2>
          {/* <Button
            variant="primary"
            square
            style={{ width: "100px" }}
            onClick={goBack}
          >
            Cancel
          </Button> */}
          <Button
            variant="primary"
            type="submit"
            square
            onClick={handleEditMode}
          >
            {editMode ? "Update" : "Edit"}
            {/* Update */}
          </Button>
        </Col>
      </Row>

      {/* </Sidebar> */}
    </div>
  );
}

export default EmployeeDetails;
