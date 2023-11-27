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
import Header from "../common/Header";
import Sidebar from "../admin/Sidebar";
import { BiArrowBack } from "react-icons/bi";

function PropertyDetails() {
  const { id } = useParams() || {};
  const [propData, setPropData] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [updatedProperty, setUpdatedProperty] = useState(
    propData.property || {}
  );
  const [imageData, setImageData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${APIS.GETPROPBYID}/${id}`);
        const { status, data } = response;

        console.log("Hiii", response.data);
        if (status === 200) {
          setPropData(data);
          setUpdatedProperty(data);
        } else {
          console.error("Error while fetching property data");
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
          `${APIS.UPDATEPROPERTY}/${id}`,
          updatedProperty
        );
        if (response.status === 200) {
          console.log("Property details updated successfully");
          navigate(`/property-details/${id}`);
        } else {
          console.error("Error while updating property data");
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
    setUpdatedProperty((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // console.log(propData);
  };

  const handlePhotos = async () => {
    // try {
    //   if (!id) return;
    //   const response = await axios.get(${APIS.GETCOMPANYPHOTOS}/${id});
    //   console.log("Hoiiiiiii", response);
    //   setImageData(response.data);
    // } catch (error) {
    //   console.error("Error:", error);
    //   setLoading(false);
    // }
  };

  const handleDelete = async () => {
    // try {
    //   console.log("in handle photos", id);
    //   if (!id) return;
    //   const response = await axios.delete(
    //     ${APIS.DELETECOMPANYPHOTOS}/${id}
    //   );
    //   setImageData(null);
    //   console.log("Deleted", response);
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };

  // Use the companyName in your component
  return (
    <div className="editcontainer">
      <Header />
      <div className="mainedit">
        <div className="arrow-back-container">
          <BiArrowBack className="addbacklogo" onClick={() => navigate(-1)} />
        </div>
        <Col>
          <h1 className="propertydetails">
            Property Details of {propData?.propertyName}
          </h1>
        </Col>
      </div>

      <Row className="detailsrow">
        <ul className="list-group">
          <Row className="detailsrow">
            <Col className="column">
              <strong>CST No:</strong>
              {editMode ? (
                <input
                  className="list-group-item  input-field"
                  type="text"
                  name="ctsNo"
                  value={updatedProperty.ctsNo}
                  onChange={handleChange}
                />
               ) : (
                <li className="list-group-item ">{updatedProperty.ctsNo}</li>
              )}

              <strong>Email:</strong>
              {editMode ? (
                <input
                  className="list-group-item  input-field"
                  type="text"
                  name="email"
                  value={updatedProperty.email}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item ">{updatedProperty.email}</li>
              )}

              <strong>Account Name:</strong>
              {editMode ? (
                <input
                  className="list-group-item  input-field"
                  type="text"
                  name="accountName"
                  value={updatedProperty.accountName}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item">
                  {updatedProperty.accountName}
                </li>
              )}

              <strong>Address:</strong>
              {editMode ? (
                <input
                  className="list-group-item  input-field"
                  type="text"
                  name="address"
                  value={updatedProperty.address}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item">{updatedProperty.address}</li>
              )}

              <strong>Annual Income:</strong>
              {editMode ? (
                <input
                  className="list-group-item  input-field"
                  type="text"
                  name="annualIncome"
                  value={updatedProperty.annualIncome}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item">
                  {updatedProperty.annualIncome}
                </li>
              )}

              <strong>Boundries:</strong>
              {editMode ? (
                <input
                  className="list-group-item  input-field"
                  type="text"
                  name="boundries"
                  value={updatedProperty.boundries}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item">{updatedProperty.boundries}</li>
              )}
            </Col>
            <Col className="column">
              <strong>Extent Acres:</strong>
              {editMode ? (
                <input
                  className="list-group-item  input-field"
                  type="text"
                  name="area"
                  value={updatedProperty.area}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item">{updatedProperty.area}</li>
              )}

              <strong>Gazzet No:</strong>
              {editMode ? (
                <input
                  className="list-group-item  input-field"
                  type="text"
                  name="gazzetNo"
                  value={updatedProperty.gazzetNo}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item">{updatedProperty.gazzetNo}</li>
              )}

              <strong>GST No:</strong>
              {editMode ? (
                <input
                  className="list-group-item  input-field"
                  type="text"
                  name="gstNo"
                  value={updatedProperty.gstNo}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item">{updatedProperty.gstNo}</li>
              )}

              <strong>Registration Number:</strong>
              {editMode ? (
                <input
                  className="list-group-item  input-field"
                  type="text"
                  name="registrationNo"
                  value={updatedProperty.registrationNo}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item">
                  {updatedProperty.registrationNo}
                </li>
              )}

              <strong>Tax Amount:</strong>
              {editMode ? (
                <input
                  className="list-group-item  input-field"
                  type="text"
                  name="taxAmt"
                  value={updatedProperty.taxAmt}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item">{updatedProperty.taxAmt}</li>
              )}

              <strong>Village Name:</strong>
              {editMode ? (
                <input
                  className="list-group-item  input-field"
                  type="text"
                  name="villageNm"
                  value={updatedProperty.villageNm}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item ">
                  {updatedProperty.villageNm}
                </li>
              )}
            </Col>
          </Row>
        </ul>
      </Row>
      <Row className="form-group ">
        <Col md-2>
          {/* <Button
            variant="primary"
            square
            style={{ width: "100px" }}
            onClick={goBack}
          >
            Back
          </Button> */}
          <Button
            variant="primary"
            type="submit"
            square
            onClick={handleEditMode}
          >
            {editMode ? "Update" : "Edit"}
          </Button>
          {/* <Button
            variant="primary"
            type="submit"
            square
            style={{ marginLeft: "10px", width: "100px" }}
            onClick={handlePhotos}
          >
            Photos
          </Button> */}
        </Col>
      </Row>
      <Row>
        <div className="form-group">
          <div
            // style={{
            //   display: "flex",
            //   flexDirection: "row",
            //   alignItems: "center",
            //   justifyContent: "center",
            // }}
          >
            {imageData &&
              imageData.map((base64String, index) => (
                <div key={index} style={{ marginRight: "10px" }}>
                  <img
                    style={{
                      width: "200px",
                      height: "150px",
                    }}
                    src={`data:${imageData?.data?.type};base64,${base64String}`}
                    alt={`Property photo ${index + 1}`}
                  />
                </div>
              ))}
          </div>
          {imageData && (
            <button className="delete-button" onClick={handleDelete}>
              Delete
            </button>
          )}
        </div>
      </Row>
      {/* </Sidebar> */}
    </div>
  );
}

export default PropertyDetails;
