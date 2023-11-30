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
      console.log("property", response.data);
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

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
  };

  // Filter property based on search query
  const filteredProperty = Object.values(allProperty).filter((property) => {
    // Check if any of the property fields contain the search query
    const isSearchedProperty =
      property.propertyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      // property.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      // Include other fields for search as needed
      property.villageNm.toLowerCase().includes(searchQuery.toLowerCase()) ;
      // Add more fields as needed for searching
      // Example:
      // property.anyOtherField.toLowerCase().includes(searchQuery.toLowerCase());
  
    return isSearchedProperty;
  });
  
  const reversedData = Object.keys(filteredProperty).reverse();
 

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
      <h2 className="availabletext">Available Properties</h2>
      </div>
      <Col className="forsearch">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search Company..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-control rounded"
            // style={{
            //   borderTopRightRadius: "1.25rem",
            //   borderBottomRightRadius: "1.25rem",
            // }}
          />
          <div className="input-group-append">
            <span className="input-group-text" onClick={handleSearch}>
              <FaSearch />
            </span>
          </div>
        </div>
      </Col>
      <Table>
        <thead className="viewbody">
          <tr>
            <th>SI.No</th>
            <th>Property Name</th>
            <th>Email ID</th>
            <th>GST NO</th>
            <th>Contact NO</th>
            <th>Location</th>
            {/* <th>Size</th> */}
            <th>Gazzet NO</th>
            <th>Maintenance Charges</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="subviewbody">
         
          {reversedData.map((propId, index) => {
             const property = filteredProperty[propId];
             console.log();
             return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{property.propertyName}</td>
                <td>{property.email}</td>
                <td>{property.gstNo}</td>
                <td>{property.mobNo}</td>
                <td>{property.villageNm}</td>
                {/* <td>{property.area}</td> */}
                <td>{property.gazzetNo}</td>
                <td>{property.mcharges}</td>
                <td>
                  <div className="dropdown">
                    <Dropdown>
                      <Dropdown.Toggle variant="secondary" id="dropdownMenuButton">
                        &#8942;
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handleViewProfile(property?.prop_id)}>
                          View Profile
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => handleEditProfile(property?.prop_id)}>
                          Edit Profile
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleDelete(property?.prop_id)}
                          className="deletebtn"
                        >
                          Delete Profile
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

export default AllProperties;