import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBInput as Input,
  MDBBtn as Button,
} from "mdb-react-ui-kit";
import axios from "axios";
import { APIS } from "../constants/api";
import { ReceiptService } from "../../services/ReceiptService";
import Sidebar from "../admin/Sidebar";
const ReceiptForm = () => {
  const navigate = useNavigate();
  const initialState = {
    id: "",
    voucherNum: "",
    voucherDate: "",
    amount: "",
    paymentMethod: "",
    remark: "",
  };

  const [formData, setFormData] = useState({ initialState });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await ReceiptService.createReceipt(formData);
      if (response.status === 201) {
        console.log("Form data saved successfully");
        setFormData(initialState);
      } else {
        console.error("Error while saving from data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const AllReceipt = (event) => {
    event.preventDefault();
    navigate("/allreceipt");
  };

  return (
    <div className="">
      <Sidebar>
      <h1 className=" mb-4 text-center">Receipt Voucher</h1>
      <form onSubmit={handleSubmit}>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="ID"
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
            />
          </Col>
          <Col className="col-sm-5 ">
            <Input
              label="Voucher Num"
              type="number"
              name="voucherNum"
              value={formData.voucherNum}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Voucher Date"
              type="date"
              name="voucherDate"
              value={formData.voucherDate}
              onChange={handleChange}
            />
          </Col>
          <Col className="col-sm-5 ">
            <Input
              label="Amount"
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="row mt-8 mb-4 justify-content-evenly align-items-center">
          <Col className="col-sm-5">
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="form-select"
            >
              <option value="">Select Payment Method</option>
              <option value="Cash">Cash</option>
              <option value="Online">Online</option>
            </select>
          </Col>
          <Col className="col-sm-5">
            <Input
              label="Remark"
              type="text"
              id="remark"
              name="remark"
              value={formData.remark}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <div className="text-center mt-4 ">
          <Button>Submit</Button>
        </div>
        <div className="text-center mt-4 ">
          <Button variant="primary" type="button" square onClick={AllReceipt}>
            All Receipt
          </Button>
        </div>
      </form>
      </Sidebar>
    </div>
  );
};
export default ReceiptForm;
