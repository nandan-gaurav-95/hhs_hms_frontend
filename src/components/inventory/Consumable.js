import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
    MDBContainer as Container,
    MDBRow as Row,
    MDBCol as Col,
    MDBInput as Input,
    MDBBtn as Button
} from 'mdb-react-ui-kit';
import Sidebar from '../admin/Sidebar';


const ConsumableForm = () => {
    // const navigate = useNavigate();
    const initialState = {
        department:"",
        materials: '',
        toiletMaterials: '',
        tissues: '',
        files: '',
        cleaningMaterials: '',
        beds: '',
        blankets: '',
        stationaries:"",
        bottles: '',
    } 
    const [formData, setFormData] = useState({ initialState });

    const handleSubmit = async (event) => {
        event.preventDefault();
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

    };
    const allinventorydetails= (event) => {
        event.preventDefault();
        // navigate("/allinventory");
      };
    return (
        <div className="">
            <Sidebar>
            <h1 className=" mb-4 text-center">Consumable Inventory</h1>
            <form onSubmit={handleSubmit}>
                <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
                    <Col className="col-sm-5">
              <select
                className="form-select"
                id="Department"
                name="department"
                value={formData.department}
                onChange={handleChange}
              >
                <option value="">Select Department</option>
                <option value="Schools">Schools</option>
                <option value="ITI College">ITI College</option>
                <option value="Skill Center">Skill Center</option>
                <option value="Blood Collection Center"> Blood Collection Center</option>
                <option value="Hostel">Hostel</option>
                <option value="Masjid">Masjid</option>
                <option value="Dargah">Dargah</option>
              </select>
            </Col>
                     <Col className="col-sm-5 ">
                        <Input
                            label="Materials"
                            type="text"
                            name="materials"
                            value={formData.materials}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
                    <Col className="col-sm-5 ">
                        <Input
                            label="Toilet Materials"
                            type="text"
                            name="toiletMaterials"
                            value={formData.toiletMaterials}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col className="col-sm-5 ">
                        <Input
                            label="Tissues"
                            type="text"
                            name="tissues"
                            value={formData.tissues}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
                    <Col className="col-sm-5 ">
                        <Input
                            label="Files "
                            type="text"
                            name="files"
                            value={formData.files}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col className="col-sm-5 ">
                        <Input
                            label="cleaning Materials"
                            type="text"
                            name="cleaningMaterials"
                            value={formData.cleaningMaterials}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
                    <Col className="col-sm-5 ">
                        <Input
                            label="Beds "
                            type="text"
                            name="beds"
                            value={formData.beds}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col className="col-sm-5 ">
                        <Input
                            label="Blanket"
                            type="text"
                            name="blankets"
                            value={formData.blankets}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
                    <Col className="col-sm-5 ">
                        <Input
                            label="Stationaries "
                            type="text"
                            name="stationaries"
                            value={formData.stationaries}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col className="col-sm-5 ">
                        <Input
                            label="Bottles"
                            type="text"
                            name="bottles"
                            value={formData.bottles}
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
              onClick={allinventorydetails}
            >
                Next Page ?
            </Button>
            </div>
          </div>
          </Sidebar>
        </div>
    );
};
export default ConsumableForm;