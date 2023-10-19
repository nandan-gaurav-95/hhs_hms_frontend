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
    const [bloodCenter, setBloodCenter]=useState(null);
    const [parking, setParking]=useState(null);
    const [hhscomplexData, setHHSComplexData] = useState(null);

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
      doc.rect(10,9,186,103);
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
      doc.setFontSize(15);
      doc.text("AMBULANCE VAN", 80, 50); // Adjust the Y position as needed 
      doc.text("RECEIPT", 90, 57); 
      doc.setFont('helvetica', 'normal'); // Reset font style to normal
    
    // Reset text color to default (black)
    doc.setTextColor(0);
    // doc.rect(20, 50, 160, 105); // (X, Y, Width, Height)
    doc.setFont('calibre', 'bold'); 
    doc.text("Date :", 150, 60); // Adjust the Y position as needed
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
    doc.text("Signature", 150, 101); // Label "Name:"
  

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
    doc.rect(10,9,175,153);
    doc.setTextColor(255, 138, 0); // RGB color (red)
    doc.setFont('helvetica', 'bold'); // Use the 'helvetica' font family
    doc.text("HHS & HMS DARGAH COMPLEX, CUBBONPET,", 55, 20); // Adjust the Y position as needed
    doc.text("BANGLORE - 560 002.", 85, 30); // Adjust the Y position as needed
    doc.setTextColor(0);

    //PDF Heading 
    doc.setFont('helvetica', 'bold'); // Use the 'helvetica' font family
    doc.setFontSize(10);
    doc.text("Receipt No.", 20, 50); // Adjust the Y position as needed 
    doc.setFont('helvetica', 'normal');
    doc.text(`${dargahPdfData}`, 50, 50); 
    doc.setFont('helvetica', 'bold'); // Use the 'helvetica' font family
    doc.text("Date :", 155, 50);
    doc.setFont('helvetica', 'normal');
    doc.text(`${dargahPdfData}`, 170, 50); 


 //Received from :
   doc.setFontSize(12); // Set font size for labels
   doc.setFont('calibre', 'bold');
   doc.text("Received from :", 20, 71); // Label "Name:"
   doc.setFont('calibre', 'normal'); // Reset font style to normal
   doc.setFontSize(10); // Reset font size to normal
   doc.text(`${dargahPdfData}`,55, 71); // (X, Y,Actual name)

    //sum of rupees
    doc.setFontSize(12); // Set font size for labels
    doc.setFont('calibre', 'bold');
    doc.text("a sum of Rupees:", 85, 91); // Label "Name:"
    doc.setFont('calibre', 'normal'); // Reset font style to normal
    doc.setFontSize(10); // Reset font size to normal
    doc.text(`${dargahPdfData}`, 130, 91); // (X, Y,Actual name)

    //rupees in the words
    doc.setFontSize(12); // Set font size for labels
    doc.setFont('calibre', 'bold');
    doc.text("Rupees in the words:", 20, 101); // Label "Name:"
    doc.setFont('calibre', 'normal'); // Reset font style to normal
    doc.setFontSize(10); // Reset font size to normal
    doc.text(`${dargahPdfData}`, 65, 101); // (X, Y,Actual name)

      //cash/DD/premises
      doc.setFontSize(12); // Set font size for labels
      doc.setFont('calibre', 'bold');
      doc.text("by Cash / D.D. towards the rent for shop / Premises No.", 20, 121); // Label "Name:"
      doc.setFont('calibre', 'normal'); // Reset font style to normal
      doc.setFontSize(10); // Reset font size to normal
      doc.text(`${dargahPdfData}`, 125, 121); // (X, Y,Actual name)

      //for the month 
      doc.setFontSize(12); // Set font size for labels
      doc.setFont('calibre', 'bold');
      doc.text("For the Month of", 20, 131); // Label "Name:"
      doc.setFont('calibre', 'normal'); // Reset font style to normal
      doc.setFontSize(10); // Reset font size to normal
      doc.text(`${dargahPdfData}`, 55, 131); // (X, Y,Actual name)

       //cheque/DD no
       doc.setFontSize(12); // Set font size for labels
       doc.setFont('calibre', 'bold');
       doc.text("Cheque / D.D. No.", 20, 141); // Label "Name:"
       doc.setFont('calibre', 'normal'); // Reset font style to normal
       doc.setFontSize(10); // Reset font size to normal
       doc.text(`${dargahPdfData}`, 60, 141); // (X, Y,Actual name)

        //dated
        doc.setFontSize(12); // Set font size for labels
        doc.setFont('calibre', 'bold');
        doc.text("Dated :", 100, 141); // Label "Name:"
        doc.setFont('calibre', 'normal'); // Reset font style to normal
        doc.setFontSize(10); // Reset font size to normal
        doc.text(`${dargahPdfData}`, 115, 141); // (X, Y,Actual name)

       //drawn on
       doc.setFontSize(12); // Set font size for labels
       doc.setFont('calibre', 'bold');
       doc.text("Drawn on: ", 20, 151); // Label "Name:"
       doc.setFont('calibre', 'normal'); // Reset font style to normal
       doc.setFontSize(10); // Reset font size to normal
       doc.text(`${dargahPdfData}`, 45, 151); // (X, Y,Actual name)

        //sign
        doc.setFontSize(12); // Set font size for labels
        doc.setFont('calibre', 'bold');
        doc.text("Signature of the Receiver", 130, 151); // Label "Name:"
        

    doc.save("dargah_complex.pdf");
         };
  }

//hhs complex pdf
const handleHHSComplexPdf = () => {
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
      10, // X position
      10, // Y position
      50, // Image width
      25 // Image height
    );

    //Header Part
    doc.rect(12,9,186,133);
    doc.setTextColor(255, 138, 0); // RGB color (red)
    doc.setFont("helvetica", "bold"); // Use the 'helvetica' font family
    doc.text("HAZRATH HAMEED SHAH COMPLEX, CUBBONPET,", 55, 20); // Adjust the Y position as needed
    doc.text(" BANGLORE - 560 002", 90, 28);
    doc.setFont("helvetica", "normal"); // Reset font style to normal
    doc.setFontSize(9);
    doc.setTextColor(0);

    //PDF Heading

    doc.setFont("helvetica", "bold"); // Use the 'helvetica' font family
    doc.rect(30, 40, 35, 10); // (X, Y, Width, Height)
    doc.text("No.", 31, 47);
    doc.rect(70, 40, 35, 10); // (X, Y, Width, Height)
    doc.text("L.F.No.", 71, 47);
    doc.rect(110, 40, 35, 10); // (X, Y, Width, Height)
    doc.text("R.R.No.", 112, 47);
    doc.rect(150, 40, 35, 10); // (X, Y, Width, Height)
    doc.text("Date", 152, 47);
    doc.setFontSize(14);

    //Received from :

    doc.setFontSize(12); // Set font size for labels
    doc.setFont("calibre", "bold");
    doc.text("Received from :", 30, 71); // Label "Name:"
    doc.setFont("calibre", "normal"); // Reset font style to normal
    doc.text(`${hhscomplexData}`, 65, 71); // (X, Y,Actual name)
    doc.setFontSize(10); // Reset font size to normal

    //A sum of Rupees
    doc.setFontSize(12); // Set font size for labels
    doc.setFont("calibre", "bold");
    doc.text("A sum of Rupees :", 30, 86); // Label "Name:"
    doc.setFont("calibre", "normal");
    doc.text(`${hhscomplexData}`, 65, 86); //(X, Y, Actual name)
    doc.setFont("calibre", "bold");
    doc.text(" Rupees in words :", 100, 86);
    doc.setFont("calibre", "normal");
    doc.text(`${hhscomplexData}`, 135, 86); //(X, Y, Actual name)
    doc.setFont("calibre", "normal"); // Reset font style to normal
    doc.setFontSize(10); // Reset font size to normal

    //by Cash
    doc.setFontSize(12); // Set font size for labels
    doc.setFont("calibre", "bold");
    doc.text(
      "by Cash/Cheque/D.D towards the Electrical Charges for Shop No. :",
      30,
      105
    ); // Label "Name:"
    doc.setFont("calibre", "normal"); // Reset font style to normal
    doc.text(`${hhscomplexData}`, 153, 105); // (X, Y,Actual name)
    doc.setFontSize(10); // Reset font size to normal

    //For the month of
    doc.setFontSize(12); // Set font size for labels
    doc.setFont("calibre", "bold");
    doc.text("For the month of :", 30, 115); // Label "Name:"
    doc.setFont("calibre", "normal");
    doc.text(`${hhscomplexData}`, 70, 115); //(X, Y, Actual name)
    doc.setFont("calibre", "bold");
    doc.text("Cheque/D.D.No :", 105, 115);
    doc.setFont("calibre", "normal");
    doc.text(`${hhscomplexData}`, 137, 115); //(X, Y, Actual name)
    doc.setFont("calibre", "normal"); // Reset font style to normal
    doc.setFontSize(10); // Reset font size to normal

    //Dated
    doc.setFontSize(12); // Set font size for labels
    doc.setFont("calibre", "bold");
    doc.text("Dated :", 40, 135); // Label "Name:"
    doc.text("Signature of Manager", 140, 135);
    doc.setFont("calibre", "normal"); // Reset font style to normal
    doc.setFontSize(10); // Reset font size to normal

    // Save the PDF with a specific name
    doc.save("hhs_complex.pdf");
    // console.log("Download PDF clicked");
  };
};

//blood centre pdf
const handleBloodCenterPdf = () => {

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
   doc.rect(12,9,186,163);
   doc.setFontSize(8);
   doc.text("LICENSE NUMBER - KTK/28C-409/2022", 75, 15); // Adjust the Y position as needed
   doc.setFontSize(15);
   doc.setTextColor(255, 138, 0); // RGB color (red)
   doc.setFont('helvetica', 'bold'); // Use the 'helvetica' font family
   doc.text("HHS & HMS", 55, 28); // Adjust the Y position as needed
   doc.setFontSize(10);
   doc.text("(R.A.)",86,28)
   doc.setFontSize(15);
   doc.setFont('helvetica', 'bold');
   doc.text("BLOOD CENTRE",96,28)
   doc.setFont('helvetica', 'normal'); // Reset font style to normal
   doc.setFontSize(9);
   doc.setTextColor(0);
   doc.text("No.3,1st Floor,Hazrath Hameed Shah Complex,Cubbonpet Main Road,Banglore-2, Ph: 22211356/22240309",45,40)
   doc.text("Banglore-02, Ph: 080-49894916 Mob. : 9845854991,9035963914,8123294727",65,45)
   doc.text("Email : hhshmsbloodcentre@gmail.com Website: hhshmscomplex.com",75,50)


//PDF Heading 

   doc.setFont('helvetica', 'bold'); // Use the 'helvetica' font family
   doc.setFontSize(15);
   doc.text("RECEIPT", 80, 65); // Adjust the Y position as needed 
  
 
 // Reset text color to default (black)
 doc.setTextColor(0);
 // doc.rect(20, 50, 160, 105); // (X, Y, Width, Height)
 doc.setFont('calibre', 'bold'); 
 doc.text("Date :", 155, 65); // Adjust the Y position as needed
 doc.setFont('calibre','normal');

//Received with the thanks from :
doc.setFontSize(12); // Set font size for labels
doc.setFont('calibre', 'bold');
doc.text("Received with the thanks from smt./Sri :", 25,81); // Label "Name:"
doc.setFont('calibre', 'normal'); // Reset font style to normal
doc.setFontSize(10); // Reset font size to normal
doc.text(`${bloodCenter}`, 100, 81); // (X, Y,Actual name)
doc.setFontSize(12); // Set font size for labels
doc.setFont('calibre', 'bold');
doc.text("Age:", 125,91);
doc.text("Sex:", 155,91);


//IP no
 doc.setFontSize(12); // Set font size for labels
 doc.setFont('calibre', 'bold');
 doc.text("I.P.NO.", 25, 91); // Label "Name:"
 doc.setFont('calibre', 'normal'); // Reset font style to normal
 doc.setFontSize(10); // Reset font size to normal
 doc.text(`${bloodCenter}`, 45, 91); //(X, Y, Actual name)

//Hospital
 doc.setFontSize(12); // Set font size for labels
 doc.setFont('calibre', 'bold');
 doc.text("Hospital/N Home:", 25, 101); // Label "Name:"
 doc.setFont('calibre', 'normal'); // Reset font style to normal
 doc.setFontSize(10); // Reset font size to normal
 doc.text(`${bloodCenter}`, 65, 101); // (X, Y, Actual name)

 //sum of rupees
 doc.setFontSize(12); // Set font size for labels
 doc.setFont('calibre', 'bold');
 doc.text("Sum of Rupees:", 25, 111); // Label "Name:"
 doc.setFont('calibre', 'normal'); // Reset font style to normal
 doc.setFontSize(10); // Reset font size to normal
 doc.text(`${bloodCenter}`, 60, 111); // (X, Y, Actual name)

 //sum of rupees
 doc.setFontSize(12); // Set font size for labels
 doc.setFont('calibre', 'bold');
 doc.text("Towards /lab Investigation Charges for:", 25, 121); // Label "Name:"
 doc.setFont('calibre', 'normal'); // Reset font style to normal
 doc.setFontSize(10); // Reset font size to normal
 doc.text(`${bloodCenter}`,99, 121); // (X, Y, Actual name)

 //unit no
 doc.setFontSize(12); // Set font size for labels
 doc.setFont('calibre', 'bold');
 doc.text("Unit No:", 155, 121); // Label "Name:"
 doc.setFont('calibre', 'normal'); // Reset font style to normal
 doc.setFontSize(10); // Reset font size to normal
 doc.text(`${bloodCenter}`, 175, 121); // (X, Y, Actual name)

 
 //blood group
 doc.setFontSize(12); // Set font size for labels
 doc.setFont('calibre', 'bold');
 doc.text("Blood Group:", 25, 131); // Label "Name:"
 doc.setFont('calibre', 'normal'); // Reset font style to normal
 doc.setFontSize(10); // Reset font size to normal
 doc.text(`${bloodCenter}`, 55, 131); // (X, Y, Actual name)

 //cash
 doc.setFontSize(12); // Set font size for labels
 doc.setFont('calibre', 'bold');
 doc.text("Cash:", 25, 141); // Label "Name:"
 doc.rect(37, 136, 8, 8);// (X, Y, Width, Height)

  //upi
  doc.setFont('calibre', 'bold');
  doc.text("UPI:", 55, 141); // Label "Name:"
  doc.rect(65, 136, 8, 8);// (X, Y, Width, Height)

  //rs
   doc.setFontSize(12); // Set font size for labels
  doc.setFont('calibre', 'bold');
  doc.text("RS:", 25, 153); // Label "Name:"
  doc.setFont('calibre', 'normal'); // Reset font style to normal
  doc.setFontSize(10); // Reset font size to normal
  doc.text(`${bloodCenter}`, 35, 153); // (X, Y, Actual name)


 //Sign
 doc.setFontSize(12); // Set font size for labels
 doc.setFont('calibre', 'bold');
 doc.text("Authorised Signatory", 155, 153); // Label "Name:"

 //note 
 doc.setFontSize(9); // Set font size for labels
 doc.setFont('calibre', 'bold');
 doc.text("Note: Blood Once Issued Will Not Be Taken Back or Replace", 55,163); // Label "Name:" 


 // Save the PDF with a specific name
 doc.save("blood_receipt.pdf");
 // console.log("Download PDF clicked");
};
};

//parking pdf
const handleHHSParkingrPdf = () => {

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
  doc.rect(10,9,175,153);
  doc.setTextColor(255, 138, 0); // RGB color (red)
  doc.setFont('helvetica', 'bold'); // Use the 'helvetica' font family
  doc.text("HHS & HMS DARGAH COMPLEX, CUBBONPET,", 55, 20); // Adjust the Y position as needed
  doc.text("BANGLORE - 560 002.", 85, 30); // Adjust the Y position as needed
  doc.setTextColor(0);

  //PDF Heading 
  doc.setFont('helvetica', 'bold'); // Use the 'helvetica' font family
  doc.setFontSize(12);
  doc.text("Receipt No.", 20, 50); // Adjust the Y position as needed 
  doc.setFont('helvetica', 'normal');
  doc.text(`${parking}`, 50, 50); 
  doc.setFont('helvetica', 'bold'); // Use the 'helvetica' font family
  doc.text("Date:", 130, 50);
  doc.setFont('helvetica', 'normal');
  doc.text(`${parking}`, 145, 50); 


//Received from :
//  doc.setFontSize(12); // Set font size for labels
 doc.setFont('calibre', 'bold');
 doc.text("Received from :", 20, 71); // Label "Name:"
 doc.setFont('calibre', 'normal'); // Reset font style to normal
 doc.setFontSize(10); // Reset font size to normal
 doc.text(`${parking}`,55, 71); // (X, Y,Actual name)

  //sum of rupees
  doc.setFontSize(12); // Set font size for labels
  doc.setFont('calibre', 'bold');
  doc.text("A Sum of Rupees:", 20, 91); // Label "Name:"
  doc.setFont('calibre', 'normal'); // Reset font style to normal
  doc.setFontSize(10); // Reset font size to normal
  doc.text(`${parking}`, 60, 91); // (X, Y,Actual name)

  //rupees in the words
  doc.setFontSize(12); // Set font size for labels
  doc.setFont('calibre', 'bold');
  doc.text("Rupees in the words:", 20, 101); // Label "Name:"
  doc.setFont('calibre', 'normal'); // Reset font style to normal
  doc.setFontSize(10); // Reset font size to normal
  doc.text(`${parking}`, 65, 101); // (X, Y,Actual name)

    //cash/DD/premises
    doc.setFontSize(12); // Set font size for labels
    doc.setFont('calibre', 'bold');
    doc.text("by Cash / D.D. towards the rent for Parking:", 20, 121); // Label "Name:"
    doc.setFont('calibre', 'normal'); // Reset font style to normal
    doc.setFontSize(10); // Reset font size to normal
    doc.text(`${parking}`, 105, 121); // (X, Y,Actual name)

    //for the month 
    doc.setFontSize(12); // Set font size for labels
    doc.setFont('calibre', 'bold');
    doc.text("in the Month of:", 20, 131); // Label "Name:"
    doc.setFont('calibre', 'normal'); // Reset font style to normal
    doc.setFontSize(10); // Reset font size to normal
    doc.text(`${parking}`, 55, 131); // (X, Y,Actual name)

     //cheque/DD no
     doc.setFontSize(12); // Set font size for labels
     doc.setFont('calibre', 'bold');
     doc.text("Cheque / D.D. No.", 20, 141); // Label "Name:"
     doc.setFont('calibre', 'normal'); // Reset font style to normal
     doc.setFontSize(10); // Reset font size to normal
     doc.text(`${parking}`, 60, 141); // (X, Y,Actual name)

      //dated
      doc.setFontSize(12); // Set font size for labels
      doc.setFont('calibre', 'bold');
      doc.text("Dated :", 100, 141); // Label "Name:"
      doc.setFont('calibre', 'normal'); // Reset font style to normal
      doc.setFontSize(10); // Reset font size to normal
      doc.text(`${parking}`, 115, 141); // (X, Y,Actual name)

     //drawn on
     doc.setFontSize(12); // Set font size for labels
     doc.setFont('calibre', 'bold');
     doc.text("Drawn on: ", 20, 151); // Label "Name:"
     doc.setFont('calibre', 'normal'); // Reset font style to normal
     doc.setFontSize(10); // Reset font size to normal
     doc.text(`${parking}`, 45, 151); // (X, Y,Actual name)

      //sign
      doc.setFontSize(12); // Set font size for labels
      doc.setFont('calibre', 'bold');
      doc.text("Signature of the Receiver", 130, 151); // Label "Name:"
      

  doc.save("parking.pdf");
       };
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