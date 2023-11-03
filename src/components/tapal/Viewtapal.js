import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Header from "../common/Header";
import "react-datepicker/dist/react-datepicker.css";
import "../../asset/style.css";
import { BiArrowBack } from "react-icons/bi";
import { Dropdown } from 'react-bootstrap';
import { TapalService } from "../../services/TapalService";
import axios from 'axios';

import { APIS } from "../constants/api";

const Viewtapal = () => {
  const [selectLetterNo, setSelectLetterNo] = useState("all");
  const [selectLetterType, setSelectLetterType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [tapalData, setTapalData] = useState({});
  const [filteredTapal, setFilteredTapal] = useState({});
  const reversedData = Object.keys(filteredTapal).reverse();

  const fetchTapalData = async () => {
    try {
      const response = await TapalService.getAllTapal();
      console.log("tapal Response:", response);
      if (Array.isArray(response)) {
        const tapalobject = {};
        response.forEach((tapal) => {
          tapalobject[tapal.id] = tapal;
        });
        setTapalData(tapalobject);
        setFilteredTapal(tapalobject);
      } else {
        console.error("Invalid data received from the API:", response);
      }
    } catch (error) {
      console.error("Error fetching tapal data:", error);
    }
  };

  useEffect(() => {
    fetchTapalData();
  }, []);

  const handleEditProfile = (id) => {
    navigate(`/edit-tapal/${id}`);
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${APIS.DELETETAPALBYID}/${id}`);
      console.log("Deleted Successfully");
      const updatedTapalData = { ...tapalData };
      delete updatedTapalData[id];
      setTapalData(updatedTapalData);
      setFilteredTapal(updatedTapalData);
    } catch (error) {
      console.error("Error deleting tapal:", error);
    }
  };

  const handleLetterType = (event) => {
    const { value } = event.target;
    setSelectLetterType(value);
  };

  const handleSearchInputChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
  };

  useEffect(() => {
    const filtered = Object.keys(tapalData)
      .filter(id => {
        const tapal = tapalData[id];
        const matchesLetterType = selectLetterType === "all" || tapal.letterType === selectLetterType;
        const matchesSearch = Object.values(tapal).some(field =>
          String(field).toLowerCase().includes(searchQuery.toLowerCase())
        );
        return matchesLetterType && matchesSearch;
      });
      const filteredTapalData = {};
      filtered.forEach((id) => {
        filteredTapalData[id] = tapalData[id];
      });

    setFilteredTapal(filteredTapalData);
  }, [searchQuery, selectLetterNo, selectLetterType, tapalData]);

  return (
    <div>
      <Header />
      <div className="arrow-back-container">
        <BiArrowBack
          className="backLoginForm fs-2 text-dark"
          onClick={() => navigate(-1)}
        />
      </div>
      <h2 className="title">Tapal Details</h2>
      <div className="d-flex seachcontentcenter mb-4 align-items-center">
        <div className="search ms-4">
          <input
            label="Search"
            type="text"
            className="form-control"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </div>

        <div className="ms-4">
          <select
            id="lettertypeFilter"
            className="form-select"
            value={selectLetterType}
            onChange={handleLetterType}
          >
            <option value="all">Type</option>
            <option value="Receive">Receive</option>
            <option value="Out Letter">Out Letter</option>
          </select>
        </div>
      </div>
      <Table striped>
        <thead className="shadow-lg p-3 mb-5 bg-white rounded">
          <tr>
            <th>Sr. No</th>
            <th>Letter No</th>
            <th>Letter Type</th>
            <th>Date</th>
            <th>To Address</th>
            <th>From Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="shadow-lg p-3 mb-5 bg-white rounded">
  {/* {Object.keys(filteredTapal).map((id, index) => {
    const tapal = filteredTapal[id]; */}
    {reversedData.map((id, index) => {
              const tapal = filteredTapal[id];
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{tapal.letterNo}</td>
        <td>{tapal.letterType}</td>
        <td>{tapal.date}</td>
        <td>{tapal.toAddress}</td>
        <td>{tapal.fromAddress}</td>
        <td>
          <div className="dropdown">
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdownMenuButton">
                &#8942;
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleEditProfile(id)}>
                  Edit Tapal
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleDelete(id)}
                  className="red-text"
                >
                  Delete Tapal
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

export default Viewtapal;
