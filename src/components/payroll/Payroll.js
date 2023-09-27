import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBInput as Input,
  MDBBtn as Button,
} from "mdb-react-ui-kit";
import axios from "axios";
import { APIS } from "../constants/api";
import { PayrollService } from "../../services/PayrollService";
import Sidebar from "../admin/Sidebar";

const PayrollForm = () => {
  const navigate = useNavigate();
  const initialState = {
    emp_id: "",
    emp_name: "",
    dateOfHiring: "",
    dateOfLeaving: "",
    basicSalary: "",
    allowance: "",
    deduction: "",
    grossSalary: "",
    netSalary: "",
    pfEmployeeContribution: "",
    pfEmployerContribution: "",
    loanAmount: "",
    loanRepaymentAmount: "",
  };
  const [formData, setFormData] = useState({ initialState });

  const handleSubmit = async (event) => {
    event.preventDefault();
    // try {
    //   // const response = await axios.post(APIS.CREATEPAYROLL, formData);
    //   const response = await PayrollService.createPayroll(formData);
    //   console.log("PayrollId", response.data.id);
    //   if (response.status === 201) {
    //     console.log("Form data saved successfully");
    //     setFormData(initialState);
    //   } else {
    //     console.error("Error while saving from data");
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const allpayrolldetails = (event) => {
    event.preventDefault();
    navigate("/allpayroll");
  };
  const handleViewDetails = async (id) => {
    navigate(`/payroll-details`);
  };
  return (
    <div className="">
      <Sidebar>
        <Row className="mb-4">
          <h1 className=" mb-4 text-center"> Payroll </h1>
        </Row>
        <form onSubmit={handleSubmit}>
          <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
            <Col className="col-sm-5 ">
              <Input
                label="Empolyee ID"
                type="text"
                name="emp_id"
                value={formData.emp_id}
                onChange={handleChange}
              />
            </Col>
            <Col className="col-sm-5 ">
              {/* <Input
                label="Employee Name"
                type="text"
                name="emp_name"
                value={formData.emp_name}
                onChange={handleChange}
              /> */}
               <div className=" ">
            <Button
            variant="primary"
            type="submit"
            square
            style={{ marginLeft: "10px", width: "100px" }}
            onClick={handleViewDetails}>Submit</Button>
          </div>
            </Col>
          </Row>
         
        
          {/* <div className="text-center mt-4 ">
            <Button>Submit</Button>
          </div> */}
        </form>
        <div className="text-center mt-4 form-group row ">
          <div className="col">
            <Button
              variant="primary"
              type="button"
              square
              onClick={allpayrolldetails}
            >
              Show Payroll
            </Button>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};
export default PayrollForm