import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { APIS } from "../constants/api";
import axios from "axios";
import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBBtn as Button,
} from "mdb-react-ui-kit";
import Sidebar from "../admin/Sidebar";
import Header from "../common/Header";
function InventoryDetails() {
  const { id } = useParams() || {};
  const [propData, setPropData] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [updatedInventory, setUpdatedInventory] = useState( {
   

  
  // const tableData = {
    id: 1,
    name: "bed",
    quantity: 4,
    date: "1-9-99",
    price: 5000,
    department: "Hostel",
    type: "Consumable",
  });
  useEffect(() => {
    async function fetchData() {
      try {
        // if (!id) return;
        // const response = await axios.get(`${APIS.GETInventoryBYID}/${id}`);

        // const { status = "", data } = response;
        // if (status === 200) {
        //   // setPropData(data);

        //   // setupdatedInventory(data); // Initialize updatedPayroll with the current data

        // } else {
        //   console.error("Error while fetching Payroll data");
        // }
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
    return <div>Loading...</div>;
  }

  // if (!propData) {
  //   // Handle the case when data is not available
  //   return <div>Data not available</div>;
  // }

  const handleEditMode = async () => {
    setEditMode(!editMode);
    if (editMode) {
      // try {
      //   // const response = await axios.put(`${APIS.GETALLInventory}/${id}`, updatedInventory);
      //   if (response.status === 200) {
      //     console.log("Inventory details updated successfully");
      //     // navigate(`/payroll-details/${id}`)
      //   } else {
      //     console.error("Error while updating Inventory data");
      //     // Additional error handling or notifications can be added here
      //   }
      // } catch (error) {
      //   console.error("Error:", error);
      // }
    } else {
      // Enter edit mode
      setEditMode(true);
    }
  };

  const goBack = (event) => {
    event.preventDefault();
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

  const handleDelete = (index) => {
    // const updatedImages = [...selectedPhotos];
    // updatedImages.splice(index, 1);
    // setSelectedPhotos(updatedImages);
    // const updatedThumbnails = [...thumbnails];
    // updatedThumbnails.splice(index, 1);
    // setThumbnails(updatedThumbnails);
  };
  return (
    <div className="">
      <Header />
      {/* <Sidebar> */}
        <Row className="justify-content-center">
          <Col>
            <h1 className="text-center mb-4">Details of {updatedInventory?.name}</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <ul className="list-group">
            <Row className="justify-content-center">
              <Col className="col-sm-5 ">
                <strong>Inventory ID:</strong>
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="id"
                  value={updatedInventory.id}
                  onChange={handleChange}
                />

                <strong>Inventory Name</strong>

                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="name"
                  value={updatedInventory.name}
                  onChange={handleChange}
                />

                <strong>Quantity:</strong>

                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="quantity"
                  value={updatedInventory.quantity}
                  onChange={handleChange}
                />
              </Col>
              <Col className="col-md-5">
                <strong>Department:</strong>

                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="department"
                  value={updatedInventory.department}
                  onChange={handleChange}
                />

                <strong>Type:</strong>
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="type"
                  value={updatedInventory.type}
                  onChange={handleChange}
                />

                <strong>Price:</strong>

                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="price"
                  value={updatedInventory.price}
                  onChange={handleChange}
                /> </Col>
                  <Row className="justify-content-center">
              <Col className="col-sm-5 ">
                <strong>Date:</strong>

                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
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

        <Row className="text-center mt-4 form-group row ">
          <Col md-2>
            <Button
              variant="primary"
              square
              style={{ width: "100px" }}
              onClick={goBack}
            >
              Back
            </Button>
            <Button
              variant="primary"
              type="submit"
              square
              style={{ marginLeft: "10px", width: "100px" }}
              onClick={handleEditMode}
            >
              Update
            </Button>
          </Col>
        </Row>
      {/* </Sidebar> */}
    </div>
  );
}

export default InventoryDetails;