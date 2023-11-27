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
import { HhsComplexService } from "../../services/HhsComplexService";

const ViewHHSComplex = () => {
  const [allhhscomplex, setAllhhscomplex] = useState({});
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredHhscomplex, setFilteredHhscomplex] = useState({}); // Initially set to all hhscomplex
  const reversedData = Object.keys(filteredHhscomplex).reverse();

  const handleViewProfile = (hc_id) => {
    navigate(`/detailhhscomplex/${hc_id}`);
  };

  const fetchAllhhscomplex = async () => {
    try {
      const response = await HhsComplexService.getAllHhsComplex();
      console.log("API Responsehhscomplex:", response);
      if (Array.isArray(response)) {
        const hhsComplexobject = {};
        response.forEach((hhscomplex) => {
          hhsComplexobject[hhscomplex.hc_id] = hhscomplex;
        });
        setAllhhscomplex(hhsComplexobject);
        setFilteredHhscomplex(hhsComplexobject); // Set filteredHhscomplex to initially contain all hhscomplex
      } else {
        console.error("Invalid data received from the API:", response);
      }
    } catch (error) {
      console.error("Error fetching hhscomplex data:", error);
    }
  };

  useEffect(() => {
    fetchAllhhscomplex();
  }, []);

  const handleEditProfile = (hc_id) => {
    navigate(`/edithhscomplex/${hc_id}`);
  };

  const handleDelete = async (hc_id) => {
    try {
      await axios.delete(`${APIS.DELETEHHSCOMPLEXBYID}/${hc_id}`);
      console.log("Deleted Successfully");
      const updatedHHSCOMPLEX = { ...allhhscomplex };
      delete updatedHHSCOMPLEX[hc_id];
      setAllhhscomplex(updatedHHSCOMPLEX);
      setFilteredHhscomplex(updatedHHSCOMPLEX); // Update filteredHhscomplex after deleting
    } catch (error) {
      console.error("Error deleting HHSCOMPLEX:", error);
    }
  };

  const handleSearchInputChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);

    const filtered = Object.keys(allhhscomplex).filter((hcId) => {
      const hhscomplex = allhhscomplex[hcId];
      const matchesSearch = Object.values(hhscomplex).some((field) =>
        String(field).toLowerCase().includes(value.toLowerCase())
      );
      return matchesSearch;
    });

    const filteredHhsData = {};
    filtered.forEach((hcId) => {
      filteredHhsData[hcId] = allhhscomplex[hcId];
    });
    setFilteredHhscomplex(filteredHhsData);
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
      <h2 className="availabletext">HHS Complex Details</h2>
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
        <thead className="">
          <tr>
            <th>Sr. No.</th>
            <th>L.F. No</th>
            <th>R.R. NO</th>
            <th>Date</th>
            <th>Receiver Name</th>
            <th>Rupee</th>
            <th>Month</th>
            <th>Electrical Charges</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="">
          {/* {Object.keys(filteredHhscomplex).map((hcId, index) => {
            const hhscomplex = filteredHhscomplex[hcId]; */}
             {reversedData.map((hcId, index) => {
              const hhscomplex = filteredHhscomplex[hcId];
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{hhscomplex.lfNo}</td>
                <td>{hhscomplex.rrNo}</td>
                <td>{hhscomplex.date}</td>
                <td>{hhscomplex.receiverName}</td>
                <td>{hhscomplex.rupees}</td>
                <td>{hhscomplex.month}</td>
                <td>{hhscomplex.eleCharges}</td>
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
                        <Dropdown.Item onClick={() => handleViewProfile(hcId)}>
                          View HHS Complex
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => handleEditProfile(hcId)}>
                          Edit HHS Complex
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleDelete(hcId)}
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

export default ViewHHSComplex;
