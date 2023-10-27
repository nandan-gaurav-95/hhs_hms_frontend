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

function EditVoucher() {
  const { id } = useParams() || {};
  const [propData, setPropData] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [updateVoucher, setupdateVoucher] = useState(propData.Voucher || {});
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        if (!id) return;
        const response = await axios.get(`${APIS.GETVOUCHERBYID}/${id}`);
        console.log("vouId", response.data);
        const { status = "", data } = response;
        if (status === 200) {
          setPropData(data);

          setupdateVoucher(data);
          setLoading(false);
        } else {
          console.error("Error while fetching Voucher data");
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
          `${APIS.UPDATEVOUCHERBYID}/${id}`,
          updateVoucher
        );
        if (response.status === 200) {
          console.log("Voucher details updated successfully");
          setEditMode(false);
        } else {
          console.error("Error while updating Voucher data");
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
    navigate("/viewvoucher");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setupdateVoucher((prevData) => ({
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
          <h1 className="text-center mb-4">Details of {propData?.v_id}</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <ul className="list-group">
          <Row className="justify-content-center">
            <Col className="col-sm-5 ">
              <strong>Date:</strong>
              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="date"
                name="date"
                value={updateVoucher.date}
                onChange={handleChange}
              />

              <strong>Amount Paid</strong>

              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="number"
                name="amtPaid"
                value={updateVoucher.amtPaid}
                onChange={handleChange}
              />
              <strong>Towards</strong>
              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="text"
                name="towards"
                value={updateVoucher.towards}
                onChange={handleChange}
              />
            </Col>
            <Col className="col-md-5">
              <strong>Dated:</strong>
              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                id="date"
                name="dated"
                value={updateVoucher.dated}
                onChange={handleChange}
              />
              <strong>Rupees:</strong>
              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="text"
                name="rupees"
                value={updateVoucher.rupees}
                onChange={handleChange}
              />
              <strong>Cheque No:</strong>

              <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="number"
                name="chequeNo"
                value={updateVoucher.chequeNo}
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
                  value={updateVoucher.remark}
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

export default EditVoucher;