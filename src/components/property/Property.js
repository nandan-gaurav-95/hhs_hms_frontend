import React, { useState, useEffect } from "react";
import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBInput as Input,
  MDBBtn as Button,
} from "mdb-react-ui-kit";
import axios from "axios";
import { APIS } from "../constants/api";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-select-search/style.css";
import Header from "../common/Header";
import { PropertyService } from "../../services/PropertyService";
import { BiArrowBack } from "react-icons/bi";
const Property = () => {
  const initialState = {
    propertyName: "",
    proptype: "",
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
    rent: "",
    mcharges: "",
    occupied: "",
  };
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

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
      console.log("PropertyId", response.data.prop_id);
      // console.log(response.data.id);
      if (response.status === 201) {
        console.log("Property data saved successfully");
        setFormData(initialState);
        toast.success("Submit Successful!", { autoClose: 1000 });
      } else {
        console.error("Error while saving Property data");
        toast.error("Failed to submit Property", { autoClose: 1000 });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred during submission", { autoClose: 1000 });
    }
  };

  return (
    <div className="">
      <Header />
      <div className="addcontainer">
        <div className="arrow-back-container">
          <BiArrowBack className="addbacklogo" onClick={() => navigate(-1)} />
        </div>

        {/* <Sidebar> */}
        <h1 className="Addtext">Add Property Details</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <Row className="row">
          <Col className="column">
            <Input
              label="Property Name"
              type="text"
              name="propertyName"
              value={formData.propertyName}
              onChange={handleChange}
              required
            />
          </Col>
          <Col className="column">
            <Input
              label="Town/Village"
              type="text"
              name="villageNm"
              value={formData.villageNm}
              onChange={handleChange}
              required
            />
          </Col>
        </Row>
        <Row className="row">
          <Col className="column">
            <select
              className="form-select"
              id="proptype"
              name="proptype"
              value={formData.proptype}
              onChange={handleChange}
              required
            >
              <option value="">Property Type</option>
              <option value="Schools">Schools</option>
              <option value="ITI College">ITI College</option>
              <option value="Skill Center">Skill Center</option>
              <option value="Blood Collection Center">
                {" "}
                Blood Collection Center
              </option>
              <option value="Hostel">Hostel</option>
              <option value="Masjid">Masjid</option>
              <option value="Dargah">Dargah</option>
            </select>
          </Col>
          <Col className="column">
            <Input
              label="Enter E-mail"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Col>
        </Row>{" "}
        <Row className="row">
          <Col className="column">
            <Input
              label="GST No."
              type="text"
              name="gstNo"
              value={formData.gstNo}
              onChange={handleChange}
              required
            />
          </Col>
          <Col className="column">
            <Input
              label="Phone No."
              type="text"
              name="mobNo"
              value={formData.mobNo}
              onChange={handleChange}
              required
            />
          </Col>
        </Row>
        <Row className="row">
          <Col className="column">
            <Input
              label="CTS Number"
              type="text"
              name="ctsNo"
              value={formData.ctsNo}
              onChange={handleChange}
              required
            />
          </Col>
          <Col className="column">
            <Input
              label="Area/size"
              type="number"
              step="any"
              name="area"
              value={formData.area}
              onChange={handleChange}
              required
            />
          </Col>
        </Row>
        <Row className="row">
          <Col className="column">
            <Input
              label="boundries"
              type="text"
              name="boundries"
              value={formData.boundries}
              onChange={handleChange}
              required
            />
          </Col>
          <Col className="column">
            <Input
              label="taxAmt"
              type="number"
              step="any"
              name="taxAmt"
              value={formData.taxAmt}
              onChange={handleChange}
              required
            />
          </Col>
        </Row>
        <Row className="row">
          <Col className="column">
            <Input
              label="accountName"
              type="text"
              name="accountName"
              value={formData.accountName}
              onChange={handleChange}
              required
            />
          </Col>
          <Col className="column">
            <Input
              label="annualIncome"
              type="number"
              step="any"
              name="annualIncome"
              value={formData.annualIncome}
              onChange={handleChange}
              required
            />
          </Col>
        </Row>
        <Row className="row">
          <Col className="column">
            <Input
              label="address"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </Col>
          <Col className="column">
            <Input
              label="registrationNo"
              type="number"
              name="registrationNo"
              value={formData.registrationNo}
              onChange={handleChange}
              required
            />
          </Col>
        </Row>
        <Row className="row">
          <Col className="column">
            <Input
              label="Gazzet No"
              type="text"
              name="gazzetNo"
              value={formData.gazzetNo}
              onChange={handleChange}
              required
            />
          </Col>
          <Col className="column">
            <Input
              label="Rent"
              type="text"
              name="rent"
              value={formData.rent}
              onChange={handleChange}
              required
            />
          </Col>
        </Row>
        <Row className="row">
          <Col className="column">
            <Input
              label="Maintenance Charges"
              type="text"
              name="mcharges"
              value={formData.mcharges}
              onChange={handleChange}
              required
            />
          </Col>
          <Col className="column">
            <select
              className="form-select"
              id="occupied"
              name="occupied"
              value={formData.occupied}
              onChange={handleChange}
              required
            >
              <option value="">Is Occupied ?</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </Col>
        </Row>
        <div className="submitbtn">
          <Button type="submit">Submit</Button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Property;