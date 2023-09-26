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
import { PaymentService } from '../../services/PaymentService';
import Sidebar from '../admin/Sidebar';

const PaymentForm = () => {
    const navigate = useNavigate();
    const initialState = {
        id: '',
        voucherDate: '',
        voucherNum: '',
        amount: '',
        paymentMethod: '',
        remark: '',

    }


    const [formData, setFormData] = useState(initialState);

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            // const response = await axios.post(APIS. CREATcreatePaymentEPAYMENT, formData);
            const response = await PaymentService.createPayment(formData);
            if (response) {
                console.log("Form data saved successfully");
                setFormData(initialState);
            } else {
                console.error("Error while saving from data");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
    const allpaymentdetails= (event) => {
        event.preventDefault();
        navigate("/allpayment");
      };
    return (
        <div className="">
            <Sidebar>
            <h1 className=" mb-4 text-center"> Payment </h1>
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
                            label="Voucher Date"
                            type="date"
                            name="voucherDate"
                            value={formData.voucherDate}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
                    <Col className="col-sm-5 ">
                        <Input
                            label="voucherNum"
                            type="text"
                            name="voucherNum"
                            value={formData.voucherNum}
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
                            className="form-select"
                            id="paymentMethod"
                            name="paymentMethod"
                            value={formData.paymentMethod}
                            onChange={handleChange}
                        >
                            <option value="">Select Payment Method</option>
                            <option value="online">Online</option>
                            <option value="Cash">Cash</option>
                            <option value="Cheque">Cheque</option>
                            {/* Add more payment methods as needed */}
                        </select>
                    </Col>
                    <Col className="col-sm-5 ">
                        <Input
                            label="Remarks"
                            type="text"
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
            <div className="text-center mt-4 form-group row ">
                <div className="col">
            <Button
              variant="primary"
              type="button"
              square
              onClick={allpaymentdetails}
            >
              Show payment
            </Button>
            </div>
          </div>
          </Sidebar>
        </div>
    );
};
export default PaymentForm;