import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBInput as Input,
  MDBBtn as Button,
} from "mdb-react-ui-kit";
import Header from "../common/Header";
import { BiArrowBack } from "react-icons/bi";

const Medicalaid = () => {
  const navigate = useNavigate();
  const initialState = {
    Si_no: "",
    patient_name: "",
    address_patient: "",
    hospital_name: "",
    aliment: "",
    amt_sanction: "",
    chq_no: "",
    date: "",
    total: "",
    remark: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = () => {
    
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  
  };

  return (
    <div className=" ">
      <Header />
      <div className="arrow-back-container">
        <BiArrowBack
          className="backLoginForm fs-2 text-dark"
          onClick={() => navigate(-1)}
        />
      </div>
      <h1 className=" mb-4 text-center">Medical Aid</h1>
      <form onSubmit={handleSubmit}>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="SI.No"
              type="number"
              name="Si_no"
              value={formData.Si_no}
              onChange={handleChange}
            />
          </Col>
          <Col className="col-sm-5">
            <Input
              label="Name of the Patient"
              type="text"
              name="patient_name"
              value={formData.patient_name}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Address Of the Patient"
              type="text"
              name="address_patient"
              value={formData.address_patient}
              onChange={handleChange}
            />
          </Col>

          <Col className="col-sm-5">
            <Input
              label="Name of the Hospital"
              type="text"
              name="hospital_name"
              value={formData.hospital_name}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Aliment"
              type="text"
              name="aliment"
              value={formData.aliment}
              onChange={handleChange}
            />
          </Col>

          <Col className="col-sm-5 ">
            <Input
              label="Amount Sanction"
              type="number"
              name="amt_sanction"
              value={formData.amt_sanction}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Cheque No."
              type="number"
              name="chq_no"
              value={formData.chq_no}
              onChange={handleChange}
            />
          </Col>
          <Col className="col-sm-5 ">
            <Input
              label="Date"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Total"
              type="number"
              name="total"
              value={formData.total}
              onChange={handleChange}
            />
          </Col>
          <Col className="col-sm-5 ">
            <Input
              label="Remark"
              type="text"
              name="remark"
              value={formData.remark}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <div className="text-center mt-4 ">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};
export default Medicalaid;