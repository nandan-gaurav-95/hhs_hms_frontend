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
        const response = await axios.put(
          `${APIS.UPDATEHOSTELBYID}/${id}`,
          updatedGIRLSHOSTEL
        );
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
    <div className="editcontainer">
      <Header />
      <div className="mainedit">
        <div className="arrow-back-container">
          <BiArrowBack className="addbacklogo" onClick={() => navigate(-1)} />
        </div>

        <Col>
          <h1 className="propertydetails">Details of {propData?.gh_id}</h1>
        </Col>
      </div>
      <Row className="detailsrow">
        <ul className="list-group">
          <Row className="detailsrow">
            <Col className="column">
              <strong>Date</strong>
              <input
                className="list-group-item input-field"
                type="date"
                name="date"
                value={updatedGIRLSHOSTEL.date}
                onChange={handleChange}
              />

              <strong>Food</strong>

              <input
                className="list-group-item input-field"
                type="text"
                name="food"
                value={updatedGIRLSHOSTEL.food}
                onChange={handleChange}
              />
            </Col>
            <Col className="column">
              <strong>Food Quantity</strong>
              <input
                className="list-group-item input-field"
                type="text"
                name="food_quantity"
                value={updatedGIRLSHOSTEL.food_quantity}
                onChange={handleChange}
              />
              <strong>Bill Amount</strong>
              <input
                className="list-group-item input-field"
                id="number"
                name="bill_amt"
                value={updatedGIRLSHOSTEL.bill_amt}
                onChange={handleChange}
              />
            </Col>
            <Col className="column">
              <strong>Balance</strong>
              <input
                className="list-group-item input-field"
                type="number"
                name="balance"
                value={updatedGIRLSHOSTEL.balance}
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

export default EditGirlsHostel;
