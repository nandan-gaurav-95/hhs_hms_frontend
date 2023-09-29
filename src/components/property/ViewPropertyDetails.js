import React, { useState, useEffect } from "react";
import axios from "axios";
import { APIS } from "../constants/api";
import { useNavigate, useParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import { MDBContainer as Container, MDBCol as Col } from "mdb-react-ui-kit";
import "../../asset/style.css";

import Header from "../common/Header";

const ViewPropertyDetail = () => {
  const { id } = useParams();
  const property = [
    {
      id: 1,
      PropertyName: "Shop A",
      Email: "comp@exa.com",
      GstNo: "GST123456",
      ContactNo: "1234567890",
      Size: "10 sq.ft",
      GazzetNo: "Gazzet789",
      Maintenancecharges: "Yes",
      CtsNo: "CST3244",
      Boundaries: "Nashik",
      AccountNm: "321456",
      Address: "nashik",
      TaxAmt: "6540",
      Annualincome: "45000",
      RegisterNo: "45",
      Rent: "2500",
      Isoccupied: "Yes",
      Village: "nashik",
    },
    {
      id: 2,
      PropertyName: "Shop2",
      email: "companyb@example.com",
      gstNo: "GST654321",
      contactNo: "9876543210",
      location: "Location B",
      size: "800 sq.ft",
      gazzetNo: "Gazzet456",
      maintenanceCharges: "No",
    },
  ];

  const propertyToShow = property.find((prop) => prop.id === parseInt(id));

  if (!propertyToShow) {
    return <div>Property not found.</div>;
  }

  const renderPropertyRow = (key, value) => (
    <div key={key} className="d-flex entity-row">
      <div className="entity-name">{key.replace(/([A-Z])/g, " $1").trim()}:</div>
      <div className="entity-value">{value}</div>
    </div>
  );

  return (
    <div>
      <Header />
      <h2 className="mb-4 text-center entity-column">Property Details:</h2>
      <Container
        className="detail w-75 text-center"
        style={{
          height: "570px",
          width: "50%",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3), 0 6px 10px rgba(0, 0, 0, 0.23)",
          marginBottom: "0",
          marginTop: "10px",  
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start", 
        }}
      >
        <div>
          <div className="d-flex w-100 flex-column">
            <div className="d-flex entity-row">
              {renderPropertyRow("id", propertyToShow.id)}
              {renderPropertyRow("PropertyName", propertyToShow.PropertyName)}
            </div>
            <div className="d-flex entity-row">
              {renderPropertyRow("Email", propertyToShow.Email)}
              {renderPropertyRow("GstNo", propertyToShow.GstNo)}
            </div>
            <div className="d-flex entity-row">
              {renderPropertyRow("ContactNo", propertyToShow.ContactNo)}
              {renderPropertyRow("Size", propertyToShow.Size)}
            </div>
            <div className="d-flex entity-row">
              {renderPropertyRow("GazzetNo", propertyToShow.GazzetNo)}
              {renderPropertyRow("Maintenancecharges", propertyToShow.Maintenancecharges)}
            </div>
            <div className="d-flex entity-row">
              {renderPropertyRow("CtsNo", propertyToShow.CtsNo)}
              {renderPropertyRow("Boundaries", propertyToShow.Boundaries)}
            </div>
            <div className="d-flex entity-row">
              {renderPropertyRow("AccountNm", propertyToShow.AccountNm)}
              {renderPropertyRow("Address", propertyToShow.Address)}
            </div>
            <div className="d-flex entity-row">
              {renderPropertyRow("TaxAmt", propertyToShow.TaxAmt)}
              {renderPropertyRow("Annualincome", propertyToShow.Annualincome)}
            </div>
            <div className="d-flex entity-row">
              {renderPropertyRow("RegisterNo", propertyToShow.RegisterNo)}
              {renderPropertyRow("Rent", propertyToShow.Rent)}
            </div>
            <div className="d-flex entity-row">
              {renderPropertyRow("Isoccupied", propertyToShow.Isoccupied)}
              {renderPropertyRow("Village", propertyToShow.Village)}
            </div>
            {Object.entries(propertyToShow)
              .filter(([key]) => !["id", "PropertyName", "Email", "GstNo","ContactNo", "Size", "GazzetNo", "Maintenancecharges","CtsNo", "Boundaries", "AccountNm", "Address", "TaxAmt", "Annualincome", "RegisterNo", "Rent", "Isoccupied", "Village",].includes(key))
              .map(([key, value]) => renderPropertyRow(key, value))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ViewPropertyDetail;