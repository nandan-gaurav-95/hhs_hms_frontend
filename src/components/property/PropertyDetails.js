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
import Sidebar from "../admin/Sidebar";

function PropertyDetails() {
  const { id } = useParams() || {};
  const [propData, setPropData] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [updatedCompany, setUpdatedCompany] = useState(propData.company || {});
  const [imageData, setImageData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        if (!id) return;
        const response = await axios.get(`${APIS.GETPROPBYCMPNYID}/${id}`);
        // console.log("Hiiiiiiiiiii",response);
        const { status = "", data } = response;
        if (status === 200) {
          setPropData(data);

          setUpdatedCompany(data); // Initialize updatedCompany with the current data
        } else {
          console.error("Error while fetching company data");
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
        console.log("data sent to upda", updatedCompany);
        const response = await axios.put(
          `${APIS.SAVECOMPANY}/${id}`,
          updatedCompany
        );
        if (response.status === 200) {
          console.log("Company details updated successfully");
          navigate(`/comapany-details/${id}`);
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
    navigate("/allCompanyName");
  };

  const handleChange = (event) => {
    // Update input value in edit mode
    const { name, value } = event.target;
    console.log(value);
    setUpdatedCompany((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // console.log(propData);
  };

  const handlePhotos = async () => {
    try {
      if (!id) return;
      const response = await axios.get(`${APIS.GETCOMPANYPHOTOS}/${id}`);
      console.log("Hoiiiiiii", response);
      setImageData(response.data);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      console.log("in handle photos", id);
      if (!id) return;
      const response = await axios.delete(
        `${APIS.DELETECOMPANYPHOTOS}/${id}`
      );
      setImageData(null);
      console.log("Deleted", response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Use the companyName in your component
  return (
    <div className="">
      <Sidebar>
      <Row className="justify-content-center">
        <Col md="1">
          {propData?.imageData && (
            <img
              style={{
                marginLeft: "10px",
                marginTop: "0px",
                width: "150px",
                height: "100px",
              }}
              src={`data:${propData?.logo?.type};base64,${propData?.imageData}`}
              alt="Company Logo"
            />
          )}
        </Col>
        <Col>
          <h1 className="text-center mb-4">
            Property Details of {propData?.companyNm}
          </h1>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <ul className="list-group">
          <Row className="justify-content-center">
            <Col className="col-sm-5 ">
              <strong>CST No:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="ctsNo"
                  value={updatedCompany.ctsNo}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedCompany.ctsNo}
                </li>
              )}

              <strong>Email:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="email"
                  value={updatedCompany.email}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedCompany.email}
                </li>
              )}

              <strong>Account Name:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="accountNm"
                  value={updatedCompany.accountNm}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedCompany.accountNm}
                </li>
              )}

              <strong>Address:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="address"
                  value={updatedCompany.address}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedCompany.address}
                </li>
              )}

              <strong>Annual Income:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="annualIncome"
                  value={updatedCompany.annualIncome}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedCompany.annualIncome}
                </li>
              )}

              <strong>Boundries:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="boundries"
                  value={updatedCompany.boundries}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedCompany.boundries}
                </li>
              )}
            </Col>
            <Col className="col-sm-5 ">
              <strong>Extent Acres:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="extentAcres"
                  value={updatedCompany.extentAcres}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedCompany.extentAcres}
                </li>
              )}

              <strong>Gazzet No:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="gazzetNo"
                  value={updatedCompany.gazzetNo}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedCompany.gazzetNo}
                </li>
              )}

              <strong>GST No:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="gstNo"
                  value={updatedCompany.gstNo}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedCompany.gstNo}
                </li>
              )}

              <strong>Registration Number:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="registrationNo"
                  value={updatedCompany.registrationNo}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedCompany.registrationNo}
                </li>
              )}

              <strong>Tax Amount:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="taxAmt"
                  value={updatedCompany.taxAmt}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedCompany.taxAmt}
                </li>
              )}
              

              <strong>Village Name:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="villageNm"
                  value={updatedCompany.villageNm}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedCompany.villageNm}
                </li>
              )}
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
          <Button
            variant="primary"
            type="submit"
            square
            style={{ marginLeft: "10px", width: "100px" }}
            onClick={handlePhotos}
          >
            Photos
          </Button>
        </Col>
      </Row>
      <Row>
        <div className="text-center mt-4 form-group row">
        <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent:"center"
            }}
          >
            {imageData &&
              imageData.map((base64String, index) => (
                <div key={index} style={{ marginRight: "10px" }}>
                  <img
                    style={{
                      width: "200px",
                      height: "150px",
                    }}
                    src={`data:${imageData?.data?.type};base64,${base64String}`} // Assuming the images are JPEG format
                    alt={`Property photo ${index + 1}`}
                  />
                </div>
              ))}
          </div>
            {imageData && (<button
              className="delete-button"
              onClick={handleDelete}
            >
              Delete
          </button>
           )}
            
        </div>
        
      </Row>
      </Sidebar>
    </div>
  );
}

export default PropertyDetails;
