import React,{useState,useEffect} from "react";
import {useNavigate, useParams } from "react-router-dom";

import Header from "../common/Header";
import jsPDF from "jspdf";
import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBBtn as Button,
  // MDBInput as Input,
} from "mdb-react-ui-kit";
import logo from "../../asset/images/hhslogo.jpg";
import { FaDownload } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { APIS } from "../constants/api";
import axios from "axios";

const ViewTenantDetail = () => {
  const { id } = useParams();
  
  const [tenantToShow, setTenantToShow] = useState(null);
  const navigate = useNavigate();


  const fetctTenantById = async ()=>{
    try {
      const response= await axios.get(`${APIS.GETTENANTBYID}/${id}`);
      console.log("hiiii",response.data);
      setTenantToShow(response.data);

    } catch (error) {
      console.error("Error fetching property:", error);
    }

  }
  useEffect(()=>{
    fetctTenantById();
  },[]);

  if (!tenantToShow) {
    return <div>Property not found.</div>;
  }

  const renderTenantRow = (key, value) => (
    <div key={key} className="d-flex entity-row">
      <div className="entity-name">
        {key.replace(/([A-Z])/g, " $1").trim()}:
      </div>
      <div className="entity-value">{value}</div>
    </div>
  );

// Rent pdf
  const handleRentPdf = () => {
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
    doc.text("Rent Details", 50, 40); // Adjust the Y position as needed
    doc.setFont('helvetica', 'normal'); // Reset font style to normal
    
    // Reset text color to default (black)
    doc.setTextColor(0);
    doc.rect(20, 50, 160, 105); // (X, Y, Width, Height)
    doc.setFont('calibre', 'bold'); 
    doc.text(`Details of Shop No: ${tenantToShow.ShopNo}`, 25, 60); // Adjust the Y position as needed
    doc.setFont('calibre','normal');

   // Add tenant details here...
 
//Name
   doc.setFontSize(12); // Set font size for labels
   doc.setFont('calibre', 'bold');
   doc.rect(20, 65, 160, 10);// (X, Y, Width, Height)
   doc.rect(20, 65, 45, 10);// (X, Y, Width, Height)
   doc.text("Name :", 25, 71); // Label "Name:"
   doc.setFont('calibre', 'normal'); // Reset font style to normal
   doc.setFontSize(10); // Reset font size to normal
   doc.text(`${tenantToShow.Name}`, 70, 71); // (X, Y,Actual name)

//contact no
    doc.setFontSize(12); // Set font size for labels
    doc.setFont('calibre', 'bold');
    doc.rect(20, 75, 160, 10);// (X, Y, Width, Height)
    doc.rect(20, 75, 45, 10);// (X, Y, Width, Height)
    doc.text("Contact No :", 25, 81); // Label "Name:"
    doc.setFont('calibre', 'normal'); // Reset font style to normal
    doc.setFontSize(10); // Reset font size to normal
    doc.text(`${tenantToShow.ContactNo}`, 70, 81); //(X, Y, Actual name)

//Address
    doc.setFontSize(12); // Set font size for labels
    doc.setFont('calibre', 'bold');
    doc.rect(20, 85, 160, 10);// (X, Y, Width, Height)
    doc.rect(20, 85, 45, 10);// (X, Y, Width, Height)
    doc.text("Address :", 25, 91); // Label "Name:"
    doc.setFont('calibre', 'normal'); // Reset font style to normal
    doc.setFontSize(10); // Reset font size to normal
    doc.text(`${tenantToShow.Address}`, 70, 91); // (X, Y, Actual name)

//CollectedRent
    doc.setFontSize(12); // Set font size for labels
    doc.rect(20, 95, 160, 10);// (X, Y, Width, Height)
    doc.setFont('calibre', 'bold');
    doc.rect(20, 95, 45, 10);// (X, Y, Width, Height)
    doc.text("Collected Rent:", 25, 101); // Label "Name:"
    doc.setFont('calibre', 'normal'); // Reset font style to normal
    doc.setFontSize(10); // Reset font size to normal
    doc.text(`${tenantToShow.CollectedRent}`, 70, 101); // (X, Y, Actual name)

//Rent Due
    doc.setFontSize(12); // Set font size for labels
    doc.rect(20, 105, 160, 10);// (X, Y, Width, Height)
    doc.setFont('calibre', 'bold');
    doc.rect(20, 105, 45, 10);// (X, Y, Width, Height)
    doc.text("Rent Due :", 25, 111); // Label "Name:"
    doc.setFont('calibre', 'normal'); // Reset font style to normal
    doc.setFontSize(10); // Reset font size to normal
    doc.text(`${tenantToShow.RentDue}`, 70, 111); // (X, Y, Actual name)

//Deposit
    doc.setFontSize(12); // Set font size for labels
    doc.rect(20, 105, 160, 10);// (X, Y, Width, Height)
    doc.setFont('calibre', 'bold');
    doc.rect(20, 115, 45, 10);// (X, Y, Width, Height)
    doc.text("Deposit :", 25, 121); // Label "Name:"
    doc.setFont('calibre', 'normal'); // Reset font style to normal
    doc.setFontSize(10); // Reset font size to normal
    doc.text(`${tenantToShow.Deposit}`, 70, 121); // (X, Y, Actual name)

//TotalBill
    doc.setFontSize(12); // Set font size for labels
    doc.rect(20, 125, 160, 10);// (X, Y, Width, Height)
    doc.setFont('calibre', 'bold');
    doc.rect(20, 125, 45, 10);// (X, Y, Width, Height)
    doc.text("TotalBill :", 25, 131); // Label "Name:"
    doc.setFont('calibre', 'normal'); // Reset font style to normal
    doc.setFontSize(10); // Reset font size to normal
    doc.text(`${tenantToShow.TotalBill}`, 70, 131); // (X, Y, Actual name)

//CollectionDetails
    doc.setFontSize(12); // Set font size for labels
    doc.rect(20, 135, 160, 10);// (X, Y, Width, Height)
    doc.setFont('calibre', 'bold');
    doc.rect(20, 135, 45, 10);// (X, Y, Width, Height)
    doc.text("Collection Details :", 25, 141); // Label "Name:"
    doc.setFont('calibre', 'normal'); // Reset font style to normal
    doc.setFontSize(10); // Reset font size to normal
    doc.text(`${tenantToShow.CollectionDetails}`, 70, 141); // (X, Y, Actual name)

//PaymentMethod
    doc.setFontSize(12); // Set font size for labels
    doc.rect(20, 145, 160, 10);// (X, Y, Width, Height)
    doc.setFont('calibre', 'bold');
    doc.rect(20, 145, 45, 10);// (X, Y, Width, Height)
    doc.text("Payment Method :", 25, 151); // Label "Name:"
    doc.setFont('calibre', 'normal'); // Reset font style to normal
    doc.setFontSize(10); // Reset font size to normal
    doc.text(`${tenantToShow.PaymentMethod}`, 70, 151); // (X, Y, Actual name)

    // Save the PDF with a specific name
    doc.save("rent_details.pdf");
    console.log("Download PDF clicked");
  };
  };


  //Electricity bill pdf
  const handleEleBillPdf = () => {
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
     doc.text("Electricity Bill Details", 50, 40); // Adjust the Y position as needed
     doc.setFont('helvetica', 'normal'); // Reset font style to normal
     
     // Reset text color to default (black)
     doc.setTextColor(0);
     doc.rect(20, 50, 160, 75); // (X, Y, Width, Height)
     doc.setFont('calibre', 'bold'); 
     doc.text(`Details of Shop No: ${tenantToShow.ShopNo}`, 25, 60); // Adjust the Y position as needed
     doc.setFont('calibre','normal');
 
    // Add tenant details here...
  
 //Name
    doc.setFontSize(12); // Set font size for labels
    doc.setFont('calibre', 'bold');
    doc.rect(20, 65, 160, 10);// (X, Y, Width, Height)
    doc.rect(20, 65, 45, 10);// (X, Y, Width, Height)
    doc.text("Name :", 25, 71); // Label "Name:"
    doc.setFont('calibre', 'normal'); // Reset font style to normal
    doc.setFontSize(10); // Reset font size to normal
    doc.text(`${tenantToShow.Name}`, 70, 71); // (X, Y,Actual name)
 
 //contact no
     doc.setFontSize(12); // Set font size for labels
     doc.setFont('calibre', 'bold');
     doc.rect(20, 75, 160, 10);// (X, Y, Width, Height)
     doc.rect(20, 75, 45, 10);// (X, Y, Width, Height)
     doc.text("Contact No :", 25, 81); // Label "Name:"
     doc.setFont('calibre', 'normal'); // Reset font style to normal
     doc.setFontSize(10); // Reset font size to normal
     doc.text(`${tenantToShow.ContactNo}`, 70, 81); //(X, Y, Actual name)
 
 //Address
     doc.setFontSize(12); // Set font size for labels
     doc.setFont('calibre', 'bold');
     doc.rect(20, 85, 160, 10);// (X, Y, Width, Height)
     doc.rect(20, 85, 45, 10);// (X, Y, Width, Height)
     doc.text("Address :", 25, 91); // Label "Name:"
     doc.setFont('calibre', 'normal'); // Reset font style to normal
     doc.setFontSize(10); // Reset font size to normal
     doc.text(`${tenantToShow.Address}`, 70, 91); // (X, Y, Actual name)
 
 //ElectricityDue
     doc.setFontSize(12); // Set font size for labels
     doc.rect(20, 95, 160, 10);// (X, Y, Width, Height)
     doc.setFont('calibre', 'bold');
     doc.rect(20, 95, 45, 10);// (X, Y, Width, Height)
     doc.text("Electricity Due :", 25, 101); // Label "Name:"
     doc.setFont('calibre', 'normal'); // Reset font style to normal
     doc.setFontSize(10); // Reset font size to normal
     doc.text(`${tenantToShow.ElectricityDue}`, 70, 101); // (X, Y, Actual name)
 
 //Total Bill
     doc.setFontSize(12); // Set font size for labels
     doc.rect(20, 105, 160, 10);// (X, Y, Width, Height)
     doc.setFont('calibre', 'bold');
     doc.rect(20, 105, 45, 10);// (X, Y, Width, Height)
     doc.text("Total Bill :", 25, 111); // Label "Name:"
     doc.setFont('calibre', 'normal'); // Reset font style to normal
     doc.setFontSize(10); // Reset font size to normal
     doc.text(`${tenantToShow.TotalBill}`, 70, 111); // (X, Y, Actual name)
 
 //PaymentMethod
     doc.setFontSize(12); // Set font size for labels
     doc.rect(20, 105, 160, 10);// (X, Y, Width, Height)
     doc.setFont('calibre', 'bold');
     doc.rect(20, 115, 45, 10);// (X, Y, Width, Height)
     doc.text("PaymentMethod :", 25, 121); // Label "Name:"
     doc.setFont('calibre', 'normal'); // Reset font style to normal
     doc.setFontSize(10); // Reset font size to normal
     doc.text(`${tenantToShow.PaymentMethod}`, 70, 121); // (X, Y, Actual name)
 
 //CollectionDetails
    //  doc.setFontSize(12); // Set font size for labels
    //  doc.rect(20, 125, 160, 10);// (X, Y, Width, Height)
    //  doc.setFont('calibre', 'bold');
    //  doc.rect(20, 125, 45, 10);// (X, Y, Width, Height)
    //  doc.text("CollectionDetails :", 25, 131); // Label "Name:"
    //  doc.setFont('calibre', 'normal'); // Reset font style to normal
    //  doc.setFontSize(10); // Reset font size to normal
    //  doc.text(`${tenantToShow.CollectionDetails}`, 70, 131); // (X, Y, Actual name)
 
     // Save the PDF with a specific name
     doc.save("electricity-bill.pdf");
     console.log("Download PDF clicked");
   };
  };

  return (
    <div>
      <Header />
      <div className="arrow-back-container">
        <BiArrowBack
          className="backLoginForm fs-2 text-dark"
          onClick={() => navigate(-1)}
        />
      </div>
      <h2 className="mb-4 text-center entity-column">Details of {tenantToShow?.tenantName}</h2>

      <Container
        className="detail w-75 text-center"
        style={{
          height: "110vh",
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
          <div className="d-flex w-100 flex-column">
            {Object.entries(tenantToShow).map(([key, value]) =>
              renderTenantRow(key, value)
            )}
            <div style={{ marginBottom: "10px" }}>
              <Button
                variant="primary"
                onClick={handleRentPdf}
                className="w-25"
              >
                <FaDownload /> PDF for Rent
              </Button>
              <Button
                variant="primary"
                onClick={handleEleBillPdf}
                className="w-25 mt-3"
              >
                <FaDownload /> PDF for Electricity Bill
              </Button>
            </div>
          </div>
        </div>
        {/* </div> */}
      </Container>
    </div>
  );
};

export default ViewTenantDetail;
