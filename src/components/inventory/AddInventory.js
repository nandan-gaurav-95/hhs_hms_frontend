import React, { useState, useEffect } from "react";
import axios from "axios";
import { APIS } from "../constants/api";
import {
    MDBContainer as Container,
    MDBRow as Row,
    MDBCol as Col,
    MDBInput as Input,
    MDBBtn as Button
} from 'mdb-react-ui-kit';
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from '../common/Header';
import { BiArrowBack } from "react-icons/bi";
import { InventoryService } from "../../services/InventoryService";

const AddInventory = () => {
    const navigate = useNavigate();
    const initialState = {
        department: '',
        inv_type: '',
        inv_name: '',
        quantity: '',
        date: '',
        price: ''
    } 
    // const [addInventory, setAddInventory] = useState([]);
    // const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});
    // const navigate = useNavigate();

    // useEffect(() => {
    //     async function fetchInventory() {
    //         try {
    //             const response = await axios.get(APIS.CREATEINVENTORY);
    //             console.log('Response:', response);
    //             if (response.status === 200) {
    //               setAddInventory(response.data);
    //             } else {
    //               console.error("Error while fetching inventory");
    //             }
    //           } catch (error) {
    //             console.error("Error:", error);
    //           }
    //     }
    //     fetchInventory();
    //   }, []);
    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     const validationErrors = validateForm(formData);

       
    //     if (Object.keys(validationErrors).length > 0) {
    //         setErrors(validationErrors);
    //         return;
    //     } else {
        
    //         setErrors({});
    //     }

      
    // };

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormData((prevData) => ({ ...prevData, [name]: value }));
    //     setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    //   };
    

    const validateForm = (formData) => {
        const errors = {};

        if (!formData.department.trim()) {
            errors.department = 'Department is required.';
        }
        if (!formData.inv_type.trim()) {
            errors.inv_type = 'Inventory type is required.';
        }
        if (!formData.inv_name.trim()) {
            errors.inv_name = 'Name of Inventory is required.';
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

    const [formData, setFormData] = useState(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('handleSubmit called');

    try {
      const response = await InventoryService.createInventory(formData);

      console.log("TenantId", response.data.id);

      if (response.status === 201) {
        console.log("Inventory Created Successfully");
        setFormData(initialState);
        toast.success("Submit Successful!");
      } else {
        console.error("Failed To create Tenant");
        toast.error("Failed to submit Property");

      }
    } catch (error) {
      console.error("Error", error);
      toast.error("An error occurred during submission");

    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

    return (
        <div className="">
             <Header />
             <div className="arrow-back-container">
        <BiArrowBack
          className="backLoginForm fs-2 text-dark"
          onClick={() => navigate(-1)}
        />
      </div>
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
                                name="inv_type"
                                value={formData.inv_type}
                                onChange={handleChange}
                                required
                                >
                                <option value="">Select Inventory</option>
                                <option value="Consumable">Consumable</option>
                                <option value="NonConsumable ">NonConsumable</option>
                            </select>  
            
                            {errors.inv_type && (
                                <div className="text-danger">{errors.inv_type}</div>
                            )}
                        </Col>
                    </Row>
                    <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
                        <Col className="col-sm-5">
                            <Input
                                label="Name of Inventory"
                                type="text"
                                name="inv_name"
                                value={formData.inv_name}
                                onChange={handleChange}
                                 required
                                />
                            {errors.inv_name && (
                                <div className="text-danger">{errors.inv_name}</div>
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
          <ToastContainer/>
        </div>
    );
};

export default AddInventory;