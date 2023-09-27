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

const TenantForm = () => {
  const navigate = useNavigate();
  const initialState = {
    tenantName: "",
    address: "",
    contactNum: "",
    allocatedShop: "",
    rentCollected: "",
    rentDue: "",
    securityDeposit: "",
    electricityDue: "",
    collectionDetails: "",
    billGeneration: "",
    paymentMethod: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form before submitting
    const validationErrors = validateForm(formData);

    // If there are validation errors, set them in the state
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    } else {
      // Clear validation errors if there are none
      setErrors({});
    }

    try {
      const response = await TenantService.createTenant(formData);

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
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    // Clear validation errors when the user makes changes
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validateForm = (formData) => {
    const errors = {};

    // Check for mandatory fields
    if (!formData.tenantName.trim()) {
      errors.tenantName = "Tenant Name is required.";
    }
    if (!formData.address.trim()) {
      errors.address = "Address is required.";
    }
    if (!formData.contactNum.trim()) {
      errors.contactNum = "Contact No is required.";
    } else if (!/^\d{10}$/.test(formData.contactNum)) {
      errors.contactNum = "Contact No must be 10 digits.";
    }
    if (!formData.allocatedShop.trim()) {
      errors.allocatedShop = "Shop No is required.";
    }
    if (!formData.rentCollected.trim()) {
      errors.rentCollected = "Collected Rent is required.";
    }
    if (!formData.securityDeposit.trim()) {
      errors.securityDeposit = "Deposit is required.";
    }
    if (!formData.electricityDue.trim()) {
      errors.electricityDue = "Electricity Due is required.";
    }
    if (!formData.collectionDetails.trim()) {
      errors.collectionDetails = "Collection Details is required.";
    }
    if (!formData.billGeneration.trim()) {
      errors.billGeneration = "Bill Generation/Total Bill is required.";
    }
    if (!formData.paymentMethod) {
      errors.paymentMethod = "Payment Method is required.";
    }

    return errors;
  };

  const ShowTenant = (event) => {
    event.preventDefault();
    navigate("/showtenant");
  };

  return (
    <div className=" ">
      <Sidebar>
      <h1 className=" mb-4 text-center">Tenant Management</h1>
      <form onSubmit={handleSubmit}>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Name"
              type="text"
              name="tenantName"
              value={formData.tenantName}
              onChange={handleChange}
              required
            />
            {errors.tenantName && (
              <div className="text-danger">{errors.tenantName}</div>
            )}
          </Col>
          <Col className="col-sm-5 ">
            <Input
              label="Contact No"
              type="tel"
              name="contactNum"
              value={formData.contactNum}
              onChange={handleChange}
              required
            />
            {errors.contactNum && (
              <div className="text-danger">{errors.contactNum}</div>
            )}
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Current Address"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            {errors.address && (
              <div className="text-danger">{errors.address}</div>
            )}
          </Col>
          {/* <Col className="col-sm-5 ">
            <Input
              label="Shop No"
              type="text"
              name="allocatedShop"
              value={formData.allocatedShop}
              onChange={handleChange}
              required
            />
            {errors.allocatedShop && (
              <div className="text-danger">{errors.allocatedShop}</div>
            )}
          </Col> */}

<Col className="col-sm-5">
            <select
              className="form-select"
              id="paymentMethod"
              name="allocatedShop"
              value={formData.allocatedShop}
              onChange={handleChange}
              required
            >
              <option value="">Select Shop No </option>
              <option value="A-1001">A-1001</option>
              <option value="A-1002">A-1002</option>
              <option value="A-1003">A-1003</option>
              <option value="A-1004">A-1004</option>
              {/* Add more payment methods as needed */}
            </select>
            {errors.paymentMethod && (
              <div className="text-danger">{errors.paymentMethod}</div>
            )}
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Collected Rent"
              type="text"
              name="rentCollected"
              value={formData.rentCollected}
              onChange={handleChange}
              required
            />
            {errors.rentCollected && (
              <div className="text-danger">{errors.rentCollected}</div>
            )}
          </Col>
          <Col className="col-sm-5 ">
            <Input
              label="Rent Due"
              type="text"
              name="rentDue"
              value={formData.rentDue}
              onChange={handleChange}
              required
            />
            {errors.rentDue && (
              <div className="text-danger">{errors.rentDue}</div>
            )}
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Deposit"
              type="text"
              name="securityDeposit"
              value={formData.securityDeposit}
              onChange={handleChange}
              required
            />
            {errors.securityDeposit && (
              <div className="text-danger">{errors.securityDeposit}</div>
            )}
          </Col>
          <Col className="col-sm-5 ">
            <Input
              label="Electricity Due"
              type="text"
              name="electricityDue"
              value={formData.electricityDue}
              onChange={handleChange}
              required
            />
            {errors.electricityDue && (
              <div className="text-danger">{errors.electricityDue}</div>
            )}
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Collection Details"
              type="text"
              name="collectionDetails"
              value={formData.collectionDetails}
              onChange={handleChange}
              required
            />
            {errors.collectionDetails && (
              <div className="text-danger">{errors.collectionDetails}</div>
            )}
          </Col>
          <Col className="col-sm-5">
            <select
              className="form-select"
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              required
            >
              <option value="">Select Payment Method</option>
              <option value="online">Online</option>
              <option value="Cash">Cash</option>
              <option value="Cheque">Cheque</option>
              {/* Add more payment methods as needed */}
            </select>
            {errors.paymentMethod && (
              <div className="text-danger">{errors.paymentMethod}</div>
            )}
          </Col>
        </Row>
        <Row className="row mt-8 mb-4 justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Bill Generation/Total Bill"
              type="text"
              name="billGeneration"
              value={formData.billGeneration}
              onChange={handleChange}
              required
            />
            {errors.billGeneration && (
              <div className="text-danger">{errors.billGeneration}</div>
            )}
          </Col>
        </Row>
        <div className="text-center mt-4 ">
          <Button type="submit">Submit</Button>
        </div>
        <div className="text-center mt-4 ">
          <Button variant="primary" type="button" square onClick={ShowTenant}>
            Show Tenant
          </Button>
        </div>
      </form>
      </Sidebar>
    </div>
  );
};
export default TenantForm;