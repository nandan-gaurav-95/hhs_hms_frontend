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
 
  // const property = [
  //   {
  //     id: 1,
  //     propType:" School",
  //     PropertyName: "Shop A",
  //     Email: "comp@exa.com",
  //     GstNo: "GST123456",
  //     ContactNo: "1234567890",
  //     Size: "10 sq.ft",
  //     GazzetNo: "Gazzet789",
  //     Maintenancecharges: "Yes",
  //     CtsNo: "CST3244",
  //     Boundaries: "Nashik",
  //     AccountNm: "321456",
  //     Address: "nashik",
  //     TaxAmt: "6540",
  //     Annualincome: "45000",
  //     RegisterNo: "45",
  //     Rent: "2500",
  //     Isoccupied: "Yes",
  //     Village: "nashik",
  //   },
  //   {
  //     id: 2,
  //     PropertyName: "Shop2",
  //     email: "companyb@example.com",
  //     gstNo: "GST654321",
  //     contactNo: "9876543210",
  //     location: "Location B",
  //     size: "800 sq.ft",
  //     gazzetNo: "Gazzet456",
  //     maintenanceCharges: "No",
  //   },
  // ];
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

  const renderPropertyRow = (key, value) => (
    <div key={key} className="d-flex entity-row">
      <div className="entity-name">{key.replace(/([A-Z])/g, " $1").trim()}:</div>
      <div className="entity-value">{value}</div>
    </div>
  );
  if (!property) {
    return <div>Loading...</div>; // You can display a loading indicator here
  }
   // Split the property details into two columns
   const propertyKeys = Object.keys(property);
   const halfLength = Math.ceil(propertyKeys.length / 2);
   const firstColumnKeys = propertyKeys.slice(0, halfLength);
   const secondColumnKeys = propertyKeys.slice(halfLength);

  return (
    <div>
      <Header />
      <div className="arrow-back-container">
        <BiArrowBack
          className="backLoginForm fs-2 text-dark"
          onClick={() => navigate(-1)}
        />
      </div>
      <h2 className="mb-4 text-center entity-column">Property Details of </h2>
      <Container
        className="detail w-75 text-center"
        style={{
          height: "850px",
          width: "50%",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3), 0 6px 10px rgba(0, 0, 0, 0.23)",
          marginBottom: "0",
          marginTop: "10px",  
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start", 
        }}
      >
               <div className="d-flex w-150 flex-column">
          {firstColumnKeys
            .filter((key) => key !== "id")
            .map((key) => renderPropertyRow(key, property[key]))}
        </div>
        <div className="d-flex w-150 flex-column">
          {secondColumnKeys
            .filter((key) => key !== "id")
            .map((key) => renderPropertyRow(key, property[key]))}
        </div>

      </Container>
    </div>
  );
};

export default ViewPropertyDetail;