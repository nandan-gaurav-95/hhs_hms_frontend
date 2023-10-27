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
          console.log("Jiii",response.data);
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
        <div className="entity-value" style={{ whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
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
    doc.rect(12,9,186,163);
    doc.setFontSize(8);
    doc.text("LICENSE NUMBER - KTK/28C-409/2022", 75, 15); // Adjust the Y position as needed
    doc.setFontSize(15);
    doc.setTextColor(255, 138, 0); // RGB color (red)
    doc.setFont('helvetica', 'bold'); // Use the 'helvetica' font family
    doc.text("HHS & HMS", 55, 28); // Adjust the Y position as needed
    doc.setFontSize(10);
    doc.text("(R.A.)",86,28)
    doc.setFontSize(15);
    doc.setFont('helvetica', 'bold');
    doc.text("BLOOD CENTRE",96,28)
    doc.setFont('helvetica', 'normal'); // Reset font style to normal
    doc.setFontSize(9);
    doc.setTextColor(0);
    doc.text("No.3,1st Floor,Hazrath Hameed Shah Complex,Cubbonpet Main Road,Banglore-2, Ph: 22211356/22240309",45,40)
    doc.text("Banglore-02, Ph: 080-49894916 Mob. : 9845854991,9035963914,8123294727",65,45)
    doc.text("Email : hhshmsbloodcentre@gmail.com Website: hhshmscomplex.com",75,50)
 
 
 //PDF Heading 
 
    doc.setFont('helvetica', 'bold'); // Use the 'helvetica' font family
    doc.setFontSize(15);
    doc.text("RECEIPT", 80, 65); // Adjust the Y position as needed 
   
  
  // Reset text color to default (black)
  doc.setTextColor(0);
 
  doc.setFont('calibre', 'bold'); 
  doc.text("Date :", 155, 65); // Adjust the Y position as needed
  doc.setFont('calibre','normal');
  doc.setFontSize(10); // Reset font size to normal
  doc.text(`${bloodcenter?.date}`, 170, 65);
 
 //Received with the thanks from :
 doc.setFontSize(12); // Set font size for labels
 doc.setFont('calibre', 'bold');
 doc.text("Received with the thanks from smt./Sri :", 25,81); // Label "Name:"
 doc.setFont('calibre', 'normal'); // Reset font style to normal
 doc.setFontSize(10); // Reset font size to normal
 doc.text(`${bloodcenter?.receiverName}`, 100, 81); // (X, Y,Actual name)
 doc.setFontSize(12); // Set font size for labels
 doc.setFont('calibre', 'bold');
 doc.text("Age:", 125,91);
 doc.text("Sex:", 155,91);
 doc.setFont('calibre', 'normal'); // Reset font style to normal
 doc.setFontSize(10); // Reset font size to normal
 doc.text(`${bloodcenter?.age}`, 135, 91); // (X, Y,Actual name)
 doc.text(`${bloodcenter?.gender}`, 165, 91); // (X, Y,Actual name)
 
 //IP no
  doc.setFontSize(12); // Set font size for labels
  doc.setFont('calibre', 'bold');
  doc.text("I.P.NO.", 25, 91); // Label "Name:"
  doc.setFont('calibre', 'normal'); // Reset font style to normal
  doc.setFontSize(10); // Reset font size to normal
  doc.text(`${bloodcenter?.ipNo}`, 45, 91); //(X, Y, Actual name)
 
 //Hospital
  doc.setFontSize(12); // Set font size for labels
  doc.setFont('calibre', 'bold');
  doc.text("Hospital/N Home:", 25, 101); // Label "Name:"
  doc.setFont('calibre', 'normal'); // Reset font style to normal
  doc.setFontSize(10); // Reset font size to normal
  doc.text(`${bloodcenter?.hospitalName}`, 65, 101); // (X, Y, Actual name)
 
  //sum of rupees
  doc.setFontSize(12); // Set font size for labels
  doc.setFont('calibre', 'bold');
  doc.text("Sum of Rupees:", 25, 111); // Label "Name:"
  doc.setFont('calibre', 'normal'); // Reset font style to normal
  doc.setFontSize(10); // Reset font size to normal
  doc.text(`${bloodcenter?.rupee}`, 60, 111); // (X, Y, Actual name)
 
  //sum of rupees
  doc.setFontSize(12); // Set font size for labels
  doc.setFont('calibre', 'bold');
  doc.text("Towards /lab Investigation Charges for:", 25, 121); // Label "Name:"
  doc.setFont('calibre', 'normal'); // Reset font style to normal
  doc.setFontSize(10); // Reset font size to normal
  doc.text(`${bloodcenter?.invstigationCharges}`,99, 121); // (X, Y, Actual name)
 
  //unit no
  doc.setFontSize(12); // Set font size for labels
  doc.setFont('calibre', 'bold');
  doc.text("Unit No:", 155, 121); // Label "Name:"
  doc.setFont('calibre', 'normal'); // Reset font style to normal
  doc.setFontSize(10); // Reset font size to normal
  doc.text(`${bloodcenter?.unitNo}`, 175, 121); // (X, Y, Actual name)
 
  
  //blood group
  doc.setFontSize(12); // Set font size for labels
  doc.setFont('calibre', 'bold');
  doc.text("Blood Group:", 25, 131); // Label "Name:"
  doc.setFont('calibre', 'normal'); // Reset font style to normal
  doc.setFontSize(10); // Reset font size to normal
  doc.text(`${bloodcenter?.bloodgroup}`, 55, 131); // (X, Y, Actual name)
 
  //cash
  doc.setFontSize(12); // Set font size for labels
  doc.setFont('calibre', 'bold');
  doc.text("Cash:", 25, 141); // Label "Name:"
  doc.rect(37, 136, 8, 8);// (X, Y, Width, Height)
 
   //upi
   doc.setFont('calibre', 'bold');
   doc.text("UPI:", 55, 141); // Label "Name:"
   doc.rect(65, 136, 8, 8);// (X, Y, Width, Height)
 
   //rs
    doc.setFontSize(12); // Set font size for labels
   doc.setFont('calibre', 'bold');
   doc.text("RS:", 25, 153); // Label "Name:"
   doc.setFont('calibre', 'normal'); // Reset font style to normal
   doc.setFontSize(10); // Reset font size to normal
   doc.text(`${bloodcenter?.rupee}`, 35, 153); // (X, Y, Actual name)
 
 
  //Sign
  doc.setFontSize(12); // Set font size for labels
  doc.setFont('calibre', 'bold');
  doc.text("Authorised Signatory", 155, 153); // Label "Name:"
 
  //note 
  doc.setFontSize(9); // Set font size for labels
  doc.setFont('calibre', 'bold');
  doc.text("Note: Blood Once Issued Will Not Be Taken Back or Replace", 55,163); // Label "Name:" 
 
 
  // Save the PDF with a specific name
  doc.save("blood_receipt.pdf");
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
    <h2 className="mb-4 text-center entity-column">Blood Center Details </h2>
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
        .map((key) => renderBloodcenterRow(key, bloodcenter[key]))}
    </div>
    <div className="w-50">
      {secondColumnKeys
        .filter((key) => key !== "id")
        .map((key) => renderBloodcenterRow(key, bloodcenter[key]))}
    </div>
  </div>
 
  <Button
    variant="primary"
    onClick={handleBloodCenterPdf}
    style={{ height: "60px", width: "130px", lineHeight: "25px", marginTop: "20px" }}
  >
    <FaDownload style={{ marginRight: "5px" }} /> Blood center
  </Button>
 
    </Container>
  </div>
  )
}

export default DetailBloodCenter
