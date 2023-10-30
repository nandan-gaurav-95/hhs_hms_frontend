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
import { MedicalService } from "../../services/MedicalService";

const ViewMedicalAck = () => {
  const [allmedicalack, setAllmedicalack] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMedicalAck, setFilteredMedicalAck] = useState({});
  const navigate = useNavigate();

  const handleViewProfile = (mdack_id) => {
    navigate(`/detailmedicalack/${mdack_id}`);
  };

  const fetchAllmedicalack = async () => {
    try {
      const response = await MedicalService.getAllMedical();
      console.log("API Response medical complex:", response);
      if (Array.isArray(response)) {
        const medicalobject = {};
        response.forEach((medical) => {
          medicalobject[medical.mdack_id] = medical;
        });
        setAllmedicalack(medicalobject);
        setFilteredMedicalAck(medicalobject); // Initialize filteredMedicalAck
      } else {
        console.error("Invalid data received from the API:", response);
      }
    } catch (error) {
      console.error("Error fetching medical complex data:", error);
    }
  };

  useEffect(() => {
    fetchAllmedicalack();
  }, []);

  useEffect(() => {
    // Update filteredMedicalAck whenever allmedicalack changes
    setFilteredMedicalAck(allmedicalack);
  }, [allmedicalack]);

  const handleEditProfile = (mdack_id) => {
    navigate(`/editmedicalack/${mdack_id}`);
  };

  const handleDelete = async (mdack_id) => {
    try {
      await axios.delete(`${APIS.DELETEMEDICALACKNWLDGEBYID}/${mdack_id}`);
      console.log("Deleted Successfully");
      const updatedMedicalAck = { ...allmedicalack };
      delete updatedMedicalAck[mdack_id];
      setAllmedicalack(updatedMedicalAck);
    } catch (error) {
      console.error("Error deleting MedicalAck :", error);
    }
  };

  const handleSearchInputChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);

    const filtered = Object.keys(allmedicalack).filter((mdackId) => {
      const medical = allmedicalack[mdackId];
      const matchesSearch = Object.values(medical).some((field) =>
        String(field).toLowerCase().includes(value.toLowerCase())
      );
      return matchesSearch;
    });

    const filteredMedicalAckData = {};
    filtered.forEach((mdackId) => {
      filteredMedicalAckData[mdackId] = allmedicalack[mdackId];
    });
    setFilteredMedicalAck(filteredMedicalAckData);
  };

  return (
    <div>
      <Header />
      <div className="arrow-back-container">
        <BiArrowBack
          className="backLoginForm fs-2 text-dark"
          onClick={() => navigate(-1)}
        />
      </div>
      <h2 className="title">Medical Acknowledgment Details</h2>
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
      </div>
      <Table striped>
        <thead className="shadow-lg p-3 mb-5 bg-white rounded">
          <tr>
            <th>Sr. No.</th>
            <th>To Name</th>
            <th>Date</th>
            <th>Rupees</th>
            <th>Cheque No</th>
            <th>Dated</th>
            <th>Hospital I.P. NO.</th>
            <th>Disease</th>
            <th>Remark</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="shadow-lg p-3 mb-5 bg-white rounded">
          {Object.keys(filteredMedicalAck).map((mdackId, index) => {
            const medical = filteredMedicalAck[mdackId];
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{medical.toName}</td>
                <td>{medical.date}</td>
                <td>{medical.rupees}</td>
                <td>{medical.chequeNo}</td>
                <td>{medical.dated}</td>
                <td>{medical.hospIpNo}</td>
                <td>{medical.disease}</td>
                <td>{medical.remark}</td>
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
                          onClick={() => handleViewProfile(mdackId)}
                        >
                          View Medical Ack
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleEditProfile(mdackId)}
                        >
                          Edit Medical Ack
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleDelete(mdackId)}
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

export default ViewMedicalAck;
