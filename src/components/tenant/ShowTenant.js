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

  const [tenantData, setTenantData] = useState([]);
  const [selectedComplex, setselectedComplex] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTenants, setFilteredTenants] = useState([]);

  const fetchTenantData = async () => {
    try {
      const response = await TenantService.getAllTenant();
      console.log("API Response:", response);
      if (Array.isArray(response)) {
        setTenantData(response);
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

  const handleComplexChange = (event) => {
    const { value } = event.target;
    setselectedComplex(value);
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
      const updatedTenantData = tenantData.filter(
        (tenant) => tenant.tnt_id !== tnt_id
      );
      setTenantData(updatedTenantData);
    } catch (error) {
      console.error("Error deleting tenant:", error);
    }
  };

  const handleViewProfile = (tnt_id) => {
    navigate(`/tenantprofile/${tnt_id}`);
  };
  useEffect(() => {
    const filtered = tenantData.filter((tenant) => {
      const matchesSearch = tenant.tenantName
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesComplex =
        selectedComplex === "all" || tenant.complex === selectedComplex;
      const matchesStatus =
        selectedStatus === "all" || tenant.status === selectedStatus;
      return matchesSearch && matchesComplex && matchesStatus;
    });

    setFilteredTenants(filtered);
  }, [searchQuery, selectedComplex, selectedStatus, tenantData]);

  return (
    <div className="">
      <Header />
      <div className="mt-4">
      <div className="arrow-back-container">
        <BiArrowBack
          className="backLoginForm fs-2 text-dark"
          onClick={() => navigate(-1)}
        />
      </div>
      <h1 className="mb-4 text-center">Tenants Details</h1>
</div>
      <div className="d-flex mb-4 align-items-center seachcontentcenter">
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
            id="complexFilter"
            className="form-select"
            value={selectedComplex}
            onChange={handleComplexChange}
          >
            <option value="all">Complex</option>
            <option value="Bhatkal Complex">Bhatkal Complex</option>
            <option value="Abbas Ali Complex">Abbas Ali Complex</option>
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
            <th>Complex</th>
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
          {filteredTenants.map((tenant, index) => (
            <tr key={tenant.tnt_id}>
              <td>{index + 1}</td>
              <td>{tenant.tenantName}</td>
              <td>{tenant.complex}</td>
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
                      <Dropdown.Item
                        onClick={() => handleViewProfile(tenant.tnt_id)}
                      >
                        View Profile
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleEditProfile(tenant.tnt_id)}
                      >
                        Edit Profile
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleDelete(tenant.tnt_id)}
                        className="red-text"
                      >
                        Delete Profile
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

export default ShowTenant;
