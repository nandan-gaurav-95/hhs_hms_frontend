import React, { useState, useEffect } from "react";
import axios from "axios";
import { APIS } from "../constants/api";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaMicrophone,FaDownload } from "react-icons/fa";

import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBBtn as Button,
} from "mdb-react-ui-kit";

const AllReceipt = () => {
  const [allReceipt, setAllReceipt] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchReceipt() {
      try {
        const response = await axios.get(APIS.GETALLRECEIPT);
        if (response.status === 200) {
          setAllReceipt(response.data);
        } else {
          console.error("Error while fetching daybook");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchReceipt();
  }, []);

  const handleViewDetails = async (id) => {
    navigate(`/receipt-details/${id}`);
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
  const handleDownloadPdf = () => {
    console.log("Downloading PDF...");
  };

  return (
    <div className="p-2 mt-2 text-center">
       <div className="position-fixed top-0 end-0 mt-4 me-4">
        <Button variant="primary" onClick={handleDownloadPdf}>
          <FaDownload /> Download PDF
        </Button>
      </div>
      <h2 className="mb-4">Receipt Names:</h2>
      <Col className="mb-4 d-flex flex-column align-items-center">
        <div className="input-group" style={{ maxWidth: "300px" }}>
          <input
            type="text"
            placeholder="Search Receipt..."
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
            {allReceipt
              .filter((receipt) => receipt?.voucherNum) // Filter out undefined/null receipts
              .filter((receipt) =>
                receipt.voucherNum
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase())
              )
              .map((receipt, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {receipt.voucherNum}
                  <Button
                    color="primary"
                    onClick={() => handleViewDetails(receipt.id)}
                  >
                    View Receipt Details
                  </Button>
                </li>
              ))}
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default AllReceipt;
