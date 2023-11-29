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
import bloodlogo from "../../asset/images/bloodcenterlogo.jpeg";
const DetailBloodCenter = () => {
  const { id } = useParams();
  const [bloodcenter, setBloodcenter] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Call the fetchPropertyById function when the component mounts
    fetchBloodcenterById();
  }, [id]);

  // Function to fetch blood center by ID
  const fetchBloodcenterById = async () => {
    try {
      const response = await axios.get(`${APIS.GETBLOODCENTERBYID}/${id}`);
      console.log("Jiii", response.data);
      setBloodcenter(response.data);
    } catch (error) {
      console.error("Error fetching Blood center:", error);
      // Handle the error as needed (e.g., show an error message)
    }
  };

  const renderBloodcenterRow = (key, value) => (
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

  if (!bloodcenter) {
    return <div>Blood Center for this id not found.</div>;
  }

  const bloodcenterKeys = Object.keys(bloodcenter);
  const halfLength = Math.ceil(bloodcenterKeys.length / 2);
  const firstColumnKeys = bloodcenterKeys.slice(0, halfLength);
  const secondColumnKeys = bloodcenterKeys.slice(halfLength);

  //blood centre pdf
  const handleBloodCenterPdf = () => {
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
        15, // Y position
        45, // Image width
        30 // Image height
      );
      doc.addImage(
        bloodlogo,
        "JPEG", // You can specify the format here (e.g., "PNG", "JPEG", etc.)
        155, // X position
        16, // Y position
        38, // Image width
        25 // Image height
      );
      //Header Part
      doc.rect(12, 9, 186, 163);
      doc.rect(12, 9, 186, 41);
      // doc.setFontSize(8);
      // doc.text("LICENSE NUMBER - KTK/28C-409/2022", 75, 15);
      doc.setFontSize(16);
      doc.setTextColor(24, 94, 26);
      doc.setFont("helvetica", "bold"); // Use the 'helvetica' font family
      doc.text("HHS & HMS", 52, 19); // Adjust the Y position as needed
      doc.setFontSize(11);
      doc.text("(R.A.)", 85, 18);
      doc.setFontSize(18);
      doc.setFont("helvetica", "bold");
      doc.text("BLOOD CENTRE", 97, 19);
      doc.setFont("helvetica", "normal"); // Reset font style to normal
      doc.setFontSize(12);
      doc.setTextColor(75, 93, 183);
      doc.setFont("helvetica", "bold");
      doc.text("(Under Karnataka State Board of Aquaf)", 62, 24);
      doc.setFontSize(11);
      doc.setTextColor(75, 93, 183);
      doc.setFont("helvetica", "normal");
      doc.text("No.3,1st Floor,Hazrath Hameed Shah Complex,", 62, 29);
      doc.text("Cubbonpet Main Road,Banglore - 560 002", 62, 34);
      doc.setFontSize(13);
      doc.setTextColor(247, 79, 160);
      doc.setFont("helvetica", "bold");
      doc.text("Ph : 080-4989 4916 - 98458 54991", 62, 40);
      doc.setFontSize(15);
      doc.setTextColor(75, 93, 183);
      doc.setFont("helvetica", "bold");
      doc.text("DL. No. : KTK/28C-409/2022", 62, 47);

      //PDF Heading

      doc.setFont("helvetica", "bold"); // Use the 'helvetica' font family
      doc.setFontSize(15);
      doc.text("RECEIPT", 80, 65); // Adjust the Y position as needed

      // Reset text color to default (black)
      doc.setTextColor(0);

      doc.setFont("calibre", "bold");
      doc.text("Date :", 155, 65); // Adjust the Y position as needed
      doc.setFont("calibre", "normal");
      doc.setFontSize(12); // Reset font size to normal
      doc.text(`${bloodcenter?.date}`, 170, 65);

      //Received with the thanks from :
      doc.setFontSize(12); // Set font size for labels
      doc.setFont("calibre", "bold");
      doc.text("Received with the thanks from Smt./Sri :", 25, 81); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.setFontSize(12); // Reset font size to normal
      doc.text(`${bloodcenter?.receiverName}`, 100, 81); // (X, Y,Actual name)
      doc.setFontSize(12); // Set font size for labels
      doc.setFont("calibre", "bold");
      doc.text("Age:", 125, 91);
      doc.text("Sex:", 155, 91);
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.setFontSize(12); // Reset font size to normal
      doc.text(`${bloodcenter?.age}`, 135, 91); // (X, Y,Actual name)
      doc.text(`${bloodcenter?.gender}`, 165, 91); // (X, Y,Actual name)

      //IP no
      doc.setFontSize(12); // Set font size for labels
      doc.setFont("calibre", "bold");
      doc.text("I.P.NO.", 25, 91); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.setFontSize(12); // Reset font size to normal
      doc.text(`${bloodcenter?.ipNo}`, 45, 91); //(X, Y, Actual name)

      //Hospital
      doc.setFontSize(12); // Set font size for labels
      doc.setFont("calibre", "bold");
      doc.text("Hospital/N Home:", 25, 101); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.setFontSize(12); // Reset font size to normal
      doc.text(`${bloodcenter?.hospitalName}`, 60, 101); // (X, Y, Actual name)

      //sum of rupees
      doc.setFontSize(12); // Set font size for labels
      doc.setFont("calibre", "bold");
      doc.text("Sum of Rupees:", 25, 111); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.setFontSize(12); // Reset font size to normal
      doc.text(`${bloodcenter?.rupee}`, 55, 111); // (X, Y, Actual name)

      //sum of rupees
      doc.setFontSize(12); // Set font size for labels
      doc.setFont("calibre", "bold");
      doc.text("Towards /lab Investigation Charges for:", 25, 121); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.setFontSize(12); // Reset font size to normal
      doc.text(`${bloodcenter?.invstigationCharges}`, 99, 121); // (X, Y, Actual name)

      //unit no
      doc.setFontSize(12); // Set font size for labels
      doc.setFont("calibre", "bold");
      doc.text("Unit No:", 155, 121); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.setFontSize(12); // Reset font size to normal
      doc.text(`${bloodcenter?.unitNo}`, 175, 121); // (X, Y, Actual name)

      //blood group
      doc.setFontSize(12); // Set font size for labels
      doc.setFont("calibre", "bold");
      doc.text("Blood Group:", 25, 131); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.setFontSize(12); // Reset font size to normal
      doc.text(`${bloodcenter?.bloodgroup}`, 55, 131); // (X, Y, Actual name)

      //cash
      doc.setFontSize(12); // Set font size for labels
      doc.setFont("calibre", "bold");
      doc.text("Cash:", 25, 141); // Label "Name:"
      doc.rect(37, 136, 8, 8); // (X, Y, Width, Height)

      //upi
      doc.setFont("calibre", "bold");
      doc.text("UPI:", 55, 141); // Label "Name:"
      doc.rect(65, 136, 8, 8); // (X, Y, Width, Height)

      //rs
      doc.setFontSize(12); // Set font size for labels
      doc.setFont("calibre", "bold");
      doc.text("RS:", 25, 153); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.setFontSize(12); // Reset font size to normal
      doc.text(`${bloodcenter?.rupee}`, 35, 153); // (X, Y, Actual name)

      //Sign
      doc.setFontSize(12); // Set font size for labels
      doc.setFont("calibre", "bold");
      doc.text("Authorised Signatory", 155, 153); // Label "Name:"

      //note
      doc.setFontSize(10); // Set font size for labels
      doc.setFont("calibre", "bold");
      doc.text(
        "Note: Blood Once Issued Will Not Be Taken Back or Replace",
        55,
        163
      ); // Label "Name:"

      // Save the PDF with a specific name
      doc.save("blood_receipt.pdf");
      // console.log("Download PDF clicked");
    };
  };

  const handleCertificate = () => {
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
        15, // Y position
        45, // Image width
        30 // Image height
      );
      doc.addImage(
        bloodlogo,
        "JPEG", // You can specify the format here (e.g., "PNG", "JPEG", etc.)
        155, // X position
        16, // Y position
        38, // Image width
        25 // Image height
      );
      //Header Part
      doc.rect(12, 9, 186, 251);
      doc.rect(12, 9, 186, 41);

      // doc.text("LICENSE NUMBER - KTK/28C-409/2022", 75, 15);
      doc.setFontSize(16);
      doc.setTextColor(24, 94, 26);
      doc.setFont("helvetica", "bold"); // Use the 'helvetica' font family
      doc.text("HHS & HMS", 52, 19); // Adjust the Y position as needed
      doc.setFontSize(11);
      doc.text("(R.A.)", 85, 18);
      doc.setFontSize(18);
      doc.setFont("helvetica", "bold");
      doc.text("BLOOD CENTRE", 97, 19);
      doc.setFont("helvetica", "normal"); // Reset font style to normal
      doc.setFontSize(12);
      doc.setTextColor(75, 93, 183);
      doc.setFont("helvetica", "bold");
      doc.text("(Under Karnataka State Board of Aquaf)", 62, 24);
      doc.setFontSize(11);
      doc.setTextColor(75, 93, 183);
      doc.setFont("helvetica", "normal");
      doc.text("No.3,1st Floor,Hazrath Hameed Shah Complex,", 62, 29);
      doc.text("Cubbonpet Main Road,Banglore - 560 002", 62, 34);
      doc.setFontSize(13);
      doc.setTextColor(247, 79, 160);
      doc.setFont("helvetica", "bold");
      doc.text("Ph : 080-4989 4916 - 98458 54991", 62, 40);
      doc.setFontSize(15);
      doc.setTextColor(75, 93, 183);
      doc.setFont("helvetica", "bold");
      doc.text("DL. No. : KTK/28C-409/2022", 62, 47);

      //PDF Heading

      doc.setFont("helvetica", "bold"); // Use the 'helvetica' font family
      doc.setFontSize(15);
      doc.text("WHOLE HUMAN BLOOD IP", 55, 57); // Adjust the Y position as needed
      doc.setTextColor(0); // Reset text color to default (black)
      doc.setFontSize(11);
      doc.setFont("calibre", "normal");
      doc.text(
        "Prepared from blood collected (350ml) from voluntary / Replacement Donor in (49 ml) of CPDA in Solution",
        17,
        63
      );

      //blood group & rh factor
      doc.setFont("calibre", "bold");
      doc.setFontSize(15); // Reset font size to normal
      doc.rect(12, 65, 186, 10);
      doc.text("BLOOD GROUP & Rh FACTOR :", 20, 72); // Adjust the Y position as needed
      doc.text(`${bloodcenter?.bloodgroup}`, 103, 72);

      //unit no
      doc.setFontSize(12); // Reset font size to normal
      doc.text("UNIT NO :", 20, 82); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.text(`${bloodcenter?.unitNo}`, 45, 82); // (X, Y,Actual name)

      //date
      doc.rect(12, 85, 186, 10);
      doc.text("Date of Collection of Blood :", 20, 92); // Adjust the Y position as needed
      doc.text(`${bloodcenter?.date}`, 70, 92);

      doc.text("Date of Expiry :", 20, 102); // Adjust the Y position as needed
      doc.text(`${bloodcenter?.expirydate}`, 50, 102);

      doc.rect(12, 105, 186, 10);
      doc.setFont("calibre", "bold");
      doc.text(
        "Screened & Found negative for MP, Non-Reactive for Syphilis, HBsag, HIV I & II & HCV",
        20,
        112
      );
      doc.setFont("calibre", "normal");

      // patient Name
      doc.text("Patient Name:", 20, 122);
      doc.text(`${bloodcenter?.receiverName}`, 45, 122); // (X, Y,Actual name)

      // age
      doc.text("Age:", 125, 122);
      doc.text(`${bloodcenter?.age}`, 135, 122); // (X, Y,Actual name)

      //IP no
      doc.rect(12, 125, 186, 10);
      doc.text("IP NO :", 20, 131); // Label "Name:"
      doc.text(`${bloodcenter?.ipNo}`, 40, 131); //(X, Y, Actual name)

      //Hospital
      doc.text("Hospital :", 20, 141); // Label "Name:"
      doc.text(`${bloodcenter?.hospitalName}`, 40, 141); // (X, Y, Actual name)

      //blood group
      doc.rect(12, 145, 186, 10);
      doc.text("Blood Group & Rh :", 20, 151); // Label "Name:"
      doc.text(`${bloodcenter?.bloodgroup}`, 57, 151); // (X, Y, Actual name)

      //cross matching
      doc.setFont("calibre", "bold");
      doc.text("CROSS MATCHING : COMPATIBLE", 55, 161); // Label "Name:"

      //  issue date
      const currentDate = new Date();
      const issueDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;
      doc.rect(12, 165, 186, 20);
      doc.setFont("calibre", "normal");
      doc.text(`Date & Time of Issue: ${issueDate}`, 20, 171);

      doc.setFont("calibre", "bold");
      doc.text("Issued by :", 20, 181); // Label "Name:"
      doc.text("Checked by :", 135, 181); // Label "Name:"

      // caution
      doc.setTextColor(255, 0, 0); // RGB warning color code
      doc.text("CAUTION", 20, 191); // Label "Name:"
      doc.setTextColor(0); // RGB warning color code
      doc.setFont("calibre", "normal");
      doc.text(" 1. Administer without warning.", 20, 196); // Label "Name:"
      doc.text(" 2. Shake gently before use.", 20, 201); // Label "Name:"
      doc.text(
        " 3. Do not add any medication to this blood / component.",
        20,
        206
      ); // Label "Name:"
      doc.text(
        " 4. Check blood group on label and recipient's group and Name before administration.",
        20,
        211
      ); // Label "Name:"
      doc.text(
        " 5. Use a fresh, clean and sterile transfusion set with filter to transfuse the blood | component.",
        20,
        216
      ); // Label "Name:"
      doc.text(" 6. Do not dispense without prescription.", 20, 221); // Label "Name:"
      doc.text(
        " 7. Do not use if there is any visible evidence of deterioration like haemolysis, clotting or discoloration.",
        20,
        226
      ); // Label "Name:"
      doc.text(" 8. Store between 2\u00B0C to 6\u00B0C.", 20, 231); // Label "Name:"
      doc.text(
        " 9. Appropriate compatiable cross-matched blood without a typical antibody in recipient's",
        20,
        236
      ); // Label "Name:"
      doc.text(" should be used.", 40, 241);
      doc.text(
        "10. If Haemolysis present, it must be transfused to recipients of O Group only.",
        20,
        246
      ); // Label "Name:"

      //  Warning
      doc.rect(12, 250, 186, 10);
      doc.setFont("calibre", "bold");
      doc.setTextColor(237, 155, 2); // RGB warning color code
      doc.text(
        "BLOOD / COMPONENTS ONCE ISSUES WILL NOT BE TAKEN BACK OR REPLACE",
        20,
        256
      ); // Label "Name:"

      // Save the PDF with a specific name
      doc.save("blood_certificate.pdf");
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
        <h2 className="propertyview">Blood Center Details </h2>
      </div>
      <Container className="detailblood">
        <div className="columnarrangement">
          <div className="subcolumnarrangement">
            {firstColumnKeys
              .filter((key) => key !== "id")
              .map((key) => renderBloodcenterRow(key, bloodcenter[key]))}
          </div>
          <div className="subcolumnarrangement1">
            {secondColumnKeys
              .filter((key) => key !== "id")
              .map((key) => renderBloodcenterRow(key, bloodcenter[key]))}
          </div>
        </div>
        <div className="bloodBtn">
          <Button
            variant="primary"
            onClick={handleBloodCenterPdf}
            className="bloodpdf"
          >
            <FaDownload /> Blood center
          </Button>
          <Button
            variant="primary"
            onClick={handleCertificate}
            className="bloodpdf1"
          >
            <FaDownload /> Blood Certificate
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default DetailBloodCenter;
