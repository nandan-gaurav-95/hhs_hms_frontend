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
 import { GirlsHostelService } from "../../services/GirlsHostelService";

const ViewGirlsHostel = () => {
  const [allgirlshostel, setAllgirlshostel] = useState({});
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredgirlshostel, setFilteredgilrshostel] = useState({}); 
  const reversedData = Object.keys(filteredgirlshostel).reverse();

  const handleViewProfile = (gh_id) => {
    navigate(`/detailgirlshostel/${gh_id}`);
  };

  const fetchAllgirlshostel = async () => {
    try {
      const response = await GirlsHostelService.getAllGirlsHostel();
      console.log("API Response girls hostel :", response);
      if (Array.isArray(response)) {
        const girlshostelobject = {};
        response.forEach((girlshostel) => {
            girlshostelobject[girlshostel.gh_id] = girlshostel;
        });
        setAllgirlshostel(girlshostelobject);
        setFilteredgilrshostel(girlshostelobject); // Set filteredHhscomplex to initially contain all hhscomplex
      } else {
        console.error("Invalid data received from the API:", response);
      }
    } catch (error) {
      console.error("Error fetching  girls hostel data:", error);
    }
  };

  useEffect(() => {
    fetchAllgirlshostel();
  }, []);

  const handleEditProfile = (gh_id) => {
    navigate(`/editgirlshostel/${gh_id}`);
  };

  const handleDelete = async (gh_id) => {
    try {
      await axios.delete(`${APIS.DELETEHOSTELBYID}/${gh_id}`);
      console.log("Deleted Successfully");
      const updatedGIRLSHOSTEL = { ...allgirlshostel };
      delete updatedGIRLSHOSTEL[gh_id];
      setAllgirlshostel(updatedGIRLSHOSTEL);
      setFilteredgilrshostel(updatedGIRLSHOSTEL); // Update filteredHhscomplex after deleting
    } catch (error) {
      console.error("Error deleting GIRLSHOSTEL:", error);
    }
  };

  const handleSearchInputChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);

    const filtered = Object.keys(allgirlshostel).filter((ghId) => {
      const girlshostel = allgirlshostel[ghId];
      const matchesSearch = Object.values(girlshostel).some((field) =>
        String(field).toLowerCase().includes(value.toLowerCase())
      );
      return matchesSearch;
    });

    const filteredgirlshostelData = {};
    filtered.forEach((ghId) => {
        filteredgirlshostelData[ghId] = allgirlshostel[ghId];
    });
    setFilteredgilrshostel(filteredgirlshostelData);
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
      <h2 className="title">Girls Hostel Details</h2>
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
            <th>Date</th>
            <th>Food</th>
            <th>Food Quantity</th>
            <th>Bill Amount</th>
            <th>Balance</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="shadow-lg p-3 mb-5 bg-white rounded">
          {/* {Object.keys(filteredgirlshostel).map((ghId, index) => {
            const girlshostel = filteredgirlshostel[ghId]; */}
            {reversedData.map((ghId, index) => {
              const girlshostel = filteredgirlshostel[ghId];
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{girlshostel.date}</td>
                <td>{girlshostel.food}</td>
                <td>{girlshostel.food_quantity}</td>
                <td>{girlshostel.bill_amt}</td>
                <td>{girlshostel.balance}</td>
              
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
                        <Dropdown.Item onClick={() => handleViewProfile(ghId)}>
                          View Girls Hostel
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => handleEditProfile(ghId)}>
                          Edit  Girls Hostel
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleDelete(ghId)}
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

export default ViewGirlsHostel;