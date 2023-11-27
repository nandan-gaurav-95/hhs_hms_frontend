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
import { AmbulanceService } from "../../services/AmbulanceService";

const AmbulanceVan = () => {
  const navigate = useNavigate();
  const initialState = {
    receiverName: "",
    date: "",
    accHolderName: "",
    rupee: "",
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
      const response = await AmbulanceService.createAmbulance(formData);
      console.log("AmbulanceVan", response.data.id);
      if (response.status === 201) {
        console.log("AmbulanceVan Created Successfully");
        setFormData(initialState);
        toast.success("Submit Successful!",{autoClose:1000});
      } else {
        console.error("Failed To create AmbulanceVan");
        toast.error("Failed to submit AmbulanceVan",{autoClose:1000});

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

    if (!formData.receiverName.trim()) {
      errors.receiverName = "Receiver Name is required.";
    }
    if (!formData.date.trim()) {
      errors.date = "Date is required.";
    }

    if (!formData.accHolderName.trim()) {
      errors.accHolderName = "Account Holder Nameis required.";
    }
    if (!formData.rupee.trim()) {
      errors.rupee = "Rupee is required.";
    }
    if (!formData.remark.trim()) {
      errors.remark = "Remark is required.";
    }
    return errors;
  };

  return (
    <div className=" ">
      <Header />
      <div className="addcontainer">
      <div className="arrow-back-container">
        <BiArrowBack
          className="addbacklogo"
          onClick={() => navigate(-1)}
        />
      </div>
      <h1 className="Addtext">Ambulance Van</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <Row className="row">
          <Col className="column">
            <Input
              label="ReceiverName"
              type="text"
              name="receiverName"
              value={formData.receiverName}
              onChange={handleChange}
              required
            />
            {errors.receiverName && (
              <div className="text-danger">{errors.receiverName}</div>
            )}
          </Col>
          <Col className="column">
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
        <Row className="row">
          <Col className="column">
            <Input
              label="Account Holder Name"
              type="text"
              name="accHolderName"
              value={formData.accHolderName}
              onChange={handleChange}
              required
            />
            {errors.accHolderName && (
              <div className="text-danger">{errors.accHolderName}</div>
            )}
          </Col>
          <Col className="column">
            <Input
              label="Rupee"
              type="number"
              name="rupee"
              value={formData.rupee}
              onChange={handleChange}
              required
            />
            {errors.rupee && <div className="text-danger">{errors.rupee}</div>}
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
            {errors.remark && (
              <div className="text-danger">{errors.remark}</div>
            )}
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
export default AmbulanceVan;