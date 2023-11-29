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
import { ParkingService } from "../../services/ParkingService";
const ViewParking = () => {
  const [allparking, setAllparking] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredParking, setFilteredParking] = useState({}); // Initialize with all data
  const reversedData = Object.keys(filteredParking).reverse();

  const navigate = useNavigate();
  const handleViewProfile = (p_id) => {
    navigate(`/detailparking/${p_id}`);
  };
  const fetchAllparking = async () => {
    try {
      const response = await ParkingService.getAllParking();
      console.log("API Response:", response);
      if (Array.isArray(response)) {
        const parkingobject = {};
        response.forEach((parking) => {
          parkingobject[parking.p_id] = parking;
        });
        setAllparking(parkingobject);
        setFilteredParking(parkingobject); // Initialize filteredParking
      } else {
        console.error("Invalid data received from the API:", response);
      }
    } catch (error) {
      console.error("Error fetching parking data:", error);
    }
  };
  useEffect(() => {
    fetchAllparking();
  }, []);
  const handleEditProfile = (p_id) => {
    navigate(`/editparking/${p_id}`);
  };
  const handleDelete = async (p_id) => {
    //   window.confirm("The Employee will be get deleted permanantly");

    try {
      await axios.delete(`${APIS.DELETEPARKINGBYID}/${p_id}`);
      console.log("Deleted Successfully");
      const updatedParking = { ...allparking };
      delete updatedParking[p_id];
      setAllparking(updatedParking);
    } catch (error) {
      console.error("Error deleting Parking :", error);
    }
  };

  const handleSearchInputChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);

    const filtered = Object.keys(allparking).filter((parkId) => {
      const parking = allparking[parkId];
      const matchesSearch = Object.values(parking).some((field) =>
        String(field).toLowerCase().includes(value.toLowerCase())
      );
      return matchesSearch;
    });

    const filteredParkingData = {};
    filtered.forEach((parkId) => {
      filteredParkingData[parkId] = allparking[parkId];
    });
    setFilteredParking(filteredParkingData);
  };
  return (
    <div className="mainview">
      <Header />
      <div className="submainview">
      <div className="arrow-back-container">
        <BiArrowBack
          className="addbacklogo"
          onClick={() => navigate(-1)}
        />
      </div>
      <h2 className="availabletext">Parking Details</h2>
      <div className="forsearch">
        <div className="input-group">
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
      </div>
      <Table striped>
        <thead className="viewbody">
          <tr>
            <th>Sr.No.</th>
            <th>Receiver Name</th>
            <th>Date</th>
            <th>Rupee</th>
            <th>Parking Rent</th>
            <th>Month</th>
            <th>Remark</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="subviewbody">
          {/* {Object.keys(filteredParking).map((parkId, index) => {
            const parking = filteredParking[parkId]; */}
            {reversedData.map((parkId, index) => {
              const parking = filteredParking[parkId];
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{parking.receiverName}</td>
                <td>{parking.date}</td>
                <td>{parking.rupee}</td>
                <td>{parking.parkingRent}</td>
                <td>{parking.month}</td>
                <td>{parking.remark}</td>
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
                          onClick={() => handleViewProfile(parkId)}
                        >
                          View Parking
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleEditProfile(parkId)}
                        >
                          Edit Parking
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleDelete(parkId)}
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

export default ViewParking;
