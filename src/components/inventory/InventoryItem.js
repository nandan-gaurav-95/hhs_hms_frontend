import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
    MDBContainer as Container,
    MDBRow as Row,
    MDBCol as Col,
    MDBInput as Input,
    MDBBtn as Button
} from 'mdb-react-ui-kit';
import{InventoryService}from '../../services/InventoryService'
import Sidebar from '../admin/Sidebar';
// import {createInventoryItem} from './services/InventoryService'

const InventoryForm = () => {
    const navigate = useNavigate();
    const initialState = {
        id: '',
        itemName: '',
        itemDescription: '',
        unitPrice: '',
        quantityAvailable: '',
        category: '',
    } 
    const [formData, setFormData] = useState({ initialState });


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await InventoryService.createInventory(formData);
            console.log("InventoryId",response.data.id);
            // console.log(response.data.id);
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
    const allinventorydetails= (event) => {
        event.preventDefault();
        navigate("/allinventory");
      };
   

    return (
        <div className="">
            {/* <Sidebar> */}
            <h1 className=" mb-4 text-center"> Inventory Management </h1>
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
                            label="Item Name"
                            type="text"
                            name="itemName"
                            value={formData.itemName}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
                    <Col className="col-sm-5 ">
                        <Input
                            label="Item Description"
                            type="text"
                            name="itemDescription"
                            value={formData.itemDescription}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col className="col-sm-5 ">
                        <Input
                            label="Unit Price"
                            type="number"
                            name="unitPrice"
                            value={formData.unitPrice}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
                    <Col className="col-sm-5 ">
                        <Input
                            label="Quantity Available"
                            type="text"
                            name="quantityAvailable"
                            value={formData.quantityAvailable}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col className="col-sm-5 ">
                        <Input
                            label="Category"
                            type="text"
                            name="category"
                            value={formData.category}
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
              Show Inventory
            </Button>
            </div>
          </div>
          {/* </Sidebar> */}
        </div>
    );
};
export default InventoryForm;