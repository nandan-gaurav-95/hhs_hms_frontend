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
import { MedicalService } from "../../services/MedicalService";

const MedicalAck = () => {
  const navigate = useNavigate();
  const initialState = {
    toName: "",
    date: "",
    rupees: "",
    chequeNo: "",
    dated: "",
    hospIpNo: "",
    disease: "",
    remark: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('handleSubmit called');

    try {
      const response = await MedicalService.createMedical(formData);
      console.log("MedicalAck", response.data.id);
      if (response.status === 201) {
        console.log("MedicalAck Created Successfully");
        setFormData(initialState);
      } else {
        console.error("Failed To create MedicalAck");
      }
    } catch (error) {
      console.error("Error", error);
    }
    
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
      <h1 className=" mb-4 text-center">Medical Acknowledgment</h1>
      <form onSubmit={handleSubmit}>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="To Name"
              type="text"
              name="toName"
              value={formData.toName}
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
              label="Rupees"
              type="number"
              name="rupees"
              value={formData.rupees}
              onChange={handleChange}
            />
          </Col>
          <Col className="col-sm-5 ">
            <Input
              label="Cheque No"
              type="number"
              name="chequeNo"
              value={formData.chequeNo}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Dated"
              type="date"
              name="dated"
              value={formData.dated}
              onChange={handleChange}
            />
          </Col>
          <Col className="col-sm-5 ">
            <Input
              label="Hospital I.P. NO."
              type="number"
              name="hospIpNo"
              value={formData.hospIpNo}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Disease"
              type="text"
              name="disease"
              value={formData.disease}
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
export default MedicalAck;