import React, { useState, useEffect } from "react";
import axios from "axios";
import { APIS } from "../constants/api";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; 
import Table from 'react-bootstrap/Table';
import {
  MDBContainer as Container,
  MDBCol as Col,
} from "mdb-react-ui-kit";
import "../../asset/style.css";
import { Dropdown } from 'react-bootstrap';
import Header from "../common/Header";
import { BiArrowBack } from "react-icons/bi";
import { PropertyService } from "../../services/PropertyService";

const AllProperties = () => {
  const [allProperty, setAllProperty] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Function to fetch data from the API
  const fetchAllProperties = async () => {
    try {
      const response = await PropertyService.getAllProperties();
      const propertyObject = {};
      response.data.forEach((property) => {
        // Use the property's prop_id as the key in the object
        propertyObject[property.prop_id] = property;
      });
      setAllProperty(propertyObject);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  useEffect(() => {
    fetchAllProperties(); // Fetch data when the component mounts
  }, []);

  const handleSearch = () => {
    // You can perform search actions here if needed
    // For now, it just logs the search query
    console.log("Performing search for:", searchQuery);
  };

  const handleViewProfile = (prop_id) => {
    navigate(`/profile/${prop_id}`);
  };

  const handleEditProfile = (id) => {
    navigate(`/property-details/${id}`);
  };

  const handleDelete = async (prop_id) => {
    try {
      // Make a delete request to the backend API to delete the property
      await axios.delete(`${APIS.DELETEPROPERTY}/${prop_id}`);
      console.log("Deleted Successfully");

      // Create a copy of the state object
      const updatedProperties = { ...allProperty };

      // Remove the property with the given prop_id
      delete updatedProperties[prop_id];

      // Update the state with the modified object
      setAllProperty(updatedProperties);
    } catch (error) {
      console.error("Error deleting property:", error);
    }
  };

  // Filter properties based on search query
  const filteredProperties = Object.keys(allProperty)
    .filter((propId) => {
      const property = allProperty[propId];
      return (
        property.propertyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
    })
    .map((propId, index) => {
      const property = allProperty[propId];
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{property.propertyName}</td>
          <td>{property.email}</td>
          <td>{property.gstNo}</td>
          <td>{property.mobNo}</td>
          <td>{property.villageNm}</td>
          <td>{property.area}</td>
          <td>{property.gazzetNo}</td>
          <td>{property.mcharges}</td>
          <td>
            <div className="dropdown">
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdownMenuButton">
                  &#8942;
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleViewProfile(propId)}>
                    View Profile
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleEditProfile(propId)}>
                    Edit Profile
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleDelete(propId)}
                    className="red-text"
                  >
                    Delete Profile
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </td>
        </tr>
      );
    });

  return (
    <div className="text-center">
      <Header />
      <div className="mt-4">
      <div className="arrow-back-container">
        <BiArrowBack
          className="backLoginForm fs-2 text-dark"
          onClick={() => navigate(-1)}
        />
      </div>
      <h2 className="mb-4">Available Properties</h2>
      </div>
      <Col className="mb-4 d-flex flex-column align-items-center">
        <div className="input-group" style={{ maxWidth: "300px" }}>
          <input
            type="text"
            placeholder="Search Company..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-control rounded"
            style={{
              borderTopRightRadius: "1.25rem",
              borderBottomRightRadius: "1.25rem",
            }}
          />
          <div className="input-group-append">
            <span className="input-group-text" onClick={handleSearch}>
              <FaSearch />
            </span>
          </div>
        </div>
      </Col>
      <Table>
        <thead className="shadow-lg p-3 mb-5 bg-white rounded">
          <tr>
            <th>SI.No</th>
            <th>Property Name</th>
            <th>Email ID</th>
            <th>GST NO</th>
            <th>Contact NO</th>
            <th>Location</th>
            <th>Size</th>
            <th>Gazzet NO</th>
            <th>Maintenance Charges</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="shadow-lg p-3 mb-5 bg-white rounded">
          {filteredProperties}
        </tbody>
      </Table>
    </div>
  );
};

export default AllProperties;
