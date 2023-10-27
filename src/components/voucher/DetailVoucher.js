import React, { useState , useEffect} from "react";
import axios from "axios";
import jsPDF from "jspdf";
import { APIS } from "../constants/api";
import {
    MDBContainer as Container,
    MDBRow as Row,
    MDBCol as Col,
    MDBInput as Input,
    MDBBtn as Button,
  } from "mdb-react-ui-kit";
  import  "react-select-search/style.css";
import logo from "../../asset/images/hhslogo.jpg";
import { FaDownload } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import Header from "../common/Header";
import { useNavigate, useParams } from "react-router-dom";
const DetailVoucher = () => {
  
    const { id } = useParams();
  const [voucher, setVoucher] = useState(null); 
  const navigate = useNavigate();
  
  useEffect(() => {
    // Function to fetch property by ID
    const fetchVoucherById = async () => {
      try {
        const response = await axios.get(`${APIS.GETVOUCHERBYID}/${id}`);
        console.log("vvv",response.data);
        setVoucher(response.data);
      } catch (error) {
        console.error("Error fetching Voucher:", error);
        // Handle the error as needed (e.g., show an error message)
      }
    };

    // Call the fetchPropertyById function when the component mounts
    fetchVoucherById();
  }, [id]);

  const renderVoucherRow = (key, value) => (
    <div key={key} className="d-flex entity-row">
      <div className="entity-name">
        {key.replace(/([A-Z])/g, " $1").trim()}:
      </div>
      <div className="entity-value" style={{ whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
        {value}
      </div>
    </div>
  );

  if (!voucher) {
    return <div>ElectricityBill not found.</div>;
  }

  const voucherKeys = Object.keys(voucher);
  const halfLength = Math.ceil(voucherKeys.length / 2);
  const firstColumnKeys = voucherKeys.slice(0, halfLength);
  const secondColumnKeys = voucherKeys.slice(halfLength);

    const handleVoucherPdf= ()=>{
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
        doc.rect(10,9,175,153);//(outer rectangle X,Y,width,height)
        doc.setTextColor(255, 138, 0); // RGB color (red)
        doc.setFont('helvetica', 'bold'); // Use the 'helvetica' font family
        doc.text("H.H.S./H.M.S. COMPLEX, CUBBONPET,", 55, 20); // Adjust the Y position as needed
        doc.text("BANGLORE - 560 002.", 65, 30); // Adjust the Y position as needed
        doc.setTextColor(0);
      
        //PDF Heading voucher no. & date
        doc.setFont('helvetica', 'bold'); // Use the 'helvetica' font family
        doc.setFontSize(12);
        doc.rect(10,43,175,80);//(outer rectangle X,Y,width,height)
        doc.rect(10,43,175,10);//(voucher date rect. X,Y,width,height)
        doc.text("Voucher No. :", 20, 50); // Adjust the Y position as needed 
        doc.setFont('helvetica', 'normal');
        doc.text(`${voucher?.v_id}`, 50, 50); 
        doc.setFont('helvetica', 'bold'); // Use the 'helvetica' font family
        doc.text("Date:", 130, 50);
        doc.setFont('helvetica', 'normal');
        doc.text(`${voucher?.date}`, 145, 50); 
      
        //Particular & amount
        doc.setFont('helvetica', 'bold'); // Use the 'helvetica' font family
        doc.setFontSize(12);
        doc.rect(10,53,175,10);//( X,Y,width,height)
        doc.text("PARTICULARS", 60, 60); // Adjust the Y position as needed 
       
        doc.setFont('helvetica', 'bold'); // Use the 'helvetica' font family
        doc.rect(140,53,45,70);//( X,Y,width,height)
        doc.text("AMOUNT", 150, 60);
        doc.rect(175,63,10,60);//( X,Y,width,height)
        doc.rect(140,113,45,10);//( X,Y,width,height)
        
      
        //amt paid to
        doc.setFontSize(12); // Set font size for labels
        doc.setFont('calibre', 'bold');
        doc.text("Amount paid to:", 20, 70); // Label "Name:"
        doc.setFont('calibre', 'normal'); // Reset font style to normal
        doc.setFontSize(10); // Reset font size to normal
        doc.text(`${voucher?.amtPaid}`, 150, 70); // (X, Y,Actual name)
      
        //towards
        doc.setFontSize(12); // Set font size for labels
        doc.setFont('calibre', 'bold');
        doc.text("Towards:", 20, 80); // Label "Name:"
        doc.setFont('calibre', 'normal'); // Reset font style to normal
        doc.setFontSize(10); // Reset font size to normal
        doc.text(`${voucher?.towards}`, 150, 80); // (X, Y,Actual name)
      
        //Total amt
        const totalAmount = (parseFloat(voucher.amtPaid) || 0) + (parseFloat(voucher.towards) || 0);
        doc.setFont("calibre", "normal");
        doc.setFontSize(10);
        doc.text(`${totalAmount}`, 150, 121);

          //cash/cheque no.
          doc.setFontSize(12); // Set font size for labels
          doc.setFont('calibre', 'bold');
          doc.text("By Cash /Cheque No.", 20, 121); // Label "Name:"
          doc.setFont('calibre', 'normal'); // Reset font style to normal
          doc.setFontSize(10); // Reset font size to normal
          doc.text(`${voucher?.chequeNo}`, 65, 121); // (X, Y,Actual name)
      
          //Dated
          doc.setFontSize(12); // Set font size for labels
          doc.setFont('calibre', 'bold');
          doc.text("Dated:", 100, 121); // Label "Name:"
          doc.setFont('calibre', 'normal'); // Reset font style to normal
          doc.setFontSize(10); // Reset font size to normal
          doc.text(`${voucher?.dated}`, 115, 121); // (X, Y,Actual name)
      
          //rupees
          doc.setFontSize(12); // Set font size for labels
          doc.setFont('calibre', 'bold');
          doc.text("Rupees:", 20, 131); // Label "Name:"
          doc.setFont('calibre', 'normal'); // Reset font style to normal
          doc.setFontSize(10); // Reset font size to normal
          doc.text(`${voucher?.rupees}`, 45, 131); // (X, Y,Actual name)
      
          
          doc.rect(145,128,20,20);//( X,Y,width,height)
          doc.setFont('calibre', 'bold');
          doc.text("Stamp",150,138)
      
          
           //sign
           doc.setFontSize(12); // Set font size for labels
           doc.setFont('calibre', 'bold');
           doc.text("Signature ", 40, 151); // Label "Name:"
           doc.text("Signature", 110, 151); // Label "Name:"
            
      
        doc.save("voucher.pdf");
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
          <h2 className="mb-4 text-center entity-column">Voucher Details of </h2>
          <Container
            className="detail w-75 text-center"
            style={{
              height: "300px",
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
              .map((key) => renderVoucherRow(key, voucher[key]))}
          </div>
          <div className="w-50">
            {secondColumnKeys
              .filter((key) => key !== "id")
              .map((key) => renderVoucherRow(key, voucher[key]))}
          </div>
        </div>
       
        <Button
          variant="primary"
          onClick={handleVoucherPdf}
          style={{ height: "50px", width: "130px", lineHeight: "25px", marginTop: "20px" }}
        >
          <FaDownload style={{ marginRight: "5px" }} /> Voucher
        </Button>
       
          </Container>
        </div>
      );
    };
    
    export default DetailVoucher;