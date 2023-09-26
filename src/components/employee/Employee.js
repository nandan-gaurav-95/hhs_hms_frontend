import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
    MDBContainer as Container,
    MDBRow as Row,
    MDBCol as Col,
    MDBInput as Input,
    MDBBtn as Button
} from 'mdb-react-ui-kit';
import axios from "axios";
import { APIS } from "../constants/api";
import { EmployeeService } from '../../services/EmployeeService';
import Sidebar from '../admin/Sidebar';
const EmployeeForm = () => {
    const navigate = useNavigate();
    const initialState ={
        emp_id: '',
        empName: '',
        dateOfHiring: '',
        dateOfLeaving: '',
        address: '',
        contactNumber: '',
        salary: '',
        pfContribution: '',
        loanAmount: '',
    }


    
    const [formData, setFormData] = useState({ initialState });
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await EmployeeService.createEmployee(formData);
            if (response.status === 201) {
                console.log("Form data saved successfully");
                setFormData(initialState);
            } else {
                console.error("Error while saving from data");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

    };
    const allemployeedetails= (event) => {
        event.preventDefault();
        navigate("/allempolyee");
      };
    
    return (
        <div className="">
            <Sidebar>
            <h1 className=" mb-4 text-center">Empolyee Management</h1>
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
                        <Input
                            label="Employee Name"
                            type="text"
                            name="empName"
                            value={formData.empName}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
                   
                    <Col className="col-sm-5 ">
                        <Input
                            label="Date Of Hiring"
                            type="date"
                            name="dateOfHiring"
                            value={formData.dateOfHiring}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col className="col-sm-5 ">
                        <Input
                            label="Date Of Leaving"
                            type="date"
                            name="dateOfLeaving"
                            value={formData.dateOfLeaving}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
                  
                    <Col className="col-sm-5 ">
                        <Input
                            label="Address"
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col className="col-sm-5 ">
                        <Input
                            label="Contact Number"
                            type="tel"
                            name="contactNumber"
                            value={formData.contactNumber}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
                    
                    <Col className="col-sm-5 ">
                        <Input
                            label="Salary"
                            type="number"
                            name="salary"
                            value={formData.salary}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col className="col-sm-5 ">
                        <Input
                            label="PF Contribution"
                            type="text"
                            name="pfContribution"
                            value={formData.pfContribution}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
                   
                    <Col className="col-sm-5 ">
                        <Input
                            label="Loan Amount"
                            type="number"
                            name="loanAmount"
                            value={formData.loanAmount}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <div className="text-center mt-4 ">
                    <Button>Submit</Button>
                </div>
            </form>
            <div className="text-center mt-4 form-group row ">
                <div className="col">
            <Button
              variant="primary"
              type="button"
              square
              onClick={allemployeedetails}
            >
              Show Employee
            </Button>
            </div>
          </div>
          </Sidebar>
        </div>
    );
};
export default EmployeeForm;