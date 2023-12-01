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
import { BloodReceiverService } from "../../services/BloodReceiverService";

const ViewBloodReceiver = () => {
  const [allBloodReceiver, setAllBloodReceiver] = useState({});
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [bloodGroupFilter, setBloodGroupFilter] = useState("all");
  const [filteredBloodReceiver, setFilteredBloodReceiver] = useState({});
  const reversedData = Object.keys(filteredBloodReceiver).reverse();

  const fetchAllBloodReceiver = async () => {
    try {
      const response = await BloodReceiverService.getAllBloodReceiver();
      console.log("API Response:", response);
      if (Array.isArray(response)) {
        const bloodReceiverObject = {};
        response.forEach((bloodReceiver) => {
            bloodReceiverObject[bloodReceiver.br_id] = bloodReceiver;
        });
        setAllBloodReceiver(bloodReceiverObject);
      } else {
        console.error("Invalid data received from the API:", response);
      }
    } catch (error) {
      console.error("Error fetching blood center data:", error);
    }
  };

  useEffect(() => {
    fetchAllBloodReceiver();
  }, []);

  const handleViewProfile = (br_id) => {
    navigate(`/detailbloodreceiver/${br_id}`);
  };

  const handleEditProfile = (br_id) => {
    navigate(`/editbloodreceiver/${br_id}`);
  };

  const handleDelete = async (br_id) => {
    try {
      await axios.delete(`${APIS.DELETEBLOODRECEIVERBYID}/${br_id}`);
      console.log("Deleted Successfully");
      const updatedBloodReceiver = { ...allBloodReceiver };
      delete updatedBloodReceiver[br_id];
      setAllBloodReceiver(updatedBloodReceiver);
    } catch (error) {
      console.error("Error deleting BloodReceiver:", error);
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
    const filteredBloodReceiver = Object.keys(allBloodReceiver).filter((brId) => {
      const bloodReceiver = allBloodReceiver[brId];
      const matchesBloodGroup =
        bloodGroupFilter === "all" ||
        bloodReceiver.bloodgroup === bloodGroupFilter;
      const matchesSearch = Object.values(bloodReceiver).some((field) =>
        String(field).toLowerCase().includes(searchQuery.toLowerCase())
      );
      return matchesBloodGroup && matchesSearch;
    });

    const filteredBloodReceiverObject = {};
    filteredBloodReceiver.forEach((brId) => {
      filteredBloodReceiverObject[brId] = allBloodReceiver[brId];
    });

    setFilteredBloodReceiver(filteredBloodReceiverObject);
  }, [searchQuery, bloodGroupFilter, allBloodReceiver]);

  return (
    <div className="mainview">
      <Header />
      <div className="submainview">
        <div className="arrow-back-container">
          <BiArrowBack className="addbacklogo" onClick={() => navigate(-1)} />
        </div>
        <h2 className="availabletext">Blood Receiver Details</h2>
      </div>
      <div className="searchcontentcenterblood">
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
        <thead className="viewbody">
          <tr>
            <th>Sr. No.</th>
            <th>Receiver Name</th>
            <th>Date</th>
            <th>Blood Group</th>
            <th>Age</th>
            <th>Unit No</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="subviewbody">
          {/* {Object.keys(filteredBloodCenter).map((bcId, index) => {
            const bloodCenter = allBloodCenter[bcId]; */}
          {reversedData.map((brId, index) => {
            const bloodReceiver = filteredBloodReceiver[brId];
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{bloodReceiver.receiverName}</td>
                <td>{bloodReceiver.date}</td>
                <td>{bloodReceiver.bloodgroup}</td>
                <td>{bloodReceiver.age}</td>
                <td>{bloodReceiver.unitNo}</td>
                <td>{bloodReceiver.gender}</td>
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
                        <Dropdown.Item onClick={() => handleViewProfile(brId)}>
                          View 
                        </Dropdown.Item>

                        <Dropdown.Item onClick={() => handleEditProfile(brId)}>
                          Edit 
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleDelete(brId)}
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

export default ViewBloodReceiver;