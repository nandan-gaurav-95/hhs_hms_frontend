import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Header from "../common/Header";
import "react-datepicker/dist/react-datepicker.css";
import "../../asset/style.css";
import axios from "axios";
import { APIS } from "../constants/api";
import { BiArrowBack } from "react-icons/bi";
import { Dropdown } from "react-bootstrap";
import { BloodCenterService } from "../../services/BloodCenterService";

const ViewBloodCenter = () => {
  const [allBloodCenter, setAllBloodCenter] = useState({});
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [bloodGroupFilter, setBloodGroupFilter] = useState("all");
  const [filteredBloodCenter, setFilteredBloodCenter] = useState({});
  const reversedData = Object.keys(filteredBloodCenter).reverse();

  const fetchAllBloodCenter = async () => {
    try {
      const response = await BloodCenterService.getAllBloodCenter();
      console.log("API Response:", response);
      if (Array.isArray(response)) {
        const bloodCenterObject = {};
        response.forEach((bloodCenter) => {
          bloodCenterObject[bloodCenter.bc_id] = bloodCenter;
        });
        setAllBloodCenter(bloodCenterObject);
      } else {
        console.error("Invalid data received from the API:", response);
      }
    } catch (error) {
      console.error("Error fetching blood center data:", error);
    }
  };

  useEffect(() => {
    fetchAllBloodCenter();
  }, []);

  const handleViewProfile = (bc_id) => {
    navigate(`/detailbloodcenter/${bc_id}`);
  };

  const handleEditProfile = (bc_id) => {
    navigate(`/editbloodcenter/${bc_id}`);
  };

  const handleDelete = async (bc_id) => {
    try {
      await axios.delete(`${APIS.DELETEBLOODCENTERBYID}/${bc_id}`);
      console.log("Deleted Successfully");
      const updatedBloodCenter = { ...allBloodCenter };
      delete updatedBloodCenter[bc_id];
      setAllBloodCenter(updatedBloodCenter);
    } catch (error) {
      console.error("Error deleting BloodCenter:", error);
    }
  };

  const handleSearchInputChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
  };

  const handleBloodGroupFilter = (event) => {
    const { value } = event.target;
    setBloodGroupFilter(value);
  };

  useEffect(() => {
    const filteredBloodCenters = Object.keys(allBloodCenter).filter((bcId) => {
      const bloodCenter = allBloodCenter[bcId];
      const matchesBloodGroup =
        bloodGroupFilter === "all" ||
        bloodCenter.bloodgroup === bloodGroupFilter;
      const matchesSearch = Object.values(bloodCenter).some((field) =>
        String(field).toLowerCase().includes(searchQuery.toLowerCase())
      );
      return matchesBloodGroup && matchesSearch;
    });

    const filteredBloodCenterObject = {};
    filteredBloodCenters.forEach((bcId) => {
      filteredBloodCenterObject[bcId] = allBloodCenter[bcId];
    });

    setFilteredBloodCenter(filteredBloodCenterObject);
  }, [searchQuery, bloodGroupFilter, allBloodCenter]);

  return (
    <div className="mainview">
      <Header />
      <div className="submainview">
        <div className="arrow-back-container">
          <BiArrowBack className="addbacklogo" onClick={() => navigate(-1)} />
        </div>
        <h2 className="availabletext">Blood Center Details</h2>
      </div>
      <div className="searchcontentcenter">
        <div className=" search">
          <input
            label="Search"
            type="text"
            className="form-control"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </div>

        <div className="invsearch">
          <select
            id="bloodGroupFilter"
            className="form-select"
            value={bloodGroupFilter}
            onChange={handleBloodGroupFilter}
          >
            <option value="all">Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>
      </div>
      <Table striped>
        <thead className="">
          <tr>
            <th>Sr. No.</th>
            <th>Receiver Name</th>
            <th>Blood Group</th>
            <th>I.P. NO.</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Hospital Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="">
          {/* {Object.keys(filteredBloodCenter).map((bcId, index) => {
            const bloodCenter = allBloodCenter[bcId]; */}
          {reversedData.map((bcId, index) => {
            const bloodCenter = filteredBloodCenter[bcId];
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{bloodCenter.receiverName}</td>
                <td>{bloodCenter.bloodgroup}</td>
                <td>{bloodCenter.ipNo}</td>
                <td>{bloodCenter.age}</td>
                <td>{bloodCenter.gender}</td>
                <td>{bloodCenter.hospitalName}</td>
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
                        <Dropdown.Item onClick={() => handleViewProfile(bcId)}>
                          View BloodCenter
                        </Dropdown.Item>

                        <Dropdown.Item onClick={() => handleEditProfile(bcId)}>
                          Edit BloodCenter
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleDelete(bcId)}
                          className="red-text"
                        >
                          Delete
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

export default ViewBloodCenter;
