import React, { useState , useEffect} from "react";
import axios from "axios";
import { APIS } from "../constants/api";
import { BiArrowBack } from "react-icons/bi";
import { FaDownload } from "react-icons/fa";
import {
  MDBContainer as Container,
  
  MDBBtn as Button,
 
} from "mdb-react-ui-kit";
import Header from "../common/Header";
import logo from "../../asset/images/hhslogo.jpg";
import jsPDF from "jspdf";
import { useNavigate, useParams } from "react-router-dom";
const DetailElectricityBill = () => {
  
    const { id } = useParams();
  const [electricitybill, setElectricitybill] = useState(null); 
  const navigate = useNavigate();
  
  useEffect(() => {
    // Function to fetch property by ID
    const fetchElectricityBillById = async () => {
      try {
        const response = await axios.get(`${APIS.GETELECITYBILLBYID}/${id}`);
        console.log("pdf data",response.data);
        setElectricitybill(response.data);
      } catch (error) {
        console.error("Error fetching ElectricityBill:", error);
        // Handle the error as needed (e.g., show an error message)
      }
    };

    // Call the fetchPropertyById function when the component mounts
    fetchElectricityBillById();
  }, [id]);

  const renderElectricityBillRow = (key, value) => (
    <div key={key} className="d-flex entity-row">
      <div className="entity-name">
        {key.replace(/([A-Z])/g, " $1").trim()}:
      </div>
      <div className="entity-value" style={{ whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
        {value}
      </div>
    </div>
  );

  if (!electricitybill) {
    return <div>ElectricityBill not found.</div>;
  }

  const electricitybillKeys = Object.keys(electricitybill);
  const halfLength = Math.ceil(electricitybillKeys.length / 2);
  const firstColumnKeys = electricitybillKeys.slice(0, halfLength);
  const secondColumnKeys = electricitybillKeys.slice(halfLength);

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
      doc.text(`Electricity Bill, For The Month Of :${electricitybill?.month}`, 50, 40); // Adjust the Y position as needed 
      doc.setFont('helvetica', 'normal'); // Reset font style to normal
      
      // Reset text color to default (black)
      doc.setTextColor(0);
      doc.setFontSize(12); 
      doc.rect(20, 55, 160, 140); // (X, Y, Width, Height)
      doc.setFont('calibre', 'bold'); 
      doc.rect(20, 55, 90, 10);// (X, Y, Width, Height)
      doc.text("Name: ",25,61); // Label "Name:"
      doc.setFont('calibre','normal');
      doc.text(`${electricitybill?.name}`, 70, 61);// (X, Y,Actual name)
 
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
   
  //Shop no
     doc.setFontSize(12); // Set font size for labels
     doc.setFont('calibre', 'bold');
     doc.rect(20, 65, 160, 10);// (X, Y, Width, Height)
     doc.rect(20, 65, 90, 10);// (X, Y, Width, Height)
     doc.text("Shop No. :", 25, 71); // Label "Name:"
     
     doc.rect(20, 65, 130, 10);//(X, Y, Width, Height) 3rd verticle line 
     doc.setFont('calibre', 'normal'); // Reset font style to normal
     doc.setFontSize(10); // Reset font size to normal
     doc.text(`${electricitybill?.shopNo}`, 70, 71); // (X, Y,Actual name)
  
  //RR Num   not defined
      doc.setFontSize(12); // Set font size for labels
      doc.setFont('calibre', 'bold');
      doc.rect(20, 75, 160, 10);// (X, Y, Width, Height)
      doc.rect(20, 75, 90, 10);// (X, Y, Width, Height)
      doc.text("R.R NO. :", 25, 81); // Label "Name:"
  
      doc.rect(20, 75, 130, 10);//(X, Y, Width, Height) 3rd verticle line 
      doc.setFont('calibre', 'normal'); // Reset font style to normal
      doc.setFontSize(10); // Reset font size to normal
      doc.text(`${electricitybill?.rrNo}`, 70, 81); //(X, Y, Actual name)
  
  //Ledger & Follo
      doc.setFontSize(12); // Set font size for labels
      doc.setFont('calibre', 'bold');
      doc.rect(20, 85, 160, 10);// (X, Y, Width, Height)
      doc.rect(20, 85, 65, 10);// (X, Y, Width, Height)
      doc.text("Ledger & Follo No :", 25, 91); // Label "Ledger & Follo"
      doc.setFont('calibre', 'normal'); // Reset font style to normal
      doc.setFontSize(10); // Reset font size to normal
      doc.text(`${electricitybill?.ledger_follono}`, 65, 91); // (X, Y, Actual name)
 
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
      doc.text(`${electricitybill?.sanctionLoad}`, 60, 101); // (X, Y, Actual name)
 
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
      doc.setFontSize(10); // Reset font size to normal
      doc.text(`${electricitybill?.tariff}`, 40, 111); // (X, Y, Actual name)

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
      doc.setFontSize(10); // Reset font size to normal
      doc.text(`${electricitybill?.presentReading}`, 60, 121); // (X, Y, Actual name)

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
      doc.setFontSize(10); // Reset font size to normal
      doc.text(`${electricitybill?.previousReading}`, 60, 131); // (X, Y, Actual name)

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
       doc.text(`${electricitybill?.unitConsumed}`, 60, 141); // (X, Y, Actual name)


       
         //unit sancd
         doc.setFontSize(12); // Set font size for labels
         doc.rect(20, 145, 38, 10);// (X, Y, Width, Height)
         doc.setFont('calibre', 'bold');
         doc.text("Unit Sancd.", 25, 151); // Label "Name:"
         doc.setFont('calibre', 'normal'); // Reset font style to normal
         doc.rect(20, 145, 65, 10);// (X, Y, Width, Height) 2nd verticle line
         doc.setFontSize(10); // Reset font size to normal
         doc.text(`${electricitybill?.unitSancd}`, 60, 151); // (X, Y, Actual name)

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
     //  doc.text(`${electricitybill.paymentMethod}`, 70, 121); // (X, Y, Actual name)
  
  //CollectionDetails
     //  doc.setFontSize(12); // Set font size for labels
     //  doc.rect(20, 125, 160, 10);// (X, Y, Width, Height)
     //  doc.setFont('calibre', 'bold');
     //  doc.rect(20, 125, 45, 10);// (X, Y, Width, Height)
     //  doc.text("CollectionDetails :", 25, 131); // Label "Name:"
     //  doc.setFont('calibre', 'normal'); // Reset font style to normal
     //  doc.setFontSize(10); // Reset font size to normal
     //  doc.text(`${electricitybill.CollectionDetails}`, 70, 131); // (X, Y, Actual name)
  
      // Save the PDF with a specific name
 
      doc.save("electricity-bill.pdf");
      console.log("Download PDF clicked" , electricitybill)
     //  console.log("Download PDF clicked");
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
          <h2 className="mb-4 text-center entity-column">Electricity Bill of {electricitybill.month} </h2>
          <Container
            className="detail w-75 text-center"
            style={{
              height: "430px",
              width: "50%",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3), 0 6px 10px rgba(0, 0, 0, 0.23)",
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
              .map((key) => renderElectricityBillRow(key, electricitybill[key]))}
          </div>
          <div className="w-50">
            {secondColumnKeys
              .filter((key) => key !== "id")
              .map((key) => renderElectricityBillRow(key, electricitybill[key]))}
          </div>
        </div>
        <div style={{ marginBottom: "10px" }}>
              <Button
                variant="primary"
                onClick={handleEleBillPdf}
                className="w-50 mt-3"
              >
                <FaDownload /> PDF for Electricity Bill
              </Button>
            </div>
    
          </Container>
        </div>
      );
    };
    
    export default DetailElectricityBill;