import React, { useState, useEffect } from "react";
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
import "react-select-search/style.css";
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
        // console.log("ambl data",response.data);
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
      <div
        className="entity-value"
        style={{ whiteSpace: "nowrap", textOverflow: "ellipsis" }}
      >
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
  };
  const handleAmbulancePdf = () => {
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
      doc.rect(12, 9, 186, 103);
      doc.rect(12, 9, 186, 36);
      doc.setTextColor(24, 94, 26);
      doc.setFont("helvetica", "bold"); // Use the 'helvetica' font family
      doc.text("Hazrath Hameed Shah & Hazrath Muhib Shah Khadri", 51, 18); // Adjust the Y position as needed
      doc.text("(R.A.), Dargahs & Allied Waqf Instititions", 60, 25);
      doc.setFont("helvetica", "normal"); // Reset font style to normal
      doc.setFontSize(10);
      doc.setTextColor(75, 93, 183);
      doc.text(
        "No.3, 1st Floor,Hazrath Hameed Shah Complex,Cubbonpet Main Road,Banglore-560 002",
        51,
        32
      );
      doc.text("(Register Under Karnataka State Board of Auqaf)", 76, 36);
      doc.setTextColor(247, 79, 160);
      doc.text("Tel : 080-22211356 / 2222240309", 135, 42);

      //PDF Heading

      doc.setFont("calibre", "bold"); // Use the 'calibre' font family
      doc.setFontSize(12);
      doc.setTextColor(0);
      doc.text("AMBULANCE VAN", 80, 53); // Adjust the Y position as needed
      doc.text("RECEIPT", 90, 59);
      doc.setFont("calibre", "normal"); // Reset font style to normal

      // Reset text color to default (black)
      doc.setTextColor(0);
      doc.setFont("calibre", "bold");
      doc.text("Date :", 150, 64);
      doc.setFont("calibre", "normal");
      doc.text(`${ambulancevan?.date}`, 165, 64); // Adjust the Y position as needed

      //No :
      doc.setFont("calibre", "bold");
      doc.text("No:-", 25, 64); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal

      doc.text(`${ambulancevan?.amb_id}`, 35, 64);

      //Received with the thanks from :
      doc.setFont("calibre", "bold");
      doc.text("Received with the thanks from :", 25, 74); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal

      doc.text(`${ambulancevan?.receiverName}`, 85, 74); // (X, Y,Actual name)

      //Rupees :
      doc.setFont("calibre", "bold");
      doc.text("Rupees :", 25, 84); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal

      doc.text(`${ambulancevan?.rupee}`, 43, 84); // (X, Y,Actual name)

      //on Account of
      doc.setFont("calibre", "bold");
      doc.text("On Account of :", 25, 94); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal

      doc.text(`${ambulancevan?.accHolderName}`, 55, 94); //(X, Y, Actual name)

      // //Rs
      //   doc.setFontSize(12); // Set font size for labels
      //   doc.setFont('calibre', 'bold');
      //   doc.text("Rs.", 25, 101); // Label "Name:"
      //   doc.setFont('calibre', 'normal'); // Reset font style to normal

      //   doc.text(${ambulancevan?.rupee}, 35, 101); // (X, Y, Actual name)

      //Sign
      // doc.setFontSize(12); // Set font size for labels
      doc.setFont("calibre", "bold");
      doc.text("Signature", 150, 104); // Label "Name:"

      // Save the PDF with a specific name
      doc.save("ambulance_receipt.pdf");
      // console.log("Download PDF clicked");
    };
  };

  return (
    <div>
      <Header />
      <div className="maindetails">
        <div className="arrow-back-container">
          <BiArrowBack className="addbacklogo" onClick={() => navigate(-1)} />
        </div>
        <h2 className="propertyview">
          Ambulance Van Details of {ambulancevan?.receiverName}{" "}
        </h2>
      </div>
      <Container className="detail">
        <div className="columnarrangement">
          <div className="subcolumnarrangement">
            {firstColumnKeys
              .filter((key) => key !== "id")
              .map((key) => renderAmbulanceVanRow(key, ambulancevan[key]))}
          </div>
          <div className="subcolumnarrangement1">
            {secondColumnKeys
              .filter((key) => key !== "id")
              .map((key) => renderAmbulanceVanRow(key, ambulancevan[key]))}
          </div>
        </div>
        <div className="pdf-btn-div">
          <Button variant="primary" onClick={handleAmbulancePdf}>
            <FaDownload /> Ambulance Van
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default DetailsAmbulanceVan;
