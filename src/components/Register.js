
import React, { useState } from 'react';
import '../asset/style.css';
import axios from "axios";
import { APIS } from "./constants/api";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBInput as Input,
  MDBBtn as Button
} from 'mdb-react-ui-kit';
const RegistrationForm = () => {
  const navigate = useNavigate();

  const initialState = {
    comapanyNm: '',
    email: ''
  };
  const [formData, setFormData] = useState({ initialState });
  const handleSubmit = async (event) => {
    event.preventDefault();
    // window.location.href= "/properties"; // if we dont want the data in sql
    try {
      const response = await axios.post(APIS.REGISTER, formData);
      if (response.status === 201) {
        console.log("Form data saved successfully");
        setFormData(initialState);
        navigate("/properties")
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





  return (

    <Container className="bg-light p-5 mt-5 w-50 rounded shadow justify-content-center align-items-center">

      <h1 className=" mb-4 text-center">Register Your Company</h1>
      <Row className="justify-content-center">
        <Col md="6">
          <form onClick={handleSubmit}>
            <Input
              label="Company Name"
              type="text"
              name="comapanyNm"
              value={formData.comapanyNm}
              onChange={handleChange}
              className="mb-4"
            />
            <Input
              label="Email ID"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mb-4"
            />
            <Input
              label="GST NO"
              type="text"
              name="gst.no"
              value={formData.gst}
              onChange={handleChange}
              className="mb-4"
            />
            <Input
              label="Contact No"
              type="tel"
              name="contact no"
              value={formData.contact}
              onChange={handleChange}
              className="mb-4"
            />
            <Input

              label=""
              type="file"
              name="logo"
              value={formData.logo}
              onChange={handleChange}
              
            />
            <div className="text-center mt-4 form-group row ">
              <div className='col' >
                <Button variant="primary" type="submit" square >
                  Submit
                </Button>
              </div>
            </div>
          </form>
          <div className="text-center mt-4 form-group row " >

    <Button variant="primary" type="button" square 

    >
AllCompanyName
</Button>
</div>
        </Col>
      </Row>
    </Container>
  );

};
export default RegistrationForm;