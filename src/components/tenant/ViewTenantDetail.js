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

  // const tenantToShow = tenants.find((prop) => prop.id === parseInt(id));

  const fetctTenantById = async ()=>{
    try {
      const response= await axios.get(`${APIS.GETTENANTBYID}/${id}`);
      // console.log("hiiii",response.data);
      setTenantToShow(response.data);

    } catch (error) {
      console.error("Error fetching property:", error);
    }

  }
  useEffect(()=>{
    fetctTenantById();
  },[]);


  const renderTenantRow = (key, value) => (
    <div key={key} className="d-flex entity-row">
    <div className="entity-name">
      {key.replace(/([A-Z])/g, " $1").trim()}:
    </div>
    <div className="entity-value" style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
      {value}
    </div>
  </div>
  );

  if (!tenantToShow) {
    return <div>Property not found.</div>;
  }

  const tenantKeys = Object.keys(tenantToShow);
  const halfLength = Math.ceil(tenantKeys.length / 2);
  const firstColumnKeys = tenantKeys.slice(0, halfLength);
  const secondColumnKeys = tenantKeys.slice(halfLength);

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
    doc.text(`Details of Shop No: ${tenantToShow.tenantName}`, 25, 60); // Adjust the Y position as needed
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
   doc.text(`${tenantToShow.tenantName}`, 70, 71); // (X, Y,Actual name)

//contact no
    doc.setFontSize(12); // Set font size for labels
    doc.setFont('calibre', 'bold');
    doc.rect(20, 75, 160, 10);// (X, Y, Width, Height)
    doc.rect(20, 75, 45, 10);// (X, Y, Width, Height)
    doc.text("Contact No :", 25, 81); // Label "Name:"
    doc.setFont('calibre', 'normal'); // Reset font style to normal
    doc.setFontSize(10); // Reset font size to normal
    doc.text(`${tenantToShow.contactNum}`, 70, 81); //(X, Y, Actual name)

//Address
    doc.setFontSize(12); // Set font size for labels
    doc.setFont('calibre', 'bold');
    doc.rect(20, 85, 160, 10);// (X, Y, Width, Height)
    doc.rect(20, 85, 45, 10);// (X, Y, Width, Height)
    doc.text("Address :", 25, 91); // Label "Name:"
    doc.setFont('calibre', 'normal'); // Reset font style to normal
    doc.setFontSize(10); // Reset font size to normal
    doc.text(`${tenantToShow.address}`, 70, 91); // (X, Y, Actual name)

//CollectedRent
    doc.setFontSize(12); // Set font size for labels
    doc.rect(20, 95, 160, 10);// (X, Y, Width, Height)
    doc.setFont('calibre', 'bold');
    doc.rect(20, 95, 45, 10);// (X, Y, Width, Height)
    doc.text("Rent Collected:", 25, 101); // Label "Name:"
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
    doc.text(`${tenantToShow.rentDue}`, 70, 111); // (X, Y, Actual name)

//Deposit
    doc.setFontSize(12); // Set font size for labels
    doc.rect(20, 105, 160, 10);// (X, Y, Width, Height)
    doc.setFont('calibre', 'bold');
    doc.rect(20, 115, 45, 10);// (X, Y, Width, Height)
    doc.text("Deposit :", 25, 121); // Label "Name:"
    doc.setFont('calibre', 'normal'); // Reset font style to normal
    doc.setFontSize(10); // Reset font size to normal
    doc.text(`${tenantToShow.securityDeposit}`, 70, 121); // (X, Y, Actual name)

//paymentMode
    doc.setFontSize(12); // Set font size for labels
    doc.rect(20, 125, 160, 10);// (X, Y, Width, Height)
    doc.setFont('calibre', 'bold');
    doc.rect(20, 125, 45, 10);// (X, Y, Width, Height)
    doc.text("Payment Mode :", 25, 131); // Label "Name:"
    doc.setFont('calibre', 'normal'); // Reset font style to normal
    doc.setFontSize(10); // Reset font size to normal
    doc.text(`${tenantToShow.paymentMethod}`, 70, 131); // (X, Y, Actual name)

//Status
    doc.setFontSize(12); // Set font size for labels
    doc.rect(20, 135, 160, 10);// (X, Y, Width, Height)
    doc.setFont('calibre', 'bold');
    doc.rect(20, 135, 45, 10);// (X, Y, Width, Height)
    doc.text("Status :", 25, 141); // Label "Name:"
    doc.setFont('calibre', 'normal'); // Reset font style to normal
    doc.setFontSize(10); // Reset font size to normal
    doc.text(`${tenantToShow.status}`, 70, 141); // (X, Y, Actual name)

//expiryDate
    doc.setFontSize(12); // Set font size for labels
    doc.rect(20, 145, 160, 10);// (X, Y, Width, Height)
    doc.setFont('calibre', 'bold');
    doc.rect(20, 145, 45, 10);// (X, Y, Width, Height)
    doc.text("Rent Due Date:", 25, 151); // Label "Name:"
    doc.setFont('calibre', 'normal'); // Reset font style to normal
    doc.setFontSize(10); // Reset font size to normal
    doc.text(`${tenantToShow.expiryDate}`, 70, 151); // (X, Y, Actual name)

    // Save the PDF with a specific name
    doc.save("rent_details.pdf");
    // console.log("Download PDF clicked");
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
     doc.text("Hameed Shah & Haz. Muhib Shah Khadri (R) Complex,", 55, 20); // Adjust the Y position as needed
     doc.text("Banglore",95,30)
     doc.setFont('helvetica', 'normal'); // Reset font style to normal
 
 
 //PDF Heading 
     doc.setTextColor(255, 0, 0); // RGB color (red)
     doc.setFont('helvetica', 'bold'); // Use the 'helvetica' font family
     // expiryDate will be convert into current month
     doc.text(`Electricity Bill, For The Month Of :${tenantToShow.expiryDate}`, 50, 40); // Adjust the Y position as needed 
     doc.setFont('helvetica', 'normal'); // Reset font style to normal
     
     // Reset text color to default (black)
     doc.setTextColor(0);
     doc.setFontSize(12); 
     doc.rect(20, 55, 160, 140); // (X, Y, Width, Height)
     doc.setFont('calibre', 'bold'); 
     doc.rect(20, 55, 90, 10);// (X, Y, Width, Height)
     doc.text("Name: ",25,61); // Label "Name:"
     doc.setFont('calibre','normal');
     doc.text(`${tenantToShow.tenantName}`, 70, 61);// (X, Y,Actual name)

     //unit
     doc.rect(20, 55, 110, 10);// (X, Y, Width, Height) 2nd verticle line
     doc.text("Unit",115,61); // Label "Name:"
     doc.rect(20, 65, 110, 10);// (X, Y, Width, Height) 2nd verticle line
     doc.rect(20, 75, 110, 10);// (X, Y, Width, Height) 2nd verticle line
     doc.rect(20, 85, 110, 10);// (X, Y, Width, Height) 2nd verticle line


     //rate
     doc.rect(20, 55, 130, 10);// (X, Y, Width, Height)
     doc.text("Rate",135,61); // (X,Y, Label "Rate:"

       //amount
      //  doc.rect(20, 55, 150, 10);// (X, Y, Width, Height)
       doc.text("Amount ",155,61); // Label "amount:"
 
 
    // Add tenant details here...
  
 //allocatedShop no
    doc.setFontSize(12); // Set font size for labels
    doc.setFont('calibre', 'bold');
    doc.rect(20, 65, 160, 10);// (X, Y, Width, Height)
    doc.rect(20, 65, 90, 10);// (X, Y, Width, Height)
    doc.text("Shop No. :", 25, 71); // Label "Name:"
    
    doc.rect(20, 65, 130, 10);//(X, Y, Width, Height) 3rd verticle line 
    doc.setFont('calibre', 'normal'); // Reset font style to normal
    doc.setFontSize(10); // Reset font size to normal
    doc.text(`${tenantToShow.allocatedShop}`, 70, 71); // (X, Y,Actual name)
 
 //RR Num   not defined
     doc.setFontSize(12); // Set font size for labels
     doc.setFont('calibre', 'bold');
     doc.rect(20, 75, 160, 10);// (X, Y, Width, Height)
     doc.rect(20, 75, 90, 10);// (X, Y, Width, Height)
     doc.text("R.R NO. :", 25, 81); // Label "Name:"
 
     doc.rect(20, 75, 130, 10);//(X, Y, Width, Height) 3rd verticle line 
     doc.setFont('calibre', 'normal'); // Reset font style to normal
     doc.setFontSize(10); // Reset font size to normal
     doc.text(`${tenantToShow.RRnum}`, 70, 81); //(X, Y, Actual name)
 
 //Ledger & Follo
     doc.setFontSize(12); // Set font size for labels
     doc.setFont('calibre', 'bold');
     doc.rect(20, 85, 160, 10);// (X, Y, Width, Height)
     doc.rect(20, 85, 65, 10);// (X, Y, Width, Height)
     doc.text("Ledger & Follo No :", 25, 91); // Label "Ledger & Follo"
     doc.setFont('calibre', 'normal'); // Reset font style to normal
     doc.setFontSize(10); // Reset font size to normal
     doc.text(`${tenantToShow.LedgerFollo}`, 65, 91); // (X, Y, Actual name)

      //Fixed Charges
      doc.rect(20, 85, 90, 10);// (X, Y, Width, Height)
      doc.rect(20, 85, 130, 10);
      
      doc.text("Fixed Charges",87,91); // (X,Y, Label "Rate:"
 
 //sactionLoad
     doc.setFontSize(12); // Set font size for labels
     doc.rect(20, 95, 160, 10);// (X, Y, Width, Height)
     doc.setFont('calibre', 'bold');
     doc.rect(20, 95, 65, 10);// (X, Y, Width, Height) 1st verticle line 
     doc.text("Sanction Load :", 25, 101); // Label saction load
     doc.setFont('calibre', 'normal'); // Reset font style to normal
     doc.setFontSize(10); // Reset font size to normal
     doc.text(`${tenantToShow.electricityDue}`, 60, 101); // (X, Y, Actual name)

       //Consumption Charges
       doc.rect(20, 95, 90, 10);// (X, Y, Width, Height)
       doc.rect(20, 95, 110, 10);// (X, Y, Width, Height) 2nd verticle line
       doc.rect(20, 95, 130, 10);
       doc.text("Consumption",87,101); // (X,Y, Label "Rate:"


 
 //Tariff
     doc.setFontSize(12); // Set font size for labels
     doc.rect(20, 105, 160, 10);// (X, Y, Width, Height)
     doc.setFont('calibre', 'bold');
     doc.rect(20, 105, 90, 10);// (X, Y, Width, Height)
     doc.text("Tariff :", 25, 111); // Label "Name:"
     doc.setFont('calibre', 'normal'); // Reset font style to normal
     doc.rect(20, 105, 38, 10);// (X, Y, Width, Height)
     doc.setFontSize(10); // Reset font size to normal
     doc.rect(20, 105, 90, 10);// (X, Y, Width, Height)
     doc.text("HT 2 B", 60, 111); // (X, Y, Actual name)
     doc.rect(20, 105, 65, 10);// (X, Y, Width, Height) 1st verticle line 


    //  total
    doc.rect(20, 105, 110, 10);// (X, Y, Width, Height) 4th verticle line
    doc.setFont('calibre', 'bold');
    doc.text("TOTAL",87,111); // (X,Y, Label "Rate:"
    doc.setFont('calibre', 'normal'); // Reset font style to normal
    doc.rect(20, 105, 130, 10);//(X, Y, Width, Height) 5th verticle line 

     //present reading
     doc.setFontSize(12); // Set font size for labels
     doc.rect(20, 115, 160, 10);// (X, Y, Width, Height)
     doc.setFont('calibre', 'bold');
     doc.text("Present Reading:", 25, 121); // Label "Name:"
     doc.setFont('calibre', 'normal'); // Reset font style to normal
     doc.rect(20, 115, 38, 10);// (X, Y, Width, Height) 1st verticle line
     doc.rect(20, 115, 65, 10);// (X, Y, Width, Height) 2nd verticle line
     doc.setFontSize(10); // Reset font size to normal
     doc.rect(20, 115, 90, 10);// (X, Y, Width, Height) 3rd verticle line
     doc.rect(20, 115, 110, 10);// (X, Y, Width, Height) 4th verticle line
     doc.rect(20, 115, 130, 10);// (X, Y, Width, Height) 5th verticle line

    //  tax5%
    doc.text("Tax 5%",87,121); // (X,Y, Label "Rate:"

     //previous reading
     doc.setFontSize(12); // Set font size for labels
     doc.rect(20, 125, 160, 40);// (X, Y, Width, Height)
     doc.setFont('calibre', 'bold');
     doc.text("Previous Reading", 25, 131); // Label "Name:"
     doc.setFont('calibre', 'normal'); // Reset font style to normal
     doc.rect(20, 125, 38, 10);// (X, Y, Width, Height) 1st verticle line
     doc.rect(20, 125, 65, 10);// (X, Y, Width, Height) 2nd verticle line
     doc.rect(20, 125, 160, 10);
     doc.setFontSize(10); // Reset font size to normal
     doc.rect(20, 125, 90, 40);// (X, Y, Width, Height) 3rd verticle line
     doc.rect(20, 125, 110, 40);// (X, Y, Width, Height) 4th verticle line
     doc.rect(20, 125, 130, 40);// (X, Y, Width, Height) 5th verticle line

       //  bill amount
    doc.text("Bill Amount",87,131); // (X,Y, Label "Rate:"

      //unit consumed
      doc.setFontSize(12); // Set font size for labels
      doc.rect(20, 135, 38, 10);// (X, Y, Width, Height)
      doc.setFont('calibre', 'bold');
      doc.text("Unit Consumed", 25, 141); // Label "Name:"
      doc.setFont('calibre', 'normal'); // Reset font style to normal
      doc.rect(20, 135, 65, 10);// (X, Y, Width, Height) 2nd verticle line
      doc.setFontSize(10); // Reset font size to normal
      
        //unit sancd
        doc.setFontSize(12); // Set font size for labels
        doc.rect(20, 145, 38, 10);// (X, Y, Width, Height)
        doc.setFont('calibre', 'bold');
        doc.text("Unit Sancd.", 25, 151); // Label "Name:"
        doc.setFont('calibre', 'normal'); // Reset font style to normal
        doc.rect(20, 145, 65, 10);// (X, Y, Width, Height) 2nd verticle line
        doc.setFontSize(10); // Reset font size to normal

         //date of reading
         doc.setFontSize(12); // Set font size for labels
         doc.rect(20, 155, 38, 10);// (X, Y, Width, Height)
         doc.setFont('calibre', 'bold');
         doc.text("Date of Reading", 25, 161); // Label "Name:"
         doc.setFont('calibre', 'normal'); // Reset font style to normal
         doc.rect(20, 155, 65, 10);// (X, Y, Width, Height) 2nd verticle line
         doc.setFontSize(10); // Reset font size to normal

           //  1st MOnth
    doc.text("1st of The Month",60,161); // (X,Y, Label 

      //  Disconnection & Reconnection
      doc.text("Disconnection",88,141); // (X,Y, Label 
      doc.text("Reconnection",88,151); // (X,Y, Label
      doc.text("Charges",90,161); // (X,Y, Label

         //note
          doc.setFontSize(12); // Set font size for labels
        doc.rect(20, 165, 65, 30);// (X, Y, Width, Height)
         doc.setFont('calibre', 'bold');
         doc.text("Note :", 25, 171); // Label "Name:"
         doc.setFont('calibre', 'normal'); // Reset font style to normal
         doc.text("Bills to be paid on or before", 36, 171); // Label "Name:"
         doc.text("15th of the every month.", 21, 177); // Label "Name:"
         doc.text("Electrical connection will be", 21, 184); // Label "Name:"
         doc.text("Disconnected after the due date.", 21, 191); // Label "Name:"
         doc.text("Meter Reader",31,211);  doc.text("Special Officer",131,211);
         
         doc.text("Arrears", 90, 171); // Label "Name:"
         doc.rect(85, 165, 25, 10);// (X, Y, Width, Height) 2nd verticle line
         doc.rect(110, 165, 20, 10);doc.rect(130, 165, 20, 10);doc.rect(150, 165, 30, 10);

         doc.text("Interest", 90, 181); // Label "Name:"
         doc.rect(85, 175, 25, 10);// (X, Y, Width, Height) 2nd verticle line
         doc.rect(110, 175, 20, 10);doc.rect(130, 175, 20, 10);doc.rect(150, 175, 30, 10);

         doc.text("Amount Due", 86, 191); // Label "Name:"
         doc.rect(85, 185, 25, 10);// (X, Y, Width, Height) 2nd verticle line
         doc.rect(110, 185, 20, 10);doc.rect(130, 185, 20, 10);doc.rect(150, 185, 30, 10);
        //  doc.setFontSize(10); // Reset font size to normal

        

   
 
 //Payment Mode
    //  doc.setFontSize(12); // Set font size for labels
    //  doc.rect(20, 105, 160, 10);// (X, Y, Width, Height)
    //  doc.setFont('calibre', 'bold');
    //  doc.rect(20, 115, 90, 10);// (X, Y, Width, Height)
    //  doc.text("Payment Mode :", 25, 121); // Label "Name:"
    //  doc.setFont('calibre', 'normal'); // Reset font style to normal
    //  doc.setFontSize(10); // Reset font size to normal
    //  doc.text(`${tenantToShow.paymentMethod}`, 70, 121); // (X, Y, Actual name)
 
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
     console.log("Download PDF clicked" , tenantToShow)
    //  console.log("Download PDF clicked");
   };
  };

  return (
    <div>
      <Header />
      <div className="mt-4">
      <div className="arrow-back-container">
        <BiArrowBack
          className="backLoginForm fs-2 text-dark"
          onClick={() => navigate(-1)}
        />
      </div>
      <h2 className="mb-4 text-center entity-column">Details of {tenantToShow?.tenantName}</h2>
</div>
      <Container
        className="detail w-75 text-center"
        style={{
          height: "70vh",
          width: "40%",
          boxShadow:
            "0 10px 30px rgba(0, 0, 0, 0.3), 0 6px 10px rgba(0, 0, 0, 0.23)",
          marginBottom: "0",
          marginTop: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
         <div className="d-flex flex-wrap">
        <div className="w-50">
          {firstColumnKeys
            .filter((key) => key !== "id")
            .map((key) => renderTenantRow(key, tenantToShow[key]))}
        </div>
        <div className="w-50">
          {secondColumnKeys
            .filter((key) => key !== "id")
            .map((key) => renderTenantRow(key, tenantToShow[key]))}
        </div>
      </div>
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
          
        {/* </div> */}
      </Container>
    </div>
  );
};

export default ViewTenantDetail;