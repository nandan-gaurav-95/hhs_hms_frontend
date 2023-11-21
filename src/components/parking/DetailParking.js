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

const DetailParking = () => {
    const { id } = useParams();
  const [parking, setParking] = useState(null); 
  const navigate = useNavigate();
  
  useEffect(() => {
    // Function to fetch property by ID
    const fetchParkingById = async () => {
      try {
        const response = await axios.get(`${APIS.GETPARKINGBYID}/${id}`);
        console.log("parking",response.data);
        setParking(response.data);
      } catch (error) {
        console.error("Error fetching Parking:", error);
        // Handle the error as needed (e.g., show an error message)
      }
    };

    // Call the fetchPropertyById function when the component mounts
    fetchParkingById();
  }, [id]);

  const renderParkingRow = (key, value) => (
    <div key={key} className="d-flex entity-row">
      <div className="entity-name">
        {key.replace(/([A-Z])/g, " $1").trim()}:
      </div>
      <div className="entity-value" style={{ whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
        {value}
      </div>
    </div>
  );

  if (!parking) {
    return <div>Parking not found.</div>;
  }

  const parkingKeys = Object.keys(parking);
  const halfLength = Math.ceil(parkingKeys.length / 2);
  const firstColumnKeys = parkingKeys.slice(0, halfLength);
  const secondColumnKeys = parkingKeys.slice(0,halfLength);

 //parking pdf
const handleParkingrPdf = () => {

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
    doc.rect(10,9,175,133);
    doc.rect(10,9,175,33);
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
    doc.text(`${parking?.p_id}`, 50, 50); 
    doc.setFont('helvetica', 'bold'); // Use the 'helvetica' font family
    doc.text("Date:", 130, 50);
    doc.setFont('helvetica', 'normal');
    doc.text(`${parking?.date}`, 145, 50); 
  
  
  //Received from :
  //  doc.setFontSize(12); // Set font size for labels
   doc.setFont('calibre', 'bold');
   doc.text("Received from :", 20, 60); // Label "Name:"
   doc.setFont('calibre', 'normal'); // Reset font style to normal
   doc.setFontSize(10); // Reset font size to normal
   doc.text(`${parking?.receiverName}`,55, 60); // (X, Y,Actual name)
  
    //sum of rupees
    doc.setFontSize(12); // Set font size for labels
    doc.setFont('calibre', 'bold');
    doc.text("A Sum of Rupees:", 20, 70); // Label "Name:"
    doc.setFont('calibre', 'normal'); // Reset font style to normal
    doc.setFontSize(10); // Reset font size to normal
    doc.text(`${parking?.rupee}`, 60, 70); // (X, Y,Actual name)
  
    //rupees in the words
    doc.setFontSize(12); // Set font size for labels
    doc.setFont('calibre', 'bold');
    doc.text("Rupees in the words:", 20, 80); // Label "Name:"
    doc.setFont('calibre', 'normal'); // Reset font style to normal
    doc.setFontSize(10); // Reset font size to normal
    doc.text(`${parking?.rupeeInWords}`, 65, 80); // (X, Y,Actual name)
  
      //cash/DD/premises
      doc.setFontSize(12); // Set font size for labels
      doc.setFont('calibre', 'bold');
      doc.text("by Cash / D.D. towards the rent for Parking:", 20, 90); // Label "Name:"
      doc.setFont('calibre', 'normal'); // Reset font style to normal
      doc.setFontSize(10); // Reset font size to normal
      doc.text(`${parking?.parkingRent}`, 105, 90); // (X, Y,Actual name)
  
      //for the month 
      doc.setFontSize(12); // Set font size for labels
      doc.setFont('calibre', 'bold');
      doc.text("in the Month of:", 20, 100); // Label "Name:"
      doc.setFont('calibre', 'normal'); // Reset font style to normal
      doc.setFontSize(10); // Reset font size to normal
      doc.text(`${parking?.month}`, 55, 100); // (X, Y,Actual name)
  
       //cheque/DD no
       doc.setFontSize(12); // Set font size for labels
       doc.setFont('calibre', 'bold');
       doc.text("Cheque / D.D. No.", 20, 110); // Label "Name:"
       doc.setFont('calibre', 'normal'); // Reset font style to normal
       doc.setFontSize(10); // Reset font size to normal
       doc.text(`${parking?.chequeNo}`, 60, 110); // (X, Y,Actual name)
  
        //dated
        doc.setFontSize(12); // Set font size for labels
        doc.setFont('calibre', 'bold');
        doc.text("Dated :", 130, 110); // Label "Name:"
        doc.setFont('calibre', 'normal'); // Reset font style to normal
        doc.setFontSize(10); // Reset font size to normal
        doc.text(`${parking?.dated}`, 145, 110); // (X, Y,Actual name)
  
       //drawn on
       doc.setFontSize(12); // Set font size for labels
       doc.setFont('calibre', 'bold');
       doc.text("Drawn on: ", 20, 120); // Label "Name:"
       doc.setFont('calibre', 'normal'); // Reset font style to normal
       doc.setFontSize(10); // Reset font size to normal
       doc.text(`${parking?.drawnOn}`, 45, 120); // (X, Y,Actual name)
  
        //sign
        doc.setFontSize(12); // Set font size for labels
        doc.setFont('calibre', 'bold');
        doc.text("Signature of the Receiver", 130, 135); // Label "Name:"
        
  
    doc.save("parking.pdf");
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
    <h2 className="mb-4 text-center entity-column">Parking Details of {parking?.receiverName} </h2>
    </div>
    <Container
      className="detail w-50 text-center"
      style={{
        height: "55vh",
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
        .map((key) => renderParkingRow(key, parking[key]))}
    </div>
    <div className="w-50">
      {secondColumnKeys
        .filter((key) => key !== "id")
        .map((key) => renderParkingRow(key, parking[key]))}
    </div>
  </div>
 
  <Button
    variant="primary"
    onClick={handleParkingrPdf}
    style={{ height: "40px", width: "130px", lineHeight: "25px", marginTop: "15px" }}
  >
    <FaDownload style={{ marginRight: "5px" }} /> Parking
  </Button>
 
    </Container>
  </div>
  )
}

export default DetailParking