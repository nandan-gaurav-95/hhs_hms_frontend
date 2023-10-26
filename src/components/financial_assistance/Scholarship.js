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

const Scholarship = () => {
  const navigate = useNavigate();
  const initialState = {
    Si_no: "",
    std_name: "",
    phoneno: "",
    clg_name: "",
    amt_received: "",
    chq_no: "",
    date: "",
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
      <h1 className=" mb-4 text-center">Scholarship List Of Students</h1>
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
              label="Name of the Student"
              type="text"
              name="std_name"
              value={formData.std_name}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Phone No."
              type="tel"
              name="phoneno"
              value={formData.phoneno}
              onChange={handleChange}
            />
          </Col>

          <Col className="col-sm-5">
            <Input
              label="College Name"
              type="text"
              name="clg_name"
              value={formData.clg_name}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Amount Released"
              type="number"
              name="amt_received"
              value={formData.amt_received}
              onChange={handleChange}
            />
          </Col>

          <Col className="col-sm-5 ">
            <Input
              label="Cheque No."
              type="number"
              name="chq_no"
              value={formData.chq_no}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Date"
              type="number"
              name="date"
              value={formData.date}
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
export default Scholarship;