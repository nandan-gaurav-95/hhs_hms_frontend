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
import Sidebar from "../admin/Sidebar";

function PaymentDetails() {
  const { id } = useParams() || {};
  const [propData, setPropData] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [updatePayment, setupdatePayment] = useState(
    propData.Inventory || {}
  );

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        if (!id) return;
        const response = await axios.get(`${APIS.GETPAYMENTBYID}/${id}`);
        // console.log("Hiiiiiiiiiii",response);
        const { status = "", data } = response;
        if (status === 200) {
          setPropData(data);

          setupdatePayment(data); // Initialize updatePayment with the current data
        } else {
          console.error("Error while fetching Payment data");
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
        console.log("data sent to upda", updatePayment);
        const response = await axios.put(
          `${APIS.GETALLPAYMENT}/${id}`,
          updatePayment
        );
        if (response.status === 200) {
          console.log("Payment details updated successfully");
          navigate(`/payment-details/${id}`);
        } else {
          console.error("Error while updating Inventory data");
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
    navigate("/allpayment");
  };

  const handleChange = (event) => {
    // Update input value in edit mode
    const { name, value } = event.target;
    console.log(value);
    setupdatePayment((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // console.log(propData);
  };

  const handleDownloadPdf = async() => {

    try {
      const response = await axios.get(`${APIS.GENERATEPAYMENTPDFBYID}/${id}`, {
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
        link.download = "payment.pdf"; // Set the filename for the downloaded PDF
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
    <div className="">
<Sidebar>
      <div className="position-fixed top-0 end-0 mt-4 me-4">
        <Button variant="primary" onClick={handleDownloadPdf}>
          <FaDownload /> Download PDF
        </Button>
      </div>
      <Row className="justify-content-center">
        <Col>
          <h1 className="text-center mb-4">
          Payment Details of {propData?.voucherNum}
          </h1>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <ul className="list-group">
          <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
            <Col className="col-md-5">
              {/* <strong>Name:</strong>
                        <li key={} className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.companyNm}</li> */}

              <strong>ID:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="id"
                  value={updatePayment.id}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatePayment.id}
                </li>
              )}
              {/* <li  key={} className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.ctsNo}</li> */}

              <strong>Voucher Date:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="date"
                  name="voucherDate"
                  value={updatePayment.voucherDate}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatePayment.voucherDate}
                </li>
              )}
              {/* <li key={} className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {propData.email}</li> */}

              <strong>voucherNum:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="voucherNum"
                  value={updatePayment.voucherNum}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatePayment.voucherNum}
                </li>
              )}
            </Col>
            <Col className="col-md-5">
              <strong>Amount:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="number"
                  name="amount"
                  value={updatePayment.amount}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatePayment.amount}
                </li>
              )}

              <strong>paymentMethod:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="paymentMethod"
                  value={updatePayment.paymentMethod}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatePayment.paymentMethod}
                </li>
              )}
              {/* <li className="list-group-item d-flex rounded-5 justify-content-between align-items-centeannualIncomedata.annualIncome}</li> */}

              <strong>Remarks:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="remark"
                  value={updatePayment.remark}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatePayment.remark}
                </li>
              )}
              {/* <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.boundries}</li> */}
            </Col>
          </Row>
        </ul>
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

          {/* <Button
            variant="primary"
            square
            style={{ marginLeft: "10px", width: "150px" }}
            onClick={handlPdf}
          >Download PDF
          </Button> */}
        </Col>

      </Row>
      </Sidebar>
    </div>
  );
}

export default PaymentDetails;
