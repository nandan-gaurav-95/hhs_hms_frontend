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
import { MedicalAidService } from "../../services/MedicalAidService"; 

const ViewMedicalaid = () => {
  const [allmedicalaid, setAllmedicalaid] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMedicalaid, setFilteredMedicalaid] = useState({});
  const reversedData = Object.keys(filteredMedicalaid).reverse();

  const navigate = useNavigate();

  const handleViewProfile = (med_id) => {
    navigate(`/detailmedicalaid/${med_id}`);
  };

  const fetchAllmedicalaid = async () => {
    try {
      const response = await MedicalAidService.getAllMedicalAid();
      console.log("API Response aid complex:", response);
      if (Array.isArray(response)) {
        const medicalaidobject = {};
        response.forEach((medical) => {
          medicalaidobject[medical.med_id] = medical;
        });
        setAllmedicalaid(medicalaidobject);
        setFilteredMedicalaid(medicalaidobject); // Initialize filteredMedicalAck
      } else {
        console.error("Invalid data received from the API:", response);
      }
    } catch (error) {
      console.error("Error fetching medical complex data:", error);
    }
  };

  useEffect(() => {
    fetchAllmedicalaid();
  }, []);

  useEffect(() => {
    // Update filteredMedicalAck whenever allmedicalack changes
    setFilteredMedicalaid(allmedicalaid);
  }, [allmedicalaid]);

  const handleEditProfile = (med_id) => {
    navigate(`/editmedicalaid/${med_id}`);
  };

  const handleDelete = async (med_id) => {
    try {
      await axios.delete(`${APIS.DELETEMEDICALAIDBYID}/${med_id}`);
      console.log("Deleted Successfully");
      const updatedMedicalaid = { ...allmedicalaid };
      delete updatedMedicalaid[med_id];
      setAllmedicalaid(updatedMedicalaid);
    } catch (error) {
      console.error("Error deleting MedicalAid :", error);
    }
  };

  const handleSearchInputChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);

    const filtered = Object.keys(allmedicalaid).filter((med_id) => {
      const medical = allmedicalaid[med_id];
      const matchesSearch = Object.values(medical).some((field) =>
        String(field).toLowerCase().includes(value.toLowerCase())
      );
      return matchesSearch;
    });

    const filteredMedicalAidData = {};
    filtered.forEach((medId) => {
      filteredMedicalAidData[medId] = allmedicalaid[medId];
    });
    setFilteredMedicalaid(filteredMedicalAidData);
  };

  return (
    <div className="mainview">
      <Header />
      <div className="submainview">
        <div className="arrow-back-container">
          <BiArrowBack className="addbacklogo" onClick={() => navigate(-1)} />
        </div>
        <h2 className="availabletext">Medical Aid Details</h2>
      </div>
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
      <Table striped>
        <thead className="viewbody">
          <tr>
            <th>Sr. No.</th>
            <th>Patient Name</th>
            <th>Patient Address</th>
            <th>Hospital Name</th>
            <th>Aliment</th>
            <th>Amount Sanction</th>
            <th>Cheque Number</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="subviewbody">
          {/* {Object.keys(filteredMedicalAck).map((mdackId, index) => {
            const medical = filteredMedicalAck[mdackId]; */}
          {reversedData.map((medId, index) => {
            const medical = filteredMedicalaid[medId];
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{medical.patient_name}</td>
                <td>{medical.address_patient}</td>
                <td>{medical.hospital_name}</td>
                <td>{medical.aliment}</td>
                <td>{medical.amt_sanction}</td>
                <td>{medical.chq_no}</td>
                <td>{medical.date}</td>
                
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
                          onClick={() => handleViewProfile(medId)}
                        >
                          View Medical Aid
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleEditProfile(medId)}
                        >
                          Edit Medical Aid
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleDelete(medId)}
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

export default ViewMedicalaid;