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
    <div className="">
      <Header />
      <div className="arrow-back-container">
        <BiArrowBack
          className="backLoginForm fs-2 text-dark"
          onClick={() => navigate(-1)}
        />
      </div>
      {/* <Sidebar> */}
      <Row className="justify-content-center">
        <Col>
          <h1 className="text-center mb-4">Details of {propData?.month}</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <ul className="list-group">
          <Row className="justify-content-center">
            <Col className="col-sm-5 ">
              <strong>Name:</strong>
              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="text"
                name="name"
                value={updateElectricityBill.name}
                onChange={handleChange}
              />

              <strong>Shop No</strong>

              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="text"
                name="shopNo"
                value={updateElectricityBill.shopNo}
                onChange={handleChange}
              />
              <strong>R.R. NO.</strong>
              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="number"
                name="rrNo"
                value={updateElectricityBill.rrNo}
                onChange={handleChange}
              />
              <strong>Ledger Follo No:</strong>

              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="text"
                name="ledger_follono"
                value={updateElectricityBill.ledger_follono}
                onChange={handleChange}
              />
              <strong>Unit Sanction:</strong>

              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="text"
                name="unitSancd"
                value={updateElectricityBill.unitSancd}
                onChange={handleChange}
              />
              <strong>Date Of Reading:</strong>

              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="date"
                name="dateOfReading"
                value={updateElectricityBill.dateOfReading}
                onChange={handleChange}
              />
            </Col>
            <Col className="col-md-5">
              <strong>Sanction Load:</strong>
              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                id="text"
                name="sanctionLoad"
                value={updateElectricityBill.sanctionLoad}
                onChange={handleChange}
              />
              <strong>Tariff:</strong>
              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="text"
                name="tariff"
                value={updateElectricityBill.tariff}
                onChange={handleChange}
              />
              <strong>Present Reading:</strong>
              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="text"
                name="presentReading"
                value={updateElectricityBill.presentReading}
                onChange={handleChange}
              />
              <strong>Previous Reading:</strong>
              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="text"
                name="previousReading"
                value={updateElectricityBill.previousReading}
                onChange={handleChange}
              />{" "}
              <strong>Unit Consumed:</strong>
              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="text"
                name="unitConsumed"
                value={updateElectricityBill.unitConsumed}
                onChange={handleChange}
              />
              <strong>Total:</strong>
              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="text"
                name="total"
                value={updateElectricityBill.total}
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

export default EditElectricityBill;