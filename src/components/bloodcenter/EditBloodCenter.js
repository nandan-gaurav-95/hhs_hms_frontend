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

function EditBloodCenter() {
  const { id } = useParams() || {};
  const [propData, setPropData] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [updateBloodCenter, setupdateBloodCenter] = useState(
    propData.BloodCenter || {}
  );
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        if (!id) return;
        const response = await axios.get(`${APIS.GETBLOODCENTERBYID}/${id}`);
        console.log("bcId", response.data);
        const { status = "", data } = response;
        if (status === 200) {
          setPropData(data);

          setupdateBloodCenter(data);
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
        const response = await axios.put(
          `${APIS.UPDATEBLOODCENTERBYID}/${id}`,
          updateBloodCenter
        );
        if (response.status === 200) {
          console.log("BloodCenter details updated successfully");
          setEditMode(false);
        } else {
          console.error("Error while updating BloodCenter data");
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
    navigate("/viewbloodcenter");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setupdateBloodCenter((prevData) => ({
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
          <h1 className="text-center mb-4">Details of {propData?.bc_id}</h1>
        </Col>
      </Row>
      </div>
      <Row className="justify-content-center">
        <ul className="list-group">
          <Row className="justify-content-center">
            <Col className="col-sm-5 ">
              <strong>Receiver Name:</strong>
              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="text"
                name="receiverName"
                value={updateBloodCenter.receiverName}
                onChange={handleChange}
              />

              <strong>Date</strong>
              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="date"
                name="date"
                value={updateBloodCenter.date}
                onChange={handleChange}
              />

              <strong>I.P. NO.:</strong>
              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                id="text"
                name="ipNo"
                value={updateBloodCenter.ipNo}
                onChange={handleChange}
              />
              <strong>Age:</strong>
              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                id="number"
                name="age"
                value={updateBloodCenter.age}
                onChange={handleChange}
              />
              <strong>Gender:</strong>
              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="text"
                name="gender"
                value={updateBloodCenter.gender}
                onChange={handleChange}
              />
              <strong>Hospital Name:</strong>

              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="text"
                name="hospitalName"
                value={updateBloodCenter.hospitalName}
                onChange={handleChange}
              />
            </Col>
            <Col className="col-md-5">
              <strong>Invstigation Charges:</strong>

              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="text"
                name="invstigationCharges"
                value={updateBloodCenter.invstigationCharges}
                onChange={handleChange}
              />
              <strong>Unit No:</strong>
              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="text"
                name="unitNo"
                value={updateBloodCenter.unitNo}
                onChange={handleChange}
              />

              <strong>Blood Group:</strong>
              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                id="text"
                name="bloodgroup"
                value={updateBloodCenter.bloodgroup}
                onChange={handleChange}
              />
              <strong>Payment Method:</strong>
              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="text"
                name="paymentMethod"
                value={updateBloodCenter.paymentMethod}
                onChange={handleChange}
              />
               <strong>Rupee:</strong>
              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="text"
                name="rupee"
                value={updateBloodCenter.rupee}
                onChange={handleChange}
              />
               <strong>Remark:</strong>
              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="text"
                name="remark"
                value={updateBloodCenter.remark}
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

export default EditBloodCenter;