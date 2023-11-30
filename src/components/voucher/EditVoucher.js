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
    <div className="editcontainer">
      <Header />
      <div className="mainedit">
        <div className="arrow-back-container">
          <BiArrowBack className="addbacklogo" onClick={() => navigate(-1)} />
        </div>

        <Col>
          <h1 className="propertydetails">Details of {propData?.v_id}</h1>
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
                value={updateVoucher.date}
                onChange={handleChange}
              />

              <strong>Amount Paid</strong>

              <input
                className="list-group-item input-field"
                type="number"
                name="amtPaid"
                value={updateVoucher.amtPaid}
                onChange={handleChange}
              />
              <strong>Towards</strong>
              <input
                className="list-group-item input-field"
                type="text"
                name="towards"
                value={updateVoucher.towards}
                onChange={handleChange}
              />
            </Col>
            <Col className="column">
              <strong>Dated</strong>
              <input
                className="list-group-item input-field"
                id="date"
                name="dated"
                value={updateVoucher.dated}
                onChange={handleChange}
              />
              <strong>Rupees</strong>
              <input
                className="list-group-item input-field"
                type="text"
                name="rupees"
                value={updateVoucher.rupees}
                onChange={handleChange}
              />
              <strong>Cheque No</strong>

              <input
                className="list-group-item input-field"
                type="text"
                name="chequeNo"
                value={updateVoucher.chequeNo}
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
                  value={updateVoucher.remark}
                  onChange={handleChange}
                />
              </Col>
            </Row>
          </Row>
        </ul>
      </Row>

      <Row className="form-group ">
        <Col className="editbtn">
          {/* <Button variant="primary" square onClick={goBack}>
            Back
          </Button> */}
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
    </div>
  );
}

export default EditVoucher;
