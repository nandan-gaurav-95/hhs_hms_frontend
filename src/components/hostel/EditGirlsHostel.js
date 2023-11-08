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
import Header from "../common/Header";
import { BiArrowBack } from "react-icons/bi";

function EditGirlsHostel() {
  const { id } = useParams() || {};
  const [propData, setPropData] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [updatedGIRLSHOSTEL, setupdateGIRLSHOSTEL] = useState(
    propData.GIRLSHOSTEL || {}
  );
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        if (!id) return;
        const response = await axios.get(`${APIS.GETHOSTELBYID}/${id}`);
        console.log("ghId", response.data);
        const { status = "", data } = response;
        if (status === 200) {
          setPropData(data);

          setupdateGIRLSHOSTEL(data);
          setLoading(false);
        } else {
          console.error("Error while fetching HHSComplexc data");
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
    return <div>Loading...</div>;
  }

  const handleEditMode = async () => {
    setEditMode(!editMode);
    if (editMode) {
      try {
        const response = await axios.put(`${APIS.UPDATEHOSTELBYID}/${id}`,updatedGIRLSHOSTEL);
        if (response.status === 200) {
          console.log("GIRLSHOSTEL details updated successfully");
          setEditMode(false);
        } else {
          console.error("Error while updating GIRLSHOSTEL data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      setEditMode(true);
    }
  };

  const goBack = (event) => {
    event.preventDefault();
    navigate("/viewgirlshostel");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setupdateGIRLSHOSTEL((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="">
      <Header />
      <div className="mt-4">
      <div className="arrow-back-container">
        <BiArrowBack
          className="backLoginForm fs-2 text-dark"
          onClick={() => navigate(-1)}
        />
      </div>
      {/* <Sidebar> */}
      <Row className="justify-content-center">
        <Col>
          <h1 className="text-center mb-4">Details of {propData?.gh_id}</h1>
        </Col>
      </Row>
      </div>
      <Row className="justify-content-center">
        <ul className="list-group">
          <Row className="justify-content-center">
            <Col className="col-sm-5 ">
              <strong>Date:</strong>
              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="date"
                name="date"
                value={updatedGIRLSHOSTEL.date}
                onChange={handleChange}
              />

              <strong>Food</strong>

              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="text"
                name="food"
                value={updatedGIRLSHOSTEL.food}
                onChange={handleChange}
              />
              <strong>Food Quantity</strong>
              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="text"
                name="food_quantity"
                value={updatedGIRLSHOSTEL.food_quantity}
                onChange={handleChange}
              />
              <strong>Bill Amount:</strong>
              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                id="number"
                name="bill_amt"
                value={updatedGIRLSHOSTEL.bill_amt}
                onChange={handleChange}
              />
              <strong>Balance:</strong>
              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="number"
                name="balance"
                value={updatedGIRLSHOSTEL.balance}
                onChange={handleChange}
              />
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
            {/* Update */}
            {editMode ? "Update" : "Edit"}
          </Button>
        </Col>
      </Row>
      {/* </Sidebar> */}
    </div>
  );
}

export default EditGirlsHostel;