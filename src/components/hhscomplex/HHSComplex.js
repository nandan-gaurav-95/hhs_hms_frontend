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
import { HhsComplexService } from "../../services/HhsComplexService";

const HHSComplex = () => {
  const navigate = useNavigate();
  const initialState = {
    lfNo: "",
    rrNo: "",
    date: "",
    receiverName: "",
    rupees: "",
    rupeeInWords: "",
    eleCharges: "",
    month: "",
    chequeNo: "",
    dated: "",
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
      const response = await HhsComplexService.createHhsComplex(formData);

      console.log("Hhs Complex", response.data.id);

      if (response.status === 201) {
        console.log("Hhs Complex Created Successfully");
        setFormData(initialState);
        toast.success("Submit Successful!");
      } else {
        console.error("Failed To create Hhs Complex");
        toast.error("Failed to submit Hhs Complex");
      }
    } catch (error) {
      console.error("Error", error);
      toast.error("An error occurred during submission");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };
  const validateForm = (formData) => {
    const errors = {};

    if (!formData.lfNo.trim()) {
      errors.lfNo = " L.F. No is required.";
    }
    if (!formData.rrNo.trim()) {
      errors.rrNo = "R.R. No is required.";
    }
    if (!formData.date.trim()) {
      errors.date = "Date is required.";
    }
    if (!formData.receiverName.trim()) {
      errors.receiverName = "Receiver Name is required.";
    }
    if (!formData.rupees.trim()) {
      errors.rupees = "Rupees is required.";
    }
    if (!formData.rupeeInWords.trim()) {
      errors.rupeeInWords = "Rupees In Words is required.";
    }
    if (!formData.eleCharges.trim()) {
      errors.eleCharges = "Electrical Charges  is required.";
    }
    if (!formData.month.trim()) {
      errors.month = "Month  is required.";
    }
    if (!formData.chequeNo.trim()) {
      errors.chequeNo = "Cheque No is required.";
    }
    if (!formData.dated.trim()) {
      errors.dated = "Dated is required.";
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
      <h1 className=" mb-4 text-center">HHS Complex</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="L.F.No."
              type="number"
              name="lfNo"
              value={formData.lfNo}
              onChange={handleChange}
              required
            />
            {errors.lfNo && <div className="text-danger">{errors.lfNo}</div>}
          </Col>
          <Col className="col-sm-5">
            <Input
              label="R.R.NO"
              type="number"
              name="rrNo"
              value={formData.rrNo}
              onChange={handleChange}
              required
            />
            {errors.rrNo && <div className="text-danger">{errors.rrNo}</div>}
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
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

          <Col className="col-sm-5">
            <Input
              label="Receiver Name"
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
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Rupee"
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
              label="Rupee In Words "
              type="text"
              name="rupeeInWords"
              value={formData.rupeeInWords}
              onChange={handleChange}
              required
            />
            {errors.rupeeInWords && (
              <div className="text-danger">{errors.rupeeInWords}</div>
            )}
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Electrical Charges "
              type="number"
              name="eleCharges"
              value={formData.eleCharges}
              onChange={handleChange}
              required
            />
            {errors.eleCharges && (
              <div className="text-danger">{errors.eleCharges}</div>
            )}
          </Col>
          <Col className="col-sm-5 ">
            <select
              className="form-select"
              type="text"
              name="month"
              value={formData.month}
              onChange={handleChange}
              required
            >
              <option value="">Select Month</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
            {errors.month && <div className="text-danger">{errors.month}</div>}
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
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
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
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
        <div className="text-center mt-4 ">
          <Button type="submit">Submit</Button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};
export default HHSComplex;