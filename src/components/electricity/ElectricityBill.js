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
import { ElectricityBillService } from "../../services/ElectricityBillService";

const ElectricityBill = () => {
  const navigate = useNavigate();
  const initialState = {
    month: "",
    name: "",
    shopNo: "",
    rrNo: "",
    ledger_follono: "",
    sanctionLoad: "",
    tariff: "",
    presentReading: "",
    previousReading: "",
    unitConsumed: "",
    unitSancd: "",
    dateOfReading: "",
    total: "",
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
      const response = await ElectricityBillService.createElectricityBill(
        formData
      );

      console.log("eleBill", response.data.id);

      if (response.status === 201) {
        console.log("eleBill Created Successfully");
        setFormData(initialState);
        toast.success("Submit Successful!", { autoClose: 1000 });
      } else {
        console.error("Failed To create eleBill");
        toast.error("Failed to submit electricity bill", { autoClose: 1000 });
      }
    } catch (error) {
      console.error("Error", error);
      toast.error("An error occurred during submission", { autoClose: 1000 });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };
  const validateForm = (formData) => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = " Name is required.";
    }
    if (!formData.shopNo.trim()) {
      errors.shopNo = "Shop No is required.";
    }
    if (!formData.rrNo.trim()) {
      errors.rrNo = "R.R. No is required.";
    }
    if (!formData.ledger_follono.trim()) {
      errors.ledger_follono = "Ledger Follo No is required.";
    }
    if (!formData.sanctionLoad.trim()) {
      errors.sanctionLoad = "Sanction Load is required.";
    }
    if (!formData.tariff.trim()) {
      errors.tariff = "Tariff is required.";
    }
    if (!formData.presentReading.trim()) {
      errors.presentReading = "Present Reading Due is required.";
    }
    if (!formData.previousReading.trim()) {
      errors.previousReading = "Previous Reading is required.";
    }
    if (!formData.unitConsumed.trim()) {
      errors.unitConsumed = "Unit Consumed is required.";
    }
    if (!formData.unitSancd) {
      errors.unitSancd = "Unit Sanction is required.";
    }
    if (!formData.dateOfReading) {
      errors.dateOfReading = "Date Of Reading  is required.";
    }
    if (!formData.month) {
      errors.month = "Month  is required.";
    }
    return errors;
  };

  return (
    <div className=" ">
      <Header />
      <div className="addcontainer">
        <div className="arrow-back-container">
          <BiArrowBack className="addbacklogo" onClick={() => navigate(-1)} />
        </div>
        <h1 className="Addtext">Electricity Bill</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <Row className="row">
          <Col className="column">
            <Input
              label="Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <div className="text-danger">{errors.name}</div>}
          </Col>
          <Col className="column ">
            <Input
              label="Shop No"
              type="text"
              name="shopNo"
              value={formData.shopNo}
              onChange={handleChange}
              required
            />
            {errors.shopNo && (
              <div className="text-danger">{errors.shopNo}</div>
            )}
          </Col>
        </Row>
        <Row className="row">
          <Col className="column">
            <Input
              label="R.R. No."
              type="number"
              name="rrNo"
              value={formData.rrNo}
              onChange={handleChange}
              required
            />
            {errors.rrNo && <div className="text-danger">{errors.rrNo}</div>}
          </Col>

          <Col className="column">
            <Input
              label="Ledger Follo No"
              type="number"
              name="ledger_follono"
              value={formData.ledger_follono}
              onChange={handleChange}
              required
            />
            {errors.ledger_follono && (
              <div className="text-danger">{errors.ledger_follono}</div>
            )}
          </Col>
        </Row>
        <Row className="row">
          <Col className="column ">
            <Input
              label="Sanction Load "
              type="text"
              name="sanctionLoad"
              value={formData.sanctionLoad}
              onChange={handleChange}
              required
            />
            {errors.sanctionLoad && (
              <div className="text-danger">{errors.sanctionLoad}</div>
            )}
          </Col>
          <Col className="column">
            <Input
              label="Tariff"
              type="text"
              name="tariff"
              value={formData.tariff}
              onChange={handleChange}
              required
            />
            {errors.tariff && (
              <div className="text-danger">{errors.tariff}</div>
            )}
          </Col>
        </Row>
        <Row className="row">
          <Col className="column">
            <Input
              label="Present Reading"
              type="text"
              name="presentReading"
              value={formData.presentReading}
              onChange={handleChange}
              required
            />
            {errors.presentReading && (
              <div className="text-danger">{errors.presentReading}</div>
            )}
          </Col>
          <Col className="column">
            <Input
              label="Previous Reading"
              type="text"
              name="previousReading"
              value={formData.previousReading}
              onChange={handleChange}
              required
            />
            {errors.previousReading && (
              <div className="text-danger">{errors.previousReading}</div>
            )}
          </Col>
        </Row>
        <Row className="row">
          <Col className="column ">
            <Input
              label="Unit Consumed"
              type="text"
              name="unitConsumed"
              value={formData.unitConsumed}
              onChange={handleChange}
              required
            />
            {errors.unitConsumed && (
              <div className="text-danger">{errors.unitConsumed}</div>
            )}
          </Col>
          <Col className="column">
            <Input
              label="Unit Sancd"
              type="text"
              name="unitSancd"
              value={formData.unitSancd}
              onChange={handleChange}
              required
            />
            {errors.unitSancd && (
              <div className="text-danger">{errors.unitSancd}</div>
            )}
          </Col>
        </Row>
        <Row className="row ">
          <Col className="column">
            <Input
              label="Date Of Reading"
              type="date"
              name="dateOfReading"
              value={formData.dateOfReading}
              onChange={handleChange}
              required
            />
            {errors.dateOfReading && (
              <div className="text-danger">{errors.dateOfReading}</div>
            )}
          </Col>

          <Col className="column">
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

        <div className="submitbtn">
          <Button type="submit">Submit</Button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};
export default ElectricityBill;
