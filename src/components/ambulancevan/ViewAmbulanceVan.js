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
import { AmbulanceService } from "../../services/AmbulanceService";


const ViewAmbulanceVan = () => {
  const [allambulancevan, setAllambulancevan] = useState({});
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredAmbulanceVan, setFilteredAmbulanceVan] = useState({});
  const reversedData = Object.keys(filteredAmbulanceVan).reverse();


  const handleViewProfile = (amb_id) => {
    navigate(`/detailsambulancevan/${amb_id}`);
  };
  const fetchAllambulancevan = async () => {
    try {
      const response = await AmbulanceService.getAllAmbulance();
      console.log("API Response Ambulance:", response);
      if (Array.isArray(response)) {
        const ambulanceobject = {};
        response.forEach((ambulance) => {
          ambulanceobject[ambulance.amb_id] = ambulance;
        });
        setAllambulancevan(ambulanceobject);
        setFilteredAmbulanceVan(ambulanceobject);
      } else {
        console.error("Invalid data received from the API:", response);
      }
    } catch (error) {
      console.error("Error fetching Ambulance data:", error);
    }
  };
  useEffect(() => {
    fetchAllambulancevan();
  }, []);
  const handleEditProfile = (amb_id) => {
    navigate(`/editambulancevan/${amb_id}`);
  };
  const handleDelete = async (amb_id) => {
    //   window.confirm("The Employee will be get deleted permanantly");

    try {
      await axios.delete(`${APIS.DELETEAMBULANCEBYID}/${amb_id}`);
      console.log("Deleted Successfully");
      const updatedAmbulanceVan = { ...allambulancevan };
      delete updatedAmbulanceVan[amb_id];
      setAllambulancevan(updatedAmbulanceVan);
      
    } catch (error) {
      console.error("Error deleting AmbulanceVan :", error);
    }
  };
  const handleSearchInputChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);

    const filtered = Object.keys(allambulancevan).filter((ambId) => {
      const ambulance = allambulancevan[ambId];
      const matchesSearch = Object.values(ambulance).some((field) =>
        String(field).toLowerCase().includes(value.toLowerCase())
      );
      return matchesSearch;
    });

    const filteredAmbulanceData = {};
    filtered.forEach((ambId) => {
      filteredAmbulanceData[ambId] = allambulancevan[ambId];
    });
    setFilteredAmbulanceVan(filteredAmbulanceData);
  };
  return (
    <div>
      <Header />
      <div className="mt-4">
      <div className="arrow-back-container">
        <BiArrowBack
          className="backLoginForm fs-2 text-dark"
          onClick={() => navigate(-1)}
        />
      </div>
      <h2 className="title">Ambulance Van Details</h2>
      </div>
      <div className="d-flex seachcontentcenter mb-4 align-items-center">
        <div className=" search ms-4">
          <input
            label="Search"
            type="text"
            className="form-control"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </div>
      </div>
      <Table striped>
        <thead className="shadow-lg p-3 mb-5 bg-white rounded">
          <tr>
            <th>Sr. No.</th>
            <th>Receiver Name</th>
            <th>Date</th>
            <th>Account Holder Name</th>
            <th>Rupee</th>
            <th>Remark</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="shadow-lg p-3 mb-5 bg-white rounded">
          {/* {Object.keys(filteredAmbulanceVan).map((ambId, index) => {
            const ambulance = filteredAmbulanceVan[ambId]; */}
              {reversedData.map((ambId, index) => {
              const ambulance = filteredAmbulanceVan[ambId];
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{ambulance.receiverName}</td>
                <td>{ambulance.date}</td>
                <td>{ambulance.accHolderName}</td>
                <td>{ambulance.rupee}</td>
                <td>{ambulance.remark}</td>

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
                        <Dropdown.Item onClick={() => handleViewProfile(ambId)}>
                          View Ambulance Van
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => handleEditProfile(ambId)}>
                          Edit Ambulance Van
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleDelete(ambId)}
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

export default ViewAmbulanceVan;
