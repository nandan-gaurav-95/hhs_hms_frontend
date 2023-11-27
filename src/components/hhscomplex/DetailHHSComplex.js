import React, { useState, useEffect } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import { APIS } from "../constants/api";
import { MDBContainer as Container } from "mdb-react-ui-kit";

import { Button } from "react-bootstrap";
import "react-select-search/style.css";
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
        console.log("complex", response.data);
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
      <div
        className="entity-value"
        style={{ whiteSpace: "nowrap", textOverflow: "ellipsis" }}
      >
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
        9, // X position
        13, // Y position
        45, // Image width
        30 // Image height
      );

      //Header Part
      doc.rect(12, 9, 186, 137);
      doc.rect(12, 9, 186, 38);
      doc.setTextColor(24, 94, 26);
      doc.setFont("helvetica", "bold"); // Use the 'helvetica' font family
      doc.text("Hazrath Hameed Shah & Hazrath Muhib Shah Khadri", 53, 18); // Adjust the Y position as needed
      doc.text("(R.A.), Dargahs & Allied Waqf Instititions", 67, 26);
      doc.setFont("helvetica", "normal"); // Reset font style to normal
      doc.setFontSize(10);
      doc.setTextColor(75, 93, 183);
      doc.text(
        "No.3, 1st Floor,Hazrath Hameed Shah Complex,Cubbonpet Main Road,Banglore-560 002",
        53,
        34
      );
      doc.text("(Register Under Karnataka State Board of Auqaf)", 76, 38);
      doc.setTextColor(247, 79, 160);
      doc.text("Tel : 080-22211356 / 2222240309", 140, 43);
      //PDF Heading

      doc.setFont("helvetica", "bold");
      doc.setTextColor(0); // Use the 'helvetica' font family
      doc.rect(30, 53, 35, 10); // (X, Y, Width, Height)
      doc.text("No.:", 31, 59);
      doc.text(`${hhscomplex?.hc_id}`, 39, 59); // (X, Y,Actual name)

      doc.rect(70, 53, 35, 10); // (X, Y, Width, Height)
      doc.text("L.F.No.", 71, 59);
      doc.text(`${hhscomplex?.lfNo}`, 84, 59); // (X, Y,Actual name)

      doc.rect(110, 53, 35, 10); // (X, Y, Width, Height)
      doc.text("R.R.No.", 112, 59);
      doc.text(`${hhscomplex?.rrNo}`, 126, 59); // (X, Y,Actual name)

      doc.rect(150, 53, 35, 10); // (X, Y, Width, Height)
      doc.text("Date:", 152, 59);
      doc.text(`${hhscomplex?.date}`, 162, 59); // (X, Y,Actual name)

      //Received from :

      doc.setFontSize(12); // Set font size for labels
      doc.setFont("calibre", "bold");
      doc.text("Received from :", 30, 74); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.text(`${hhscomplex?.receiverName}`, 62, 74); // (X, Y,Actual name)

      //A sum of Rupees
      doc.setFont("calibre", "bold");
      doc.text("A sum of Rupees :", 30, 88); // Label "Name:"
      doc.setFont("calibre", "normal");
      doc.text(`${hhscomplex?.rupees}`, 65, 88); //(X, Y, Actual name)
      doc.setFont("calibre", "bold");
      doc.text(" Rupees in words :", 105, 88);
      doc.setFont("calibre", "normal");
      doc.text(`${hhscomplex?.rupeeInWords}`, 140, 88); //(X, Y, Actual name)
      doc.setFont("calibre", "normal"); // Reset font style to normal

      //by Cash
      doc.setFont("calibre", "bold");
      doc.text(
        "by Cash/Cheque/D.D towards the Electrical Charges for Shop No. :",
        30,
        102
      ); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.text(`${hhscomplex?.eleCharges}`, 153, 102); // (X, Y,Actual name)

      //For the month of
      doc.setFont("calibre", "bold");
      doc.text("For the month of :", 30, 117); // Label "Name:"
      doc.setFont("calibre", "normal");
      doc.text(`${hhscomplex?.month}`, 65, 117); //(X, Y, Actual name)
      doc.setFont("calibre", "bold");
      doc.text("Cheque/D.D.No :", 105, 117);
      doc.setFont("calibre", "normal");
      doc.text(`${hhscomplex?.chequeNo}`, 137, 117); //(X, Y, Actual name)

      //Dated
      doc.setFont("calibre", "bold");
      doc.text("Dated :", 30, 137); // Label "Name:"
      doc.setFont("calibre", "normal");
      doc.text(`${hhscomplex?.dated}`, 45, 137); //(X, Y, Actual name)

      doc.setFont("calibre", "bold");
      doc.text("Signature of Manager", 139, 137);
      // Save the PDF with a specific name
      doc.save("hhscomplex.pdf");
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
        <h2 className="propertyview">Details of HHS Complex </h2>
      </div>
      <Container className="detail">
        <div className="columnarrangement">
          <div className="subcolumnarrangement">
            {firstColumnKeys
              .filter((key) => key !== "id")
              .map((key) => renderHhscomplexRow(key, hhscomplex[key]))}
          </div>
          <div className="subcolumnarrangement1">
            {secondColumnKeys
              .filter((key) => key !== "id")
              .map((key) => renderHhscomplexRow(key, hhscomplex[key]))}
          </div>
        </div>
        <div className="pdf-btn-div">
        <Button variant="primary" onClick={handleHHSComplexPdf}>
          <FaDownload /> HHS Complex
        </Button>
        </div>
      </Container>
    </div>
  );
};

export default DetailHHSComplex;
