import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBInput as Input,
  MDBBtn as Button,
} from "mdb-react-ui-kit";
import { EmployeeService } from "../../services/EmployeeService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../common/Header";
import { BiArrowBack } from "react-icons/bi";

const EmployeeForm = () => {
  const navigate = useNavigate();
  const initialState = {
    empName: "",
    department: "",
    dob: "",
    gender: "",
    contactNum: "",
    bloodgroup: "",
    address: "",
    aadhar: "",
    qualification: "",
    pan: "",
    dateOfHiring: "",
    position: "",
    basicSalary: "",
    netSalary: "",
    grossSalary: "",
    allowance: "",
    deduction: "",
    pfEmployeeContribution: "",
    loanAmount: "",
    loanRepaymentAmount: "",
    inventoryItem: "",
    status: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
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
      const response = await EmployeeService.createEmployee(formData);
      console.log("Hiiiiii", response.data);
      if (response.status === 201) {
        console.log("Form data saved successfully");
        setFormData(initialState);
        toast.success("Submit Successful!", { autoClose: 1000 });
        setErrors({});
      } else {
        console.error("Error while saving from data");
        toast.error("Failed to submit Property", { autoClose: 1000 });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred during submission", { autoClose: 1000 });
    }
  };
  const validateForm = (data) => {
    const errors = {};
    //  if (!data.contactNumber || !/^[0-9]{10}$/.test(data.contactNumber)) {
    //         errors.contactNumber = "Please enter a valid 10-digit contact number.";
    //       }
    if (!data.aadhar || !/^\d{12}$/.test(data.aadhar)) {
      errors.aadhar = "Please enter a valid 12-digit Aadhar card number.";
    }

    if (!data.pan || !/^[A-Za-z]{5}\d{4}[A-Za-z]{1}$/.test(data.pan)) {
      errors.pan = "Please enter a valid PAN card number.";
    }

    return errors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    // Clear the corresponding error when the input changes
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Clear the error for this field
    }));

    // Calculate pfEmployeeContribution when basicSalary changes
    if (name === "basicSalary") {
      const basicSalary = parseFloat(value);
      if (!isNaN(basicSalary)) {
        const pfEmployeeContribution = basicSalary * 0.12; // Calculate 12% contribution
        setFormData((prevData) => ({
          ...prevData,
          [name]: basicSalary,
          pfEmployeeContribution, // Update pfEmployeeContribution field
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    } else {
      // For other fields, simply update the form data
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // deleted show button
  // const allemployeedetails = (event) => {
  //   event.preventDefault();
  //   navigate("/allemployees");
  // };

  return (
    <div className="">
      <Header />
      <div className="addcontainer">
        <div className="arrow-back-container">
          <BiArrowBack className="addbacklogo" onClick={() => navigate(-1)} />
        </div>
        {/* <Sidebar> */}
        <h1 className="Addtext">Register New Empolyee</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <Row className="row">
          <Col className="column">
            <Input
              label="Employee Name"
              type="text"
              name="empName"
              value={formData.empName}
              onChange={handleChange}
              required
            />
          </Col>
          <Col className="column">
            <select
              className="form-select"
              id="Department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            >
              <option value="">Select Department</option>
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
        </Row>
        <Row className="row">
          <Col className="column ">
            <Input
              label="DOB"
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </Col>
          <Col className="column">
            <select
              className="form-select"
              id="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Transgender</option>
            </select>
          </Col>
        </Row>
        <Row className="row ">
          <Col className="column">
            <Input
              label="Contact Number"
              type="tel"
              name="contactNum"
              value={formData.contactNum}
              onChange={handleChange}
              required
            />
            {errors.contactNumber && (
              <div className="text-danger">{errors.contactNumber}</div>
            )}
          </Col>
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
          </Col>
        </Row>
        <Row className="row">
          <Col className="column">
            <Input
              label="Address"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </Col>

          <Col className="column">
            <Input
              label="Aadhar Card No"
              type="number"
              name="aadhar"
              value={formData.aadhar}
              onChange={handleChange}
              required
            />
            {errors.aadhar && (
              <div className="text-danger">{errors.aadhar}</div>
            )}
          </Col>
        </Row>
        <Row className="row">
          <Col className="column">
            <Input
              label="Qualification"
              type="text"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              required
            />
          </Col>

          <Col className="column">
            <Input
              label="PAN Card No"
              type="text"
              name="pan"
              value={formData.pan}
              onChange={handleChange}
              required
            />
            {errors.pan && <div className="text-danger">{errors.pan}</div>}
          </Col>
        </Row>
        <Row className="row">
          <Col className="column">
            <Input
              label="Date Of Hiring"
              type="date"
              name="dateOfHiring"
              value={formData.dateOfHiring}
              onChange={handleChange}
              required
            />
          </Col>
          <Col className="column">
            <Input
              label="Position"
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
            />
          </Col>
        </Row>
        <Row className="row">
          <Col className="column">
            <Input
              label="Basic Salary"
              type="text"
              name="basicSalary"
              value={formData.basicSalary}
              onChange={handleChange}
              required
            />
          </Col>
          <Col className="column">
            <Input
              label="Net Salary"
              type="text"
              name="netSalary"
              value={formData.netSalary}
              onChange={handleChange}
              required
            />
          </Col>
        </Row>
        <Row className="row">
          <Col className="column">
            <Input
              label="Gross Salary"
              type="text"
              name="grossSalary"
              value={formData.grossSalary}
              onChange={handleChange}
              required
            />
          </Col>
          <Col className="column">
            <Input
              label="Allowance"
              type="text"
              name="allowance"
              value={formData.allowance}
              onChange={handleChange}
              required
            />
          </Col>
        </Row>
        <Row className="row ">
          <Col className="column">
            <Input
              label="Deduction"
              type="text"
              name="deduction"
              value={formData.deduction}
              onChange={handleChange}
              required
            />
          </Col>
          <Col className="column ">
            <Input
              label="PF Employee Contribution"
              type="text"
              name="pfEmployeeContribution"
              value={parseFloat(formData.pfEmployeeContribution).toFixed(2)}
              onChange={handleChange}
              required
              readOnly
            />
          </Col>
        </Row>
        <Row className="row">
          <Col className="column">
            <Input
              label="Loan Amount"
              type="text"
              name="loanAmount"
              value={formData.loanAmount}
              onChange={handleChange}
              required
            />
          </Col>
          <Col className="column">
            <Input
              label="Loan Repayment Amount"
              type="text"
              name="loanRepaymentAmount"
              value={formData.loanRepaymentAmount}
              onChange={handleChange}
              required
            />
          </Col>
        </Row>
        <Row className="row ">
          <Col className="column">
            <Input
              label="Inventory Item"
              type="text"
              name="inventoryItem"
              value={formData.inventoryItem}
              onChange={handleChange}
              required
            />
          </Col>
          <Col className="column">
            <select
              className="form-select"
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="">Select Status</option>
              <option value="Present">Present</option>
              <option value="Former">Former</option>
            </select>
          </Col>
        </Row>
        <div className="submitbtn">
          <Button>Submit</Button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};
export default EmployeeForm;
