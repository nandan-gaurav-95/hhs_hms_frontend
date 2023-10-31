import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../common/Header";
import "react-datepicker/dist/react-datepicker.css";
import "../../asset/style.css";
import { BiArrowBack } from "react-icons/bi";
import { TapalService } from "../../services/TapalService";
import { APIS } from "../constants/api";
import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBInput as Input,
  MDBBtn as Button,
} from "mdb-react-ui-kit";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Addtapal = () => {
  const navigate = useNavigate();
  const initialState = {
    letterType: "",
    toAddress: "",
    fromAddress: "",
    date: "",
    letterNo: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  // Define a validation function for the form
  const validateForm = (formData) => {
    const errors = {};

    if (!formData.letterType) {
      errors.letterType = "Letter Type is required";
    }

    if (!formData.toAddress) {
      errors.toAddress = "To Address is required";
    }

    if (!formData.fromAddress) {
      errors.fromAddress = "From Address is required";
    }

    // Add more validation rules for other fields as needed...

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form before submitting
    const validationErrors = validateForm(formData);
    console.log('Validation Errors:', validationErrors);

    // If there are validation errors, set them in the state
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    } else {
      // Clear validation errors if there are none
      setErrors({});
    }

    try {
      const response = await TapalService.createTapal(formData);

      console.log("TenantId", response.data);

      if (response.status === 201) {
        console.log("Tenant Created Successfully");
        setFormData(initialState);
        toast.success("Submit Successful!");
      } else {
        console.error("Failed To create Tenant");
        toast.error("Failed to submit Voucher");
      }
    } catch (error) {
      console.error("Error", error);
      toast.error("An error occurred during submission");

    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    // Clear validation errors when the user makes changes
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  return (
    <div className="">
      <Header />
      <div className="arrow-back-container">
        <BiArrowBack
          className="backLoginForm fs-2 text-dark"
          onClick={() => navigate(-1)}
        />
      </div>
      <h1 className=" mb-4 text-center">Add Tapal</h1>
      <form onSubmit={handleSubmit}>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5">
            <select
              className="form-select"
              id="Letter Type"
              name="letterType"
              value={formData.letterType}
              onChange={handleChange}
              required
            >
              <option value="">Select Letter Type</option>
              <option value="Received Letter">Received Letter</option>
              <option value="Out Letter">Out Letter</option>
            </select>
            {errors.letterType && <div className="text-danger">{errors.letterType}</div>}
          </Col>
          <Col className="col-sm-5">
            <Input
              label="To Address"
              type="text"
              name="toAddress"
              value={formData.toAddress}
              onChange={handleChange}
              required
            />
            {errors.toAddress && <div className="text-danger">{errors.toAddress}</div>}
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5">
            <Input
              label="From Address"
              type="text"
              name="fromAddress"
              value={formData.fromAddress}
              onChange={handleChange}
              required
            />
            {errors.fromAddress && <div className="text-danger">{errors.fromAddress}</div>}
          </Col>
          <Col className="col-sm-5">
            <Input
              label="Date"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5">
            <Input
              label="letterno"
              type="number"
              name="letterNo"
              value={formData.letterNo}
              onChange={handleChange}
              required
            />
          </Col>
        </Row>
        <div className="text-center mt-4">
          <Button type="submit">Submit</Button>
        </div>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default Addtapal;