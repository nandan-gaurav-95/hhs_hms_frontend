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

const Voucher = () => {
  const navigate = useNavigate();
  const initialState = {
    v_id: "",
    date: "",
    amtPaid: "",
    towards: "",
    chequeNo: "",
    dated: "",
    rupees: "",
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
      <h1 className=" mb-4 text-center">Voucher</h1>
      <form onSubmit={handleSubmit}>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Voucher ID"
              type="text"
              name="v_id"
              value={formData.v_id}
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
              label="Amount Paid"
              type="number"
              name="amtPaid"
              value={formData.amtPaid}
              onChange={handleChange}
            />
          </Col>

          <Col className="col-sm-5 ">
            <Input
              label="Towards"
              type="number"
              name="towards"
              value={formData.towards}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
        <Col className="col-sm-5 ">
            <Input
              label="Cheque No"
              type="number"
              name="chequeNo"
              value={formData.chequeNo}
              onChange={handleChange}
            />
          </Col>
          <Col className="col-sm-5 ">
            <Input
              label="Dated"
              type="date"
              name="dated"
              value={formData.dated}
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
export default Voucher;