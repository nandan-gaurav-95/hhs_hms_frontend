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
import Sidebar from "../admin/Sidebar";

const AllInventory = () => {
  const [allInventory, setAllInventory] = useState([]); // Corrected variable name
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchInventory() {
      try {
        const response = await axios.get(APIS.GETALLINVENTORY);
        // console.log("Hiiiii",response.data);
        if (response.status === 200) {
          setAllInventory(response.data); // Corrected variable name
        } else {
          console.error("Error while fetching inventory");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchInventory();
  }, []);

  const handleViewDetails = async (id) => {
    navigate(`/inventory-details/${id}`);
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
      <h2 className="mb-4">Inventory Details:</h2>
      <Col className="mb-4 d-flex flex-column align-items-center">
        <div className="input-group" style={{ maxWidth: "300px" }}>
          <input
            type="text"
            placeholder="Search inventory..."
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
          {/* <div className="input-group-append">
            <span className="input-group-text" onClick={handleVoiceSearch}>
              <FaMicrophone />
            </span>
          </div> */}
        </div>
        
      </Col>
      <Row className="justify-content-center">
        <Col className="col-sm-5 d-flex justify-content-center">
          <ul className="list-group">
            {allInventory
              .filter((Inventory) =>
              Inventory?.itemName
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase())
              )
              .map((Inventory, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {Inventory?.itemName}
                  <Button
                    color="primary"
                    onClick={() => handleViewDetails(Inventory.id)}
                    
                  >
                    View Inventory Details
                  </Button>
                </li>
              ))}
          </ul>
        </Col>
      </Row>
      {/* </Sidebar> */}
    </div>
  );
};

export default AllInventory;
