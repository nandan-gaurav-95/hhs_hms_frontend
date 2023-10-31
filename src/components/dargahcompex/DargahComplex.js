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
import { DargahComplexService } from "../../services/DargahComplexService";

const DargahComplex = () => {
  const navigate = useNavigate();
  const initialState = {
    receiverName: "",
    date: "",
    rupee: "",
    rupeeInWords: "",
    shopRent: "",
    month: "",
    chequeNo: "",
    dated: "",
    drawnOn: "",
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
      const response = await DargahComplexService.createDargahComplex(formData);

      console.log("dargah complex", response.data.id);

      if (response.status === 201) {
        console.log("dargah complex Created Successfully");
        setFormData(initialState);
        toast.success("Submit Successful!");
      } else {
        console.error("Failed To create dargah complex");
        toast.error("Failed to submit dargah complex");
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

    if (!formData.receiverName.trim()) {
      errors.receiverName = "Receiver Name is required.";
    }
    if (!formData.date.trim()) {
      errors.date = "Date is required.";
    }
    if (!formData.rupee.trim()) {
      errors.rupee = "Rupee is required.";
    }
    if (!formData.rupeeInWords.trim()) {
      errors.rupeeInWords = "Rupees In Words is required.";
    }
    if (!formData.shopRent.trim()) {
      errors.shopRent = "Shop Rent is required.";
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
    if (!formData.drawnOn.trim()) {
      errors.drawnOn = "Drawn On  is required.";
    }
    if (!formData.remark.trim()) {
      errors.remark = "Remark is required.";
    }
    return errors;
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
      <h1 className=" mb-4 text-center">Dargah Complex</h1>
      <form onSubmit={handleSubmit}>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
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
              label="Rupee"
              type="number"
              name="rupee"
              value={formData.rupee}
              onChange={handleChange}
              required
            />
            {errors.rupee && <div className="text-danger">{errors.rupee}</div>}
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
              label="Shop Rent "
              type="text"
              name="shopRent"
              value={formData.shopRent}
              onChange={handleChange}
              required
            />
            {errors.shopRent && (
              <div className="text-danger">{errors.shopRent}</div>
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
              label="Drawn On"
              type="text"
              name="drawnOn"
              value={formData.drawnOn}
              onChange={handleChange}
              required
            />
            {errors.drawnOn && (
              <div className="text-danger">{errors.drawnOn}</div>
            )}
          </Col>
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
      <ToastContainer/>
    </div>
  );
};
export default DargahComplex;