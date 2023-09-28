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

const NonConsumable = () => {

    const initialState = {
        department:"",
        computers: '',
        chairs: '',
        projector: '',
        otherToolsEquipment: '',
       
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
  return (
    <div className="">
    <Sidebar>
    <h1 className=" mb-4 text-center">Non-Consumable Inventory</h1>
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
                    label="Computers"
                    type="text"
                    name="computers"
                    value={formData.computers}
                    onChange={handleChange}
                />
            </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
            <Col className="col-sm-5 ">
                <Input
                    label="Chairs"
                    type="text"
                    name="chairs"
                    value={formData.chairs}
                    onChange={handleChange}
                />
            </Col>
            <Col className="col-sm-5 ">
                <Input
                    label="Projectors"
                    type="text"
                    name="projector"
                    value={formData.projector}
                    onChange={handleChange}
                />
            </Col>
           
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
        <Col className="col-sm-5 ">
                <Input
                    label="Other Tools Equipment"
                    type="text"
                    name="otherToolsEquipment"
                    value={formData.otherToolsEquipment}
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
    //   onClick={allinventorydetails}
    >
      Next Page ?
    </Button>
    </div>
  </div>
  </Sidebar>
</div>
  )
}

export default NonConsumable
