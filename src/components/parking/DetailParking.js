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

const DetailParking = () => {
  const { id } = useParams();
  const [parking, setParking] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Function to fetch property by ID
    const fetchParkingById = async () => {
      try {
        const response = await axios.get(`${APIS.GETPARKINGBYID}/${id}`);
        console.log("parking", response.data);
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
      <div
        className="entity-value"
        style={{ whiteSpace: "nowrap", textOverflow: "ellipsis" }}
      >
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
  const secondColumnKeys = parkingKeys.slice(0, halfLength);

  //parking pdf
  const handleParkingrPdf = () => {
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
        11, // Y position
        45, // Image width
        30 // Image height
      );

      //Header Part
      doc.rect(13, 9, 186, 133);
      doc.rect(13, 9, 186, 34);
      doc.setFontSize(15);
      doc.setTextColor(24, 94, 26); // RGB color (dark green)
      doc.setFont("helvetica", "bold"); // Use the 'helvetica' font family
      doc.text("Hazrath Hameed Shah & Hazrath Muhib Shah Khadri(RA),", 52, 17); // Adjust the Y position as needed
      doc.text("Dargahs & Allied Waqf Institutions", 82, 23);
      doc.setFont("helvetica", "normal"); // Reset font style to normal
      doc.setFontSize(10);
      doc.setTextColor(75, 93, 183); // RGB color (Blue)
      doc.text(
        "No.3,1st Floor,Hazrath Hameed Shah Complex,Cubbonpet Main Road,Banglore - 560 002",
        53,
        30
      );
      doc.text("(Register Under Karnataka State Board of Auqaf)", 73, 34);
      doc.setTextColor(247, 79, 160);
      doc.text("Tel : 080-22211356 / 22240309", 145, 40);
      doc.setTextColor(0);

      //PDF Heading
      doc.setFont("helvetica", "bold"); // Use the 'helvetica' font family
      doc.setFontSize(12);
      doc.text("Receipt No.", 20, 50); // Adjust the Y position as needed
      doc.setFont("helvetica", "normal");
      doc.text(`${parking?.p_id}`, 50, 50);
      doc.setFont("helvetica", "bold"); // Use the 'helvetica' font family
      doc.text("Date:", 130, 50);
      doc.setFont("helvetica", "normal");
      doc.text(`${parking?.date}`, 143, 50);

      //Received from :

      doc.setFont("calibre", "bold");
      doc.text("Received from :", 20, 60); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.text(`${parking?.receiverName}`, 50, 60); // (X, Y,Actual name)

      //sum of rupees
      doc.setFont("calibre", "bold");
      doc.text("A Sum of Rupees:", 20, 70); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.text(`${parking?.rupee}`, 55, 70); // (X, Y,Actual name)

      //rupees in the words
      doc.setFont("calibre", "bold");
      doc.text("Rupees in the words:", 20, 80); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.text(`${parking?.rupeeInWords}`, 60, 80); // (X, Y,Actual name)

      //cash/DD/premises
      doc.setFont("calibre", "bold");
      doc.text("by Cash / D.D. towards the rent for Parking:", 20, 90); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.text(`${parking?.parkingRent}`, 103, 90); // (X, Y,Actual name)

      //for the month
      doc.setFont("calibre", "bold");
      doc.text("in the Month of:", 20, 100); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.text(`${parking?.month}`, 53, 100); // (X, Y,Actual name)

      //cheque/DD no

      doc.setFont("calibre", "bold");
      doc.text("Cheque / D.D. No.", 20, 110); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.text(`${parking?.chequeNo}`, 55, 110); // (X, Y,Actual name)

      //dated
      doc.setFont("calibre", "bold");
      doc.text("Dated :", 130, 110); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.text(`${parking?.dated}`, 145, 110); // (X, Y,Actual name)

      //drawn on

      doc.setFont("calibre", "bold");
      doc.text("Drawn on: ", 20, 120); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.text(`${parking?.drawnOn}`, 42, 120); // (X, Y,Actual name)

      //sign
      doc.setFont("calibre", "bold");
      doc.text("Signature of the Receiver", 130, 135); // Label "Name:"

      doc.save("parking.pdf");
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
          Parking Details of {parking?.receiverName}{" "}
        </h2>
      </div>
      <Container className="detail">
        <div className="columnarrangement">
          <div className="subcolumnarrangement">
            {firstColumnKeys
              .filter((key) => key !== "id")
              .map((key) => renderParkingRow(key, parking[key]))}
          </div>
          <div className="subcolumnarrangement1">
            {secondColumnKeys
              .filter((key) => key !== "id")
              .map((key) => renderParkingRow(key, parking[key]))}
          </div>
        </div>
        <div className="pdf-btn-div">
        <Button variant="primary" onClick={handleParkingrPdf}>
          <FaDownload /> Parking
        </Button>
        </div>
      </Container>
    </div>
  );
};

export default DetailParking;
