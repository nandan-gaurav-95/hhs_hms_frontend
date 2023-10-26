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
import { AmbulanceService } from "../../services/AmbulanceService";

const AmbulanceVan = () => {
  const navigate = useNavigate();
  const initialState = {
    receiverName: "",
    date: "",
    accHolderName: "",
    rupee: "",
    remark: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('handleSubmit called');

    try {
      const response = await AmbulanceService.createAmbulance(formData);
      console.log("AmbulanceVan", response.data.id);
      if (response.status === 201) {
        console.log("AmbulanceVan Created Successfully");
        setFormData(initialState);
      } else {
        console.error("Failed To create AmbulanceVan");
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
      <h1 className=" mb-4 text-center">Ambulance Van</h1>
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
              label="Account Holder Name"
              type="text"
              name="accHolderName"
              value={formData.accHolderName}
              onChange={handleChange}
            />
          </Col>
          <Col className="col-sm-5 ">
            <Input
              label="Rupee"
              type="number"
              name="rupee"
              value={formData.rupee}
              onChange={handleChange}
            />
          </Col>
        </Row>
         <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
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
export default AmbulanceVan;