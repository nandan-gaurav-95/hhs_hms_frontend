import React, { useState, useEffect } from "react";
import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBInput as Input,
  MDBBtn as Button,
} from "mdb-react-ui-kit";
import Sidebar from "../admin/Sidebar";
import Table from "react-bootstrap/Table";
import { Dropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import Header from "../common/Header";
import { BiArrowBack } from "react-icons/bi";
import { InventoryService } from "../../services/InventoryService";
import axios from "axios";
import { APIS } from "../constants/api";
import "../../asset/style.css";

const ShowInventory = () => {
  const navigate = useNavigate();
  const [allInventory, setAllInventory] = useState({});
  const [searchInput, setSearchInput] = useState("");
  const [sortType, setSortType] = useState("all"); // 'all', 'Consumable', or 'NonConsumable'
  const [departmentSortType, setDepartmentSortType] = useState("all"); // 'all' or specific department

  const fetchallInventory = async () => {
    try {
      const response = await InventoryService.getAllInventoryItem();
      console.log("Api response", response);
      if (Array.isArray(response)) {
        const inventoryObject = {};
        response.forEach((inventory) => {
          inventoryObject[inventory.inv_id] = inventory;
        });
        console.log("invObject", inventoryObject);
        setAllInventory(inventoryObject);
      } else {
        console.error("Invalid data received from the API:", response);
      }
    } catch (error) {
      console.error("Error fetching tenant data:", error);
    }
  };

  useEffect(() => {
    fetchallInventory();
  }, []);

  const handleDelete = async (inv_id) => {
    try {
      await axios.delete(`${APIS.DELETEINVENTORYITEMBYID}/${inv_id}`);
      console.log("Deleted Successfully");
      const updatedInventory = { ...allInventory };
      delete updatedInventory[inv_id];
      setAllInventory(updatedInventory);
    } catch (error) {
      console.error("Error deleting inventory item:", error);
    }
  };

  const handleEditProfile = (inv_id) => {
    navigate(`/inventory-details/${inv_id}`);
  };

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchInput(value);
  };

  const handleSortChange = (event) => {
    const { value } = event.target;
    setSortType(value);
  };

  const handleDepartmentSortChange = (event) => {
    const { value } = event.target;
    setDepartmentSortType(value);
  };

  // Create a filtered data object based on the filter criteria
  const filteredData = Object.keys(allInventory).reduce((result, invId) => {
    const inventory = allInventory[invId];
    const nameMatches =
      inventory.inv_name &&
      inventory.inv_name.toLowerCase().includes(searchInput.toLowerCase());
    const typeMatches =
      sortType === "all" ||
      inventory.inv_type.toLowerCase() === sortType.toLowerCase();
    const departmentMatches =
      departmentSortType === "all" ||
      inventory.department === departmentSortType;

    if (nameMatches && typeMatches && departmentMatches) {
      result[invId] = inventory;
    }

    return result;
  }, {});
const reversedData = Object.keys(filteredData).reverse();
  return (
    <div className="">
      <Header />
      <div className="mt-4">
      <div className="arrow-back-container">
        <BiArrowBack
          className="backLoginForm fs-2 text-dark"
          onClick={() => navigate(-1)}
        />
      </div>
      <h1 className="mb-4 text-center">Show All Inventory</h1>
</div>
      <div className="d-flex seachcontentcenter mb-4 align-items-center">
        <div className=" search ms-4">
          <Input
            label="Search"
            type="text"
            value={searchInput}
            onChange={handleSearchChange}
          />
        </div>
        <div className="ms-3">
          <select
            id="sortType"
            className="form-select"
            value={sortType}
            onChange={handleSortChange}
          >
            <option value="all">Type</option>
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
            <option value="all">Department</option>
            <option value="Schools">Schools</option>
            <option value="ITI College">ITI College</option>
            <option value="Skill Center">Skill Center</option>
            <option value="Blood Collection Center">
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
          {reversedData.map((invId, index) => {
            const inventory = filteredData[invId];
            return (
              <tr key={index}>
                <td> {index + 1}</td>
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
                        <Dropdown.Item onClick={() => handleEditProfile(invId)}>
                          Edit{" "}
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleDelete(invId)}
                          className="red-text"
                        >
                          Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ShowInventory;