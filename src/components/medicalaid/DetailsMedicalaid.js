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

const DetailsMedicalaid = () => {
  const { id } = useParams();
  const [medicalaid, setMedicalaid] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Function to fetch property by ID
    const fetchMedicalAidById = async () => {
      try {
        const response = await axios.get(`${APIS.GETMEDICALAIDBYID}/${id}`);
        console.log("medicalaid", response.data);
        setMedicalaid(response.data);
      } catch (error) {
        console.error("Error fetching medical Acknowledge:", error);
        // Handle the error as needed (e.g., show an error message)
      }
    };

    // Call the fetchPropertyById function when the component mounts
    fetchMedicalAidById();
  }, [id]);

  const humanReadableNames = {
    //  med_id; 
     patient_name:"Patient Name",
     address_patient:"Patient Address",
     hospital_name:"Hospital Name",
     aliment:"Ailment",
     amt_sanction:"Sanction Amount",
     chq_no:"Cheque No",//Vide Cheque No.
     date:"Date",
     total:"Total",
     remark:"Remark",
  };

  const renderMedicalaidRow = (key, value) => {
    if(key==="med_id"){
      return null;
    }
    return(
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

  if (!medicalaid) {
    return <div>Parking not found.</div>;
  }

  const medicalaidKeys = Object.keys(medicalaid);
  const halfLength = Math.ceil(medicalaidKeys.length / 2);
  const firstColumnKeys = medicalaidKeys.slice(0, halfLength);
  const secondColumnKeys = medicalaidKeys.slice(halfLength);

  return (
    <div>
      <Header />
      <div className="maindetails">
        <div className="arrow-back-container">
          <BiArrowBack className="addbacklogo" onClick={() => navigate(-1)} />
        </div>
        <h2 className="propertyview">Medical Aids of {medicalaid?.patient_name} </h2>
      </div>
      <Container className="detailmedicalaid">
        <div className="columnarrangement">
          <div className="subcolumnarrangement">
            {firstColumnKeys
              .filter((key) => key !== "id")
              .map((key) => renderMedicalaidRow(key, medicalaid[key]))}
          </div>
          <div className="subcolumnarrangement1">
            {secondColumnKeys
              .filter((key) => key !== "id")
              .map((key) => renderMedicalaidRow(key, medicalaid[key]))}
          </div>
        </div>
        
      </Container>
    </div>
  );
};

export default DetailsMedicalaid;