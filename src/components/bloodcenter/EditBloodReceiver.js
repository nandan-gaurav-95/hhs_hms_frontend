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

function EditBloodReceiver() {
  const { id } = useParams() || {};
  const [propData, setPropData] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [updateBloodReceiver, setupdateBloodReceiver] = useState(
    propData.BloodReceiver || {}
  );
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        if (!id) return;
        const response = await axios.get(`${APIS.GETBLOODRECEIVERBYID}/${id}`);
        console.log("brId", response.data);
        const { status = "", data } = response;
        if (status === 200) {
          setPropData(data);

          setupdateBloodReceiver(data);
          setLoading(false);
        } else {
          console.error("Error while fetching BloodReceiver data");
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
        `  ${APIS.UPDATEBLOODRECEIVERBYID}/${id}`,
          updateBloodReceiver
        );
        if (response.status === 200) {
          console.log("BloodReceiver details updated successfully");
          setEditMode(false);
        } else {
          console.error("Error while updating BloodReceiver data");
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
    setupdateBloodReceiver((prevData) => ({
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
          <h1 className="propertydetails">Details of {propData?.br_id}</h1>
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
                value={updateBloodReceiver.receiverName}
                onChange={handleChange}
              />

              <strong>Date</strong>
              <input
                className="list-group-item input-field"
                type="date"
                name="date"
                value={updateBloodReceiver.date}
                onChange={handleChange}
              />

              <strong>Blood Group</strong>
              <select
                className="list-group-item input-field"
                id="Blood Group"
                name="bloodgroup"
                value={updateBloodReceiver.bloodgroup}
                onChange={handleChange}
                required
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
              <strong>Age</strong>
              <input
                className="list-group-item input-field"
                id="number"
                name="age"
                value={updateBloodReceiver.age}
                onChange={handleChange}
              />
              <strong>Unit No</strong>

              <input
                className="list-group-item input-field"
                type="text"
                name="hospitalName"
                value={updateBloodReceiver.unitNo}
                onChange={handleChange}
              />
              <strong>Gender</strong>
              <select
                className="list-group-item input-field"
                type="number"
                name="gender"
                value={updateBloodReceiver.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </Col>
            <Col className="column">
              <strong>Rupee</strong>

              <input
                className="list-group-item input-field"
                type="text"
                name="invstigationCharges"
                value={updateBloodReceiver.rupee}
                onChange={handleChange}
              />
              
              <strong>Payment Method</strong>
              <select
                className="list-group-item input-field"
                id="paymentMethod"
                name="paymentMethod"
                value={updateBloodReceiver.paymentMethod}
                onChange={handleChange}
                required
              >
                <option value="">Select Payment Method</option>
                <option value="online">Online</option>
                <option value="Cash">Cash</option>
                <option value="Cheque">Cheque</option>
                <option value="demand_draft">Demand Draft</option>
              </select>
        
              <strong>Remark</strong>
              <input
                className="list-group-item input-field"
                type="text"
                name="remark"
                value={updateBloodReceiver.remark}
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

export default EditBloodReceiver;