import React, { useState, useEffect } from "react";
import axios from "axios";
import { APIS } from "../constants/api";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaMicrophone } from "react-icons/fa"; 
import Table from 'react-bootstrap/Table';
import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBBtn as Button,
} from "mdb-react-ui-kit";
// import Sidebar from "../admin/Sidebar";
import "../../asset/style.css";
const AllCompanyName = () => {
  const [allCompany, setAllCompany] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCompanyNames() {
      try {
        const response = await axios.get(APIS.ALLCOMPANYNAME);
        // console.log("Hiiiii",response.data);
        if (response.status === 200) {
          setAllCompany(response.data);
        } else {
          console.error("Error while fetching company names");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchCompanyNames();
  }, []);

  const handleViewDetails = async (id) => {
    navigate(`/comapany-details/${id}`);
  };
  const handleSearch = () => {
    console.log("Performing search for:", searchQuery);
  };

  // const handleVoiceSearch = () => {
  //   console.log("Initiating voice search...");
  // };

  return (
    <div className="text-center">
      {/* <Sidebar> */}
      <h2 className="mb-4">Company Names:</h2>
      <Col className="mb-4 d-flex flex-column align-items-center">
        <div className="input-group" style={{ maxWidth: "300px" }}>
          <input
            type="text"
            placeholder="Search Company..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-control rounded"
            style={{ borderTopRightRadius: "1.25rem", borderBottomRightRadius: "1.25rem" }}
          />
          <div className="input-group-append">
            <span className="input-group-text" onClick={handleSearch}>
              <FaSearch />
            </span>
          </div>
        </div>
        
      </Col>
      <Table>
      <thead class="shadow-lg p-3 mb-5 bg-white rounded">
        <tr>
          <th>SI.No</th>
          <th>Property Name</th>
          <th>Email ID</th>
          <th>GST NO</th>
          <th>Contact NO</th>
          <th>Location</th>
          <th>Size</th>
          <th>CTS NO</th>
          <th>Gazzet NO</th>
          <th>Maintenance Charges</th>
          <th>Action</th>
         
        </tr>
      </thead>
      <tbody class="shadow-lg p-3 mb-5 bg-white rounded">
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>mai@gmail.com</td>
          <td>12</td>
          <td>9214569877</td>
          <td>nashik</td>
          <td>12sq.ft</td>
          <td>12</td>
          <td>1200</td>
          <td>Yes</td>
          
        </tr>
        <tr class="shadow-lg p-3 mb-5 bg-white rounded">
          <td>2</td>
          <td>Jacob</td>
          <td>mai@gmail.com</td>
          <td>12</td>
          <td>9214569877</td>
          <td>nashik</td>
          <td>12sq.ft</td>
          <td>12</td>
          <td>1200</td>
          <td>Yes</td>
          
        </tr>
        
        
      </tbody>
    </Table>
      {/* </Sidebar> */}
    </div>
  );
};

export default AllCompanyName;