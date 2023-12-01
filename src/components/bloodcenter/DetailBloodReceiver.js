import React, { useState, useEffect } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import { APIS } from "../constants/api";
import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBInput as Input,
  MDBBtn as Button,
} from "mdb-react-ui-kit";
import "react-select-search/style.css";
import logo from "../../asset/images/hhslogo.jpg";
import { FaDownload } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import Header from "../common/Header";
import { useNavigate, useParams } from "react-router-dom";
import bloodlogo from "../../asset/images/bloodcenterlogo.jpeg";
const DetailBloodReceiver = () => {
  const { id } = useParams();
  const [bloodreceiver, setBloodreceiver] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Call the fetchPropertyById function when the component mounts
    fetchBloodreceiverById();
  }, [id]);

  // Function to fetch blood center by ID
  const fetchBloodreceiverById = async () => {
    try {
      const response = await axios.get(`${APIS.GETBLOODRECEIVERBYID}/${id}`);
      console.log("Jiii", response.data);
      setBloodreceiver(response.data);
    } catch (error) {
      console.error("Error fetching Blood receiver:", error);
      // Handle the error as needed (e.g., show an error message)
    }
  };
  const humanReadableNames = {
    receiverName: "Receiver Name",
    date: "Date",
    bloodgroup: "Blood Group",
    age: "Age",
    unitNo: "Unit No",
    gender: "Gender",
    rupee: "Rupee",
    paymentMethod: "Payment Method",
    remark: "Remark",
  };

  const renderBloodreceiverRow = (key, value) => {
    
      // Exclude the 'bc_id' key
      if (key === 'br_id') {
        return null;
      }
    return (
      <div key={key} className="d-flex entity-row">
        <div className="entity-name">
          {/* {key.replace(/([A-Z])/g, " $1").trim()}: */}
          {humanReadableNames[key] || key}:
        </div>
        <div
          className="entity-value"
          style={{ whiteSpace: "nowrap", textOverflow: "ellipsis" }}
        >
          {value}
        </div>
      </div>
    );
  }

  if (!bloodreceiver) {
    return <div>Blood Center for this id not found.</div>;
  }

  const bloodreceiverKeys = Object.keys(bloodreceiver);
  const halfLength = Math.ceil(bloodreceiverKeys.length / 2);
  const firstColumnKeys = bloodreceiverKeys.slice(0, halfLength);
  const secondColumnKeys = bloodreceiverKeys.slice(halfLength);

  return (
    <div>
      <Header />
      <div className="maindetails">
        <div className="arrow-back-container">
          <BiArrowBack className="addbacklogo" onClick={() => navigate(-1)} />
        </div>
        <h2 className="propertyview">Blood Receiver Details </h2>
      </div>
      <Container className="detailblood">
        <div className="columnarrangement">
          <div className="subcolumnarrangement">
            {firstColumnKeys
              .filter((key) => key !== "id")
              .map((key) => renderBloodreceiverRow(key, bloodreceiver[key]))}
          </div>
          <div className="subcolumnarrangement1">
            {secondColumnKeys
              .filter((key) => key !== "id")
              .map((key) => renderBloodreceiverRow(key, bloodreceiver[key]))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DetailBloodReceiver;