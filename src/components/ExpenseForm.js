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
const ExpenseForm = () => {

    const initialState = {
        id: '',
        voucherNumber: '',
        voucherDate: '',
        amount: '',
        expenseCategory: '',
        remarks: '',

    }


    const [formData, setFormData] = useState({ initialState });
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(APIS.CREATEEXPENSE, formData);
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
            <h1 className=" mb-4 text-center">Expense Voucher</h1>
            <form onSubmit={handleSubmit}>
                <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
                    <Col className="col-sm-5 ">
                        <Input
                            label="ID"
                            type="text"
                            name="id"
                            value={formData.id}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col className="col-sm-5 ">
                        <Input
                            label="Voucher Number"
                            type="number"
                            name="voucherNumber"
                            value={formData.voucherNumber}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
                    <Col className="col-sm-5 ">
                        <Input
                            label="Voucher Date"
                            type="date"
                            name="voucherDate"
                            value={formData.voucherDate}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col className="col-sm-5 ">
                        <Input
                            label="Amount"
                            type="number"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row className="row mt-8 mb-4 justify-content-evenly align-items-center">
                    
                    <Col className="col-sm-5">

                        <Input
                            label="Expense Category"
                            type="text"
                            name="expenseCategory"
                            value={formData.expenseCategory}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col className="col-sm-5">

                        <Input
                            label="Remark"
                            type="text"
                            name="remarks"
                            value={formData.remarks}
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
export default ExpenseForm;