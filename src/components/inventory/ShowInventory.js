import React, { useState } from 'react';
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
import { NavLink, useNavigate } from 'react-router-dom';
import Header from '../common/Header';
const ShowInventory = () => {
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
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState('');
    const [filteredData, setFilteredData] = useState(tableData);
    const [sortType, setSortType] = useState('all'); // 'all', 'Consumable', or 'NonConsumable'
    const [departmentSortType, setDepartmentSortType] = useState('all'); // 'all' or specific department

    const handleSearchChange = (event) => {
        const { value } = event.target;
        setSearchInput(value);

        // Filter the tableData based on the search input, sort type, and department sort type
        const filtered = tableData.filter((item) => {
            const nameMatches = item.name.toLowerCase().includes(value.toLowerCase());
            
            if (sortType === 'Consumable' || sortType === 'NonConsumable') {
                return nameMatches && item.type === sortType && (departmentSortType === 'all' || item.department === departmentSortType);
            } else {
                return nameMatches && (departmentSortType === 'all' || item.department === departmentSortType);
            }
        });

        setFilteredData(filtered);
    };

    const handleSortChange = (event) => {
        const { value } = event.target;
        setSortType(value);

        // Reapply the search filter when the sort type changes
        const filtered = tableData.filter((item) => {
            const nameMatches = item.name.toLowerCase().includes(searchInput.toLowerCase());

            if (value === 'all') {
                return nameMatches && (departmentSortType === 'all' || item.department === departmentSortType);
            } else {
                return nameMatches && item.type === value && (departmentSortType === 'all' || item.department === departmentSortType);
            }
        });

        setFilteredData(filtered);
    };

    const handleDepartmentSortChange = (event) => {
        const { value } = event.target;
        setDepartmentSortType(value);

        // Reapply the search filter when the department sort type changes
        const filtered = tableData.filter((item) => {
            const nameMatches = item.name.toLowerCase().includes(searchInput.toLowerCase());

            if (sortType === 'all') {
                return nameMatches && (value === 'all' || item.department === value);
            } else {
                return nameMatches && item.type === sortType && (value === 'all' || item.department === value);
            }
        });

        setFilteredData(filtered);
    };
    const handleDelete =function(){ 
        window.confirm("The Employee will be get deleted permanantly");
      };
  
      const handleEditProfile =(id)=> {
       
       navigate(`/inventory-details/${id}`)
      };

    return (
        <div className="">
            <Header/>
            <Sidebar>
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
                                <td>{item.type}</td>
                                <td>
                                  <div className="dropdown">
                                    <Dropdown>
                                      <Dropdown.Toggle
                                        variant="secondary"
                                        id="dropdownMenuButton"
                                      >
                                        &#8942;
                                      </Dropdown.Toggle>
                                      <Dropdown.Menu>
                                        
                                        <Dropdown.Item onClick={()=>handleEditProfile(item.id)}>Edit </Dropdown.Item>
                                        <Dropdown.Item onClick={handleDelete} className="red-text">Delete</Dropdown.Item>
                                       
                                      </Dropdown.Menu>
                                    </Dropdown>
                                  </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Sidebar>
        </div>
    );
};

export default ShowInventory;