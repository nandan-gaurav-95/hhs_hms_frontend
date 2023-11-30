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

function EditMedicalaid() {
  const { id } = useParams() || {};
  const [propData, setPropData] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [updateMedicalaid, setupdateMedicalaid] = useState(
    propData.Medicalaid || {}
  );
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        if (!id) return;
        const response = await axios.get(`${APIS.GETMEDICALAIDBYID}/${id}`);
        console.log("medId", response.data);
        const { status = "", data } = response;
        if (status === 200) {
          setPropData(data);

          setupdateMedicalaid(data);
          setLoading(false);
        } else {
          console.error("Error while fetching MedicalAid data");
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
          `${APIS.UPDATEMEDICALAIDBYID}/${id}`,
          updateMedicalaid
        );
        if (response.status === 200) {
          console.log("MedicalAid details updated successfully");
          setEditMode(false);
        } else {
          console.error("Error while updating MedicalAid data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      setEditMode(true);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setupdateMedicalaid((prevData) => ({
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
          <h1 className="propertydetails">Details of {propData?.med_id}</h1>
        </Col>
      </div>
      <Row className="detailsrow">
        <ul className="list-group">
          <Row className="detailsrow">
            <Col className="column">
              <strong>Patient Name</strong>
              <input
                className="list-group-item input-field"
                type="text"
                name="patient_name"
                value={updateMedicalaid.patient_name}
                onChange={handleChange}
              />

              <strong>Patient Address</strong>
              <input
                className="list-group-item input-field"
                type="text"
                name="address_patient"
                value={updateMedicalaid.address_patient}
                onChange={handleChange}
              />
              <strong>Hospital Name</strong>
              <input
                className="list-group-item input-field"
                type="text"
                name="hospital_name"
                value={updateMedicalaid.hospital_name}
                onChange={handleChange}
              />
              <strong>Ailment</strong>

              <input
                className="list-group-item input-field"
                type="text"
                name="aliment"
                value={updateMedicalaid.aliment}
                onChange={handleChange}
              />
            </Col>
            <Col className="column">
              <strong>Amount Sanction</strong>

              <input
                className="list-group-item input-field"
                type="text"
                name="amt_sanction"
                value={updateMedicalaid.amt_sanction}
                onChange={handleChange}
              />
              <strong>Cheque No</strong>
              <input
                className="list-group-item input-field"
                type="text"
                name="chq_no"
                value={updateMedicalaid.chq_no}
                onChange={handleChange}
              />
              <strong>Date</strong>

              <input
                className="list-group-item input-field"
                type="date"
                name="date"
                value={updateMedicalaid.date}
                onChange={handleChange}
              />
              <strong>Total</strong>
              <input
                className="list-group-item input-field"
                type="text"
                name="total"
                value={updateMedicalaid.total}
                onChange={handleChange}
              />
            </Col>
            <Col className="col-md-5">
              <strong>Remark</strong>
              <input
                className="list-group-item input-field"
                type="text"
                name="remark"
                value={updateMedicalaid.remark}
                onChange={handleChange}
              />
            </Col>
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

export default EditMedicalaid;