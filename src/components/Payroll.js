import React, { useState } from 'react';
import {
    MDBContainer as Container,
    MDBRow as Row,
    MDBCol as Col,
    MDBInput as Input,
    MDBBtn as Button
} from 'mdb-react-ui-kit';
import axios from "axios";
import { APIS } from "./constants/api";

const PayrollForm = () => {

    const initialState ={
        emp_id: '',
        emp_name: '',
        dateOfHiring: '',
        dateOfLeaving: '',
        basicSalary: '',
        allowance: '',
        deduction: '',
        grossSalary: '',
        netSalary: '',
        pfEmployeeContribution: '',
        pfEmployerContribution: '',
        loanAmount: '',
        loanRepaymentAmount: '',
    }
    const [formData, setFormData] = useState({ initialState });
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(APIS.CREATEPAYROLL, formData);

            console.log("PayrollId",response.data.id);

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

    return (
        <Container className="bg-light p-5 mt-5 rounded shadow  justify-content-center align-items-center">
            <h1 className=" mb-4 text-center"> Payroll </h1>
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
                            name="emp_name"
                            value={formData.emp_name}
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
                            label="Basic Salary"
                            type="number"
                            name="basicSalary"
                            value={formData.basicSalary}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col className="col-sm-5 ">
                        <Input
                            label="Allowance"
                            type="text"
                            name="allowance"
                            value={formData.allowance}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
                    <Col className="col-sm-5 ">
                        <Input
                            label="Deduction"
                            type="text"
                            name="deduction"
                            value={formData.deduction}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col className="col-sm-5 ">
                        <Input
                            label="Gross Salary"
                            type="number"
                            name="grossSalary"
                            value={formData.grossSalary}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
                    <Col className="col-sm-5 ">
                        <Input
                            label="Net Salary"
                            type="number"
                            name="netSalary"
                            value={formData.netSalary}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col className="col-sm-5 ">
                        <Input
                            label="PF Employee Contribution"
                            type="text"
                            name="pfEmployeeContribution"
                            value={formData.pfEmployeeContribution}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
                    <Col className="col-sm-5 ">
                        <Input
                            label="PF Employer(Cmpny) Contribution"
                            type="text"
                            name="pfEmployerContribution"
                            value={formData.pfEmployerContribution}
                            onChange={handleChange}
                        />
                    </Col>
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
                <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
                    <Col className="col-sm-5 ">
                        <Input
                            label="Loan Repayment Amount"
                            type="number"
                            name="loanRepaymentAmount"
                            value={formData.loanRepaymentAmount}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <div className="text-center mt-4 ">
                    <Button>Submit</Button>
                </div>
            </form>
        </Container>
    );
};
export default PayrollForm;