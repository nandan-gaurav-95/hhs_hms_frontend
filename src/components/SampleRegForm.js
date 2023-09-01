import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { APIS } from "./constants/api";
import '../asset/style.css';

import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBInput as Input,
  MDBBtn as Button
} from 'mdb-react-ui-kit';


const SampleRegForm = () => {
  const navigate = useNavigate();
    const initialState = {
      companyNm: '',
      email: '',
      gstNo: '',
      mobNo: '',
      logo: ''
      };
      const [formData, setFormData] = useState( initialState );



  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  

  const handleSubmit = async (event) => {
    event.preventDefault();
     
    try {
      const response = await axios.post(APIS.CREATECOMPANY, formData);
      if (response.status === 201) {
        console.log("Company details saved successfully");
        setFormData(initialState);
        // navigate("/properties")
        navigate("/properties", { state: { companyName: formData.companyNm } });
      } else {
        console.error("Error while saving from data");
      }
    } 
    catch (error) {
      console.error("Error:", error);
    }
  };

  const  AllCompanyNameDetails = (event)=>{
    event.preventDefault();
    navigate("/allCompanyName");
  }



  return (
    <Container className="bg-light p-5 mt-5 w-50 rounded shadow justify-content-center align-items-center">
      <h1 className=" mb-4 text-center">Sample Reg Form Company</h1>
      <Row className="justify-content-center">
        <Col md="6">
        <form onSubmit={handleSubmit}>
            <Input
              label="Company Name"
              type="text"
              name="companyNm"
              value={formData.companyNm}
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
              name="gstNo"
              value={formData.gstNo}
              onChange={handleChange}
              className="mb-4"
            />
            <Input
              label="Contact No"
              type="tel"
              name="mobNo"
              value={formData.mobNo}
              onChange={handleChange}
              className="mb-4"
            />
            <Input
              label=""
              // type="file"
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
              <Button variant="primary" type="button" square onClick={AllCompanyNameDetails}>
                   AllCompanyName
              </Button>
           </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SampleRegForm;
