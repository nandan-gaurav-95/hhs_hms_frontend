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
import {FaDownload } from "react-icons/fa";


function ReceiptDetails() {
  const { id } = useParams() || {};
  const [propData, setPropData] = useState("");
  const [tenantData, setTenantData] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [updatedReceipt, setUpdatedReceipt] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        if (!id) return;
        const response = await axios.get(`${APIS.GETRECEIPTBYID}/${id}`);

        const { status = "", data } = response;
        if (status === 200) {
          setPropData(data);
          setUpdatedReceipt(data); // Initialize updatedTenant with the current data
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
        console.log("data sent to upda", updatedReceipt);
        const response = await axios.put(
          `${APIS.GETALLRECEIPT}/${id}`,
          updatedReceipt
        );
        if (response.status === 200) {
          console.log("Company details updated successfully");
          navigate(`/receipt-details/${id}`);
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
    navigate("/receipt");
  };

  const handleChange = (event) => {
    // Update input value in edit mode
    const { name, value } = event.target;
    console.log(value);
    setUpdatedReceipt((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // console.log(propData);
  };

  const handleDownloadPdf = async () => {
    try {
      const response = await axios.get(`${APIS.GENERATERECEIPTPDFBYID}/${id}`, {
        responseType: "blob", // Set the response type to blob to handle binary data
      });
  
      if (response.status === 200) {
        // Create a Blob from the binary data
        const blob = new Blob([response.data], { type: "application/pdf" });
  
        // Create a URL for the Blob
        const url = window.URL.createObjectURL(blob);
  
        // Create a link element to trigger the download
        const link = document.createElement("a");
        link.href = url;
        link.download = "receipt.pdf"; // Set the filename for the downloaded PDF
        link.click();
  
        // Release the URL object
        window.URL.revokeObjectURL(url);
      } else {
        console.error("Error while generating PDF");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Use the companyName in your component
  return (
    <div className=" p-2 mt-2 ">
      <div className="position-fixed top-0 end-0 mt-4 me-4">
        <Button variant="primary" onClick={handleDownloadPdf}>
          <FaDownload /> Download PDF
        </Button>
      </div>
      <Row className="justify-content-center">
        <Col md="1">
          {propData?.Receipt?.logo && (
            <img
              style={{
                marginLeft: "10px",
                marginTop: "0px",
                width: "150px",
                height: "100px",
              }}
              src={`data:${propData?.Receipt?.logo?.type};base64,${propData?.imageData}`}
              alt="Company Logo"
            />
          )}
        </Col>
        <Col>
          <h1 className="text-center mb-4">
            Receipt Details of {propData?.voucherNum}
          </h1>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <ul className="list-group">
          <Row className="justify-content-center">
            <Col className="col-sm-5 ">
             
              <strong>ID:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="id"
                  value={updatedReceipt.id}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedReceipt.id}
                </li>
              )}
              {/* <li  key={} className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.ctsNo}</li> */}

              <strong>Voucher Num:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="number"
                  name="voucherNum"
                  value={updatedReceipt.voucherNum}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedReceipt.voucherNum}
                </li>
              )}
              {/* <li key={} className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {propData.email}</li> */}

              <strong>Voucher Date:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="voucherDate"
                  value={updatedReceipt.voucherDate}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedReceipt.voucherDate}
                </li>
              )}
              {/* <li key={} className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.accountNm}</li> */}

              {/* <strong>Cash In Flow:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="cashInFlow"
                  value={updatedDaybook.cashInFlow}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedDaybook.cashInFlow}
                </li>
              )} */}
            </Col>
            <Col className="col-sm-5 ">
              <strong>Amount:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="amount"
                  value={updatedReceipt.amount}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedReceipt.amount}
                </li>
              )}
              <strong>Payment Method:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="paymentMethod"
                  value={updatedReceipt.paymentMethod}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedReceipt.paymentMethod}
                </li>
              )}
              <strong>Remark:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="remark"
                  value={updatedReceipt.remark}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedReceipt.remark}
                </li>
              )}

              
            </Col>
          </Row>
        </ul>
      </Row>
      <Row className="justify-content-center">
        {propData?.Receipt?.propertyPhoto && (
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
              src={`data:${propData?.Receipt?.propertyPhoto?.type};base64,${propData?.Receipt?.propertyPhoto?.photoData}`}
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
    </div>
  );
}

export default ReceiptDetails;
