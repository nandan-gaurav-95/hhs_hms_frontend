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
import { StudentService } from '../../services/StudentService';

const StudentForm = () => {
    const navigate = useNavigate();
    const initialState ={
        id: '',
        name: '',
        father_name: '',
        dateofbirth: '',
        gender: '',
        qualification: '',
        trade: '',
        session: '',
        mobile_no: '',
        total_fees: '',
        address: '',
       
    }
    const [formData, setFormData] = useState({ initialState });
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // const response = await axios.post(APIS.CREATEPAYROLL, formData);
            const response = await StudentService.createstudent(formData);
            console.log("StudentId",response.data.id);
            if (response.data) {
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
    
  const allstudentdetails= (event) => {
    event.preventDefault();
    navigate("/allstudent");
  };

    return (
        <div className=" p-2 mt-2 ">
           <Row className="mb-4">
            <h1 className=" mb-4 text-center"> Student Data </h1></Row>
            <form onSubmit={handleSubmit}>
                <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
                    <Col className="col-sm-5 ">
                        <Input
                            label="SI No."
                            type="text"
                            name="id"
                            value={formData.id}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col className="col-sm-5 ">
                        <Input
                            label= "Name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
                    <Col className="col-sm-5 ">
                        <Input
                            label="Father Name"
                            type="text"
                            name="father_name"
                            value={formData.father_name}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col className="col-sm-5 ">
                        <Input
                            label="Date Of Birth"
                            type="date"
                            name="dateofbirth"
                            value={formData.dateofbirth}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
                    <Col className="col-sm-5 ">
                    <select
                           className="form-select"
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            >
                           
                            <option value=""> Gender</option>
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                            <option value="Others">Others</option>
                            
                        </select>
                        
                    </Col>
                    <Col className="col-sm-5 ">
                        <Input
                            label="Qualification"
                            type="text"
                            name="qualification"
                            value={formData.qualification}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
                    <Col className="col-sm-5 ">
                    <select
                               className="form-select"
                               id="text"
                            name="trade"
                            value={formData.trade}
                            onChange={handleChange}
                        >
                        <option value=""> Trade</option>
                            <option value="Electrician">Electrician</option>
                            <option value="Mechanic">Electrician Mechanic</option>
                            <option value="Fitter">Fitter</option>
                            <option value="Welder">Welder</option>
                            <option value="">Refrigeration & Air Conditioning Technician</option>
                        </select>
                    </Col>
                    <Col className="col-sm-5 ">
                        <Input
                            label="Session"
                            type="text"
                            name="session"
                            value={formData.session}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
                    <Col className="col-sm-5 ">
                        <Input
                            label="Mobile No."
                            type="tel"
                            name="mobile_no"
                            value={formData.mobile_no}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col className="col-sm-5 ">
                        <Input
                            label="Total Fees"
                            type="text"
                            name="total_fees"
                            value={formData.total_fees}
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
              onClick={allstudentdetails}
            >
              Show Student
            </Button>
            </div>
          </div>

        
        
        </div>
    );
};
export default StudentForm;