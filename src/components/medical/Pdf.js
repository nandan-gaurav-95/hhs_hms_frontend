import React, { useState } from 'react'
import jsPDF from "jspdf";
import {
    MDBContainer,
    MDBRow as Row,
    MDBCol as Col,
    MDBInput as Input,
    MDBBtn as Button,
  } from "mdb-react-ui-kit";
  import  "react-select-search/style.css";
import logo from "../../asset/images/hhslogo.jpg";
import { FaDownload } from "react-icons/fa";
import Header from "../common/Header";
import { BiArrowBack } from "react-icons/bi";
import {useNavigate, useParams } from "react-router-dom";


const Pdf = () => {
    const initialState = {};
    const [ambulanceData, setAmbulanceData]=useState(null);
    const [dargahPdfData, setdargahPdfData]=useState(null);

    const navigate = useNavigate();


    // Rent pdf
  const handleAmbulancePdf = () => {
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
      doc.text("Hazrath Hameed Shah & Hazrath Muhib Shah Khadri", 55, 20); // Adjust the Y position as needed
      doc.text("(R.A.) Dargahs & Allied Waqf Instititions",65,28)
      doc.setFont('helvetica', 'normal'); // Reset font style to normal
      doc.setFontSize(9);
      doc.setTextColor(0);
      doc.text("No.2,Hazrath Hameed Shah Complex,Cubbonpet Main Road,Banglore-2, Ph: 22211356/22240309",45,40)
  
  
  //PDF Heading 
 
      doc.setFont('helvetica', 'bold'); // Use the 'helvetica' font family
      doc.setFontSize(10);
      doc.text("AMBULANCE VAN", 80, 50); // Adjust the Y position as needed 
      doc.text("RECEIPT", 90, 60); 
      doc.setFont('helvetica', 'normal'); // Reset font style to normal
    
    // Reset text color to default (black)
    doc.setTextColor(0);
    // doc.rect(20, 50, 160, 105); // (X, Y, Width, Height)
    doc.setFont('calibre', 'bold'); 
    doc.text("Date :", 170, 60); // Adjust the Y position as needed
    doc.setFont('calibre','normal');

   //Received with the thanks from :
   doc.setFontSize(12); // Set font size for labels
   doc.setFont('calibre', 'bold');
   doc.text("Received with the thanks from :", 25, 71); // Label "Name:"
   doc.setFont('calibre', 'normal'); // Reset font style to normal
   doc.setFontSize(10); // Reset font size to normal
   doc.text(`${ambulanceData}`, 85, 71); // (X, Y,Actual name)

//on Account of
    doc.setFontSize(12); // Set font size for labels
    doc.setFont('calibre', 'bold');
    doc.text("On Account of :", 25, 91); // Label "Name:"
    doc.setFont('calibre', 'normal'); // Reset font style to normal
    doc.setFontSize(10); // Reset font size to normal
    doc.text(`${ambulanceData}`, 55, 91); //(X, Y, Actual name)

//Rs
    doc.setFontSize(12); // Set font size for labels
    doc.setFont('calibre', 'bold');
    doc.text("Rs.", 25, 101); // Label "Name:"
    doc.setFont('calibre', 'normal'); // Reset font style to normal
    doc.setFontSize(10); // Reset font size to normal
    doc.text(`${ambulanceData}`, 35, 101); // (X, Y, Actual name)

    //Sign
    doc.setFontSize(12); // Set font size for labels
    doc.setFont('calibre', 'bold');
    doc.text("Signature", 175, 101); // Label "Name:"
  

    // Save the PDF with a specific name
    doc.save("ambulance_receipt.pdf");
    // console.log("Download PDF clicked");
  };
  };
  //dargah complex pdf
  const handleDargahComplexPdf = () => {

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
    doc.text("HHS & HMS DARGAH COMPLEX, CUBBONPET,", 55, 20); // Adjust the Y position as needed
    doc.text("BANGLORE - 560 002.", 85, 30); // Adjust the Y position as needed
    doc.setTextColor(0);

    //PDF Heading 
    doc.setFont('helvetica', 'bold'); // Use the 'helvetica' font family
    doc.setFontSize(10);
    doc.text("Receipt No.", 20, 50); // Adjust the Y position as needed 
    doc.text(`${dargahPdfData}`, 35, 50); 
    doc.text("Date :", 155, 50);
    doc.text(`${dargahPdfData}`, 155, 50); 
    doc.setFont('helvetica', 'normal'); // Reset font style to normal


 //Received with the thanks from :
   doc.setFontSize(12); // Set font size for labels
   doc.setFont('calibre', 'bold');
   doc.text("Received with the thanks from :", 25, 71); // Label "Name:"
   doc.setFont('calibre', 'normal'); // Reset font style to normal
   doc.setFontSize(10); // Reset font size to normal
   doc.text(`${ambulanceData}`, 85, 71); // (X, Y,Actual name)


    doc.save("dargah_complex.pdf");
         };
  }

//hhs complex pdf
const handleHHSComplexPdf = () => {
};

//blood centre pdf
const handleBloodCenterPdf = () => {
};

//parking pdf
const handleHHSParkingrPdf = () => {
};
return (
    <div className="">
      <Header/>
      <div className="arrow-back-container">
        <BiArrowBack
          className="backLoginForm fs-2 text-dark"
          onClick={() => navigate(-1)}
        />
          </div>
        <h2 className="mb-4 text-center entity-column">
      All PDF
    </h2>

      <div style={{ marginBottom: "20px", marginLeft: "auto" }}>
        <Button
          variant="primary"
          onClick={handleAmbulancePdf}
          style={{ height: "60px", width: "150px", lineHeight: "25px" }}
        >
          <FaDownload style={{ marginRight: "5px" }} /> Ambulance Van
        </Button>
     
        <Button
          variant="primary"
          onClick={handleDargahComplexPdf}
          style={{ height: "60px", width: "150px", lineHeight: "25px" }}
        >
          <FaDownload style={{ marginRight: "5px" }} /> Dargah Complex
        </Button>
        <Button
          variant="primary"
          onClick={handleHHSComplexPdf}
          style={{ height: "60px", width: "150px", lineHeight: "25px" }}
        >
          <FaDownload style={{ marginRight: "5px" }} /> HHS Complex
        </Button>
        <Button
          variant="primary"
          onClick={handleBloodCenterPdf}
          style={{ height: "60px", width: "150px", lineHeight: "25px" }}
        >
          <FaDownload style={{ marginRight: "5px" }} /> Blood Center
        </Button>
        <Button
          variant="primary"
          onClick={handleHHSParkingrPdf}
          style={{ height: "60px", width: "150px", lineHeight: "25px" }}
        >
          <FaDownload style={{ marginRight: "5px" }} /> HHS & HMS Parking
        </Button>
      </div>
      </div>

  );
};

export default Pdf;
