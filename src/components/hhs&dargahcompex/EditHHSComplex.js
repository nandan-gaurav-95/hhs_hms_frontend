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

function EditHHSComplex() {
  const { id } = useParams() || {};
  const [propData, setPropData] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [updateHHSComplex, setupdateHHSComplex] = useState(
    propData.HHSComplex || {}
  );
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        if (!id) return;
        const response = await axios.get(`${APIS.GETHHSCOMPLEXBYID}/${id}`);
        console.log("hcId", response.data);
        const { status = "", data } = response;
        if (status === 200) {
          setPropData(data);

          setupdateHHSComplex(data);
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
          `${APIS.UPDATEHHSCOMPLEXBYID}/${id}`,
          updateHHSComplex
        );
        if (response.status === 200) {
          console.log("HHSComplex details updated successfully");
          setEditMode(false);
        } else {
          console.error("Error while updating HHSComplex data");
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
    navigate("/viewhhscomplex");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setupdateHHSComplex((prevData) => ({
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
          <h1 className="text-center mb-4">Details of {propData?.hc_id}</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <ul className="list-group">
          <Row className="justify-content-center">
            <Col className="col-sm-5 ">
              <strong>L.F. No:</strong>
              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="number"
                name="lfNo"
                value={updateHHSComplex.lfNo}
                onChange={handleChange}
              />

              <strong>R.R. NO.</strong>

              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="number"
                name="rrNo"
                value={updateHHSComplex.rrNo}
                onChange={handleChange}
              />
              <strong>Date</strong>
              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="date"
                name="date"
                value={updateHHSComplex.date}
                onChange={handleChange}
              />
              <strong>Receiver Name:</strong>
              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                id="text"
                name="receiverName"
                value={updateHHSComplex.receiverName}
                onChange={handleChange}
              />
              <strong>Rupees:</strong>
              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="text"
                name="rupees"
                value={updateHHSComplex.rupees}
                onChange={handleChange}
              />
            </Col>
            <Col className="col-md-5">
              <strong>Rupee In Words:</strong>
              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                id="text"
                name="rupeeInWords"
                value={updateHHSComplex.rupeeInWords}
                onChange={handleChange}
              />
              <strong>Electrical Charges:</strong>
              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="text"
                name="eleCharges"
                value={updateHHSComplex.eleCharges}
                onChange={handleChange}
              />
              <strong>Month:</strong>
              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="text"
                name="month"
                value={updateHHSComplex.month}
                onChange={handleChange}
              />
              <strong>Cheque No:</strong>

              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="text"
                name="chequeNo"
                value={updateHHSComplex.chequeNo}
                onChange={handleChange}
              />
              <strong>Date:</strong>

              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="date"
                name="dated"
                value={updateHHSComplex.dated}
                onChange={handleChange}
              />
            </Col>
            <Row className="justify-content-center">
              <Col className="col-sm-5 ">
                <strong>Remark:</strong>
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="remark"
                  value={updateHHSComplex.remark}
                  onChange={handleChange}
                />
              </Col>
            </Row>
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

export default EditHHSComplex;