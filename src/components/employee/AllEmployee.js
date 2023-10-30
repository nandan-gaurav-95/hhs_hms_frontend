import React, { useState, useEffect } from "react";
import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBInput as Input,
  MDBBtn as Button,
} from "mdb-react-ui-kit";
import Sidebar from "../admin/Sidebar";
import Table from "react-bootstrap/Table";
import Header from "../common/Header";
import { Dropdown } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { EmployeeService } from "../../services/EmployeeService";
import axios from "axios";
import { APIS } from "../constants/api";
import "../../asset/style.css";

const AllEmployee = () => {
  const [allEmployee, setAllEmployee] = useState({});
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [sortType, setSortType] = useState("all"); // 'all', 'Present', or 'Former'
  const [departmentSortType, setDepartmentSortType] = useState("all"); // 'all' or specific department

  // Function to fetch data from the API
  const fetchAllEmployee = async () => {
    try {
      const response = await EmployeeService.getAllEmployee();
      const employeeObject = {};
      response.data.forEach((employee) => {
        // Use the employee's emp_id as the key in the object
        employeeObject[employee.emp_id] = employee;
      });
      setAllEmployee(employeeObject);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchAllEmployee();
  }, []);

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchInput(value);
  };

  const handleMarkAsResigned = async (empId) => {
    try {
      await axios.put(`${APIS.CHANGEEMPLOYEESTATUS}/${empId}`);
      fetchAllEmployee();
    } catch (error) {
      console.error("Error while changing the status:", error);
    }
  };

  const handleViewProfile = (emp_id) => {
    navigate(`/employeeprofile/${emp_id}`);
  };

  const handleEditProfile = (id) => {
    navigate(`/employee-details/${id}`);
  };

  const handleDelete = async (emp_id) => {
    try {
      await axios.delete(`${APIS.DELETEEMPLOYEEBYID}/${emp_id}`);
      fetchAllEmployee();
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  // Filter employees based on search query, sort type, and department sort type
  const filteredEmployees = Object.values(allEmployee).filter((employee) => {
    const nameMatches = employee.empName.toLowerCase().includes(searchInput.toLowerCase());

    if (sortType === "Present" || sortType === "Former") {
      return (
        nameMatches &&
        employee.status === sortType &&
        (departmentSortType === "all" || employee.department === departmentSortType)
      );
    } else {
      return (
        nameMatches &&
        (departmentSortType === "all" || employee.department === departmentSortType)
      );
    }
  });

  return (
    <div className="">
      <Header />

      <div className="arrow-back-container">
        <BiArrowBack
          className="backLoginForm fs-2 text-dark"
          onClick={() => navigate(-1)}
        />
      </div>
      <h1 className="mb-4 text-center">Employee Details</h1>

      <div className="d-flex seachcontentcenter mb-4 align-items-center">
        <div className=" search ms-4">
          <Input
            label="Search"
            type="text"
            value={searchInput}
            onChange={handleSearchChange}
          />
        </div>
        <div className="ms-3">
          <select
            id="sortType"
            className="form-select"
            value={sortType}
            onChange={(event) => setSortType(event.target.value)}
          >
            <option value="all">Status</option>
            <option value="Present">Present</option>
            <option value="Former">Former</option>
          </select>
        </div>

        <div className="ms-3">
          <select
            id="departmentSortType"
            className="form-select"
            value={departmentSortType}
            onChange={(event) => setDepartmentSortType(event.target.value)}
          >
            <option value="all">Department</option>
            <option value="School">School</option>
            <option value="ITI College">ITI College</option>
            <option value="Skill Center">Skill Center</option>
            <option value="Blood Collection Center">Blood Collection Center</option>
            <option value="Hostel">Hostel</option>
            <option value="Masjid">Masjid</option>
            <option value="Dargah">Dargah</option>
          </select>
        </div>
      </div>

      <Table striped>
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Name</th>
            <th>Joining Date</th>
            <th>Department</th>
            <th>Position</th>
            <th>Gender</th>
            <th>Loan Amount</th>
            <th>Contact No</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{employee.empName}</td>
              <td>{employee.dateOfHiring}</td>
              <td>{employee.department}</td>
              <td>{employee.position}</td>
              <td>{employee.gender}</td>
              <td>{employee.loanAmount}</td>
              <td>{employee.contactNum}</td>
              <td>{employee.status}</td>
              <td>
                <div className="dropdown">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="secondary"
                      id="dropdownMenuButton"
                    >
                      &#8942;
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => handleViewProfile(employee.emp_id)}>
                        View Profile
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleEditProfile(employee.emp_id)}>
                        Edit Profile
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleDelete(employee.emp_id)} className="red-text">
                        Delete
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link to={`/allocated-inventory/${employee.emp_id}`}>
                          Inventory Details
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleMarkAsResigned(employee.emp_id)}>
                        Mark as Resigned
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AllEmployee;
