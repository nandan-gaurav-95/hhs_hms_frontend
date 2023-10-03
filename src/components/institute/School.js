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
import { TenantService } from "../../services/TenantService";
import Sidebar from "../admin/Sidebar";
import Header from "../common/Header";

const School = () => {
  const navigate = useNavigate();
  const initialState = {
    schoolID: "",
    schoolName: "",
    director: "",
    location: "",
    contactNum: "",
    email: "",
    noofStaff: "",
    noofStudent: "",
    schoolType: "",
    facilites: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  
  const handleSubmit = () => {
    
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  return (
    <div className=" ">
      <Header/>
      <h1 className=" mb-4 text-center">School Information</h1>
      <form onSubmit={handleSubmit}>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="ID"
              type="text"
              name="schoolID"
              value={formData.schoolID}
              onChange={handleChange}
              
            />
        
          </Col>
          <Col className="col-sm-5">
          <Input
              label="School Name"
              type="text"
              name="schoolName"
              value={formData.schoolName}
              onChange={handleChange}
              
            />
             
            </Col>

        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
         
          <Col className="col-sm-5 ">
            <Input
              label="Director"
              type="text"
              name="director"
              value={formData.director}
              onChange={handleChange}
              
            />
          
          </Col>
         

<Col className="col-sm-5">
<Input
              label="Location"
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              
            />
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
         
           <Col className="col-sm-5 ">
            <Input
              label="Contact"
              type="tel"
              name="contactNum"
              value={formData.contactNum}
              onChange={handleChange}
             
            />
           
          </Col>
         
          <Col className="col-sm-5 ">
            <Input
              label="Email"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              
            />
           
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
         
          
           <Col className="col-sm-5 ">
            <Input
              label="No of Staff"
              type="number"
              name="noofStaff"
              value={formData.noofStaff}
              onChange={handleChange}
             
            />
            
          </Col>
          <Col className="col-sm-5 ">
            <Input
              label="No of Student"
              type="number"
              name="noofStudent"
              value={formData.noofStudent}
              onChange={handleChange}
              
            />
           
          </Col>
        </Row>
        
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
         
          
         <Col className="col-sm-5 ">
          <Input
            label="School Type"
            type="text"
            name="schoolType"
            value={formData.schoolType}
            onChange={handleChange}
           
          />
          
        </Col>
        <Col className="col-sm-5 ">
          <Input
            label="Facilites"
            type="text"
            name="facilites"
            value={formData.facilites}
            onChange={handleChange}
            
          />
         
        </Col>
      </Row>
      
        <div className="text-center mt-4 ">
          <Button type="submit">Submit</Button>
        </div>
        {/* <div className="text-center mt-4 ">
          <Button variant="primary" type="button" square onClick={ShowTenant}>
            Show Tenant
          </Button>
        </div> */}
      </form>
      {/* </Sidebar> */}
    </div>
  );
};
export default School;