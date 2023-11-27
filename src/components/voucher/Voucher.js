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
import { VoucherService } from "../../services/VoucherService";

const Voucher = () => {
  const navigate = useNavigate();
  const initialState = {
    date: "",
    amtPaid: "",
    towards: "",
    chequeNo: "",
    dated: "",
    rupees: "",
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
      const response = await VoucherService.createVoucher(formData);
      console.log("Voucher", response.data.id);
      if (response.status === 201) {
        console.log("Voucher Created Successfully");
        setFormData(initialState);
        toast.success("Submit Successful!",{autoClose:1000});
      } else {
        console.error("Failed To create Voucher");
        toast.error("Failed to submit Voucher",{autoClose:1000});
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

    if (!formData.date.trim()) {
      errors.date = " Date is required.";
    }
    if (!formData.amtPaid.trim()) {
      errors.amtPaid = "Amount Paid is required.";
    }
    if (!formData.towards.trim()) {
      errors.towards = "Towards is required.";
    }
    if (!formData.chequeNo.trim()) {
      errors.chequeNo = "Cheque No is required.";
    }
    if (!formData.dated.trim()) {
      errors.dated = "Dated is required.";
    }
    if (!formData.rupees.trim()) {
      errors.rupees = "Rupees is required.";
    }
    if (!formData.remark.trim()) {
      errors.remark = "Remark  is required.";
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
      <h1 className="Addtext">Voucher</h1>
      </div>
      <form onSubmit={handleSubmit}>
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
            {errors.date && <div className="text-danger">{errors.date}</div>}
          </Col>
          <Col className="column">
            <Input
              label="Amount Paid"
              type="number"
              name="amtPaid"
              value={formData.amtPaid}
              onChange={handleChange}
              required
            />
            {errors.amtPaid && (
              <div className="text-danger">{errors.amtPaid}</div>
            )}
          </Col>
        </Row>
        <Row className="row">
          <Col className="column">
            <Input
              label="Towards"
              type="number"
              name="towards"
              value={formData.towards}
              onChange={handleChange}
              required
            />
            {errors.towards && (
              <div className="text-danger">{errors.towards}</div>
            )}
          </Col>
          <Col className="column">
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
        <Row className="row">
          <Col className="column">
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
          <Col className="column">
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
      <ToastContainer />
    </div>
  );
};
export default Voucher;