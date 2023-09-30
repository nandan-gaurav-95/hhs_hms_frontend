import React, { useState } from 'react';
import {
    MDBContainer as Container,
    MDBRow as Row,
    MDBCol as Col,
    MDBInput as Input,
    MDBBtn as Button
} from 'mdb-react-ui-kit';
import Sidebar from '../admin/Sidebar';
import Header from '../common/Header';


const AddInventory = () => {
    const initialState = {
        department: '',
        inventory: '',
        name: '',
        quantity: '',
        date: '',
        price: ''
    } 
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate the form before submitting
        const validationErrors = validateForm(formData);

        // If there are validation errors, set them in the state
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        } else {
            // Clear validation errors if there are none
            setErrors({});
        }

        // Handle form submission logic here
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        // Clear validation errors when the user makes changes
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
      };
    

    const validateForm = (formData) => {
        const errors = {};

        // Check for mandatory fields
        if (!formData.department.trim()) {
            errors.department = 'Department is required.';
        }
        if (!formData.inventory.trim()) {
            errors.inventory = 'Inventory type is required.';
        }
        if (!formData.name.trim()) {
            errors.name = 'Name of Inventory is required.';
        }
        if (!formData.quantity.trim()) {
            errors.quantity = 'Quantity is required.';
        }
        if (!formData.date.trim()) {
            errors.date = 'Date is required.';
        }
        if (!formData.price.trim()) {
            errors.price = 'Price is required.';
        }

        return errors;
    };

    return (
        <div className="">
             <Header />
            {/* <Sidebar> */}
                <h1 className=" mb-4 text-center">Add Inventory</h1>
                <form onSubmit={handleSubmit}>
                    <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
                        <Col className="col-sm-5">
                            <select
                                className="form-select"
                                id="Department"
                                name="department"
                                value={formData.department}
                                onChange={handleChange}
                                required
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
                            {errors.department && (
                                <div className="text-danger">{errors.department}</div>
                            )}
                        </Col>
                        <Col className="col-sm-5">
                            <select
                                className="form-select"
                                id="select Inventory"
                                name="inventory"
                                value={formData.inventory}
                                onChange={handleChange}
                                required
                                >
                                <option value="">Select Inventory</option>
                                <option value="Consumable">Consumable</option>
                                <option value="NonConsumable ">NonConsumable</option>
                            </select>  
            
                            {errors.inventory && (
                                <div className="text-danger">{errors.inventory}</div>
                            )}
                        </Col>
                    </Row>
                    <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
                        <Col className="col-sm-5">
                            <Input
                                label="Name of Inventory"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                />
                            {errors.name && (
                                <div className="text-danger">{errors.name}</div>
                            )}
                        </Col>
                        <Col className="col-sm-5">
                            <Input
                                label="Quantity"
                                type="text"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                                required
                                />
                            {errors.quantity && (
                                <div className="text-danger">{errors.quantity}</div>
                            )}
                        </Col>
                    </Row>
                    <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
                        <Col className="col-sm-5">
                            <Input
                                label="Date"
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                                />
                            {errors.date && (
                                <div className="text-danger">{errors.date}</div>
                            )}
                        </Col>
                        <Col className="col-sm-5">
                            <Input
                                label="Price"
                                type="text"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                required
                                />
                            {errors.price && (
                                <div className="text-danger">{errors.price}</div>
                            )}
                        </Col>
                    </Row>
                    <div className="text-center mt-4">
                        <Button type="submit">Submit</Button>
                    </div>
                </form>
            {/* </Sidebar> */}
        </div>
    );
};

export default AddInventory;