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
import Table from 'react-bootstrap/Table';
import { Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const NonConsumable = () => {
    const navigate = useNavigate();
    const tableData = [
        {
            id: 1,
            name: 'bed',
            quantity: 4,
            date: '1-9-99',
            price: 5000,
            department: 'Hostel',
            type: 'Consumable',
        },
        {
            id: 2,
            name: 'Pen',
            quantity: 8,
            date: '2-9-99',
            price: 50,
            department: 'Schools',
            type: 'NonConsumable',
        },
        {
            id: 3,
            name: 'blanket',
            quantity: 8,
            date: '3-9-99',
            price: 5999990,
            department: 'Hostel',
            type: 'NonConsumable',
        },
    ];

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
            {/* <Sidebar> */}
                <h1 className="mb-4 text-center">Show All Inventory</h1>

                <div className="d-flex mb-8 align-items-center">
                    <Input
                        label="Search"
                        type="text"
                        value={searchInput}
                        onChange={handleSearchChange}
                    />

                    <div className="ms-3">
                      
                        <select
                            id="sortType"
                            className="form-select"
                            value={sortType}
                            onChange={handleSortChange}
                        >
                            <option value="Type">Type</option>
                            <option value="Consumable">Consumable</option>
                            <option value="NonConsumable">NonConsumable</option>
                        </select>
                    </div>

                    <div className="ms-3">
                     
                        <select
                            id="departmentSortType"
                            className="form-select"
                            value={departmentSortType}
                            onChange={handleDepartmentSortChange}
                        >
                            <option value="Department">Department</option>
                            <option value="Schools">Schools</option>
                            <option value="ITI College">ITI College</option>
                            <option value="Skill Center">Skill Center</option>
                            <option value="Blood Collection Center"> Blood Collection Center</option>
                            <option value="Hostel">Hostel</option>
                            <option value="Masjid">Masjid</option>
                            <option value="Dargah">Dargah</option>
                        </select>
                    </div>
                </div>

                <Table striped>
                    <thead>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Department</th>
                            <th>Type</th>
                            <th>Action</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.date}</td>
                                <td>{item.price}</td>
                                <td>{item.department}</td>
                                <td>{item.action}
                                </td>
                                <td>
                                  <div className="dropdown">
                                    <Dropdown >
                                      <Dropdown.Toggle
                                        variant="secondary"
                                        id="dropdownMenuButton"
                                      >
                                        &#8942;
                                      </Dropdown.Toggle>
                                      <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => handleViewProfile(item.id)}>View Profile</Dropdown.Item>
                                        <Dropdown.Item>Edit Profile</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleDelete()} className="red-text">Delete Profile</Dropdown.Item>
                                        <Dropdown.Item>Mark as a Resigned</Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                  </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            {/* </Sidebar> */}
            {/* </form> */}
        </div>
   
  )
}

export default NonConsumable;
