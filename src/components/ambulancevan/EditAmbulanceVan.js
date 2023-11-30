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

function EditAmbulanceVan() {
  const { id } = useParams() || {};
  const [propData, setPropData] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [updateAmbulanceVan, setupdateAmbulanceVan] = useState(
    propData.AmbulanceVan || {}
  );
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        if (!id) return;
        const response = await axios.get(`${APIS.GETAMBULANCEBYID}/${id}`);
        console.log("ambId", response.data);
        const { status = "", data } = response;
        if (status === 200) {
          setPropData(data);

          setupdateAmbulanceVan(data);
          setLoading(false);
        } else {
          console.error("Error while fetching AmbulanceVan data");
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
          `${APIS.UPDATEAMBULANCEBYID}/${id}`,
          updateAmbulanceVan
        );
        if (response.status === 200) {
          console.log("AmbulanceVan details updated successfully");
          setEditMode(false);
        } else {
          console.error("Error while updating AmbulanceVan data");
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
    navigate("/viewambulancevan");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setupdateAmbulanceVan((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="editcontainer">
      <Header />
      <div className="mainedit">
        <div className="arrow-back-container">
          <BiArrowBack className="addbacklogo" onClick={() => navigate(-1)} />
        </div>

        <Col>
          <h1 className="propertydetails">Details of {propData?.amb_id}</h1>
        </Col>
      </div>
      <Row className="detailsrow">
        <ul className="list-group">
          <Row className="detailsrow">
            <Col className="column">
              <strong>Receiver Name</strong>
              <input
                className="list-group-item input-field"
                type="text"
                name="receiverName"
                value={updateAmbulanceVan.receiverName}
                onChange={handleChange}
              />

              <strong>Date</strong>
              <input
                className="list-group-item input-field"
                type="date"
                name="date"
                value={updateAmbulanceVan.date}
                onChange={handleChange}
              />
            </Col>
            <Col className="column">
              <strong>Account HolderName</strong>
              <input
                className="list-group-item input-field"
                type="text"
                name="accHolderName"
                value={updateAmbulanceVan.accHolderName}
                onChange={handleChange}
              />
              <strong>Rupees</strong>
              <input
                className="list-group-item input-field"
                type="text"
                name="rupee"
                value={updateAmbulanceVan.rupee}
                onChange={handleChange}
              />
            </Col>
            <Row className="detailsrow">
              <Col className="column">
                <strong>Remark</strong>
                <input
                  className="list-group-item input-field"
                  type="text"
                  name="remark"
                  value={updateAmbulanceVan.remark}
                  onChange={handleChange}
                />
              </Col>
            </Row>
          </Row>
        </ul>
      </Row>

      <Row className="form-group">
        <Col className="editbtn">
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

export default EditAmbulanceVan;
