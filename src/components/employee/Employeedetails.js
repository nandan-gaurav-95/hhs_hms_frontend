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


function EmployeeDetails() {
  const { id } = useParams() || {};
  const [propData, setPropData] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [updatedEmployee, setUpdatedEmployee] = useState(propData.Employee || {});
  const navigate = useNavigate();

  const tableData = 
    {
      emp_id: 1656565,
      name: 'Mahesh Tawade',
      contact:'9657089541',
      status: "Former",
      j_date: '01-06-2023',
      b_salary:'50000',
      position:"Teacher",
      department: 'School',
      gender: 'Male',
  }
  
  useEffect(() => {
    async function fetchData() {
      try {
        // if (!id) return;
        // const response = await axios.get(`${APIS.GETEMPLOYEEBYID}/${id}`);

        // const { status = "", data } = response;
        // if (status === 200) {
        //   // setPropData(data);

        //   // setUpdatedEmployee(data); // Initialize updatedPayroll with the current data

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
      
      //   // const response = await axios.put(`${APIS.GETALLEMPLOYEE}/${id}`, updatedEmployee);
      //   if (response.status === 200) {
      //     console.log("Employee details updated successfully");
      //     // navigate(`/payroll-details/${id}`)
      //   } else {
      //     console.error("Error while updating Employee data");
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
    navigate("/allempolyee");
  };

  const handleChange = (event) => {
    // Update input value in edit mode
    const { name, value } = event.target;
    console.log(value);
    setUpdatedEmployee((prevData) => ({
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

  // Use the companyName in your component
  return (
    <div className="">
      <Header/>
      <Sidebar>
      <Row className="justify-content-center">
        
        <Col>
          <h1 className="text-center mb-4">Details of {propData?.empName}</h1>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <ul className="list-group">
          <Row className="justify-content-center">
            <Col className="col-sm-5 ">

              <strong>Empolyee ID:</strong>
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="emp_id"
                  value={tableData.emp_id}
                  onChange={handleChange}
                />

              <strong>Employee Name</strong>
             
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="empName"
                  value={tableData.name}
                  onChange={handleChange}
                />
            

              <strong>Date Of Hiring:</strong>
              
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="date"
                  name="dateOfHiring"
                  value={updatedEmployee.dateOfHiring}
                  onChange={handleChange}
                />
            
              
              <strong>Loan Amount:</strong>
            
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="number"
                  name="loanAmount"
                  value={updatedEmployee.loanAmount}
                  onChange={handleChange}
                />
            
            
             
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="number"
                  name="pfContribution"
                  value={updatedEmployee.pfContribution}
                  onChange={handleChange}
                />
           </Col>
            <Col className="col-md-5">
              <strong>Date Of Leaving:</strong>
             
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="date"
                  name="dateOfLeaving"
                  value={updatedEmployee.dateOfLeaving}
                  onChange={handleChange}
                />
            
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedEmployee.dateOfLeaving}
                </li>
            
              <strong>Addres:</strong>
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="address"
                  value={updatedEmployee.address}
                  onChange={handleChange}
                />

              <strong>Contact Numbe:</strong>
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="tel"
                  name="contactNumber"
                  value={updatedEmployee.contactNumber}
                  onChange={handleChange}
                />
              <strong>Salary:</strong>
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="number"
                  name="salary"
                  value={updatedEmployee.salary}
                  onChange={handleChange}
                />
            </Col>
            <Col className="col-sm-5 ">
            <strong>PF Contribution:</strong>
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="number"
                  name="pfContribution"
                  value={updatedEmployee.pfContribution}
                  onChange={handleChange}
                />
            </Col>
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
      
      </Sidebar>
    </div>
  );
}

export default EmployeeDetails;