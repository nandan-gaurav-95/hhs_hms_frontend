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

  useEffect(() => {
    async function fetchData() {
      try {
        if (!id) return;
        const response = await axios.get(`${APIS.GETTENANTBYID}/${id}`);
        console.log("tntId", response.data);
        const { status = "", data } = response;
        if (status === 200) {
          setPropData(data);

          setupdateTenant(data); // Initialize updatedTenant with the current data
          setLoading(false);
        } else {
          console.error("Error while fetching Tenant data");
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

  // if (!propData) {
  //   // Handle the case when data is not available
  //   return <div>Data not available</div>;
  // }

  const handleEditMode = async () => {
    setEditMode(!editMode);
    if (editMode) {
      try {
        const response = await axios.put(
          `${APIS.UPDATETENANTBYID}/${id}`,
          updateTenant
        );
        if (response.status === 200) {
          console.log("Tenant details updated successfully");
          // navigate(`/payroll-details/${id}`)
          setEditMode(false);
        } else {
          console.error("Error while updating Tenant data");
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
    <div className="editcontainer">
      <Header />
      <div className="mainedit">
        <div className="arrow-back-container">
          <BiArrowBack className="addbacklogo" onClick={() => navigate(-1)} />
        </div>
        {/* <Sidebar> */}

        <Col>
          <h1 className="propertydetails">Details of {propData?.tenantName}</h1>
        </Col>
      </div>
      <Row className="detailsrow">
        <ul className="list-group">
          <Row className="detailsrow">
            <Col className="column">
              <strong>Tenant ID:</strong>
              <input
                className="list-group-item input-field "
                type="text"
                name="tnt_id"
                value={updateTenant.tnt_id}
                onChange={handleChange}
              />

              <strong>Tenant Name</strong>

              <input
                className="list-group-item  input-field"
                type="text"
                name="tenantName"
                value={updateTenant.tenantName}
                onChange={handleChange}
              />
              <strong>Expiry Date:</strong>
              <input
                className="list-group-item  input-field"
                type="date"
                name="expiryDate"
                value={updateTenant.expiryDate}
                onChange={handleChange}
              />
              <strong>Allocated shop:</strong>

              <input
                className="list-group-item  input-field"
                type="text"
                name="allocatedShop"
                value={updateTenant.allocatedShop}
                onChange={handleChange}
              />
            </Col>
            <Col className="col-md-5">
              <strong>Complex:</strong>
              <select
                className="list-group-item  input-field"
                id="Complex"
                name="complex"
                value={updateTenant.complex}
                onChange={handleChange}
              >
                <option value="">Select Complex</option>
                <option value="Bhatkal Complex">Bhatkal Complex</option>
                <option value="Abbas Ali Complex">Abbas Ali Complex </option>
              </select>
              <strong>Conatact no:</strong>
              <input
                className="list-group-item  input-field"
                type="text"
                name="contactNum"
                value={updateTenant.contactNum}
                onChange={handleChange}
              />
              <strong>Electricity Due:</strong>
              <input
                className="list-group-item  input-field"
                type="text"
                name="electricityDue"
                value={updateTenant.electricityDue}
                onChange={handleChange}
              />
              <strong>Security Deposit:</strong>
              <input
                className="list-group-item  input-field"
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
                  className="list-group-item  input-field"
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

      <Row className="form-group  ">
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
            onClick={handleEditMode}
          >
            {/* Update */}
            {editMode ? "Update" : "Edit"}
          </Button>
        </Col>
      </Row>
      {/* </Sidebar> */}
    </div>
  );
}

export default TenantDetails;
