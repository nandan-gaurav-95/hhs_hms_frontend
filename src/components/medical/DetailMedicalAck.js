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


const DetailMedicalAck = () => {

    const { id } = useParams();
  const [medicalack, setMedicalack] = useState(null); 
  const navigate = useNavigate();
  
  useEffect(() => {
    // Function to fetch property by ID
    const fetchMedicalAcknowledgeById = async () => {
      try {
        const response = await axios.get(`${APIS.GETMEDICALACKNWLDGEBYID}/${id}`);
        console.log("medicalack",response.data);
        setMedicalack(response.data);
      } catch (error) {
        console.error("Error fetching medical Acknowledge:", error);
        // Handle the error as needed (e.g., show an error message)
      }
    };

    // Call the fetchPropertyById function when the component mounts
    fetchMedicalAcknowledgeById();
  }, [id]);

  const renderMedicalackRow = (key, value) => (
    <div key={key} className="d-flex entity-row">
      <div className="entity-name">
        {key.replace(/([A-Z])/g, " $1").trim()}:
      </div>
      <div className="entity-value" style={{ whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
        {value}
      </div>
    </div>
  );

  if (!medicalack) {
    return <div>Parking not found.</div>;
  }

  const medicalackKeys = Object.keys(medicalack);
  const halfLength = Math.ceil(medicalackKeys.length / 2);
  const firstColumnKeys = medicalackKeys.slice(0, halfLength);
  const secondColumnKeys = medicalackKeys.slice(halfLength);

  //Medical form

const handleMedicalAckPdf =()=>{

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
    doc.rect(12,9,186,228);
   
    doc.setFontSize(15);
    doc.setTextColor(24,94,26); // RGB color (dark green)
    doc.setFont('helvetica', 'bold'); // Use the 'helvetica' font family
    doc.text("Hazrath Hameed Shah & Hazrath Muhib Shah Khadri(RA),", 53, 22); // Adjust the Y position as needed
    doc.text("Dargahs & Allied Waqf Institutions",85,28)
    doc.setFont('helvetica', 'normal'); // Reset font style to normal
    doc.setFontSize(9);
    doc.setTextColor(75,93,183); // RGB color (Blue)
    doc.text("No.2,1st Floor,Hazrath Hameed Shah Complex,Cubbonpet Main Road,Banglore - 560 002",53,34)
    doc.text("(Register Under Karnataka State Board of Auqaf)",73,38)
    doc.text("Tel : 080-22211356 / 22240309",145,42)
    // doc.setTextColor(0);
    doc.rect(12,43,186,3); 

 
 
 //PDF Heading 
 
    doc.setFont('helvetica', 'bold'); // Use the 'helvetica' font family
    doc.setFontSize(14);
    doc.text("NO. : HHS/HMS/F.A.", 14, 52); // Adjust the Y position as needed 
  
  doc.setFont('calibre', 'bold'); 
  doc.text("Date :", 155, 52); // Adjust the Y position as needed
  
  doc.setFont('calibre','normal');
  doc.setTextColor(0);
  doc.text(`${medicalack?.date}`, 170, 52); // (X, Y,Actual name)
 
  doc.setFont('calibre', 'bold');
  doc.setTextColor(75,93,183); // RGB color (Blue)
  doc.text("To,", 14, 62);

  doc.text("Sir,", 14, 102);
  doc.setTextColor(0);
  doc.setTextColor(24,94,26); // RGB color (dark green)
  doc.text("Sub: Financial Assistance for Medical Treatment", 46, 108);
  doc.setTextColor(75,93,183); // RGB color (Blue)

  doc.text("Ref.:Representation from Mr./Mrs.",14,118);
  doc.setFont('calibre','normal');
  doc.setTextColor(0);
  doc.text(`${medicalack?.toName}`, 97, 118); // (X, Y,Actual name)
  doc.setFont('calibre', 'bold');
  doc.setTextColor(75,93,183); // RGB color (Blue)

  doc.text("Dated:",84,127);
  doc.setFont('calibre','normal');
  doc.setTextColor(0);
  doc.text(`${medicalack?.dated}`, 100, 127); // (X, Y,Actual name)
  doc.setFont('calibre', 'bold');
  doc.setTextColor(75,93,183); // RGB color (Blue)

  doc.text("With reference to the above subject, I am encloding here with a Cheque for Rs.",24,137);

  doc.text("(Rupees:",14,147);
  doc.setFont('calibre','normal');
  doc.setTextColor(0);
  doc.text(`${medicalack?.rupees}`, 35, 147); // (X, Y,Actual name)
  doc.setFont('calibre', 'bold');
  doc.setTextColor(75,93,183); // RGB color (Blue)
  
  doc.text(")",47,147);

  doc.text("Vide Cheque No.",14,160);
  doc.setFont('calibre','normal');
  doc.setTextColor(0);
  doc.text(`${medicalack?.chequeNo}`, 54, 160); // (X, Y,Actual name)
  doc.setFont('calibre', 'bold');
  doc.setTextColor(75,93,183); // RGB color (Blue)

  doc.text("dated",130,160);
  doc.setFont('calibre','normal');
  doc.setTextColor(0);
  doc.text(`${medicalack?.dated}`, 150, 160); // (X, Y,Actual name)
  doc.setFont('calibre', 'bold');
  doc.setTextColor(75,93,183); // RGB color (Blue)

  doc.text("towards Financial Assistance in respect of Mr./Mrs",14,170);

  doc.text("Hospital I.P. No.",14,180);
  doc.setFont('calibre','normal');
  doc.setTextColor(0);
  doc.text(`${medicalack?.hospIpNo}`, 50, 180); // (X, Y,Actual name)
  doc.setFont('calibre', 'bold');
  doc.setTextColor(75,93,183); // RGB color (Blue)

  doc.text("who is  getting treatment in your",127,180);
  doc.text("Hospital for",14,190);
  doc.setFont('calibre','normal');
  doc.setTextColor(0);
  doc.text(`${medicalack?.disease}`, 44, 190); // (X, Y,Actual name)
  doc.setFont('calibre', 'bold');
  doc.setTextColor(75,93,183); // RGB color (Blue)
  
  doc.text("disease. The amount may be utilized in respect of",94,190);

  doc.text("the above said patient.",14,200);

  doc.text("the receipt of the same may please be acknowledged.",14,210);

  doc.text("Yours Faithfully,",152,209);
 
  doc.text("Special Offer",152,223);
  doc.text("HHS & HMS COMPLEX",141,229);
 
 
  // Save the PDF with a specific name
  doc.save("medical_receipt.pdf");
  // console.log("Download PDF clicked");
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
    <h2 className="mb-4 text-center entity-column">Medical Details {medicalack?.toName} </h2>
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
        .map((key) => renderMedicalackRow(key, medicalack[key]))}
    </div>
    <div className="w-50">
      {secondColumnKeys
        .filter((key) => key !== "id")
        .map((key) => renderMedicalackRow(key, medicalack[key]))}
    </div>
  </div>
 
  <Button
    variant="primary"
    onClick={handleMedicalAckPdf}
    style={{ height: "60px", width: "140px", lineHeight: "25px", marginTop: "20px" }}
  >
    <FaDownload style={{ marginRight: "5px" }} /> Medical Acknowledge
  </Button>
 
    </Container>
  </div>
  )
}

export default DetailMedicalAck
