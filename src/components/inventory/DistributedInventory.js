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

const DistributedInventory = () => {
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
      <div className="arrow-back-container">
        <BiArrowBack
          className="backLoginForm fs-2 text-dark"
          onClick={() => navigate(-1)}
        />
      </div>
      <h1 className=" mb-4 text-center">Distributed Inventory</h1>
      <form onSubmit={handleSubmit}>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Employee ID"
              type="text"
              name="empid"
              value={formData.empid}
              onChange={handleChange}
            />
          </Col>
          <Col className="col-sm-5">
            <Input
              label="Employee Name"
              type="text"
              name="empName"
              value={formData.empName}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Inventory Name"
              type="text"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
            />
          </Col>

          <Col className="col-sm-5">
            <Input
              label="Quantity"
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
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
export default DistributedInventory;