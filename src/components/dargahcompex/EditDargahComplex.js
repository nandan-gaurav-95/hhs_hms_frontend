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

function EditDargahComplex() {
  const { id } = useParams() || {};
  const [propData, setPropData] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [updateDargahComplex, setupdateDargahComplex] = useState(
    propData.DargahComplex || {}
  );
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        if (!id) return;
        const response = await axios.get(`${APIS.GETDARGAHCOMPLEXBYID}/${id}`);
        console.log("dcId", response.data);
        const { status = "", data } = response;
        if (status === 200) {
          setPropData(data);

          setupdateDargahComplex(data);
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
          `${APIS.UPDATEDARGAHCOMPLEXBYID}/${id}`,
          updateDargahComplex
        );
        if (response.status === 200) {
          console.log("dargahComplex details updated successfully");
          setEditMode(false);
        } else {
          console.error("Error while updating DargahComplex data");
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
    navigate("/viewdargahcomplex");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setupdateDargahComplex((prevData) => ({
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
      
        <Col>
          <h1 className="propertydetails">Details of {propData?.dc_id}</h1>
        </Col>
     
      </div>
      <Row className="detailsrow">
        <ul className="list-group">
          <Row className="detailsrow">
            <Col className="column">
              <strong>Receiver Name:</strong>
              <input
                className="list-group-item input-field"
                type="text"
                name="receiverName"
                value={updateDargahComplex.receiverName}
                onChange={handleChange}
              />

              <strong>Date</strong>
              <input
                className="list-group-item input-field"
                type="date"
                name="date"
                value={updateDargahComplex.date}
                onChange={handleChange}
              />
              <strong>Rupees:</strong>
              <input
                className="list-group-item input-field"
                type="number"
                name="rupee"
                value={updateDargahComplex.rupee}
                onChange={handleChange}
              />
               <strong>Rupee In Words:</strong>
              <input
                className="list-group-item input-field"
                id="text"
                name="rupeeInWords"
                value={updateDargahComplex.rupeeInWords}
                onChange={handleChange}
              />
              <strong>Shop Rent:</strong>
              <input
                className="list-group-item input-field"
                id="text"
                name="shopRent"
                value={updateDargahComplex.shopRent}
                onChange={handleChange}
              />
            </Col>
            <Col className="column">
            <strong>Month:</strong>
              <input
                className="list-group-item input-field"
                type="text"
                name="month"
                value={updateDargahComplex.month}
                onChange={handleChange}
              />
              <strong>Cheque No:</strong>

              <input
                className="list-group-item input-field"
                type="text"
                name="chequeNo"
                value={updateDargahComplex.chequeNo}
                onChange={handleChange}
              />
              
              <strong>Dated:</strong>

              <input
                className="list-group-item input-field"
                type="date"
                name="dated"
                value={updateDargahComplex.dated}
                onChange={handleChange}
              />
              <strong>Drawn On:</strong>
              <input
                className="list-group-item input-field"
                id="text"
                name="drawnOn"
                value={updateDargahComplex.drawnOn}
                onChange={handleChange}
              />
              <strong>Remark:</strong>
              <input
                className="list-group-item input-field"
                type="text"
                name="remark"
                value={updateDargahComplex.remark}
                onChange={handleChange}
              />
            
           
            </Col>
          </Row>
        </ul>
      </Row>

      <Row className="form-group">
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

export default EditDargahComplex;