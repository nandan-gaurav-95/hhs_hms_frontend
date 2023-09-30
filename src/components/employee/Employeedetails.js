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


function EmployeeDetails() {
  const { id } = useParams() || {};
  const [propData, setPropData] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [updatedEmployee, setUpdatedEmployee] = useState( {
    emp_id: 1656565,
    name: 'Mahesh Tawade',
    department: 'School',
    dob: "1990-01-15",
    gender: 'Male',
    contact:'9657089541',
    bloodgroup: "A+",
    address: "123 Main Street, City",
    status: "Former",
    j_date: '01-06-2023',
    b_salary:'50000',
    position:"Teacher",
    aadhar: "123456789012",
    qualification: "Bachelor's Degree",
    pan: "ABCDE1234F",
    dateOfHiring: "2022-03-01",
    position: "Manager",
    netSalary: "50000",
    grossSalary: "70000",
    allowance: "2000",
    deduction: "1000",
    pfEmployeeContribution: "1500",
    loanAmount: "0",
    loanRepaymentAmount: "0",


});

   
  
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
    setEditMode(editMode);
    if (editMode) {

      goBack();
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
    // event.preventDefault();
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
      {/* <Sidebar> */}
      <Row className="justify-content-center">
        
        <Col>
          <h1 className="text-center mb-4">Details of {updatedEmployee?.name}</h1>
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
                  value={updatedEmployee.emp_id}
                  onChange={handleChange}
                  readOnly
                />

              <strong>Employee Name</strong>
             
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="name"
                  value={updatedEmployee.name}
                  onChange={handleChange}
                />

              <strong>Department:</strong>
              
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="department"
                  value={updatedEmployee.department}
                  onChange={handleChange}
                />
              
              <strong>DOB:</strong>
            
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="date"
                  name="dob"
                  value={updatedEmployee.dob}
                  onChange={handleChange}
                />

              <strong>Gender:</strong>
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="gender"
                  value={updatedEmployee.gender}
                  onChange={handleChange}
                />

              <strong>Contact Number:</strong>
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="tel"
                  name="contact"
                  value={updatedEmployee.contact}
                  onChange={handleChange}
                />
                
              <strong>Blood Group:</strong>
              <select
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                id="Blood Group"
                name="bloodgroup"
                value={updatedEmployee.bloodgroup}
                onChange={handleChange}
                >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
              <strong>Aadhar Number:</strong>
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="number"
                  name="aadhar"
                  value={updatedEmployee.aadhar}
                  onChange={handleChange}
                  required
                />
            
   
            <strong>Qualification:</strong>
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="qualification"
                  value={updatedEmployee.qualification}
                  onChange={handleChange}
                  required
                />

                <strong>PAN Number:</strong>
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="pan"
                  value={updatedEmployee.pan}
                  onChange={handleChange}
                  required
                />
                <strong>Date Of Hiring:</strong>
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="date"
                  name="j_date"
                  value={updatedEmployee.j_date}
                  onChange={handleChange}
                  required
                />
                </Col>
                 <Col className="col-sm-5 ">

                <strong>Position:</strong>
                <input
                 className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="position"
                  value={updatedEmployee.position}
                  onChange={handleChange}
                  required
                />
            
            <strong>Basic Salary:</strong>            
                <input
                 className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                 type="text"
                 name="b_salary"
                 value={updatedEmployee.b_salary}
                 onChange={handleChange}
                 required
                />
          
              <strong>Net Salary:</strong>
   
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="netSalary"
                  value={updatedEmployee.netSalary}
                  onChange={handleChange}
                  required
                />

                <strong>Gross Salary:</strong>
  
                <input
                 className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="grossSalary"
                  value={updatedEmployee.grossSalary}
                  onChange={handleChange}
                  required
                />

              <strong>Allowance:</strong>            

                <input
                 className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                 type="text"
                 name="allowance"
                 value={updatedEmployee.allowance}
                 onChange={handleChange}
                 required
                />
              <strong>Deduction:</strong>
   
                <input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="text"
                name="deduction"
                value={updatedEmployee.deduction}
                onChange={handleChange}
                required
                />
 

                <strong>PF Employee Contribution:</strong>
  
                <input
                 className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                 type="text"
                 name="pfEmployeeContribution"
                 value={updatedEmployee.pfEmployeeContribution}
                 onChange={handleChange}
                 required
                />

              <strong>Loan Amount:</strong>            

                <input
                 className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="text"
                name="loanAmount"
                value={updatedEmployee.loanAmount}
                onChange={handleChange}
                required
                />
              <strong>Loan Repayment Amount:</strong>
   
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                name="loanRepaymentAmount"
                value={updatedEmployee.loanRepaymentAmount}
                onChange={handleChange}
                required
                />
                <strong>PF Employee Contribution:</strong>
  
                <input
                 className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                 type="text"
                 name="pfEmployeeContribution"
                 value={updatedEmployee.pfEmployeeContribution}
                 onChange={handleChange}
                 required
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
            Cancel
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

export default EmployeeDetails;