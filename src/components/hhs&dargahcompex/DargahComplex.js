
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
import { DargahComplexService } from "../../services/DargahComplexService";

const DargahComplex = () => {
  const navigate = useNavigate();
  const initialState = {
    receiverName: "",
    date: "",
    rupee: "",
    rupeeInWords: "",
    shopRent: "",
    month: "",
    chequeNo: "",
    dated: "",
    drawnOn: "",
    remark: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('handleSubmit called');

    try {
      const response = await DargahComplexService.createDargahComplex(formData);

      console.log("dargah complex", response.data.id);

      if (response.status === 201) {
        console.log("dargah complex Created Successfully");
        setFormData(initialState);
      } else {
        console.error("Failed To create dargah complex");
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
      <h1 className=" mb-4 text-center">Dargah Complex</h1>
      <form onSubmit={handleSubmit}>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="ReceiverName"
              type="text"
              name="receiverName"
              value={formData.receiverName}
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
              label="Rupee"
              type="number"
              name="rupee"
              value={formData.rupee}
              onChange={handleChange}
            />
          </Col>

          <Col className="col-sm-5 ">
            <Input
              label="Rupee In Words "
              type="text"
              name="rupeeInWords"
              value={formData.rupeeInWords}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Shop Rent "
              type="text"
              name="shopRent"
              value={formData.shopRent}
              onChange={handleChange}
            />
          </Col>
          <Col className="col-sm-5 ">
          <select
             className="form-select"
              type="text"
              name="month"
              value={formData.month}
              onChange={handleChange}
            > 
            <option value="">Select Month</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Cheque No"
              type="text"
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
              label="Drawn On"
              type="text"
              name="drawnOn"
              value={formData.drawnOn}
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
export default DargahComplex;