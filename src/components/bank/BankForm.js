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
import { BankService } from "../../services/BankService";
import Sidebar from "../admin/Sidebar";

const BankForm = () => {
  const navigate = useNavigate();
  const initialState = {
    id: "",
    bankName: "",
    accountNo: "",
    tdrNo: "",
    interestaccured: "",
    amountutilized: "",
    balance: "",
  };

  const [formData, setFormData] = useState(initialState);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await BankService.createBank(formData);

      console.log("TenantId", response.data.id);

      if (response.status === 201) {
        console.log("Tenant Created Successfully");
        setFormData(initialState);
      } else {
        console.error("Failed To create Tenant");
      }
    } catch (error) {
      console.error("Error", error);
    }
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const ShowBank = (event) => {
    event.preventDefault();
    navigate("/showbank");
  };

  return (
    <div className="">
      <Sidebar>
      <h1 className=" mb-4 text-center">Bank</h1>
      <form onSubmit={handleSubmit}>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="SI NO"
              type="number"
              name="id"
              value={formData.id}
              onChange={handleChange}
            />
          </Col>
          <Col className="col-sm-5 ">
            <Input
              label="Name of the Bank"
              type="text"
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Account No"
              type="text"
              name="accountNo"
              value={formData.accountNo}
              onChange={handleChange}
            />
          </Col>
          <Col className="col-sm-5 ">
            <Input
              label="TDR No"
              type="text"
              name="tdrNo"
              value={formData.tdrNo}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Interest Accured"
              type="text"
              name="interestaccured"
              value={formData.interestaccured}
              onChange={handleChange}
            />
          </Col>
          <Col className="col-sm-5 ">
            <Input
              label="Amount utilized for destitute"
              type="text"
              name="amountutilized"
              value={formData.amountutilized}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
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
        <div className="text-center mt-4 ">
          <Button variant="primary" type="button" square onClick={ShowBank}>
            Show Bank
          </Button>
        </div>
      </form>
      </Sidebar>
    </div>
  );
};
export default BankForm;
