import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { APIS } from "../constants/api";
import { TapalService } from "../../services/TapalService";
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
        console.log("tapalId", response.data);
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
        const response = await axios.put(
          `${APIS.UPDATETAPALBYID}/${id}`,
          updateTapal
        );
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
    <div className="editcontainer">
      <Header />
      <div className="mainedit">
        <div className="arrow-back-container">
          <BiArrowBack className="addbacklogo" onClick={() => navigate(-1)} />
        </div>

        <Col>
          <h1 className="propertydetails">Details of {propData?.letterNo}</h1>
        </Col>
      </div>
      <Row className="detailsrow">
        <ul className="list-group">
          <Row className="detailsrow">
            <Col className="column">
              <strong>Letter No</strong>
              <input
                className="list-group-item input-field"
                type="text"
                name="letterNo"
                value={updateTapal.letterNo}
                onChange={handleChange}
              />
              <strong>To Address</strong>

              <input
                className="list-group-item input-field"
                type="text"
                name="toAddress"
                value={updateTapal.toAddress}
                onChange={handleChange}
              />
            </Col>
            <Col className="column">
              <strong>Letter Type</strong>

              <select
              className="list-group-item input-field"
              id="Letter Type"
              name="letterType"
              value={updateTapal.letterType}
              onChange={handleChange}
              required
            >
              <option value="">Select Letter Type</option>
              <option value="Received Letter">Received Letter</option>
              <option value="Out Letter">Out Letter</option>
            </select>
              <strong>From Address</strong>
              <input
                className="list-group-item  input-field"
                type="text"
                name="fromAddress"
                value={updateTapal.fromAddress}
                onChange={handleChange}
              />
            </Col>
            <Col className="col-md-5">
              <strong>Date</strong>
              <input
                className="list-group-item  input-field"
                type="date"
                name="date"
                value={updateTapal.date}
                onChange={handleChange}
              />
            </Col>
          </Row>
        </ul>
      </Row>

      <Row className="form-group ">
        <Col md-2>
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

export default Edittapal;
