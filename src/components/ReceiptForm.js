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
const ReceiptForm = () => {

    const initialState = {
        id: '',
        voucherNum: '',
        voucherDate: '',
        amount: '',
        paymentMethod: '',
        remark: '',

    }


    const [formData, setFormData] = useState({ initialState });
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(APIS.CREATERECEIPT, formData);
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
        <div className=" p-2 mt-5  ">
            <h1 className=" mb-4 text-center">Receipt Voucher</h1>
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
                            label="Voucher Num"
                            type="number"
                            name="voucherNum"
                            value={formData.voucherNum}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
                    <Col className="col-sm-5 ">
                        <Input
                            label="voucherDate"
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

                        <select
                            id="paymentMethod"
                            name="paymentMethod"
                            value={formData.paymentMethod}
                            onChange={handleChange}
                            className="form-select"
                        >
                            <option value="">Select Payment Method</option>
                            <option value="Cash">Cash</option>
                            <option value="Online">Online</option>
                        </select>
                    </Col>
                    <Col className="col-sm-5">

                        <Input
                            label="Remark"
                            type="text"
                            id="remark"
                            name="remark"
                            value={formData.remark}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <div className="text-center mt-4 ">
                    <Button>Submit</Button>
                </div>
            </form>
        </div>
    );
};
export default ReceiptForm;