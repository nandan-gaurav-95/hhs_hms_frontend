import React, { useState, useEffect } from "react";
import axios from "axios";
import { APIS } from "../constants/api";
import { useNavigate, useParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import { MDBContainer as Container, MDBCol as Col } from "mdb-react-ui-kit";
import "../../asset/style.css";
import { BiArrowBack } from "react-icons/bi";

import Header from "../common/Header";

const ViewPropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Function to fetch property by ID
    const fetchPropertyById = async () => {
      try {
        const response = await axios.get(`${APIS.GETPROPBYID}/${id}`);
        setProperty(response.data);
      } catch (error) {
        console.error("Error fetching property:", error);
        // Handle the error as needed (e.g., show an error message)
      }
    };

    // Call the fetchPropertyById function when the component mounts
    fetchPropertyById();
  }, [id]);

  // const propertyToShow = property.find((prop) => prop.id === parseInt(id));

  // if (!propertyToShow) {
  //   return <div>Property not found.</div>;
  // }

  const humanReadableNames = { 
    propertyName: "Property Name",
    proptype: "Property Type",
    email: "Email",
    gstNo: "GST No.",
    mobNo: "Mobile No.",
    villageNm: "Village Name",
    ctsNo: "CTS No.",
    area: "Area",
    boundries: "Boundaries",
    taxAmt: "Tax Amount",
    accountName: "Account Name",
    annualIncome: "Annual Income",
    address: "Address",
    registrationNo: "Registration No",
    gazzetNo: "Gazzet No",
    rent: "Rent",
    mcharges: "Maintenance Charge",
    occupied: "Occupied",
  };
  // const propertyToShow = property.find((prop) => prop.id === parseInt(id));

  // if (!propertyToShow) {
  //   return <div>Property not found.</div>;
  // }

  const renderPropertyRow = (key, value) => {
    if(key==="prop_id"){
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

  if (!property) {
    return <div>Property not found.</div>;
  }

  const propertyKeys = Object.keys(property);
  const halfLength = Math.ceil(propertyKeys.length / 2);
  const firstColumnKeys = propertyKeys.slice(0, halfLength);
  const secondColumnKeys = propertyKeys.slice(halfLength);

  return (
    <div>
      <Header />
      <div className="maindetails">
        <div className="arrow-back-container">
          <BiArrowBack className="addbacklogo" onClick={() => navigate(-1)} />
        </div>
        <h2 className="propertyview">Property Details of</h2>
      </div>
      <Container className="detail">
        <div className="columnarrangement">
          <div className="subcolumnarrangement">
            {firstColumnKeys
              .filter((key) => key !== "id")
              .map((key) => renderPropertyRow(key, property[key]))}
          </div>
          <div className="subcolumnarrangement1">
            {secondColumnKeys
              .filter((key) => key !== "id")
              .map((key) => renderPropertyRow(key, property[key]))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ViewPropertyDetail;