import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBInput as Input,
  MDBBtn as Button,
} from "mdb-react-ui-kit";
import { BiArrowBack } from "react-icons/bi";

import axios from "axios";
import { APIS } from "../constants/api";
import { TenantService } from "../../services/TenantService";
import Sidebar from "../admin/Sidebar";
import Header from "../common/Header";

const DistributeInventory = () => {
  const navigate = useNavigate();
  const initialState = {
    empid: "",
    empName: "",
    itemName: "",
    quantity: "",
    inventoryType: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {};
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  return (
    <div className=" ">
      <Header />
      <div className="addcontainer">
        <div className="arrow-back-container">
          <BiArrowBack className="addbacklogo" onClick={() => navigate(-1)} />
        </div>

        <h1 className="Addtext">Distribute Inventory</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <Row className="row">
          <Col className="column">
            <Input
              label="Employee ID"
              type="text"
              name="empid"
              value={formData.empid}
              onChange={handleChange}
            />
          </Col>
          <Col className="column">
            <Input
              label="Employee Name"
              type="text"
              name="empName"
              value={formData.empName}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="row">
          <Col className="column">
            <Input
              label="Inventory Name"
              type="text"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
            />
          </Col>

          <Col className="column">
            <Input
              label="Quantity"
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="row">
          <Col className="column">
            <select
              className="form-select"
              id="select Inventory"
              name="inventory"
              value={formData.inventory}
              onChange={handleChange}
              required
            >
              <option value="">Select Inventory Type</option>
              <option value="Consumable">Consumable</option>
              <option value="NonConsumable ">NonConsumable</option>
            </select>
          </Col>
        </Row>

        <div className="submitbtn">
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
export default DistributeInventory;
