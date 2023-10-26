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
import { ElectricityBillService } from "../../services/ElectricityBillService";

const ElectricityBill = () => {
  const navigate = useNavigate();
  const initialState = {
    month:"",
    name: "",
    shopNo: "",
    rrNo: "",
    ledger_follono: "",
    sanctionLoad: "",
    tariff: "",
    presentReading: "",
    previousReading: "",
    unitConsumed: "",
    unitSancd: "",
    dateOfReading: "",
    total: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('handleSubmit called');

    try {
      const response = await ElectricityBillService.createElectricityBill(formData);

      console.log("eleBill", response.data.id);

      if (response.status === 201) {
        console.log("eleBill Created Successfully");
        setFormData(initialState);
      } else {
        console.error("Failed To create eleBill");
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
      <h1 className=" mb-4 text-center">Electricity Bill</h1>
      <form onSubmit={handleSubmit}>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Col>
          <Col className="col-sm-5 ">
            <Input
              label="Shop No"
              type="text"
              name="shopNo"
              value={formData.shopNo}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="R.R. No."
              type="number"
              name="rrNo"
              value={formData.rrNo}
              onChange={handleChange}
            />
          </Col>

          <Col className="col-sm-5 ">
            <Input
              label="Ledger Follo No"
              type="number"
              name="ledger_follono"
              value={formData.ledger_follono}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
        <Col className="col-sm-5 ">
            <Input
              label="Sanction Load "
              type="text"
              name="sanctionLoad"
              value={formData.sanctionLoad}
              onChange={handleChange}
            />
          </Col>
          <Col className="col-sm-5 ">
            <Input
              label="Tariff"
              type="text"
              name="tariff"
              value={formData.tariff}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
        <Col className="col-sm-5 ">
            <Input
              label="Present Reading"
              type="text"
              name="presentReading"
              value={formData.presentReading}
              onChange={handleChange}
            />
          </Col>
        <Col className="col-sm-5 ">
            <Input
              label="Previous Reading"
              type="text"
              name="previousReading"
              value={formData.previousReading}
              onChange={handleChange}
            />
          </Col>
          </Row>
          <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
        <Col className="col-sm-5 ">
            <Input
              label="Unit Consumed"
              type="text"
              name="unitConsumed"
              value={formData.unitConsumed}
              onChange={handleChange}
            />
          </Col>
        <Col className="col-sm-5 ">
            <Input
              label="Unit Sancd"
              type="text"
              name="unitSancd"
              value={formData.unitSancd}
              onChange={handleChange}
            />
          </Col>
          </Row>
          <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
        <Col className="col-sm-5 ">
            <Input
              label="Date Of Reading"
              type="Date"
              name="dateOfReading"
              value={formData.dateOfReading}
              onChange={handleChange}
            />
          </Col>
        {/* <Col className="col-sm-5 ">
            <Input
              label="Total"
              type="text"
              name="total"
              value={formData.total}
              onChange={handleChange}
            />
          </Col> */}
          <Col className="col-sm-5 ">
            <Input
              label="Month Of Reading"
              type="month"
              name="month"
              value={formData.month}
              onChange={handleChange}
            />
          </Col>
          </Row>
          {/* <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
        <Col className="col-sm-5 ">
            <Input
              label="Month Of Reading"
              type="month"
              name="month"
              value={formData.month}
              onChange={handleChange}
            />
          </Col>
        
          </Row> */}
        <div className="text-center mt-4 ">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};
export default ElectricityBill;