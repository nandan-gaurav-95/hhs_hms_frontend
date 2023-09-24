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

function ExpenseDetails() {
  const { id } = useParams() || {};
  const [propData, setPropData] = useState("");
  const [tenantData, setTenantData] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [updatedExpense, setUpdatedExpense] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        if (!id) return;
        const response = await axios.get(`${APIS.GETEXPENSEBYID}/${id}`);

        const { status = "", data } = response;
        if (status === 200) {
          setPropData(data);
          setUpdatedExpense(data); // Initialize updatedTenant with the current data
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
        console.log("data sent to upda", updatedExpense);
        const response = await axios.put(
          `${APIS.GETALLEXPENSE}/${id}`,
          updatedExpense
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
    navigate("/allexpense");
  };

  const handleChange = (event) => {
    // Update input value in edit mode
    const { name, value } = event.target;
    console.log(value);
    setUpdatedExpense((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // console.log(propData);
  };

  // Use the companyName in your component

  const handleDownloadPdf = () => {
    console.log("Downloading PDF...");
  };
  return (
    <div className=" p-2 mt-2 ">
      <div className="position-fixed top-0 end-0 mt-4 me-4">
        <Button variant="primary" onClick={handleDownloadPdf}>
          <FaDownload /> Download PDF
        </Button>
      </div>
      <Row className="justify-content-center">
        <Col md="1">
          {propData?.Expense?.logo && (
            <img
              style={{
                marginLeft: "10px",
                marginTop: "0px",
                width: "150px",
                height: "100px",
              }}
              src={`data:${propData?.Expense?.logo?.type};base64,${propData?.imageData}`}
              alt="Company Logo"
            />
          )}
        </Col>
        <Col>
          <h1 className=" mb-5 text-center">
            Expense Details of {propData?.voucherNumber}
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
                  value={updatedExpense.id}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedExpense.id}
                </li>
              )}
             
              <strong>Voucher Number:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="number"
                  name="voucherNumber"
                  value={updatedExpense.voucherNumber}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedExpense.voucherNumber}
                </li>
              )}
              {/* <li key={} className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {propData.email}</li> */}

              <strong>Voucher Date:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="date"
                  name="voucherDate"
                  value={updatedExpense.voucherDate}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedExpense.voucherDate}
                </li>
              )}
              {/* <li key={} className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.accountNm}</li> */}
            </Col>
            <Col className="col-sm-5 ">
              <strong>Expense Category:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="expenseCategory"
                  value={updatedExpense.expenseCategory}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedExpense.expenseCategory}
                </li>
              )}
              <strong>Remarks:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="remarks"
                  value={updatedExpense.remarks}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedExpense.remarks}
                </li>
              )}
              <strong>Amount:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="number"
                  name="amount"
                  value={updatedExpense.amount}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedExpense.amount}
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
              src={`data:${propData?.Expense?.propertyPhoto?.type};base64,${propData?.Expense?.propertyPhoto?.photoData}`}
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

export default ExpenseDetails;
