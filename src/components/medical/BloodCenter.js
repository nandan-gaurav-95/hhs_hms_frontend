
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
import { BloodCenterService } from "../../services/BloodCenterService";

const BloodCenter = () => {
  const navigate = useNavigate();
  const initialState = {
    receiverName: "",
    date: "",
    ipNo: "",
    age: "",
    gender: "",
    hospitalName: "",
    invstigationCharges: "",
    unitNo: "",
    bloodgroup: "",
    paymentMethod: "",
    rupee: "",
    remark: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('handleSubmit called');

    try {
      const response = await BloodCenterService.createBloodCenter(formData);
      console.log("Blood center", response.data.id);
      if (response.status === 201) {
        console.log("Blood center Created Successfully");
        setFormData(initialState);
      } else {
        console.error("Failed To create Blood center");
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
      <h1 className=" mb-4 text-center">Blood Center</h1>
      <form onSubmit={handleSubmit}>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Receiver Name"
              type="text"
              name="receiverName"
              value={formData.receiverName}
              onChange={handleChange}
            />
          </Col>
          <Col className="col-sm-5">
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
              label="I.P.No"
              type="number"
              name="ipNo"
              value={formData.ipNo}
              onChange={handleChange}
            />
          </Col>

          <Col className="col-sm-5">
            <Input
              label="Age"
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <select
             className="form-select"
              type="number"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </Col>

          <Col className="col-sm-5 ">
            <Input
              label="Hospital Name "
              type="text"
              name="hospitalName"
              value={formData.hospitalName}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Investigation Charges "
              type="text"
              name="invstigationCharges"
              value={formData.invstigationCharges}
              onChange={handleChange}
            />
          </Col>
          <Col className="col-sm-5 ">
            <Input
              label="Unit No"
              type="text"
              name="unitNo"
              value={formData.unitNo}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
        <Col className="col-sm-5">
              <select
                className="form-select"
                id="Blood Group"
                name="bloodgroup"
                value={formData.bloodgroup}
                onChange={handleChange}
              
                >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
          </Col>
          <Col className="col-sm-5">
            <select
              className="form-select"
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
           
            >
              <option value="">Select Payment Method</option>
              <option value="online">Online</option>
              <option value="Cash">Cash</option>
              <option value="Cheque">Cheque</option>
              <option value="demand_draft">Demand Draft</option>
              </select>
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
        <Col className="col-sm-5 ">
            <Input
              label="Rupee"
              type="number"
              name="rupee"
              value={formData.rupee}
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
export default BloodCenter;