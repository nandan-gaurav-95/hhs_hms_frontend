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

const DetailMedicalAck = () => {
  const { id } = useParams();
  const [medicalack, setMedicalack] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Function to fetch property by ID
    const fetchMedicalAcknowledgeById = async () => {
      try {
        const response = await axios.get(
          `${APIS.GETMEDICALACKNWLDGEBYID}/${id}`
        );
        console.log("medicalack", response.data);
        setMedicalack(response.data);
      } catch (error) {
        console.error("Error fetching medical Acknowledge:", error);
        // Handle the error as needed (e.g., show an error message)
      }
    };

    // Call the fetchPropertyById function when the component mounts
    fetchMedicalAcknowledgeById();
  }, [id]);
  const humanReadableNames = {
    //  mdack_id; //medical ackn id == HHS/HMS/F.A. 
	 toName:"To Name",
	 date:"Date",
	 rupees:"Rupees",
	 chequeNo:"Cheque No",//Vide Cheque No.
	 dated:"Dated",
	 hospIpNo:"Hospital Ip No.",
	 disease:"Disease",
	 remark:"Remark",
  };
  const renderMedicalackRow = (key, value) =>{
    if(key==="mdack_id"){
      return null;
    }
   return (
     <div key={key} className="d-flex entity-row">
       <div className="entity-name">
         {/* {key.replace(/([A-Z])/g, " $1").trim()}: */}
         {humanReadableNames[key] || key}:
       </div>
       <div
         className="entity-value"
         style={{ whiteSpace: "nowrap", textOverflow: "ellipsis" }}
       >
         {value}
       </div>
     </div>
   );
  }

  if (!medicalack) {
    return <div>Parking not found.</div>;
  }

  const medicalackKeys = Object.keys(medicalack);
  const halfLength = Math.ceil(medicalackKeys.length / 2);
  const firstColumnKeys = medicalackKeys.slice(0, halfLength);
  const secondColumnKeys = medicalackKeys.slice(halfLength);

  //Medical form

  const handleMedicalAckPdf = () => {
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
      doc.rect(12, 9, 186, 228);

      doc.setFontSize(15);
      doc.setTextColor(24, 94, 26); // RGB color (dark green)
      doc.setFont("helvetica", "bold"); // Use the 'helvetica' font family
      doc.text("Hazrath Hameed Shah & Hazrath Muhib Shah Khadri(RA),", 51, 18); // Adjust the Y position as needed
      doc.text("Dargahs & Allied Waqf Institutions", 81, 24);
      doc.setFont("helvetica", "normal"); // Reset font style to normal
      doc.setFontSize(10);
      doc.setTextColor(75, 93, 183); // RGB color (Blue)
      doc.text(
        "No.3,1st Floor,Hazrath Hameed Shah Complex,Cubbonpet Main Road,Banglore - 560 002",
        53,
        31
      );
      doc.text("(Register Under Karnataka State Board of Auqaf)", 73, 35);
      doc.setTextColor(247, 79, 160);
      doc.text("Tel : 080-22211356 / 22240309", 145, 41);
      doc.setTextColor(75, 93, 183); // RGB color (Blue)
      doc.rect(12, 43, 186, 3);

      //PDF Heading

      doc.setFont("helvetica", "bold"); // Use the 'helvetica' font family
      doc.setFontSize(14);
      doc.text("NO. : HHS/HMS/F.A.", 14, 52); // Adjust the Y position as needed

      doc.setFont("calibre", "bold");
      doc.text("Date :", 155, 52); // Adjust the Y position as needed

      doc.setFont("calibre", "normal");
      doc.setTextColor(0);
      doc.text(`${medicalack?.date}`, 170, 52); // (X, Y,Actual name)

      doc.setFont("calibre", "bold");
      doc.setTextColor(75, 93, 183); // RGB color (Blue)
      doc.text("To,", 14, 62);

      doc.text("Sir,", 14, 102);
      doc.setTextColor(0);
      doc.setTextColor(24, 94, 26); // RGB color (dark green)
      doc.text("Sub: Financial Assistance for Medical Treatment", 46, 108);
      doc.setTextColor(75, 93, 183); // RGB color (Blue)

      doc.text("Ref.:Representation from Mr./Mrs.", 14, 118);
      doc.setFont("calibre", "normal");
      doc.setTextColor(0);
      doc.text(`${medicalack?.toName}`, 97, 118); // (X, Y,Actual name)
      doc.setFont("calibre", "bold");
      doc.setTextColor(75, 93, 183); // RGB color (Blue)

      doc.text("Dated:", 84, 127);
      doc.setFont("calibre", "normal");
      doc.setTextColor(0);
      doc.text(`${medicalack?.dated}`, 100, 127); // (X, Y,Actual name)
      doc.setFont("calibre", "bold");
      doc.setTextColor(75, 93, 183); // RGB color (Blue)

      doc.text(
        "With reference to the above subject, I am encloding here with a Cheque for Rs.",
        24,
        137
      );

      doc.text("(Rupees:", 14, 147);
      doc.setFont("calibre", "normal");
      doc.setTextColor(0);
      doc.text(`${medicalack?.rupees}`, 35, 147); // (X, Y,Actual name)
      doc.setFont("calibre", "bold");
      doc.setTextColor(75, 93, 183); // RGB color (Blue)

      doc.text(")", 47, 147);

      doc.text("Vide Cheque No.", 14, 160);
      doc.setFont("calibre", "normal");
      doc.setTextColor(0);
      doc.text(`${medicalack?.chequeNo}`, 54, 160); // (X, Y,Actual name)
      doc.setFont("calibre", "bold");
      doc.setTextColor(75, 93, 183); // RGB color (Blue)

      doc.text("dated", 130, 160);
      doc.setFont("calibre", "normal");
      doc.setTextColor(0);
      doc.text(`${medicalack?.dated}`, 150, 160); // (X, Y,Actual name)
      doc.setFont("calibre", "bold");
      doc.setTextColor(75, 93, 183); // RGB color (Blue)

      doc.text("towards Financial Assistance in respect of Mr./Mrs", 14, 170);

      doc.text("Hospital I.P. No.", 14, 180);
      doc.setFont("calibre", "normal");
      doc.setTextColor(0);
      doc.text(`${medicalack?.hospIpNo}`, 50, 180); // (X, Y,Actual name)
      doc.setFont("calibre", "bold");
      doc.setTextColor(75, 93, 183); // RGB color (Blue)

      doc.text("who is  getting treatment in your", 127, 180);
      doc.text("Hospital for", 14, 190);
      doc.setFont("calibre", "normal");
      doc.setTextColor(0);
      doc.text(`${medicalack?.disease}`, 44, 190); // (X, Y,Actual name)
      doc.setFont("calibre", "bold");
      doc.setTextColor(75, 93, 183); // RGB color (Blue)

      doc.text("disease. The amount may be utilized in respect of", 94, 190);

      doc.text("the above said patient.", 14, 200);

      doc.text("the receipt of the same may please be acknowledged.", 14, 210);

      doc.text("Yours Faithfully,", 152, 209);

      doc.text("Special Officer", 152, 223);
      doc.text("HHS & HMS COMPLEX", 141, 229);

      // Save the PDF with a specific name
      doc.save("medical_receipt.pdf");
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
        <h2 className="propertyview">Medical Details {medicalack?.toName} </h2>
      </div>
      <Container className="detailmedical">
        <div className="columnarrangement">
          <div className="subcolumnarrangement">
            {firstColumnKeys
              .filter((key) => key !== "id")
              .map((key) => renderMedicalackRow(key, medicalack[key]))}
          </div>
          <div className="subcolumnarrangement1">
            {secondColumnKeys
              .filter((key) => key !== "id")
              .map((key) => renderMedicalackRow(key, medicalack[key]))}
          </div>
        </div>
        <div className="pdf-btn-div">
          <Button variant="primary" onClick={handleMedicalAckPdf} className="medicalbtn">
            <FaDownload /> Medical Acknowledge
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default DetailMedicalAck;
