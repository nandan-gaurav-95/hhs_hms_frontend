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

const GirlsHostel = () => {
  const navigate = useNavigate();
  const initialState = {
    vocher_no: "",
    date: "",
    food_material: "",
    food_quantity: "",
    bill_amt: "",
    balance: "",
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
      <h1 className=" mb-4 text-center">Girls Hostel Impressed Book</h1>
      <form onSubmit={handleSubmit}>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Vocher.No"
              type="number"
              name="vocher_no"
              value={formData.vocher_no}
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
              label="Food Material"
              type="text"
              name="food_material"
              value={formData.food_material}
              onChange={handleChange}
            />
          </Col>

          <Col className="col-sm-5">
            <Input
              label="Food Quantity"
              type="text"
              name="food_quantity"
              value={formData.food_quantity}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Bill Amount"
              type="number"
              name="bill_amt"
              value={formData.bill_amt}
              onChange={handleChange}
            />
          </Col>

          <Col className="col-sm-5 ">
            <Input
              label="Balance"
              type="number"
              name="balance"
              value={formData.balance}
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
export default GirlsHostel;