import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { APIS } from "../constants/api";
import axios from "axios";
import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBBtn as Button,
  // MDBInput as Input,
} from "mdb-react-ui-kit";

import { FaDownload } from "react-icons/fa"; 
import Sidebar from "../admin/Sidebar";
import jsPDF from 'jspdf';

function PropertyDetailsTenant() {
  const { id } = useParams() || {};
  const [propData, setPropData] = useState("");
  const [tenantData, setTenantData] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [updatedTenant, setUpdatedTenant] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        if (!id) return;
        const response = await axios.get(`${APIS.GETTENANTBYID}/${id}`);

        const { status = "", data } = response;
        if (status === 200) {
          setPropData(data);
          setUpdatedTenant(data); // Initialize updatedTenant with the current data
          console.log("data got from get", data);
        } else {
          console.error("Error while fetching tenant data");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  if (loading) {
    // Handle loading state here (e.g., display a loading spinner)
    return <div>Loading...</div>;
  }

  if (!propData) {
    // Handle the case when data is not available
    return <div>Data not available</div>;
  }

  const handleEditMode = async () => {
    setEditMode(!editMode);
    if (editMode) {
      try {
        console.log("data sent to upda", updatedTenant);
        const response = await axios.put(
          `${APIS.GETALLTENANT}/${id}`,
          updatedTenant
        );
        if (response.status === 200) {
          console.log("Company details updated successfully");
          navigate(`/tenant-details/${id}`);
        } else {
          console.error("Error while updating company data");
          // Additional error handling or notifications can be added here
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      // Enter edit mode
      setEditMode(true);
    }
  };

  const goBack = (event) => {
    event.preventDefault();
    navigate("/showtenant");
  };

  const handleChange = (event) => {
    // Update input value in edit mode
    const { name, value } = event.target;
    console.log(value);
    setUpdatedTenant((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // console.log(propData);
  };
  const handleDownloadRentPdf = () => {
   // Create a new jsPDF instance
  const doc = new jsPDF();

  // Add content to the PDF
  doc.text("Rent Details", 10, 10);
  // Add tenant details
  doc.setFontSize(12); // Set font size for details
  doc.text(15, 30, `Name: ${updatedTenant.tenantName}`);
  doc.text(15, 40, `Contact No: ${updatedTenant.contactNum}`);
  doc.text(15, 50, `Current Address: ${updatedTenant.address}`);
  doc.text(15, 60, `Shop No: ${updatedTenant.allocatedShop}`);
  doc.text(15, 70, `Bill Generation/Total Bill: ${updatedTenant.billGeneration}`);
  doc.text(15, 80, `Rent Collected: ${updatedTenant.rentCollected}`);
  doc.text(15, 90, `Rent Due: ${updatedTenant.rentDue}`);
  doc.text(15, 110, `Rent Deposit: ${updatedTenant.securityDeposit}`);
  doc.text(15, 120, `Payment Method: ${updatedTenant.paymentMethod}`);



  // Add more details as needed

  // Save the PDF with a specific name
  doc.save("rent_details.pdf");
    console.log("Download PDF clicked");
  };


  const handlesubmitDownloadPdf = () => {
    // Add code for PDF download here
    console.log("Download PDF clicked");
  };
  // Use the companyName in your component 
  return (
    <div className=" ">
      <Sidebar>
      <div className="position-fixed top-0 end-0 mt-4 me-4">
        <div className="d-flex flex-column">
          <div style={{ marginBottom: "10px" }}>
  <Button variant="primary" onClick={handleDownloadRentPdf}>
    <FaDownload /> PDF for Rent
  </Button>
</div>
          <div>
            <Button variant="primary" onClick={handlesubmitDownloadPdf}>
              <FaDownload />  PDF for Electricity Bill
            </Button>
          </div>
        </div>
      </div>
      <Row className="justify-content-center">
        <Col md="1">
          {propData?.Tenant?.logo && (
            <img
              style={{
                marginLeft: "10px",
                marginTop: "0px",
                width: "150px",
                height: "100px",
              }}
              src={`data:${propData?.Tenant?.logo?.type};base64,${propData?.imageData}`}
              alt="Company Logo"
            />
          )}
        </Col>
        <Col>
          <h1 className="text-center mb-4">
          Tenant Details of {propData?.tenantName}
          </h1>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <ul className="list-group">
          <Row className="justify-content-center">
            <Col className="col-sm-5 ">
              <strong>Name:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="tenantName"
                  value={updatedTenant.tenantName}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedTenant.tenantName}
                </li>
              )}
              {/* <li  key={} className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.ctsNo}</li> */}

              <strong>Contact No:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="tel"
                  name="contactNum"
                  value={updatedTenant.contactNum}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedTenant.contactNum}
                </li>
              )}
              {/* <li key={} className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {propData.email}</li> */}

              <strong>Current Address:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="address"
                  value={updatedTenant.address}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedTenant.address}
                </li>
              )}
              {/* <li key={} className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.accountNm}</li> */}

              <strong>Shop No:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="allocatedShop"
                  value={updatedTenant.allocatedShop}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedTenant.allocatedShop}
                </li>
              )}
              <strong>Bill Generation/Total Bill:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="billGeneration"
                  value={updatedTenant.billGeneration}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedTenant.billGeneration}
                </li>
              )}
            </Col>
            <Col className="col-sm-5 ">
              <strong>Collected Rent:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="rentCollected"
                  value={updatedTenant.rentCollected}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedTenant.rentCollected}
                </li>
              )}
              <strong>Rent Due:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="rentDue"
                  value={updatedTenant.rentDue}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedTenant.rentDue}
                </li>
              )}
              <strong>Deposit:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="securityDeposit"
                  value={updatedTenant.securityDeposit}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedTenant.securityDeposit}
                </li>
              )}

              <strong>Electricity Due:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="electricityDue"
                  value={updatedTenant.electricityDue}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedTenant.electricityDue}
                </li>
              )}
              <strong>Collection Details:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="collectionDetails"
                  value={updatedTenant.collectionDetails}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedTenant.collectionDetails}
                </li>
              )}
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className="col-sm-5 ">
              <strong>Payment Method:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="tenantName"
                  value={updatedTenant.paymentMethod}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedTenant.paymentMethod}
                </li>
              )}
              </Col>
              </Row>
        </ul>
      </Row>
      <Row className="justify-content-center">
        {propData?.Tenant?.propertyPhoto && (
          <Col md="6">
            <img
              style={{
                // marginLeft: '10px',
                marginTop: "35px",
                width: "200px",
                height: "150px",
              }}
              // width={200}
              // height={150}
              src={`data:${propData?.Tenant?.propertyPhoto?.type};base64,${propData?.Tenant?.propertyPhoto?.photoData}`}
              alt="Property Photo"
            />
          </Col>
        )}
      </Row>
      
      <Row className="text-center mt-4 form-group row ">
        <Col md-2>
          <Button
            variant="primary"
            square
            style={{ width: "100px" }}
            onClick={goBack}
          >
            Back
          </Button>
          <Button
            variant="primary"
            type="submit"
            square
            style={{ marginLeft: "10px", width: "100px" }}
            onClick={handleEditMode}
          >
            {editMode ? "Update" : "Edit"}
          </Button>
        </Col>
      </Row>
      </Sidebar>
    </div>
  );
}

export default PropertyDetailsTenant;