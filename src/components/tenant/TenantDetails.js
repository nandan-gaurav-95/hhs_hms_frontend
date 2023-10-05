import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { APIS } from "../constants/api";
import axios from "axios";
import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBBtn as Button,
} from "mdb-react-ui-kit";
import Sidebar from "../admin/Sidebar";
import Header from "../common/Header";
import { BiArrowBack } from "react-icons/bi";

function TenantDetails() {
  const { id } = useParams() || {};
  const [propData, setPropData] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [updateTenant, setupdateTenant] = useState(propData.Tenant || {});
  const navigate = useNavigate();

  const tableData = {
    id: 1,
    name: "Mahesh Tawade",
    department: "ITI College",
    allocatedShop: "A-1001",
    contactNum: "9657089541",
    securityDeposit: "20000.36",
    rentDue: "3000.00",
    electricityDue: "299.03",
    expiryDate: "20/12/2003",
    status: "Active",
  };
  useEffect(() => {
    async function fetchData() {
      try {
        // if (!id) return;
        // const response = await axios.get(`${APIS.GETTenantBYID}/${id}`);

        // const { status = "", data } = response;
        // if (status === 200) {
        //   // setPropData(data);

        //   // setupdateTenant(data); // Initialize updatedPayroll with the current data

        // } else {
        //   console.error("Error while fetching Payroll data");
        // }
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

  // if (!propData) {
  //   // Handle the case when data is not available
  //   return <div>Data not available</div>;
  // }

  const handleEditMode = async () => {
    setEditMode(!editMode);
    if (editMode) {
      // try {
      //   // const response = await axios.put(`${APIS.GETALLTenant}/${id}`, updateTenant);
      //   if (response.status === 200) {
      //     console.log("Tenant details updated successfully");
      //     // navigate(`/payroll-details/${id}`)
      //   } else {
      //     console.error("Error while updating Tenant data");
      //     // Additional error handling or notifications can be added here
      //   }
      // } catch (error) {
      //   console.error("Error:", error);
      // }
    } else {
      // Enter edit mode
      setEditMode(true);
    }
  };

  const goBack = (event) => {
    event.preventDefault();
    navigate("/showTenant");
  };

  const handleChange = (event) => {
    // Update input value in edit mode
    const { name, value } = event.target;
    console.log(value);
    setupdateTenant((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // console.log(propData);
  };

  const handleDelete = (index) => {
    // const updatedImages = [...selectedPhotos];
    // updatedImages.splice(index, 1);
    // setSelectedPhotos(updatedImages);
    // const updatedThumbnails = [...thumbnails];
    // updatedThumbnails.splice(index, 1);
    // setThumbnails(updatedThumbnails);
  };
  return (
    <div className="">
      <Header />
      <div className="arrow-back-container">
        <BiArrowBack
          className="backLoginForm fs-2 text-dark"
          onClick={() => navigate(-1)}
        />
      </div>
      {/* <Sidebar> */}
        <Row className="justify-content-center">
          <Col>
            <h1 className="text-center mb-4">Details of {propData?.name}</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <ul className="list-group">
            <Row className="justify-content-center">
              <Col className="col-sm-5 ">
                <strong>Tenant ID:</strong>
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="id"
                  value={tableData.id}
                  onChange={handleChange}
                />

                <strong>Tenant Name</strong>

                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="name"
                  value={tableData.name}
                  onChange={handleChange}
                />
                <strong>Expiry Date:</strong>
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="date"
                  name="expiryDate"
                  value={updateTenant.expiryDate}
                  onChange={handleChange}
                />
                <strong>Allocated shop:</strong>

                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="allocatedShop"
                  value={updateTenant.allocatedShop}
                  onChange={handleChange}
                />
              </Col>
              <Col className="col-md-5">
                <strong>Department:</strong>
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="department"
                  value={updateTenant.department}
                  onChange={handleChange}
                />
                <strong>Conatact no:</strong>
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="contactNum"
                  value={updateTenant.contactNum}
                  onChange={handleChange}
                />
                <strong>Electricity Due:</strong>
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="electricityDue"
                  value={updateTenant.electricityDue}
                  onChange={handleChange}
                />
                <strong>Security Deposit:</strong>
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="securityDeposit"
                  value={updateTenant.securityDeposit}
                  onChange={handleChange}
                />{" "}
              </Col>
              <Row className="justify-content-center">
                <Col className="col-sm-5 ">
                  <strong>Rent Due:</strong>

                  <input
                    className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                    type="text"
                    name="rentDue"
                    value={updateTenant.rentDue}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
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
              Update
            </Button>
          </Col>
        </Row>
      {/* </Sidebar> */}
    </div>
  );
}

export default TenantDetails;