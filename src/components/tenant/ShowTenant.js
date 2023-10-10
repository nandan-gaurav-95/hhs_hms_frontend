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
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import axios from "axios";
import { APIS } from "../constants/api";
import { TenantService } from "../../services/TenantService";
import "../../asset/style.css";
const ShowTenant = () => {
  const navigate = useNavigate();

  const [tenantData, setTenantData] = useState({});
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTenants, setFilteredTenants] = useState({});

  const fetchTenantData = async () => {
    try {
      const response = await TenantService.getAllTenant();
      console.log("API Response:", response);
      if (Array.isArray(response)) {
        const tenantObject = {};
        response.forEach((tenant) => {
          tenantObject[tenant.tnt_id] = tenant;
        });
        console.log("Tenant data:", tenantObject);
        setTenantData(tenantObject);
      } else {
        console.error("Invalid data received from the API:", response);
      }
    } catch (error) {
      console.error("Error fetching tenant data:", error);
    }
  };

  useEffect(() => {
    fetchTenantData();
  }, []);

  const handleDepartmentChange = (event) => {
    const { value } = event.target;
    setSelectedDepartment(value);
  };

  const handleStatusChange = (event) => {
    const { value } = event.target;
    setSelectedStatus(value);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleEditProfile = (tnt_id) => {
    navigate(`/tenant-details/${tnt_id}`);
  };

  const handleDelete = async (tnt_id) => {
    try {
      await axios.delete(`${APIS.DELETETENANTBYID}/${tnt_id}`);
      console.log("Deleted Successfully");
      const updatedTenant = { ...tenantData };
      delete updatedTenant[tnt_id];
      setTenantData(updatedTenant);
    } catch (error) {
      console.error("Error deleting tenant:", error);
    }
  };

  const handleViewProfile = (tnt_id) => {
    navigate(`/tenantprofile/${tnt_id}`);
  };

  useEffect(() => {
    const filtered = Object.keys(tenantData).reduce((result, tntId) => {
      const tenant = tenantData[tntId];
      const matchesSearch = tenant.tenantName
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesDepartment =
        selectedDepartment === "all" || tenant.department === selectedDepartment;
      const matchesStatus =
        selectedStatus === "all" || tenant.status === selectedStatus;
      if (matchesSearch && matchesDepartment && matchesStatus) {
        result[tntId] = tenant;
      }
      return result;
    }, {});

    setFilteredTenants(filtered);
  }, [searchQuery, selectedDepartment, selectedStatus, tenantData]);

  return (
    <div className="">
      <Header />
      <div className="arrow-back-container">
        <BiArrowBack
          className="backLoginForm fs-2 text-dark"
          onClick={() => navigate(-1)}
        />
      </div>
      <h1 className="mb-4 text-center">Tenants Details</h1>

      <div className="d-flex mb-4 align-items-center">
      <div className=" search ms-4">
        <input
          label="Search"
          type="text"
          className="form-control"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
</div>
        <div className="ms-4">
          <select
            id="departmentFilter"
            className="form-select"
            value={selectedDepartment}
            onChange={handleDepartmentChange}
          >
            <option value="all">Departments</option>
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
        </div>

        <div className="ms-4">
          <select
            id="statusFilter"
            className="form-select"
            value={selectedStatus}
            onChange={handleStatusChange}
          >
            <option value="all">Status</option>
            <option value="Present">Present</option>
            <option value="Former">Former</option>
          </select>
        </div>
      </div>
      <Table striped>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Name</th>
            <th>Department</th>
            <th>AllocatedShop</th>
            <th>Contact No</th>
            <th>Deposit</th>
            <th>Rent Due</th>
            <th>ElectricityDue</th>
            <th>Expiry Date</th>
            <th>status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(filteredTenants).map((tntId, index) => {
            const tenant = filteredTenants[tntId];
            return (
              <tr key={tntId}>
                <td>{index + 1}</td>
                <td>{tenant.tenantName}</td>
                <td>{tenant.department}</td>
                <td>{tenant.allocatedShop}</td>
                <td>{tenant.contactNum}</td>
                <td>{tenant.securityDeposit}</td>
                <td>{tenant.rentDue}</td>
                <td>{tenant.electricityDue}</td>
                <td>{tenant.expiryDate}</td>
                <td>{tenant.status}</td>
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
                        <Dropdown.Item onClick={() => handleViewProfile(tntId)}>
                          View Profile
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => handleEditProfile(tntId)}>
                          Edit Profile
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleDelete(tntId)}
                          className="red-text"
                        >
                          Delete Profile
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ShowTenant;