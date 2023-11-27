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
import { BloodCenterService } from "../../services/BloodCenterService";

const BloodCenter = () => {
  const navigate = useNavigate();
  const initialState = {
    receiverName: "",
    date: "",
    expirydate: "",
    ipNo: "",
    age: "",
    gender: "",
    hospitalName: "",
    invstigationCharges: "",
    unitNo: "",
    bloodgroup: "",
    paymentMethod: "",
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
      const response = await BloodCenterService.createBloodCenter(formData);
      console.log("Blood center", response.data.id);
      if (response.status === 201) {
        console.log("Blood center Created Successfully");
        setFormData(initialState);
        toast.success("Submit Successful!", { autoClose: 1000 });
      } else {
        console.error("Failed To create Blood center");
        toast.error("Failed to submit Blood center", { autoClose: 1000 });
      }
    } catch (error) {
      console.error("Error", error);
      toast.error("An error occurred during submission", { autoClose: 1000 });
    }
  };
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({ ...prevData, [name]: value }));
  //   setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedFormData = { ...formData, [name]: value };
    let updatedErrors = { ...errors, [name]: "" };

    // Calculate expiry date if the 'date' field is updated
    if (name === "date") {
      const selectedDate = new Date(value);
      const expiryDate = new Date(selectedDate);
      expiryDate.setDate(selectedDate.getDate() + 42); // Add 42 days

      updatedFormData = {
        ...updatedFormData,
        expirydate: expiryDate.toISOString().split("T")[0], // Format as YYYY-MM-DD
      };
    }

    setFormData(updatedFormData);
    setErrors(updatedErrors);
  };
  const validateForm = (formData) => {
    const errors = {};

    if (!formData.receiverName.trim()) {
      errors.receiverName = "Receiver Name is required.";
    }
    if (!formData.date.trim()) {
      errors.date = "Date is required.";
    }
    if (!formData.ipNo.trim()) {
      errors.ipNo = "I.P. No is required.";
    }
    if (!formData.age.trim()) {
      errors.age = "Age is required.";
    }
    if (!formData.gender.trim()) {
      errors.gender = "Gender is required.";
    }
    if (!formData.hospitalName.trim()) {
      errors.hospitalName = "Hospital Name is required.";
    }
    if (!formData.invstigationCharges.trim()) {
      errors.invstigationCharges = "Invstigation Charges  is required.";
    }
    if (!formData.unitNo.trim()) {
      errors.unitNo = "Unit No  is required.";
    }
    if (!formData.bloodgroup.trim()) {
      errors.bloodgroup = "Blood Group is required.";
    }
    if (!formData.paymentMethod.trim()) {
      errors.paymentMethod = "Payment Method is required.";
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
          <BiArrowBack className="addbacklogo" onClick={() => navigate(-1)} />
        </div>
        <h1 className="Addtext">Blood Center</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <Row className="row">
          <Col className="column">
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
              label="I.P.No"
              type="number"
              name="ipNo"
              value={formData.ipNo}
              onChange={handleChange}
              required
            />
            {errors.ipNo && <div className="text-danger">{errors.ipNo}</div>}
          </Col>

          <Col className="column">
            <Input
              label="Age"
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
            {errors.age && <div className="text-danger">{errors.age}</div>}
          </Col>
        </Row>
        <Row className="row">
          <Col className="column">
            <select
              className="form-select"
              type="number"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
            {errors.gender && (
              <div className="text-danger">{errors.gender}</div>
            )}
          </Col>

          <Col className="column">
            <Input
              label="Hospital Name "
              type="text"
              name="hospitalName"
              value={formData.hospitalName}
              onChange={handleChange}
              required
            />
            {errors.hospitalName && (
              <div className="text-danger">{errors.hospitalName}</div>
            )}
          </Col>
        </Row>
        <Row className="row">
          <Col className="column">
            <Input
              label="Investigation Charges "
              type="number"
              name="invstigationCharges"
              value={formData.invstigationCharges}
              onChange={handleChange}
              required
            />
            {errors.invstigationCharges && (
              <div className="text-danger">{errors.invstigationCharges}</div>
            )}
          </Col>
          <Col className="column">
            <Input
              label="Unit No"
              type="number"
              name="unitNo"
              value={formData.unitNo}
              onChange={handleChange}
              required
            />
            {errors.unitNo && (
              <div className="text-danger">{errors.unitNo}</div>
            )}
          </Col>
        </Row>
        <Row className="row">
          <Col className="column">
            <select
              className="form-select"
              id="Blood Group"
              name="bloodgroup"
              value={formData.bloodgroup}
              onChange={handleChange}
              required
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
            {errors.bloodgroup && (
              <div className="text-danger">{errors.bloodgroup}</div>
            )}
          </Col>
          <Col className="column">
            <select
              className="form-select"
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              required
            >
              <option value="">Select Payment Method</option>
              <option value="online">Online</option>
              <option value="Cash">Cash</option>
              <option value="Cheque">Cheque</option>
              <option value="demand_draft">Demand Draft</option>
            </select>
            {errors.paymentMethod && (
              <div className="text-danger">{errors.paymentMethod}</div>
            )}
          </Col>
        </Row>
        <Row className="row">
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
        <Row className="row">
          <Col className="column">
            <Input
              label="Expiry Date"
              type="date"
              name="expirydate"
              value={formData.expirydate}
              onChange={handleChange}
              readOnly
              required
            />
            {errors.expirydate && (
              <div className="text-danger">{errors.expirydate}</div>
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
export default BloodCenter;
