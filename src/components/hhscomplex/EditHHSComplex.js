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
    <div className="editcontainer">
      <Header />
      <div className="mainedit">
        <div className="arrow-back-container">
          <BiArrowBack className="addbacklogo" onClick={() => navigate(-1)} />
        </div>

        <Col>
          <h1 className="propertydetails">Details of {propData?.hc_id}</h1>
        </Col>
      </div>
      <Row className="detailsrow">
        <ul className="list-group">
          <Row className="detailsrow">
            <Col className="column">
              <strong>L.F. No</strong>
              <input
                className="list-group-item input-field"
                type="number"
                name="lfNo"
                value={updateHHSComplex.lfNo}
                onChange={handleChange}
              />

              <strong>RR. NO.</strong>

              <input
                className="list-group-item input-field"
                type="number"
                name="rrNo"
                value={updateHHSComplex.rrNo}
                onChange={handleChange}
              />
              <strong>Date</strong>
              <input
                className="list-group-item input-field"
                type="date"
                name="date"
                value={updateHHSComplex.date}
                onChange={handleChange}
              />
              <strong>Receiver Name</strong>
              <input
                className="list-group-item input-field"
                id="text"
                name="receiverName"
                value={updateHHSComplex.receiverName}
                onChange={handleChange}
              />
              <strong>Rupees</strong>
              <input
                className="list-group-item input-field"
                type="text"
                name="rupees"
                value={updateHHSComplex.rupees}
                onChange={handleChange}
              />
            </Col>
            <Col className="column">
              <strong>Rupee In Words</strong>
              <input
                className="list-group-item input-field"
                id="text"
                name="rupeeInWords"
                value={updateHHSComplex.rupeeInWords}
                onChange={handleChange}
              />
              <strong>Electrical Charges</strong>
              <input
                className="list-group-item input-field"
                type="text"
                name="eleCharges"
                value={updateHHSComplex.eleCharges}
                onChange={handleChange}
              />
              <strong>Month</strong>
              <select
              className="list-group-item input-field"
              type="text"
              name="month"
              value={updateHHSComplex.month}
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
                value={updateHHSComplex.chequeNo}
                onChange={handleChange}
              />
              <strong>Date</strong>

              <input
                className="list-group-item input-field"
                type="date"
                name="dated"
                value={updateHHSComplex.dated}
                onChange={handleChange}
              />
            </Col>
            <Row className="detailsrow">
              <Col className="column">
                <strong>Remark</strong>
                <input
                  className="list-group-item input-field "
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

export default EditHHSComplex;
