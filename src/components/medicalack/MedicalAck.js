import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBInput as Input,
  MDBBtn as Button,
} from "mdb-react-ui-kit";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../common/Header";
import { BiArrowBack } from "react-icons/bi";
import { MedicalService } from "../../services/MedicalService";

const MedicalAck = () => {
  const navigate = useNavigate();
  const initialState = {
    toName: "",
    date: "",
    rupees: "",
    chequeNo: "",
    dated: "",
    hospIpNo: "",
    disease: "",
    remark: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit called");
    const validationErrors = validateForm(formData);
    console.log("Validation Errors:", validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    } else {
      setErrors({});
    }

    try {
      const response = await MedicalService.createMedical(formData);
      console.log("MedicalAck", response.data.id);
      if (response.status === 201) {
        console.log("MedicalAck Created Successfully");
        setFormData(initialState);
        toast.success("Submit Successful!",{autoClose:1000});
      } else {
        console.error("Failed To create MedicalAck");
        toast.error("Failed to submit MedicalAck",{autoClose:1000});

      }
    } catch (error) {
      console.error("Error", error);
      toast.error("An error occurred during submission",{autoClose:1000});
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };
  const validateForm = (formData) => {
    const errors = {};

    if (!formData.toName.trim()) {
      errors.toName = "To Name is required.";
    }
    if (!formData.date.trim()) {
      errors.date = "Date is required.";
    }
    if (!formData.rupees.trim()) {
      errors.rupees = "Rupees is required.";
    }
    if (!formData.chequeNo.trim()) {
      errors.chequeNo = "Cheque No is required.";
    }
    if (!formData.dated.trim()) {
      errors.dated = "Dated is required.";
    }
    if (!formData.hospIpNo.trim()) {
      errors.hospIpNo = "Hospital Ip No is required.";
    }
    if (!formData.disease.trim()) {
      errors.disease = "Disease is required.";
    }
    if (!formData.remark.trim()) {
      errors.remark = "Remark is required.";
    }
    return errors;
  };

  return (
    <div className=" ">
      <Header />
      <div className="mt-4">
      <div className="arrow-back-container">
        <BiArrowBack
          className="backLoginForm fs-2 text-dark"
          onClick={() => navigate(-1)}
        />
      </div>
      <h1 className=" mb-4 text-center">Medical Acknowledgment</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="To Name"
              type="text"
              name="toName"
              value={formData.toName}
              onChange={handleChange}
              required
            />
            {errors.toName && (
              <div className="text-danger">{errors.toName}</div>
            )}
          </Col>
          <Col className="col-sm-5 ">
            <Input
              label="Date"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            {errors.date && <div className="text-danger">{errors.date}</div>}
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Rupees"
              type="number"
              name="rupees"
              value={formData.rupees}
              onChange={handleChange}
              required
            />
            {errors.rupees && (
              <div className="text-danger">{errors.rupees}</div>
            )}
          </Col>
          <Col className="col-sm-5 ">
            <Input
              label="Cheque No"
              type="text"
              name="chequeNo"
              value={formData.chequeNo}
              onChange={handleChange}
              required
            />
            {errors.chequeNo && (
              <div className="text-danger">{errors.chequeNo}</div>
            )}
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Dated"
              type="date"
              name="dated"
              value={formData.dated}
              onChange={handleChange}
              required
            />
            {errors.dated && <div className="text-danger">{errors.dated}</div>}
          </Col>
          <Col className="col-sm-5 ">
            <Input
              label="Hospital I.P. NO."
              type="number"
              name="hospIpNo"
              value={formData.hospIpNo}
              onChange={handleChange}
              required
            />
            {errors.hospIpNo && (
              <div className="text-danger">{errors.hospIpNo}</div>
            )}
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Disease"
              type="text"
              name="disease"
              value={formData.disease}
              onChange={handleChange}
              required
            />
            {errors.disease && (
              <div className="text-danger">{errors.disease}</div>
            )}
          </Col>
          <Col className="col-sm-5 ">
            <Input
              label="Remark"
              type="text"
              name="remark"
              value={formData.remark}
              onChange={handleChange}
            />
            {errors.remark && (
              <div className="text-danger">{errors.remark}</div>
            )}
          </Col>
        </Row>

        <div className="text-center mt-4 ">
          <Button type="submit">Submit</Button>
        </div>
      </form>
      <ToastContainer/>
    </div>
  );
};
export default MedicalAck;