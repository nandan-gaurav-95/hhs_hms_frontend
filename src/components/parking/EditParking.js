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

function EditParking() {
  const { id } = useParams() || {};
  const [propData, setPropData] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [updateParking, setupdateParking] = useState(propData.Parking || {});
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        if (!id) return;
        const response = await axios.get(`${APIS.GETPARKINGBYID}/${id}`);
        console.log("parkId", response.data);
        const { status = "", data } = response;
        if (status === 200) {
          setPropData(data);

          setupdateParking(data);
          setLoading(false);
        } else {
          console.error("Error while fetching Parking data");
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
          `${APIS.UPDATEPARKINGBYID}/${id}`,
          updateParking
        );
        if (response.status === 200) {
          console.log("Parking details updated successfully");
          setEditMode(false);
        } else {
          console.error("Error while updating Parking data");
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
    navigate("/viewparking");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setupdateParking((prevData) => ({
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
          <h1 className="propertydetails">Details of {propData?.p_id}</h1>
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
                value={updateParking.receiverName}
                onChange={handleChange}
              />

              <strong>Date</strong>
              <input
                className="list-group-item input-field"
                type="date"
                name="date"
                value={updateParking.date}
                onChange={handleChange}
              />
              <strong>Rupees</strong>
              <input
                className="list-group-item input-field"
                type="text"
                name="rupee"
                value={updateParking.rupee}
                onChange={handleChange}
              />
              <strong>Rupee In Words</strong>
              <input
                className="list-group-item input-field"
                id="text"
                name="rupeeInWords"
                value={updateParking.rupeeInWords}
                onChange={handleChange}
              />
              <strong>Parking Rent</strong>
              <input
                className="list-group-item input-field"
                id="text"
                name="parkingRent"
                value={updateParking.parkingRent}
                onChange={handleChange}
              />
            </Col>
            <Col className="column">
              <strong>Month</strong>
              <select
              className="list-group-item input-field"
              type="text"
              name="month"
              value={updateParking.month}
              onChange={handleChange}
              required
            >
              <option value="">Select Month</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
              <strong>Cheque No</strong>

              <input
                className="list-group-item input-field"
                type="text"
                name="chequeNo"
                value={updateParking.chequeNo}
                onChange={handleChange}
              />

              <strong>Dated</strong>

              <input
                className="list-group-item input-field"
                type="date"
                name="dated"
                value={updateParking.dated}
                onChange={handleChange}
              />
              <strong>Drawn On</strong>
              <input
                className="list-group-item input-field"
                id="text"
                name="drawnOn"
                value={updateParking.drawnOn}
                onChange={handleChange}
              />
              <strong>Remark</strong>
              <input
                className="list-group-item input-field"
                type="text"
                name="remark"
                value={updateParking.remark}
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

export default EditParking;
