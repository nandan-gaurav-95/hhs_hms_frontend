import React, { useState, useEffect } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import { APIS } from "../constants/api";
import { MDBContainer as Container, MDBBtn as Button } from "mdb-react-ui-kit";
import "react-select-search/style.css";
import logo from "../../asset/images/hhslogo.jpg";
import { FaDownload } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import Header from "../common/Header";
import { useNavigate, useParams } from "react-router-dom";

const DetailDargahComplex = () => {
  const { id } = useParams();
  const [dergah, setDargah] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Function to fetch property by ID
    const fetchDergahById = async () => {
      try {
        const response = await axios.get(`${APIS.GETDARGAHCOMPLEXBYID}/${id}`);
        console.log("dargah", response.data);
        setDargah(response.data);
      } catch (error) {
        console.error("Error fetching dergah:", error);
        // Handle the error as needed (e.g., show an error message)
      }
    };

    // Call the fetchPropertyById function when the component mounts
    fetchDergahById();
  }, [id]);

  const renderDergahRow = (key, value) => (
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

  if (!dergah) {
    return <div>Dargah Data not found.</div>;
  }

  const dergahKeys = Object.keys(dergah);
  const halfLength = Math.ceil(dergahKeys.length / 2);
  const firstColumnKeys = dergahKeys.slice(0, halfLength);
  const secondColumnKeys = dergahKeys.slice(0, halfLength);
  //dargah complex pdf
  const handleDargahComplexPdf = () => {
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
      doc.rect(12, 9, 188, 133);
      doc.rect(12, 9, 188, 36);
      doc.setFontSize(15);
      doc.setTextColor(24, 94, 26); // RGB color (red)
      doc.setFont("helvetica", "bold"); // Use the 'helvetica' font family
      doc.text("Hazrath Hameed Shah & Hazrath Muhib Shah Khadri(RA),", 53, 18); // Adjust the Y position as needed
      doc.text("Dargahs & Allied Waqf Institutions", 84, 24);
      doc.setFont("helvetica", "normal"); // Reset font style to normal
      doc.setFontSize(10);
      doc.setTextColor(75, 93, 183); // RGB color (Blue)
      doc.text(
        "No.3,1st Floor,Hazrath Hameed Shah Complex,Cubbonpet Main Road,Banglore - 560 002",
        54,
        32
      );
      doc.text("(Register Under Karnataka State Board of Auqaf)", 73, 36);
      doc.setTextColor(247, 79, 160);
      doc.text("Tel : 080-22211356 / 22240309", 145, 42);
      doc.setTextColor(0);

      //PDF Heading
      doc.setFont("calibre", "bold"); // Use the 'helvetica' font family
      doc.setFontSize(12);
      doc.text("Receipt No.", 20, 53); // Adjust the Y position as needed
      doc.setFont("calibre", "normal");
      doc.text(`${dergah?.dc_id}`, 45, 53);
      doc.setFont("calibre", "bold"); // Use the 'helvetica' font family
      doc.text("Date :", 150, 53);
      doc.setFont("calibre", "normal");
      doc.text(`${dergah?.date}`, 161, 53);

      //Received from :
      //  doc.setFontSize(12); // Set font size for labels
      doc.setFont("calibre", "bold");
      doc.text("Received from :", 20, 62); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      //  doc.setFontSize(10); // Reset font size to normal
      doc.text(`${dergah?.receiverName}`, 51, 62); // (X, Y,Actual name)

      //sum of rupees
      // doc.setFontSize(12); // Set font size for labels
      doc.setFont("calibre", "bold");
      doc.text("a sum of Rupees:", 85, 71); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      // doc.setFontSize(10); // Reset font size to normal
      doc.text(`${dergah?.rupee}`, 118, 71); // (X, Y,Actual name)

      //rupees in the words
      // doc.setFontSize(12); // Set font size for labels
      doc.setFont("calibre", "bold");
      doc.text("Rupees in the words:", 20, 81); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      // doc.setFontSize(10); // Reset font size to normal
      doc.text(`${dergah?.rupeeInWords}`, 60, 81); // (X, Y,Actual name)

      //cash/DD/premises
      // doc.setFontSize(12); // Set font size for labels
      doc.setFont("calibre", "bold");
      doc.text(
        "by Cash / D.D. towards the rent for shop / Premises No.",
        20,
        91
      ); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      // doc.setFontSize(10); // Reset font size to normal
      doc.text(`${dergah?.shopRent}`, 124, 91); // (X, Y,Actual name)

      //for the month
      // doc.setFontSize(12); // Set font size for labels
      doc.setFont("calibre", "bold");
      doc.text("For the Month of:", 20, 101); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      // doc.setFontSize(10); // Reset font size to normal
      doc.text(`${dergah?.month}`, 54, 101); // (X, Y,Actual name)

      //cheque/DD no
      //  doc.setFontSize(12); // Set font size for labels
      doc.setFont("calibre", "bold");
      doc.text("Cheque / D.D. No.", 20, 111); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      //  doc.setFontSize(10); // Reset font size to normal
      doc.text(`${dergah?.chequeNo}`, 57, 111); // (X, Y,Actual name)

      //dated
      // doc.setFontSize(12); // Set font size for labels
      doc.setFont("calibre", "bold");
      doc.text("Dated :", 130, 111); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      // doc.setFontSize(10); // Reset font size to normal
      doc.text(`${dergah?.dated}`, 145, 111); // (X, Y,Actual name)

      //drawn on
      //  doc.setFontSize(12); // Set font size for labels
      doc.setFont("calibre", "bold");
      doc.text("Drawn on: ", 20, 121); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      //  doc.setFontSize(10); // Reset font size to normal
      doc.text(`${dergah?.drawnOn}`, 42, 121); // (X, Y,Actual name)

      //sign
      // doc.setFontSize(12); // Set font size for labels
      doc.setFont("calibre", "bold");
      doc.text("Signature of the Receiver", 130, 135); // Label "Name:"

      doc.save("dargah_complex.pdf");
    };
  };
  return (
    <div>
      <Header />
      <div className="maindetails">
        <div className="arrow-back-container">
          <BiArrowBack className="addbacklogo" onClick={() => navigate(-1)} />
        </div>
        <h2 className="propertyview">Details of {dergah?.receiverName} </h2>
      </div>
      <Container className="detail">
        <div className="columnarrangement">
          <div className="subcolumnarrangement">
            {firstColumnKeys
              .filter((key) => key !== "id")
              .map((key) => renderDergahRow(key, dergah[key]))}
          </div>
          <div className="subcolumnarrangement1">
            {secondColumnKeys
              .filter((key) => key !== "id")
              .map((key) => renderDergahRow(key, dergah[key]))}
          </div>
        </div>
        <div className="pdf-btn-div">
          <Button variant="primary" onClick={handleDargahComplexPdf}>
            <FaDownload /> Dargah Complex
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default DetailDargahComplex;
