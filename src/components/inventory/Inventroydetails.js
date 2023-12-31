import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBBtn as Button,
} from "mdb-react-ui-kit";
import Sidebar from "../admin/Sidebar";
import Header from "../common/Header";

import { BiArrowBack } from "react-icons/bi";
import axios from "axios";
import { APIS } from "../constants/api";

function InventoryDetails() {
  const { id } = useParams() || {};
  const [InventoryData, setInventoryData] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [updatedInventory, setUpdatedInventory] = useState(
    InventoryData.inventory || {}
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${APIS.GETINVENTORYITEMBYID}/${id}`);
        const { status, data } = response;

        console.log("Hiii", response.data);
        if (status === 200) {
          setInventoryData(data);
          setUpdatedInventory(data);
        } else {
          console.error("Error while fetching inventory data");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  if (loading) {
    // Handle loading state here (e.g., display a loading spinner)
    return <div>Loading</div>;
  }

  // if (!propData) {
  //   // Handle the case when data is not available
  //   return <div>Data not available</div>;
  // }

  const handleEditMode = async () => {
    setEditMode(!editMode);
    if (editMode) {
      try {
        const response = await axios.put(
          `${APIS.UPDATEINVENTORYITEMBYID}/${id}`,
          updatedInventory
        );
        if (response.status === 200) {
          console.log("Employee details updated successfully");
          navigate(`/inventory-details/${id}`);
        } else {
          console.error("Error while updating property data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      // Enter edit mode
      setEditMode(true);
    }
  };

  const goBack = (event) => {
    // event.preventDefault();
    navigate("/showinventory");
  };

  const handleChange = (event) => {
    // Update input value in edit mode
    const { name, value } = event.target;
    console.log(value);
    setUpdatedInventory((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // console.log(propData);
  };

  return (
    <div className="editcontainer">
      <Header />
      <div className="mainedit">
        <div className="arrow-back-container">
          <BiArrowBack className="addbacklogo" onClick={() => navigate(-1)} />
        </div>
        {/* <Sidebar> */}
    
          <Col>
            <h1 className="propertydetails">
              Details of {updatedInventory?.inv_name}
            </h1>
          </Col>
     
      </div>
      <Row className="detailsrow">
        <ul className="list-group">
          <Row className="detailsrow">
            <Col className="column">
              <strong>Inventory ID</strong>
              <input
                className="list-group-item input-field"
                type="text"
                name="inv_id"
                value={updatedInventory.inv_id}
                onChange={handleChange}
              />

              <strong>Inventory Name</strong>

              <input
                className="list-group-item input-field"
                type="text"
                name="inv_name"
                value={updatedInventory.inv_name}
                onChange={handleChange}
              />

              <strong>Quantity</strong>

              <input
                className="list-group-item input-field"
                type="text"
                name="quantity"
                value={updatedInventory.quantity}
                onChange={handleChange}
              />
            </Col>
            <Col className="column">
              <strong>Department</strong>
              <select
               className="list-group-item input-field"
              id="Department"
              name="department"
              value={updatedInventory.department}
              onChange={handleChange}
              required
            >
    
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
              <strong>Type</strong>
              <select
               className="list-group-item input-field"
              id="select Inventory"
              name="inv_type"
              value={updatedInventory.inv_type}
              onChange={handleChange}
              required
            >
              <option value="Consumable">Consumable</option>
              <option value="NonConsumable ">NonConsumable</option>
            </select>
              <strong>Price</strong>
              <input
                className="list-group-item input-field"
                type="text"
                name="price"
                value={updatedInventory.price}
                onChange={handleChange}
              />{" "}
            </Col>
            <Row className="detailsrow">
              <Col className="column ">
                <strong>Date</strong>

                <input
                  className="list-group-item input-field"
                  type="date"
                  name="date"
                  value={updatedInventory.date}
                  onChange={handleChange}
                />
              </Col>
            </Row>
          </Row>
        </ul>
      </Row>

      <Row className="form-group ">
      <Col className="editbtn">
          <Button
            variant="primary"
            type="submit"
            square
            onClick={handleEditMode}
          >
            {editMode ? "Update" : "Edit"}
            {/* Update */}
          </Button>
        </Col>
      </Row>
      {/* </Sidebar> */}
    </div>
  );
}

export default InventoryDetails;
