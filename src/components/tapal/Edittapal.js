import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { APIS } from "../constants/api";
import { TapalService } from "../../services/TapalService";
import axios from 'axios';
import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBBtn as Button,
} from "mdb-react-ui-kit";
import Sidebar from "../admin/Sidebar";
import Header from "../common/Header";
import { BiArrowBack } from "react-icons/bi";


function Edittapal() {
  const { id } = useParams() || {};
  const [propData, setPropData] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [updateTapal, setupdateTapal] = useState(propData.Tapal || {});
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        if (!id) return;
        const response = await axios.get(`${APIS.GETTAPALBYID}/${id}`);
console.log("tapalId",response.data);
        const { status = "", data } = response;
        if (status === 200) {
          setPropData(data);

          setupdateTapal(data); // Initialize updateTapal with the current data
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

  const handleChange = (event) => {
    // Update input value in edit mode
    const { name, value } = event.target;
    console.log(value);
    setupdateTapal((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // console.log(propData);
  };
  const handleEditMode = async () => {
    setEditMode(!editMode);
    if (editMode) {
      try {
         const response = await axios.put(`${APIS.UPDATETAPALBYID}/${id}`, updateTapal);
        if (response.status === 200) {
          console.log("tapal details updated successfully");
         
          setEditMode(false);
        } else {
          console.error("Error while updating tapal data");
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
          <h1 className="text-center mb-4">
            Details of {propData?.letterNo}
          </h1>
        </Col>
      </Row>
      </div>
      <Row className="justify-content-center">
        <ul className="list-group">
          <Row className="justify-content-center">
            <Col className="col-sm-5 ">
              <strong>Letter No</strong>
              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="text"
                name="letterNo"
                value={updateTapal.letterNo}
                onChange={handleChange}
              />
              <strong>To Address</strong>

              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="text"
                name="toAddress"
                value={updateTapal.toAddress}
                onChange={handleChange}
              />
            </Col>
            <Col className="col-md-5">
              <strong>Letter Type</strong>

              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="text"
                name="letterType"
                value={updateTapal.letterType}
                onChange={handleChange}
              />
              <strong>From Address</strong>
              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="text"
                name="fromAddress"
                value={updateTapal.fromAddress}
                onChange={handleChange}
              />
            </Col>
            <Col className="col-md-5">
              <strong>Date</strong>
              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="date"
                name="date"
                value={updateTapal.date}
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

export default Edittapal;