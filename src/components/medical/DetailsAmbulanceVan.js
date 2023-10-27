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
const DetailsAmbulanceVan = () => {
  
    const { id } = useParams();
  const [ambulancevan, setAmbulanceVan] = useState(null); 
  const navigate = useNavigate();
  
  useEffect(() => {
    // Function to fetch property by ID
    const fetchAmbulanceVanById = async () => {
      try {
        const response = await axios.get(`${APIS.GETAMBULANCEBYID}/${id}`);
        setAmbulanceVan(response.data);
      } catch (error) {
        console.error("Error fetching AmbulanceVan:", error);
        // Handle the error as needed (e.g., show an error message)
      }
    };

    // Call the fetchPropertyById function when the component mounts
    fetchAmbulanceVanById();
  }, [id]);

  const renderAmbulanceVanRow = (key, value) => (
    <div key={key} className="d-flex entity-row">
      <div className="entity-name">
        {key.replace(/([A-Z])/g, " $1").trim()}:
      </div>
      <div className="entity-value" style={{ whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
        {value}
      </div>
    </div>
  );

  if (!ambulancevan) {
    return <div>ambulancevan not found.</div>;
  }

  const ambulancevanKeys = Object.keys(ambulancevan);
  const halfLength = Math.ceil(ambulancevanKeys.length / 2);
  const firstColumnKeys = ambulancevanKeys.slice(0, halfLength);
  const secondColumnKeys = ambulancevanKeys.slice(halfLength);

  const Pdf = () => {
    const initialState = {};
    const [ambulancevan, setAmbulanceVan] = useState(null);
    const navigate = useNavigate();
  }
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
  doc.text("Date :", 150, 60);
  doc.setFont('calibre','normal');
  doc.setFontSize(10);
  doc.text(`${ambulancevan?.date}`, 165, 60);// Adjust the Y position as needed
 

 //Received with the thanks from :
 doc.setFontSize(12); // Set font size for labels
 doc.setFont('calibre', 'bold');
 doc.text("Received with the thanks from :", 25, 71); // Label "Name:"
 doc.setFont('calibre', 'normal'); // Reset font style to normal
 doc.setFontSize(10); // Reset font size to normal
 doc.text(`${ambulancevan?.receiverName}`, 85, 71); // (X, Y,Actual name)

//on Account of
  doc.setFontSize(12); // Set font size for labels
  doc.setFont('calibre', 'bold');
  doc.text("On Account of :", 25, 91); // Label "Name:"
  doc.setFont('calibre', 'normal'); // Reset font style to normal
  doc.setFontSize(10); // Reset font size to normal
  doc.text(`${ambulancevan?.accHolderName}`, 55, 91); //(X, Y, Actual name)

//Rs
  doc.setFontSize(12); // Set font size for labels
  doc.setFont('calibre', 'bold');
  doc.text("Rs.", 25, 101); // Label "Name:"
  doc.setFont('calibre', 'normal'); // Reset font style to normal
  doc.setFontSize(10); // Reset font size to normal
  doc.text(`${ambulancevan?.rupee}`, 35, 101); // (X, Y, Actual name)

  //Sign
  doc.setFontSize(12); // Set font size for labels
  doc.setFont('calibre', 'bold');
  doc.text("Signature", 150, 101); // Label "Name:"


  // Save the PDF with a specific name
  doc.save("ambulance_receipt.pdf");
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
          <h2 className="mb-4 text-center entity-column">Ambulance Van Details of </h2>
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
              .map((key) => renderAmbulanceVanRow(key, ambulancevan[key]))}
          </div>
          <div className="w-50">
            {secondColumnKeys
              .filter((key) => key !== "id")
              .map((key) => renderAmbulanceVanRow(key, ambulancevan[key]))}
          </div>
        </div>
        <Button
          variant="primary"
          onClick={handleAmbulancePdf}
          style={{ height: "50px", width: "170px", lineHeight: "25px", marginTop: "30px"  }}
        >
          <FaDownload  /> Ambulance Van
        </Button>
          </Container>
        </div>
      );
    };
    
    export default DetailsAmbulanceVan;