import React, { useState,useEffect } from "react";
import {useNavigate, useParams } from "react-router-dom";
import { MDBContainer as Container,
          MDBBtn as Button, } from "mdb-react-ui-kit";
import { FaDownload } from "react-icons/fa";
import Header from "../common/Header";
import jsPDF from "jspdf";
import logo from "../../asset/images/hhslogo.jpg";
import { BiArrowBack } from "react-icons/bi";
import axios from "axios";
import { APIS } from "../constants/api";


const ViewEmpProfile = () => {
  const { id } = useParams();
  const [employee, setEmployee]= useState(null);
  const navigate = useNavigate();

  const fetctEmployeeById = async ()=>{
    try {
      const response= await axios.get(`${APIS.GETEMPLOYEEBYID}/${id}`);
      setEmployee(response.data);

    } catch (error) {
      console.error("Error fetching property:", error);
    }

  }
  useEffect(()=>{
    fetctEmployeeById();
  },[]);
  
  const renderEmployeeRow = (key, value) => (
    <div key={key} className="d-flex entity-row">
      <div className="entity-name">{key.replace(/([A-Z])/g, " $1").trim()}:</div>
      <div className="entity-value">{value}</div>
    </div>
  );

  if (!employee) {
    return <div>Loading...</div>; // You can display a loading indicator here
  }
  const employeeKeys = Object.keys(employee);
  const halfLength = Math.ceil(employeeKeys.length / 2);
   const firstColumnKeys = employeeKeys.slice(0, halfLength);
   const secondColumnKeys = employeeKeys.slice(halfLength);


  const handleSalarySlipPdf =()=>{
   // Create a new jsPDF instance
   const doc = new jsPDF('p', 'mm', 'a4');
   const logoImage = new Image();
   logoImage.src = logo;
 
 logoImage.src = logo; // Use the imported logo image

 // Wait for the image to load before rendering it
 logoImage.onload = () => {
   // Add the logo image to the PDF
   doc.addImage(
     logoImage,
     "JPEG", // You can specify the format here (e.g., "PNG", "JPEG", etc.)
     10,     // X position
     10,     // Y position
     50,     // Image width
     25      // Image height
   );

   //Header Part
   doc.setTextColor(255, 138, 0); // RGB color (red)
   doc.setFont('helvetica', 'bold'); // Use the 'helvetica' font family
   doc.text("HHS HMS", 70, 20); // Adjust the Y position as needed
   doc.setFont('helvetica', 'normal'); // Reset font style to normal


//PDF Heading 
   doc.setTextColor(255, 0, 0); // RGB color (red)
   doc.setFont('helvetica', 'bold'); // Use the 'helvetica' font family
   doc.text("Salary Slip", 50, 40); // Adjust the Y position as needed
   doc.setFont('helvetica', 'normal'); // Reset font style to normal
   
   // Reset text color to default (black)
   doc.setTextColor(0);
   doc.rect(20, 50, 160, 105); // (X, Y, Width, Height)
   doc.setFont('calibre', 'bold'); 
   doc.text(`Salary Slip of Employee: ${employee.Name}`, 25, 60); // Adjust the Y position as needed
   doc.setFont('calibre','normal');

  // Add tenant details here...

//ContactNo
  doc.setFontSize(12); // Set font size for labels
  doc.setFont('calibre', 'bold');
  doc.rect(20, 65, 160, 10);// (X, Y, Width, Height)
  doc.rect(20, 65, 45, 10);// (X, Y, Width, Height)
  doc.text("ContactNo :", 25, 71); // Label "Name:"
  doc.setFont('calibre', 'normal'); // Reset font style to normal
  doc.setFontSize(10); // Reset font size to normal
  doc.text(`${employee.ContactNo}`, 70, 71); // (X, Y,Actual name)

//DOB
   doc.setFontSize(12); // Set font size for labels
   doc.setFont('calibre', 'bold');
   doc.rect(20, 75, 160, 10);// (X, Y, Width, Height)
   doc.rect(20, 75, 45, 10);// (X, Y, Width, Height)
   doc.text("Date of Birth :", 25, 81); // Label "Name:"
   doc.setFont('calibre', 'normal'); // Reset font style to normal
   doc.setFontSize(10); // Reset font size to normal
   doc.text(`${employee.DOB}`, 70, 81); //(X, Y, Actual name)

//Address
   doc.setFontSize(12); // Set font size for labels
   doc.setFont('calibre', 'bold');
   doc.rect(20, 85, 160, 10);// (X, Y, Width, Height)
   doc.rect(20, 85, 45, 10);// (X, Y, Width, Height)
   doc.text("Address :", 25, 91); // Label "Name:"
   doc.setFont('calibre', 'normal'); // Reset font style to normal
   doc.setFontSize(10); // Reset font size to normal
   doc.text(`${employee.Address}`, 70, 91); // (X, Y, Actual name)

//Gender
   doc.setFontSize(12); // Set font size for labels
   doc.rect(20, 95, 160, 10);// (X, Y, Width, Height)
   doc.setFont('calibre', 'bold');
   doc.rect(20, 95, 45, 10);// (X, Y, Width, Height)
   doc.text("Gender:", 25, 101); // Label "Name:"
   doc.setFont('calibre', 'normal'); // Reset font style to normal
   doc.setFontSize(10); // Reset font size to normal
   doc.text(`${employee.Gender}`, 70, 101); // (X, Y, Actual name)

//AadharNo
   doc.setFontSize(12); // Set font size for labels
   doc.rect(20, 105, 160, 10);// (X, Y, Width, Height)
   doc.setFont('calibre', 'bold');
   doc.rect(20, 105, 45, 10);// (X, Y, Width, Height)
   doc.text("AadharNo :", 25, 111); // Label "Name:"
   doc.setFont('calibre', 'normal'); // Reset font style to normal
   doc.setFontSize(10); // Reset font size to normal
   doc.text(`${employee.AadharNo}`, 70, 111); // (X, Y, Actual name)

//PanNo
   doc.setFontSize(12); // Set font size for labels
   doc.rect(20, 105, 160, 10);// (X, Y, Width, Height)
   doc.setFont('calibre', 'bold');
   doc.rect(20, 115, 45, 10);// (X, Y, Width, Height)
   doc.text("PanNo :", 25, 121); // Label "Name:"
   doc.setFont('calibre', 'normal'); // Reset font style to normal
   doc.setFontSize(10); // Reset font size to normal
   doc.text(`${employee.PanNo}`, 70, 121); // (X, Y, Actual name)

//Bloodgroup
   doc.setFontSize(12); // Set font size for labels
   doc.rect(20, 125, 160, 10);// (X, Y, Width, Height)
   doc.setFont('calibre', 'bold');
   doc.rect(20, 125, 45, 10);// (X, Y, Width, Height)
   doc.text("Bloodgroup :", 25, 131); // Label "Name:"
   doc.setFont('calibre', 'normal'); // Reset font style to normal
   doc.setFontSize(10); // Reset font size to normal
   doc.text(`${employee.Bloodgroup}`, 70, 131); // (X, Y, Actual name)

//Department
   doc.setFontSize(12); // Set font size for labels
   doc.rect(20, 135, 160, 10);// (X, Y, Width, Height)
   doc.setFont('calibre', 'bold');
   doc.rect(20, 135, 45, 10);// (X, Y, Width, Height)
   doc.text("Department :", 25, 141); // Label "Name:"
   doc.setFont('calibre', 'normal'); // Reset font style to normal
   doc.setFontSize(10); // Reset font size to normal
   doc.text(`${employee.Department}`, 70, 141); // (X, Y, Actual name)

//Qualification
   doc.setFontSize(12); // Set font size for labels
   doc.rect(20, 145, 160, 10);// (X, Y, Width, Height)
   doc.setFont('calibre', 'bold');
   doc.rect(20, 145, 45, 10);// (X, Y, Width, Height)
   doc.text("Qualification :", 25, 151); // Label "Name:"
   doc.setFont('calibre', 'normal'); // Reset font style to normal
   doc.setFontSize(10); // Reset font size to normal
   doc.text(`${employee.Qualification}`, 70, 151); // (X, Y, Actual name)

   //Position
   doc.setFontSize(12); // Set font size for labels
   doc.rect(20, 155, 160, 10);// (X, Y, Width, Height)
   doc.setFont('calibre', 'bold');
   doc.rect(20, 155, 45, 10);// (X, Y, Width, Height)
   doc.text("Position :", 25, 161); // Label "Name:"
   doc.setFont('calibre', 'normal'); // Reset font style to normal
   doc.setFontSize(10); // Reset font size to normal
   doc.text(`${employee.Position}`, 70, 161); // (X, Y, Actual name)

   //DateOfHiring
   doc.setFontSize(12); // Set font size for labels
   doc.rect(20, 165, 160, 10);// (X, Y, Width, Height)
   doc.setFont('calibre', 'bold');
   doc.rect(20, 165, 45, 10);// (X, Y, Width, Height)
   doc.text("DateOfHiring :", 25, 171); // Label "Name:"
   doc.setFont('calibre', 'normal'); // Reset font style to normal
   doc.setFontSize(10); // Reset font size to normal
   doc.text(`${employee.DateOfHiring}`, 70, 171); // (X, Y, Actual name)

   //Salary
   doc.setFontSize(12); // Set font size for labels
   doc.rect(20, 175, 160, 10);// (X, Y, Width, Height)
   doc.setFont('calibre', 'bold');
   doc.rect(20, 175, 45, 10);// (X, Y, Width, Height)
   doc.text("Salary :", 25, 181); // Label "Name:"
   doc.setFont('calibre', 'normal'); // Reset font style to normal
   doc.setFontSize(10); // Reset font size to normal
   doc.text(`${employee.Salary}`, 70, 181); // (X, Y, Actual name)

    //NetSalary
    doc.setFontSize(12); // Set font size for labels
    doc.rect(20, 185, 160, 10);// (X, Y, Width, Height)
    doc.setFont('calibre', 'bold');
    doc.rect(20, 185, 45, 10);// (X, Y, Width, Height)
    doc.text("NetSalary :", 25, 191); // Label "Name:"
    doc.setFont('calibre', 'normal'); // Reset font style to normal
    doc.setFontSize(10); // Reset font size to normal
    doc.text(`${employee.NetSalary}`, 70, 191); // (X, Y, Actual name)

     //GrossSalary 
   doc.setFontSize(12); // Set font size for labels
   doc.rect(20, 195, 160, 10);// (X, Y, Width, Height)
   doc.setFont('calibre', 'bold');
   doc.rect(20, 195, 45, 10);// (X, Y, Width, Height)
   doc.text("GrossSalary :", 25, 201); // Label "Name:"
   doc.setFont('calibre', 'normal'); // Reset font style to normal
   doc.setFontSize(10); // Reset font size to normal
   doc.text(`${employee.GrossSalary}`, 70, 201); // (X, Y, Actual name)

    //allowance
    doc.setFontSize(12); // Set font size for labels
    doc.rect(20, 205, 160, 10);// (X, Y, Width, Height)
    doc.setFont('calibre', 'bold');
    doc.rect(20, 205, 45, 10);// (X, Y, Width, Height)
    doc.text("allowance :", 25, 211); // Label "Name:"
    doc.setFont('calibre', 'normal'); // Reset font style to normal
    doc.setFontSize(10); // Reset font size to normal
    doc.text(`${employee.allowance}`, 70, 211); // (X, Y, Actual name)

     //Deduction 
   doc.setFontSize(12); // Set font size for labels
   doc.rect(20, 215, 160, 10);// (X, Y, Width, Height)
   doc.setFont('calibre', 'bold');
   doc.rect(20, 215, 45, 10);// (X, Y, Width, Height)
   doc.text("Deduction :", 25, 221); // Label "Name:"
   doc.setFont('calibre', 'normal'); // Reset font style to normal
   doc.setFontSize(10); // Reset font size to normal
   doc.text(`${employee.Deduction}`, 70, 221); // (X, Y, Actual name)

    //PfEmployeeContribution 
    doc.setFontSize(12); // Set font size for labels
    doc.rect(20, 225, 160, 10);// (X, Y, Width, Height)
    doc.setFont('calibre', 'bold');
    doc.rect(20, 225, 45, 10);// (X, Y, Width, Height)
    doc.text("Pf Contribution :", 25, 231); // Label "Name:"
    doc.setFont('calibre', 'normal'); // Reset font style to normal
    doc.setFontSize(10); // Reset font size to normal
    doc.text(`${employee.PfEmployeeContribution}`, 70, 231); // (X, Y, Actual name)

     //LoanAmount 
     doc.setFontSize(12); // Set font size for labels
     doc.rect(20, 235, 160, 10);// (X, Y, Width, Height)
     doc.setFont('calibre', 'bold');
     doc.rect(20, 235, 45, 10);// (X, Y, Width, Height)
     doc.text("Loan Amount :", 25, 241); // Label "Name:"
     doc.setFont('calibre', 'normal'); // Reset font style to normal
     doc.setFontSize(10); // Reset font size to normal
     doc.text(`${employee.LoanAmount}`, 70, 241); // (X, Y, Actual name)

      //LoanRepaymentAmount 
    doc.setFontSize(12); // Set font size for labels
    doc.rect(20, 245, 160, 10);// (X, Y, Width, Height)
    doc.setFont('calibre', 'bold');
    doc.rect(20, 245, 45, 10);// (X, Y, Width, Height)
    doc.text("Loan Paid Amount :", 25, 251); // Label "Name:"
    doc.setFont('calibre', 'normal'); // Reset font style to normal
    doc.setFontSize(10); // Reset font size to normal
    doc.text(`${employee.LoanRepaymentAmount}`, 70, 251); // (X, Y, Actual name)

     //Vacations 
     doc.setFontSize(12); // Set font size for labels
     doc.rect(20, 255, 160, 10);// (X, Y, Width, Height)
     doc.setFont('calibre', 'bold');
     doc.rect(20, 255, 45, 10);// (X, Y, Width, Height)
     doc.text("Vacations :", 25, 261); // Label "Name:"
     doc.setFont('calibre', 'normal'); // Reset font style to normal
     doc.setFontSize(10); // Reset font size to normal
     doc.text(`${employee.Vacations}`, 70, 261); // (X, Y, Actual name)
 
   // Save the PDF with a specific name
   doc.save("salary_slip.pdf");
   console.log("Download PDF clicked");
 };
  }

  return (
    <div>
      <Header />
      <div className="arrow-back-container">
        <BiArrowBack
          className="backLoginForm fs-2 text-dark"
          onClick={() => navigate(-1)}
        />
      </div>
      <h2 className="mb-4 text-center entity-column">Details of {employee?.empName} </h2>
      <Container
        className="detail w-75 text-center"
        style={{
          height: "150vh",
          width: "50%",
          boxShadow:
            "0 10px 30px rgba(0, 0, 0, 0.3), 0 6px 10px rgba(0, 0, 0, 0.23)",
          marginBottom: "0",
          marginTop: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <div>
          <div className="d-flex w-120 flex-column">
            

           {firstColumnKeys
            .filter((key) => key !== "id")
            .map((key) => renderEmployeeRow(key, employee[key]))}
             <div className="d-flex w-150 flex-column">
          {secondColumnKeys
            .filter((key) => key !== "id")
            .map((key) => renderEmployeeRow(key, employee[key]))}
        </div>
          
          </div>
        </div>
        <div style={{ marginBottom: "10px", marginLeft: "auto" }}>
          <Button
            variant="primary"
            onClick={handleSalarySlipPdf}
            className="w-75"
            style={{ height: "40px", lineHeight: "25px" }}
          >
            <FaDownload style={{ marginRight: "5px" }} /> Salary Slip
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default ViewEmpProfile;