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

function EditElectricityBill() {
  const { id } = useParams() || {};
  const [propData, setPropData] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [updateElectricityBill, setupdateElectricityBill] = useState(
    propData.ElectricityBill || {}
  );
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        if (!id) return;
        const response = await axios.get(`${APIS.GETELECITYBILLBYID}/${id}`);
        console.log("eleId", response.data);
        const { status = "", data } = response;
        if (status === 200) {
          setPropData(data);

          setupdateElectricityBill(data);
          setLoading(false);
        } else {
          console.error("Error while fetching ElectricityBill data");
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
          `${APIS.UPDATEELECITYBILLBYID}/${id}`,
          updateElectricityBill
        );
        if (response.status === 200) {
          console.log("ElectricityBill details updated successfully");
          setEditMode(false);
        } else {
          console.error("Error while updating ElectricityBill data");
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
    navigate("/viewelectricitybill");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setupdateElectricityBill((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="editcontainer">
      <Header />
      <div className="mainedit">
      <div className="arrow-back-container">
        <BiArrowBack
          className="addbacklogo"
          onClick={() => navigate(-1)}
        />
      </div>
      {/* <Sidebar> */}
  
        <Col>
          <h1 className="propertydetails">Details of {propData?.month}</h1>
        </Col>
     
      </div>
      <Row className="detailsrow">
        <ul className="list-group">
          <Row className="detailsrow">
            <Col className="column">
              <strong>Name:</strong>
              <input
                className="list-group-item input-field"
                type="text"
                name="name"
                value={updateElectricityBill.name}
                onChange={handleChange}
              />

              <strong>Shop No</strong>

              <input
                className="list-group-item input-field"
                type="text"
                name="shopNo"
                value={updateElectricityBill.shopNo}
                onChange={handleChange}
              />
              <strong>R.R. NO.</strong>
              <input
                className="list-group-item input-field"
                type="number"
                name="rrNo"
                value={updateElectricityBill.rrNo}
                onChange={handleChange}
              />
              <strong>Ledger Follo No:</strong>

              <input
                className="list-group-item input-field"
                type="text"
                name="ledger_follono"
                value={updateElectricityBill.ledger_follono}
                onChange={handleChange}
              />
              <strong>Unit Sanction:</strong>

              <input
                className="list-group-item input-field"
                type="text"
                name="unitSancd"
                value={updateElectricityBill.unitSancd}
                onChange={handleChange}
              />
            </Col>
            <Col className="col-md-5">
              <strong>Sanction Load:</strong>
              <input
                className="list-group-item input-field"
                id="text"
                name="sanctionLoad"
                value={updateElectricityBill.sanctionLoad}
                onChange={handleChange}
              />
              <strong>Tariff:</strong>
              <input
                className="list-group-item input-field"
                type="text"
                name="tariff"
                value={updateElectricityBill.tariff}
                onChange={handleChange}
              />
              <strong>Present Reading:</strong>
              <input
                className="list-group-item input-field"
                type="text"
                name="presentReading"
                value={updateElectricityBill.presentReading}
                onChange={handleChange}
              />
              <strong>Previous Reading:</strong>
              <input
                className="list-group-item input-field"
                type="text"
                name="previousReading"
                value={updateElectricityBill.previousReading}
                onChange={handleChange}
              />{" "}
              <strong>Unit Consumed:</strong>
              <input
                className="list-group-item input-field"
                type="text"
                name="unitConsumed"
                value={updateElectricityBill.unitConsumed}
                onChange={handleChange}
              />
            </Col>
            <Row className="detailsrow">
              <Col className="column ">
                <strong>Date Of Reading:</strong>

                <input
                  className="list-group-item input-field"
                  type="date"
                  name="dateOfReading"
                  value={updateElectricityBill.dateOfReading}
                  onChange={handleChange}
                />
              </Col>
            </Row>
          </Row>
        </ul>
      </Row>

      <Row className="form-group  ">
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

export default EditElectricityBill;
