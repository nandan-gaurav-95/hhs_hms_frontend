import React, { useState , useEffect} from "react";
import axios from "axios";
import jsPDF from "jspdf";
import { APIS } from "../constants/api";
import {
    MDBContainer as Container,
   
    MDBBtn as Button,
  } from "mdb-react-ui-kit";
  import  "react-select-search/style.css";
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
        console.log("dargah",response.data);
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
      <div className="entity-value" style={{ whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
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
  const secondColumnKeys = dergahKeys.slice(halfLength);
   //dargah complex pdf
   const handleDargahComplexPdf = () => {

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
    doc.rect(10,9,175,153);
    doc.setTextColor(255, 138, 0); // RGB color (red)
    doc.setFont('helvetica', 'bold'); // Use the 'helvetica' font family
    doc.text("HHS & HMS DARGAH COMPLEX, CUBBONPET,", 55, 20); // Adjust the Y position as needed
    doc.text("BANGLORE - 560 002.", 85, 30); // Adjust the Y position as needed
    doc.setTextColor(0);

    //PDF Heading 
    doc.setFont('helvetica', 'bold'); // Use the 'helvetica' font family
    doc.setFontSize(10);
    doc.text("Receipt No.", 20, 50); // Adjust the Y position as needed 
    doc.setFont('helvetica', 'normal');
    doc.text(`${dergah?.dc_id}`, 50, 50); 
    doc.setFont('helvetica', 'bold'); // Use the 'helvetica' font family
    doc.text("Date :", 150, 50);
    doc.setFont('helvetica', 'normal');
    doc.text(`${dergah?.date}`, 160, 50); 


 //Received from :
   doc.setFontSize(12); // Set font size for labels
   doc.setFont('calibre', 'bold');
   doc.text("Received from :", 20, 71); // Label "Name:"
   doc.setFont('calibre', 'normal'); // Reset font style to normal
   doc.setFontSize(10); // Reset font size to normal
   doc.text(`${dergah?.receiverName}`,55, 71); // (X, Y,Actual name)

    //sum of rupees
    doc.setFontSize(12); // Set font size for labels
    doc.setFont('calibre', 'bold');
    doc.text("a sum of Rupees:", 85, 91); // Label "Name:"
    doc.setFont('calibre', 'normal'); // Reset font style to normal
    doc.setFontSize(10); // Reset font size to normal
    doc.text(`${dergah?.rupee}`, 130, 91); // (X, Y,Actual name)

    //rupees in the words
    doc.setFontSize(12); // Set font size for labels
    doc.setFont('calibre', 'bold');
    doc.text("Rupees in the words:", 20, 101); // Label "Name:"
    doc.setFont('calibre', 'normal'); // Reset font style to normal
    doc.setFontSize(10); // Reset font size to normal
    doc.text(`${dergah?.rupeeInWords}`, 65, 101); // (X, Y,Actual name)

      //cash/DD/premises
      doc.setFontSize(12); // Set font size for labels
      doc.setFont('calibre', 'bold');
      doc.text("by Cash / D.D. towards the rent for shop / Premises No.", 20, 121); // Label "Name:"
      doc.setFont('calibre', 'normal'); // Reset font style to normal
      doc.setFontSize(10); // Reset font size to normal
      doc.text(`${dergah?.shopRent}`, 125, 121); // (X, Y,Actual name)

      //for the month 
      doc.setFontSize(12); // Set font size for labels
      doc.setFont('calibre', 'bold');
      doc.text("For the Month of", 20, 131); // Label "Name:"
      doc.setFont('calibre', 'normal'); // Reset font style to normal
      doc.setFontSize(10); // Reset font size to normal
      doc.text(`${dergah?.month}`, 55, 131); // (X, Y,Actual name)

       //cheque/DD no
       doc.setFontSize(12); // Set font size for labels
       doc.setFont('calibre', 'bold');
       doc.text("Cheque / D.D. No.", 20, 141); // Label "Name:"
       doc.setFont('calibre', 'normal'); // Reset font style to normal
       doc.setFontSize(10); // Reset font size to normal
       doc.text(`${dergah?.chequeNo}`, 60, 141); // (X, Y,Actual name)

        //dated
        doc.setFontSize(12); // Set font size for labels
        doc.setFont('calibre', 'bold');
        doc.text("Dated :", 100, 141); // Label "Name:"
        doc.setFont('calibre', 'normal'); // Reset font style to normal
        doc.setFontSize(10); // Reset font size to normal
        doc.text(`${dergah?.dated}`, 115, 141); // (X, Y,Actual name)

       //drawn on
       doc.setFontSize(12); // Set font size for labels
       doc.setFont('calibre', 'bold');
       doc.text("Drawn on: ", 20, 151); // Label "Name:"
       doc.setFont('calibre', 'normal'); // Reset font style to normal
       doc.setFontSize(10); // Reset font size to normal
       doc.text(`${dergah?.drawnOn}`, 45, 151); // (X, Y,Actual name)

        //sign
        doc.setFontSize(12); // Set font size for labels
        doc.setFont('calibre', 'bold');
        doc.text("Signature of the Receiver", 130, 151); // Label "Name:"
        

    doc.save("dargah_complex.pdf");
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
    <h2 className="mb-4 text-center entity-column">Details of {dergah?.receiverName} </h2>
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
        .map((key) => renderDergahRow(key, dergah[key]))}
    </div>
    <div className="w-50">
      {secondColumnKeys
        .filter((key) => key !== "id")
        .map((key) => renderDergahRow(key, dergah[key]))}
    </div>
  </div>
 
  <Button
    variant="primary"
    onClick={handleDargahComplexPdf}
    style={{ height: "50px", width: "190px", lineHeight: "25px", marginTop: "20px" }}
  >
    <FaDownload style={{ marginRight: "5px" }} /> Dargah Complex
  </Button>
 
    </Container>
  </div>
  )
}

export default DetailDargahComplex