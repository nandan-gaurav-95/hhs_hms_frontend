import React, { useState } from 'react';
import {
    MDBContainer as Container,
    MDBRow as Row,
    MDBCol as Col,
    MDBInput as Input,
    MDBBtn as Button
} from 'mdb-react-ui-kit';
const PayrollForm = () => {

    const initialState ={
        emp_id: '',
        firstName: '',
        lastName: '',
        salary: '',
        deductions: '',
        netSalary: '',
        // pay: '',
        // totalhrs: '',
        // overtime: '',
        // totalovertimehrs: '',
        // grosspay: '',
    }


    const [formData, setFormData] = useState(initialState);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
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
                            label="First Name"
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
                    <Col className="col-sm-5 ">
                        <Input
                            label="Last Name"
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col className="col-sm-5 ">
                        <Input
                            label="Salary"
                            type="number"
                            name="salary"
                            value={formData.salary}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
                    <Col className="col-sm-5 ">
                        <Input
                            label="Deductions"
                            type="text"
                            name="deductions"
                            value={formData.deductions}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col className="col-sm-5 ">
                        <Input
                            label="NetSalary"
                            type="number"
                            name="netSalary"
                            value={formData.netSalary}
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