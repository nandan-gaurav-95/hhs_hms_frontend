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

const DetailHHSComplex = () => {

    const { id } = useParams();
    const [hhscomplex, setHhscomplex] = useState(null); 
    const navigate = useNavigate();
    
    useEffect(() => {
      // Function to fetch property by ID
      const fetchHhscomplexById = async () => {
        try {
          const response = await axios.get(`${APIS.GETHHSCOMPLEXBYID}/${id}`);
          console.log("complex",response.data);
          setHhscomplex(response.data);
        } catch (error) {
          console.error("Error fetching hhs complex:", error);
          // Handle the error as needed (e.g., show an error message)
        }
      };
  
      // Call the fetchPropertyById function when the component mounts
      fetchHhscomplexById();
    }, [id]);
  
    const renderHhscomplexRow = (key, value) => (
      <div key={key} className="d-flex entity-row">
        <div className="entity-name">
          {key.replace(/([A-Z])/g, " $1").trim()}:
        </div>
        <div className="entity-value" style={{ whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
          {value}
        </div>
      </div>
    );
  
    if (!hhscomplex) {
      return <div>HHS not found.</div>;
    }
  
    const hhscomplexKeys = Object.keys(hhscomplex);
    const halfLength = Math.ceil(hhscomplexKeys.length / 2);
    const firstColumnKeys = hhscomplexKeys.slice(0, halfLength);
    const secondColumnKeys = hhscomplexKeys.slice(halfLength);

    
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
      doc.text("No.:", 31, 47);
      doc.text(`${hhscomplex?.hc_id}`, 39, 47); // (X, Y,Actual name)

      doc.rect(70, 40, 35, 10); // (X, Y, Width, Height)
      doc.text("L.F.No.", 71, 47);
      doc.text(`${hhscomplex?.lfNo}`, 84, 47); // (X, Y,Actual name)

      doc.rect(110, 40, 35, 10); // (X, Y, Width, Height)
      doc.text("R.R.No.", 112, 47);
      doc.text(`${hhscomplex?.rrNo}`, 126, 47); // (X, Y,Actual name)

      doc.rect(150, 40, 35, 10); // (X, Y, Width, Height)
      doc.text("Date", 152, 47);
      doc.text(`${hhscomplex?.date}`, 162, 47); // (X, Y,Actual name)

      doc.setFontSize(14);
  
      //Received from :
  
      doc.setFontSize(12); // Set font size for labels
      doc.setFont("calibre", "bold");
      doc.text("Received from :", 30, 71); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.text(`${hhscomplex?.receiverName}`, 65, 71); // (X, Y,Actual name)
      doc.setFontSize(10); // Reset font size to normal
  
      //A sum of Rupees
      doc.setFontSize(12); // Set font size for labels
      doc.setFont("calibre", "bold");
      doc.text("A sum of Rupees :", 30, 86); // Label "Name:"
      doc.setFont("calibre", "normal");
      doc.text(`${hhscomplex?.rupees}`, 65, 86); //(X, Y, Actual name)
      doc.setFont("calibre", "bold");
      doc.text(" Rupees in words :", 100, 86);
      doc.setFont("calibre", "normal");
      doc.text(`${hhscomplex?.rupeeInWords}`, 135, 86); //(X, Y, Actual name)
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
      doc.text(`${hhscomplex?.eleCharges}`, 153, 105); // (X, Y,Actual name)
      doc.setFontSize(10); // Reset font size to normal
  
      //For the month of
      doc.setFontSize(12); // Set font size for labels
      doc.setFont("calibre", "bold");
      doc.text("For the month of :", 30, 115); // Label "Name:"
      doc.setFont("calibre", "normal");
      doc.text(`${hhscomplex?.month}`, 70, 115); //(X, Y, Actual name)
      doc.setFont("calibre", "bold");
      doc.text("Cheque/D.D.No :", 105, 115);
      doc.setFont("calibre", "normal");
      doc.text(`${hhscomplex?.chequeNo}`, 137, 115); //(X, Y, Actual name)
  
      //Dated
      doc.setFontSize(12); // Set font size for labels
      doc.setFont("calibre", "bold");
      doc.text("Dated :", 40, 135); // Label "Name:"
      doc.setFont("calibre", "normal");
      doc.text(`${hhscomplex?.dated}`, 55, 135); //(X, Y, Actual name)
  

      doc.text("Signature of Manager", 140, 135);
      // Save the PDF with a specific name
      doc.save("hhs_complex.pdf");
      // console.log("Download PDF clicked");
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
    <h2 className="mb-4 text-center entity-column">Details of HHS Complex </h2>
    <Container
      className="detail w-75 text-center"
      style={{
        height: "60vh",
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
        .map((key) => renderHhscomplexRow(key, hhscomplex[key]))}
    </div>
    <div className="w-50">
      {secondColumnKeys
        .filter((key) => key !== "id")
        .map((key) => renderHhscomplexRow(key, hhscomplex[key]))}
    </div>
  </div>
 
  <Button
    variant="primary"
    onClick={handleHHSComplexPdf}
    style={{ height: "50px", width: "150px", lineHeight: "25px", marginTop: "20px" }}
  >
    <FaDownload style={{ marginRight: "5px" }} /> HHS Complex
  </Button>
 
    </Container>
  </div>
  )
}

export default DetailHHSComplex
