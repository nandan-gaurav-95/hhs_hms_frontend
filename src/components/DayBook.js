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
const DayBook = () => {

    const initialState = {
        id: '',
        date: '',
        description: '',
        cashInFlow: '',
        cashOutFlow: '',
        chequeInFlow: '',
        chequeOutFlow: '',
    }


    const [formData, setFormData] = useState({ initialState });
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(APIS.CREATEDAYBOOK, formData);

            console.log("DayBookId",response.data.id);

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
        <div className=" p-2 mt-5">
            <h1 className=" mb-4 text-center">Day Book </h1>
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
                            label="Date"
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
                    <Col className="col-sm-5 ">
                        <Input
                            label="Description"
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col className="col-sm-5 ">
                        <Input
                            label="Cash In Flow"
                            type="number"
                            name="cashInFlow"
                            value={formData.cashInFlow}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
                    <Col className="col-sm-5 ">
                        <Input
                            label="Cash Out Flow"
                            type="number"
                            name="cashOutFlow"
                            value={formData.cashOutFlow}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col className="col-sm-5 ">
                        <Input
                            label="Cheque In Flow"
                            type="number"
                            name="chequeInFlow"
                            value={formData.chequeInFlow}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
                    <Col className="col-sm-5 ">
                        <Input
                            label="Cheque Out Flow"
                            type="number"
                            name="chequeOutFlow"
                            value={formData.chequeOutFlow}
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
export default DayBook;