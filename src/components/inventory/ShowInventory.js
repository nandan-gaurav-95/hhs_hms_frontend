import React, { useState, useEffect } from "react";
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
import { BiArrowBack } from "react-icons/bi";
import { InventoryService } from '../../services/InventoryService';
import axios from "axios";
import { APIS } from "../constants/api";



const ShowInventory = () => {
    // const tableData = [];
    const navigate = useNavigate();
    const [allInventory, setAllInventory] = useState({});
    const [searchInput, setSearchInput] = useState('');
    const [filteredData, setFilteredData] = useState();
    const [sortType, setSortType] = useState('all'); // 'all', 'Consumable', or 'NonConsumable'
    const [departmentSortType, setDepartmentSortType] = useState('all'); // 'all' or specific department


    const fetchallInventory = async () => {
        try {
          const response = await InventoryService.getAllInventoryItem();
         console.log("Api response",response);
         if(Array.isArray(response)){
          const inventoryObject={};
          response.forEach((inventory) => {
            inventoryObject[inventory.inv_id]=inventory;
          });
          console.log("invObject",inventoryObject);
          setAllInventory(inventoryObject);
         }else{
          console.error("Invalid data received from the API:", response);
         }
           
        } catch (error) {
          console.error('Error fetching tenant data:', error);
        }
      };
    
      // Fetch tenant data when the component mounts
      useEffect(() => {
        fetchallInventory();
      }, []);

    
      const handleDelete =async(inv_id)=>{ 
        try {
          await axios.delete(`${APIS.DELETEINVENTORYITEMBYID}/${inv_id}`);
          console.log("Deleted Successfully");
            // Create a copy of the state object
            const updatedInventory = { ...allInventory };
            // Remove the employee with the given emp_id
          delete updatedInventory[inv_id];
      
          // Update the state with the modified object
          setAllInventory(updatedInventory);
        } catch (error) {
            console.error("Error deleting employee:", error);  
        }

      };
  
      const handleEditProfile =(inv_id)=> {
       
       navigate(`/inventory-details/${inv_id}`)
      };
    
      useEffect(() => {
        fetchallInventory(); // Fetch data when the component mounts
     
      }, []);

      const handleSearchChange = (event) => {
        const { value } = event.target;
        setSearchInput(value);
      
        // Filter the allInventory based on the search input, sort type, and department sort type
        const filtered = allInventory.filter((item) => {
          const nameMatches = item.inv_name && item.inv_name.toLowerCase().includes(value.toLowerCase());
      
          if (sortType === 'Consumable' || sortType === 'NonConsumable') {
            return nameMatches && item.inv_type && item.inv_type.toLowerCase() === sortType.toLowerCase() && (departmentSortType === 'all' || item.department === departmentSortType);
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
        const filtered = allInventory.filter((item) => {
          const nameMatches = item.inv_name && item.inv_name.toLowerCase().includes(searchInput.toLowerCase());
      
          if (value === 'all') {
            return nameMatches && (departmentSortType === 'all' || item.department === departmentSortType);
          } else {
            return nameMatches && item.inv_type && item.inv_type.toLowerCase() === value.toLowerCase() && (departmentSortType === 'all' || item.department === departmentSortType);
          }
        });
      
        setFilteredData(filtered);
      };
      
      const handleDepartmentSortChange = (event) => {
        const { value } = event.target;
        setDepartmentSortType(value);
      
        // Reapply the search filter when the department sort type changes
        const filtered = allInventory.filter((item) => {
          const nameMatches = item.inv_name && item.inv_name.toLowerCase().includes(searchInput.toLowerCase());
      
          if (sortType === 'all') {
            return nameMatches && (value === 'all' || item.department === value);
          } else {
            return nameMatches && item.inv_type && item.inv_type.toLowerCase() === sortType.toLowerCase() && (value === 'all' || item.department === value);
          }
        });
      
        setFilteredData(filtered);
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
              <option value="Blood Collection Center">
                {" "}
                Blood Collection Center
              </option>
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
            {Object.keys(allInventory).map((invId,index) => {
              const inventory=allInventory[invId];
              return(
                <tr key={index}>
                  <td> {index +1}</td>
                  <td>{inventory.inv_name}</td>
                  <td>{inventory.quantity}</td>
                  <td>{inventory.date}</td>
                  <td>{inventory.price}</td>
                  <td>{inventory.department}</td>
                  <td>{inventory.inv_type}</td>

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
                          <Dropdown.Item
                            onClick={() => handleEditProfile(invId)}
                          >
                            Edit{" "}
                          </Dropdown.Item>
                          <Dropdown.Item onClick={()=>handleDelete(invId)} className="red-text">Delete</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </td>
                  </tr>
              );
            }
            )}
          </tbody>
        </Table>
        {/* </Sidebar> */}
      </div>
    );
};

export default ShowInventory;