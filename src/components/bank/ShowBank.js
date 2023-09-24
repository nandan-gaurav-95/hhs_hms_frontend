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

const ShowBank = () => {
  const [allBank, setAllBank] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchBank() {
      try {
        const response = await axios.get(APIS.GETALLBANK);
        if (response.status === 200) {
          setAllBank(response.data);
        } else {
          console.error("Error while fetching tenant");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchBank();
  }, []);

  const handleViewDetails = async (id) => {
    navigate(`/bank-details/${id}`);
  };

  const handleSearch = () => {
    console.log("Performing search for:", searchQuery);
    // const results = allTenant.filter((tenant) =>
    //   tenant?.tenantName.toLowerCase().includes(searchQuery.toLowerCase())
    // );
    // setSearchResults(results);
  };

  // const handleVoiceSearch = () => {
  //   console.log("Initiating voice search...");
  // };

  return (
    <div className="p-2 mt-2 text-center">
      <h2 className="mb-4">Bank Names:</h2>
      <Col className="mb-4 d-flex flex-column align-items-center">
        <div className="input-group" style={{ maxWidth: "300px" }}>
          <input
            type="text"
            placeholder="Search Bank..."
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
            {allBank
              .filter(
                (bank) =>
                  bank &&
                  bank.bankName &&
                  bank.bankName
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
              )
              .map((bank, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {bank && bank.bankName ? bank.bankName.toLowerCase() : ""}
                  <Button
                    color="primary"
                    onClick={() => handleViewDetails(bank.id)}
                  >
                    View Bank Details
                  </Button>
                </li>
              ))}
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default ShowBank;
