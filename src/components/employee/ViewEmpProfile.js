import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MDBContainer as Container, MDBBtn as Button } from "mdb-react-ui-kit";
import { FaDownload } from "react-icons/fa";
import Header from "../common/Header";
import jsPDF from "jspdf";
import logo from "../../asset/images/hhslogo.jpg";
import { BiArrowBack } from "react-icons/bi";
import axios from "axios";
import { APIS } from "../constants/api";

const ViewEmpProfile = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const navigate = useNavigate();

  const fetctEmployeeById = async () => {
    try {
      const response = await axios.get(`${APIS.GETEMPLOYEEBYID}/${id}`);
      // console.log("employee by id",response.data);
      setEmployee(response.data);
    } catch (error) {
      console.error("Error fetching property:", error);
    }
  };
  useEffect(() => {
    fetctEmployeeById();
  }, []);
  const humanReadableNames = {
    //  emp_id;
    empName: "Employee Name",
    department: "Department",
    dob: "Date of Birth",
    gender: "Gender",
    contactNum: "Mobile No.",
    bloodgroup: "Blood Group",
    address: "Address",
    aadhar: "Aadhar No.",
    pan: "Pan No",
    qualification: "Qualification",
    dateOfHiring: "Date of Joining",
    position: "Position",
    basicSalary: "Basic Salary",
    netSalary: "Net Salary",
    grossSalary: "Gross Salary",
    allowance: "Allowance",
    deduction: "Deduction",
    pfEmployeeContribution: "PF",
    loanAmount: "Loan Amount",
    loanRepaymentAmount: "Repayment Amount",
    inventoryItems: "Inventoy Item",
    status: "Status",
  };

  const renderEmployeeRow = (key, value) => {
    if(key==="emp_id"){
      return null;
      }
   return (
      <div key={key} className="d-flex entity-row">
        <div className="entity-name">
          {/* {key.replace(/([A-Z])/g, " $1").trim()}: */}
          {humanReadableNames[key] || key}:
        </div>
        <div
          className="entity-value"
          style={{ whiteSpace: "nowrap", textOverflow: "ellipsis" }}
        >
          {value}
        </div>
      </div>
    );
  }

  if (!employee) {
    return <div>Loading...</div>; // You can display a loading indicator here
  }
  const employeeKeys = Object.keys(employee);
  const halfLength = Math.ceil(employeeKeys.length / 2);
  const firstColumnKeys = employeeKeys.slice(0, halfLength);
  const secondColumnKeys = employeeKeys.slice(halfLength);

  const handleSalarySlipPdf = () => {
    // Create a new jsPDF instance
    const doc = new jsPDF("p", "mm", "a4");
    const logoImage = new Image();
    logoImage.src = logo;
    logoImage.src = logo; // Use the imported logo image
    // Wait for the image to load before rendering it
    logoImage.onload = () => {
      // Add the logo image to the PDF
      doc.addImage(
        logoImage,
        "JPEG", // You can specify the format here (e.g., "PNG", "JPEG", etc.)
        9, // X position
        12, // Y position
        45, // Image width
        30 // Image height
      );

      //Header Part
      doc.rect(13, 9, 186, 246);
      doc.setFontSize(15);
      doc.setTextColor(24, 94, 26); // RGB color (dark green)
      doc.setFont("helvetica", "bold"); // Use the 'helvetica' font family
      doc.text("Hazrath Hameed Shah & Hazrath Muhib Shah Khadri(RA),", 52, 18); // Adjust the Y position as needed
      doc.text("Dargahs & Allied Waqf Institutions", 85, 24);
      doc.setFont("helvetica", "normal"); // Reset font style to normal
      doc.setFontSize(10);
      doc.setTextColor(75, 93, 183); // RGB color (Blue)
      doc.text(
        "No.3,1st Floor,Hazrath Hameed Shah Complex,Cubbonpet Main Road,Banglore - 560 002",
        53,
        31
      );
      doc.text("(Register Under Karnataka State Board of Auqaf)", 73, 36);
      doc.setTextColor(247, 79, 160);
      doc.text("Tel : 080-22211356 / 22240309", 145, 42);

      // Reset text color to default (black)
      doc.rect(13, 45, 186, 10); // (X, Y, Width, Height)
      doc.setTextColor(59, 48, 182);
      doc.setFontSize(14);
      doc.setFont("calibre", "bold");
      doc.text(`Salary Slip of Employee: ${employee.empName}`, 25, 52); // Adjust the Y position as needed
      doc.setFont("calibre", "normal");
      doc.setTextColor(0);

      // Add tenant details here...

      //emp_id
      doc.setFontSize(12); // Set font size for labels
      doc.setFont("calibre", "bold");
      doc.rect(13, 55, 55, 10); // (X, Y, Width, Height)
      doc.text("Employee Id :", 25, 61); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.text(`${employee.emp_id}`, 70, 61); // (X, Y,Actual name)

      //ContactNo
      doc.setFont("calibre", "bold");
      doc.rect(13, 65, 186, 10); // (X, Y, Width, Height)
      doc.rect(13, 65, 55, 10); // (X, Y, Width, Height)
      doc.text("Contact No :", 25, 71); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.text(`${employee.contactNum}`, 70, 71); //(X, Y, Actual name)

      // DateofBirth
      doc.setFont("calibre", "bold");
      doc.rect(13, 75, 55, 10); // (X, Y, Width, Height)
      doc.text("Date of Birth :", 25, 81); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.text(`${employee.dob}`, 70, 81); // (X, Y, Actual name)

      //Address
      doc.rect(13, 85, 186, 10); // (X, Y, Width, Height)
      doc.setFont("calibre", "bold");
      doc.rect(13, 85, 55, 10); // (X, Y, Width, Height)
      doc.text("Address:", 25, 91); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.text(`${employee.address}`, 70, 91); // (X, Y, Actual name)

      //Gender
      doc.setFont("calibre", "bold");
      doc.rect(13, 95, 55, 10); // (X, Y, Width, Height)
      doc.text("Gender :", 25, 101); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.text(`${employee.gender}`, 70, 101); // (X, Y, Actual name)

      //AadharNo
      doc.rect(13, 105, 186, 10); // (X, Y, Width, Height)
      doc.setFont("calibre", "bold");
      doc.rect(13, 105, 55, 10); // (X, Y, Width, Height)
      doc.text("Aadhar No :", 25, 111); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.text(`${employee.aadhar}`, 70, 111); // (X, Y, Actual name)

      //PanNo
      doc.setFont("calibre", "bold");
      doc.rect(13, 115, 55, 10); // (X, Y, Width, Height)
      doc.text("Pan No :", 25, 121); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.text(`${employee.pan}`, 70, 121); // (X, Y, Actual name)

      //Bloodgroup
      doc.rect(13, 125, 186, 10); // (X, Y, Width, Height)
      doc.setFont("calibre", "bold");
      doc.rect(13, 125, 55, 10); // (X, Y, Width, Height)
      doc.text("Bloodgroup :", 25, 131); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.text(`${employee.bloodgroup}`, 70, 131); // (X, Y, Actual name)

      //Department
      doc.setFont("calibre", "bold");
      doc.rect(13, 135, 55, 10); // (X, Y, Width, Height)
      doc.text("Department :", 25, 141); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.text(`${employee.department}`, 70, 141); // (X, Y, Actual name)

      //Qualification
      doc.rect(13, 145, 186, 10); // (X, Y, Width, Height)
      doc.setFont("calibre", "bold");
      doc.rect(13, 145, 55, 10); // (X, Y, Width, Height)
      doc.text("Qualification :", 25, 151); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.text(`${employee.qualification}`, 70, 151); // (X, Y, Actual name)

      //position
      doc.setFont("calibre", "bold");
      doc.rect(13, 155, 55, 10); // (X, Y, Width, Height)
      doc.text("position :", 25, 161); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.text(`${employee.position}`, 70, 161); // (X, Y, Actual name)

      //DateOfHiring
      doc.rect(13, 165, 186, 10); // (X, Y, Width, Height)
      doc.setFont("calibre", "bold");
      doc.rect(13, 165, 55, 10); // (X, Y, Width, Height)
      doc.text("Date Of Hiring :", 25, 171); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.text(`${employee.dateOfHiring}`, 70, 171); // (X, Y, Actual name)

      //basicSalary
      doc.setFont("calibre", "bold");
      doc.rect(13, 175, 55, 10); // (X, Y, Width, Height)
      doc.text("Basic Salary :", 25, 181); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.text(`${employee.basicSalary}`, 70, 181); // (X, Y, Actual name)

      //NetSalary
      doc.rect(13, 185, 186, 10); // (X, Y, Width, Height)
      doc.setFont("calibre", "bold");
      doc.rect(13, 185, 55, 10); // (X, Y, Width, Height)
      doc.text("NetSalary :", 25, 191); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.text(`${employee.netSalary}`, 70, 191); // (X, Y, Actual name)

      //GrossSalary
      doc.setFont("calibre", "bold");
      doc.rect(13, 195, 55, 10); // (X, Y, Width, Height)
      doc.text("GrossSalary :", 25, 201); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.text(`${employee.grossSalary}`, 70, 201); // (X, Y, Actual name)

      //allowance
      doc.rect(13, 205, 186, 10); // (X, Y, Width, Height)
      doc.setFont("calibre", "bold");
      doc.rect(13, 205, 55, 10); // (X, Y, Width, Height)
      doc.text("Allowance :", 25, 211); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.text(`${employee.allowance}`, 70, 211); // (X, Y, Actual name)

      //Deduction

      doc.setFont("calibre", "bold");
      doc.rect(13, 215, 55, 10); // (X, Y, Width, Height)
      doc.text("Deduction :", 25, 221); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.text(`${employee.deduction}`, 70, 221); // (X, Y, Actual name)

      //PfEmployeeContribution
      doc.rect(13, 225, 186, 10); // (X, Y, Width, Height)
      doc.setFont("calibre", "bold");
      doc.rect(13, 225, 55, 10); // (X, Y, Width, Height)
      doc.text("Pf Contribution :", 25, 231); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.text(`${employee.pfEmployeeContribution}`, 70, 231); // (X, Y, Actual name)

      //LoanAmount

      doc.setFont("calibre", "bold");
      doc.rect(13, 235, 55, 10); // (X, Y, Width, Height)
      doc.text("Loan Amount :", 25, 241); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.text(`${employee.loanAmount}`, 70, 241); // (X, Y, Actual name)

      //LoanRepaymentAmount
      doc.rect(13, 245, 186, 10); // (X, Y, Width, Height)
      doc.setFont("calibre", "bold");
      doc.rect(13, 245, 55, 10); // (X, Y, Width, Height)
      doc.text("Loan Paid Amount :", 25, 251); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.text(`${employee.loanRepaymentAmount}`, 70, 251); // (X, Y, Actual name)

      // Save the PDF with a specific name
      doc.save("salary_slip.pdf");
      console.log("emp pdf data", employee);
      console.log("Download PDF clicked");
    };
  };

  return (
    <div>
      <Header />
      <div className="maindetails">
        <div className="arrow-back-container">
          <BiArrowBack className="addbacklogo" onClick={() => navigate(-1)} />
        </div>
        <h2 className="propertyview">Details of {employee?.empName} </h2>
      </div>
      <Container className="detailemp">
        <div className="columnarrangement">
          <div className="subcolumnarrangement">
            {firstColumnKeys
              .filter((key) => key !== "id")
              .map((key) => renderEmployeeRow(key, employee[key]))}
          </div>
          <div className="subcolumnarrangement1">
            {secondColumnKeys
              .filter((key) => key !== "id")
              .map((key) => renderEmployeeRow(key, employee[key]))}
          </div>
        </div>
        <div>
          <Button variant="primary" onClick={handleSalarySlipPdf} className="salarybtn">
            <FaDownload /> Salary Slip
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default ViewEmpProfile;
