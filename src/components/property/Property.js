import React, { useState,useEffect } from "react";
import {
  MDBContainer,
  MDBRow as Row,
  MDBCol as Col,
  MDBInput as Input,
  MDBBtn as Button,
} from "mdb-react-ui-kit";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { APIS } from "../constants/api";

import  "react-select-search/style.css";
import Sidebar from "../admin/Sidebar";

const Property = () => {
  const initialState = {
    companyId:null,
    companyName: "",
    villageNm: "",
    ctsNo: "",
    area: "",
    boundries: "",
    taxAmt: "",
    accountNm: "",
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
  const location = useLocation();
  const receivedFormData = location.state || {}; // Default to empty object if state is not present



  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  useEffect(() => {
    setFormData({
      ...receivedFormData,
      companyId: receivedFormData.companyId, // Set the companyId from the state
    });
  }, [receivedFormData]);

 

const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formDataToSend = new FormData();
      // Append all form fields to the FormData object
      for (const key in formData) {
        if (formData.hasOwnProperty(key)) {
          formDataToSend.append(key, formData[key]);
        }
      }
      const response = await axios.put(
        `${APIS.SAVECOMPANY}/${formData.companyId}`,
       formDataToSend,  // Send the FormData object
        {
          headers: {
            //"Content-Type": "multipart/form-data", // Set the content type for FormData
            "Content-Type": "application/json","Accept": "application/json"
          },
        }
      );
  
      console.log(response);
  
      if (response.status === 200) {
        console.log("Company details updated successfully");
        navigate(`/property-photo/${formData.companyId}`,{
          state: {
            companyId: formData.companyId,
            companyName: formData.companyName,
            // Add other data you want to pass here
          },
        });
      } else {
        console.error("Error while updating company data");
        // Additional error handling or notifications can be added here
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  return (
    <div className="">
      <Sidebar>
      <h1 className=" mb-4 text-center">Add Property Details of {receivedFormData.companyName}</h1>
      <form onSubmit={handleSubmit}>
        <Row className="row mt-4 mb-2  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Company Name"
              type="text"
              name="companyName"
              value={receivedFormData.companyName}
              readOnly
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
              label="accountNm"
              type="text"
              name="accountNm"
              value={formData.accountNm}
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
      </Sidebar>
    </div>
  );
};

export default Property;
