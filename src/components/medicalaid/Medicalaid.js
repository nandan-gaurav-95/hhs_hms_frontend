import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBInput as Input,
  MDBBtn as Button,
} from "mdb-react-ui-kit";
import Header from "../common/Header";
import { BiArrowBack } from "react-icons/bi";
import { MedicalAidService } from "../../services/MedicalAidService";
import "../../asset/style.css";
import "react-datepicker/dist/react-datepicker.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Medicalaid = () => {
  const navigate = useNavigate();
  const initialState = {
    // med_id: "",
    patient_name: "",
    address_patient: "",
    hospital_name: "",
    aliment: "",
    amt_sanction: "",
    chq_no: "",
    date: "",
    total: "",
    remark: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  // Define a validation function for the form
  const validateForm = (formData) => {
    const errors = {};

    if (!formData.patient_name) {
      errors.patient_name = "Patient Name is required";
    }

    if (!formData.address_patient) {
      errors.address_patient = "Patient Address is required";
    }

    if (!formData.hospital_name) {
      errors.hospital_name = "Hospital Name is required";
    }

    // Add more validation rules for other fields as needed...

    return errors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form before submitting
    const validationErrors = validateForm(formData);
    console.log("Validation Errors:", validationErrors);

    // If there are validation errors, set them in the state
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    } else {
      // Clear validation errors if there are none
      setErrors({});
    }

    try {
      const response = await MedicalAidService.CreateMedicalAid(formData);
      console.log("Medical Aid", response.data);
      if (response.status === 201) {
        console.log("Medical Aid Created Successfully");
        setFormData(initialState);
        toast.success("Submit Successful!", { autoClose: 1000 });
      } else {
        console.error("Failed To create Medical Aid");
        toast.error("Failed to submit Medical Aid", { autoClose: 1000 });
      }
    } catch (error) {
      console.error("Error", error);
      toast.error("An error occurred during submission", { autoClose: 1000 });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    // Clear validation errors when the user makes changes
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  return (
    <div className=" ">
      <Header />
      <div className="addcontainer">
        <div className="arrow-back-container">
          <BiArrowBack className="addbacklogo" onClick={() => navigate(-1)} />
        </div>
        <h1 className="Addtext">Medical Aid</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <Row className="row">
          <Col className="column">
            <Input
              label="Patient Name"
              type="text"
              name="patient_name"
              value={formData.patient_name}
              onChange={handleChange}
              required
            />
          </Col>
          <Col className="column">
            <Input
              label="Patient Address"
              type="text"
              name="address_patient"
              value={formData.address_patient}
              onChange={handleChange}
              required
            />
          </Col>
        </Row>
        <Row className="row">
          <Col className="column">
            <Input
              label="Hospital Name"
              type="text"
              name="hospital_name"
              value={formData.hospital_name}
              onChange={handleChange}
              required
            />
          </Col>
          <Col className="column">
            <Input
              label="Aliment"
              type="text"
              name="aliment"
              value={formData.aliment}
              onChange={handleChange}
              required
            />
          </Col>
        </Row>
        <Row className="row">
          <Col className="column">
            <Input
              label="Amount Sanction"
              type="number"
              name="amt_sanction"
              value={formData.amt_sanction}
              onChange={handleChange}
              required
            />
          </Col>
          <Col className="column">
            <Input
              label="Cheque No."
              type="text"
              name="chq_no"
              value={formData.chq_no}
              onChange={handleChange}
              required
            />
          </Col>
        </Row>
        <Row className="row">
          <Col className="column">
            <Input
              label="Date"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </Col>
          <Col className="column">
            <Input
              label="Total"
              type="number"
              name="total"
              value={formData.total}
              onChange={handleChange}
              required
            />
          </Col>
        </Row>
        <Row className="row">
          <Col className="column">
            <Input
              label="Remark"
              type="text"
              name="remark"
              value={formData.remark}
              onChange={handleChange}
              required
            />
          </Col>
        </Row>
        <div className="submitbtn">
          <Button type="submit">Submit</Button>
        </div>
      </form>
      <ToastContainer/>
    </div>
  );
};
export default Medicalaid;