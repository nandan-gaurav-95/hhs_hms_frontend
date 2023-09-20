import React, { useState, useEffect } from "react";
import axios from "axios";
import { APIS } from "../constants/api";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaMicrophone } from "react-icons/fa"; 

import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBBtn as Button,
} from "mdb-react-ui-kit";

const AllEmployee = () => {
  const [allEmployee, setAllEmployee] = useState([]); // Corrected variable name
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchEmployee() {
      try {
        const response = await axios.get(APIS.CREATEEMPLOYEE);
        // console.log("Hiiiii",response.data);
        if (response.status === 200) {
          setAllEmployee(response.data); // Corrected variable name
        } else {
          console.error("Error while fetching Employee");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchEmployee();
  }, []);

  const handleViewDetails = async (emp_id) => {
    navigate(`/empolyee-details/${emp_id}`);
  };
  const handleSearch = () => {
    console.log("Performing search for:", searchQuery);
  };

  const handleVoiceSearch = () => {
    console.log("Initiating voice search...");
  };

  return (
    <div className="p-5 mt-5 text-center">
      <h2 className="mb-4">Employee Details:</h2>
      <Col className="mb-4 d-flex flex-column align-items-center">
        <div className="input-group" style={{ maxWidth: "300px" }}>
          <input
            type="text"
            placeholder="Search Employee..."
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
          <div className="input-group-append">
            <span className="input-group-text" onClick={handleVoiceSearch}>
              <FaMicrophone />
            </span>
          </div>
        </div>
        
      </Col>
      <Row className="justify-content-center">
        <Col className="col-sm-5 d-flex justify-content-center">
          <ul className="list-group">
            {allEmployee
              .filter((Employee) =>
              Employee?.empName
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase())
              )
              .map((Employee, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {Employee?.empName}
                  <Button
                    color="primary"
                    onClick={() => handleViewDetails(Employee.emp_id)}
                    
                  >
                    View Employee Details
                  </Button>
                </li>
              ))}
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default AllEmployee;
