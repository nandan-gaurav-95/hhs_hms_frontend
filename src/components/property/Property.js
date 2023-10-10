import React, { useState,useEffect } from "react";
import {
  MDBContainer,
  MDBRow as Row,
  MDBCol as Col,
  MDBInput as Input,
  MDBBtn as Button,
} from "mdb-react-ui-kit";
import axios from "axios";
import { APIS } from "../constants/api";
import { useNavigate, useParams } from "react-router-dom";

import  "react-select-search/style.css";
import Sidebar from "../admin/Sidebar";
import Header from "../common/Header";
import {  PropertyService } from "../../services/PropertyService";
import { BiArrowBack } from "react-icons/bi";
const Property = () => {
  const initialState = {
    propertyName: "",
    proptype:"",
    email: "",
    gstNo: "",
    mobNo: "",
    villageNm: "",
    ctsNo: "",
    area: "",
    boundries: "",
    taxAmt: "",
    accountName: "",
    annualIncome: "",
    address: "",
    registrationNo: "",
    gazzetNo: "",
    rent:"",
    mcharges:"",
    occupied:"",
  };
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await PropertyService.createProperty(formData);
      console.log("PropertyId",response.data.prop_id);
      // console.log(response.data.id);
      if (response.status === 201) {
          console.log("Property data saved successfully");
          setFormData(initialState);
      } else {
          console.error("Error while saving Property data");
      }
  } catch (error) {
      console.error("Error:", error);
  }
  };
  

  return (
    <div className="">
      <Header/>
      <div className="arrow-back-container">
        <BiArrowBack
          className="backLoginForm fs-2 text-dark"
          onClick={() => navigate(-1)}
        />
      </div>

      {/* <Sidebar> */}
      <h1 className=" mb-4 text-center">Add Property Details</h1>
      <form onSubmit={handleSubmit}>
        <Row className="row mt-4 mb-2  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Property Name"
              type="text"
              name="propertyName"
              value={formData.propertyName}
              onChange={handleChange}
            />
          </Col>
          <Col className="col-sm-5 ">
            <Input
              label="Town/Village"
              type="text"
              name="villageNm"
              value={formData.villageNm}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="row mt-4 mb-2  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
          <select
                className="form-select"
                id="proptype"
                name="proptype"
                value={formData.proptype}
                onChange={handleChange}
                required
                style={{ marginTop: '20px' }} 
                >
                <option value="">Property Type</option>
                <option value="Schools">Schools</option>
                <option value="ITI College">ITI College</option>
                <option value="Skill Center">Skill Center</option>
                <option value="Blood Collection Center"> Blood Collection Center</option>
                <option value="Hostel">Hostel</option>
                <option value="Masjid">Masjid</option>
                <option value="Dargah">Dargah</option>
              </select>
          </Col>
          <Col className="col-sm-5 ">
            <Input
              label="Enter E-mail"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Col>
        </Row> <Row className="row mt-4 mb-2  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="GST No."
              type="text"
              name="gstNo"
              value={formData.gstNo}
              onChange={handleChange}
              
            />
          </Col>
          <Col className="col-sm-5 ">
            <Input
              label="Phone No."
              type="text"
              name="mobNo"
              value={formData.mobNo}
              onChange={handleChange}
            />
          </Col>
        </Row>

        <Row className="row mt-4 mb-2 justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="CTS Number"
              type="text"
              name="ctsNo"
              value={formData.ctsNo}
              onChange={handleChange}
            />
          </Col>
          <Col className="col-sm-5 ">
            <Input
              label="Area/size"
              type="number"
              step="any"
              name="area"
              value={formData.area}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="row mt-4 mb-2 justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="boundries"
              type="text"
              name="boundries"
              value={formData.boundries}
              onChange={handleChange}
            />
          </Col>
          <Col className="col-sm-5 ">
            <Input
              label="taxAmt"
              type="number"
              step="any"
              name="taxAmt"
              value={formData.taxAmt}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="row mt-4 mb-2 justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="accountName"
              type="text"
              name="accountName"
              value={formData.accountName}
              onChange={handleChange}
            />
          </Col>
          <Col className="col-sm-5 ">
            <Input
              label="annualIncome"
              type="number"
              step="any"
              name="annualIncome"
              value={formData.annualIncome}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="row mt-4 mb-2 justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="address"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </Col>
          <Col className="col-sm-5 ">
            <Input
              label="registrationNo"
              type="number"
              name="registrationNo"
              value={formData.registrationNo}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="row mt-4 mb-2 justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Gazzet No"
              type="text"
              name="gazzetNo"
              value={formData.gazzetNo}
              onChange={handleChange}
            />
          </Col>
          <Col className="col-sm-5 ">
            <Input
              label="Rent"
              type="text"
              name="rent"
              value={formData.rent}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="row mt-4 mb-2 justify-content-evenly align-items-center">
        <Col className="col-sm-5 ">
            <Input
              label="Maintenance Charges"
              type="text"
              name="mcharges"
              value={formData.mcharges}
              onChange={handleChange}
            />
          </Col>
          <Col className="col-sm-5 ">
          <select
                className="form-select"
                id="occupied"
                name="occupied"
                value={formData.occupied}
                onChange={handleChange}
              >
                <option value="">Is Occupied ?</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
               
              </select>
          </Col>
        </Row>
        
        <div className="mt-4 text-center">
          <Button type="submit">Submit</Button>
        </div>
      </form>
      {/* </Sidebar> */}
    </div>
  );
};

export default Property;
