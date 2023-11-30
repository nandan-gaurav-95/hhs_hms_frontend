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

function EditMedicalAck() {
  const { id } = useParams() || {};
  const [propData, setPropData] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [updateMedicalAck, setupdateMedicalAck] = useState(
    propData.MedicalAck || {}
  );
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        if (!id) return;
        const response = await axios.get(
          `${APIS.GETMEDICALACKNWLDGEBYID}/${id}`
        );
        console.log("mdackId", response.data);
        const { status = "", data } = response;
        if (status === 200) {
          setPropData(data);

          setupdateMedicalAck(data);
          setLoading(false);
        } else {
          console.error("Error while fetching MedicalAck data");
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
          `${APIS.UPDATEMEDICALACKNWLDGEBYID}/${id}`,
          updateMedicalAck
        );
        if (response.status === 200) {
          console.log("MedicalAck details updated successfully");
          setEditMode(false);
        } else {
          console.error("Error while updating MedicalAck data");
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
    navigate("/viewmedicalack");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setupdateMedicalAck((prevData) => ({
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
          <h1 className="propertydetails">Details of {propData?.mdack_id}</h1>
        </Col>
      </div>
      <Row className="detailsrow">
        <ul className="list-group">
          <Row className="detailsrow">
            <Col className="column">
              <strong>TO Name</strong>
              <input
                className="list-group-item input-field"
                type="text"
                name="toName"
                value={updateMedicalAck.toName}
                onChange={handleChange}
              />

              <strong>Date</strong>
              <input
                className="list-group-item input-field"
                type="date"
                name="date"
                value={updateMedicalAck.date}
                onChange={handleChange}
              />
              <strong>Rupees</strong>
              <input
                className="list-group-item input-field"
                type="text"
                name="rupees"
                value={updateMedicalAck.rupees}
                onChange={handleChange}
              />
              <strong>Cheque No</strong>

              <input
                className="list-group-item input-field"
                type="text"
                name="chequeNo"
                value={updateMedicalAck.chequeNo}
                onChange={handleChange}
              />
            </Col>
            <Col className="column">
              <strong>Dated</strong>

              <input
                className="list-group-item input-field"
                type="date"
                name="dated"
                value={updateMedicalAck.dated}
                onChange={handleChange}
              />
              <strong>Hospital IP No</strong>
              <input
                className="list-group-item input-field"
                type="text"
                name="hospIpNo"
                value={updateMedicalAck.hospIpNo}
                onChange={handleChange}
              />
              <strong>Disease</strong>

              <input
                className="list-group-item input-field"
                type="text"
                name="disease"
                value={updateMedicalAck.disease}
                onChange={handleChange}
              />

              <strong>Remark</strong>
              <input
                className="list-group-item input-field"
                type="text"
                name="remark"
                value={updateMedicalAck.remark}
                onChange={handleChange}
              />
            </Col>
          </Row>
        </ul>
      </Row>

      <Row className="form-group">
        <Col className="editbtn" >
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

export default EditMedicalAck;
