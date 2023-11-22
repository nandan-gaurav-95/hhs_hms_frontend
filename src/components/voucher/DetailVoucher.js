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
const DetailVoucher = () => {
  const { id } = useParams();
  const [voucher, setVoucher] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Function to fetch property by ID
    const fetchVoucherById = async () => {
      try {
        const response = await axios.get(`${APIS.GETVOUCHERBYID}/${id}`);
        console.log("vvv", response.data);
        setVoucher(response.data);
      } catch (error) {
        console.error("Error fetching Voucher:", error);
        // Handle the error as needed (e.g., show an error message)
      }
    };

    // Call the fetchPropertyById function when the component mounts
    fetchVoucherById();
  }, [id]);

  const renderVoucherRow = (key, value) => (
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

  if (!voucher) {
    return <div>ElectricityBill not found.</div>;
  }

  const voucherKeys = Object.keys(voucher);
  const halfLength = Math.ceil(voucherKeys.length / 2);
  const firstColumnKeys = voucherKeys.slice(0, halfLength);
  const secondColumnKeys = voucherKeys.slice(halfLength);

  const handleVoucherPdf = () => {
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
        10, // X position
        10, // Y position
        50, // Image width
        25 // Image height
      );

      //Header Part
      doc.rect(12,9,186,156);
      doc.setFontSize(15);
      doc.setTextColor(24,94,26); // RGB color (dark green)
      doc.setFont('helvetica', 'bold'); // Use the 'helvetica' font family
      doc.text("Hazrath Hameed Shah & Hazrath Muhib Shah Khadri(RA),", 53, 22); // Adjust the Y position as needed
      doc.text("Dargahs & Allied Waqf Institutions",85,28)
      doc.setFont('helvetica', 'normal'); // Reset font style to normal
      doc.setFontSize(10);
      doc.setTextColor(75,93,183); // RGB color (Blue)
      doc.text("No.3,1st Floor,Hazrath Hameed Shah Complex,Cubbonpet Main Road,Banglore - 560 002",53,34)
      doc.text("(Register Under Karnataka State Board of Auqaf)",73,38)
      doc.text("Tel : 080-22211356 / 22240309",145,42)
      doc.setTextColor(0);

      //PDF Heading voucher no. & date
      doc.setFont("helvetica", "bold"); // Use the 'helvetica' font family
      doc.setFontSize(12);
      doc.rect(12, 55, 186, 80); //(outer rectangle X,Y,width,height)
      doc.rect(12, 55, 186, 10); //(voucher date rect. X,Y,width,height)
      doc.text("Voucher No. :", 20, 62); // Adjust the Y position as needed
      doc.setFont("helvetica", "normal");
      doc.text(`${voucher?.v_id}`, 50, 62);
      doc.setFont("helvetica", "bold"); // Use the 'helvetica' font family
      doc.text("Date:", 130, 62);
      doc.setFont("helvetica", "normal");
      doc.text(`${voucher?.date}`, 145, 62);

      //Particular & amount
      doc.setFont("helvetica", "bold"); // Use the 'helvetica' font family
      doc.setFontSize(12);
      doc.rect(12, 65, 186, 10); //( X,Y,width,height)
      doc.text("PARTICULARS", 60, 72); // Adjust the Y position as needed

      doc.setFont("helvetica", "bold"); // Use the 'helvetica' font family
      doc.rect(140, 65, 58, 70); //( X,Y,width,height)
      doc.text("AMOUNT", 150, 72);
      doc.rect(186, 75, 12, 60); //( X,Y,width,height)
      doc.rect(140, 125, 58, 10); //( X,Y,width,height)

      //amt paid to
      doc.setFontSize(12); // Set font size for labels
      doc.setFont("calibre", "bold");
      doc.text("Amount paid to:", 20, 85); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.setFontSize(10); // Reset font size to normal
      doc.text(`${voucher?.amtPaid}`, 150, 85); // (X, Y,Actual name)

      //towards
      doc.setFontSize(12); // Set font size for labels
      doc.setFont("calibre", "bold");
      doc.text("Towards:", 20, 95); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.setFontSize(10); // Reset font size to normal
      doc.text(`${voucher?.towards}`, 150, 95); // (X, Y,Actual name)

      //Total amt
      const totalAmount =
        (parseFloat(voucher.amtPaid) || 0) + (parseFloat(voucher.towards) || 0);
      doc.setFont("calibre", "normal");
      doc.setFontSize(10);
      doc.text(`${totalAmount}`, 150, 131);

      //cash/cheque no.
      doc.setFontSize(12); // Set font size for labels
      doc.setFont("calibre", "bold");
      doc.text("By Cash /Cheque No.", 20, 131); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.setFontSize(12); // Reset font size to normal
      doc.text(`${voucher?.chequeNo}`, 65, 131); // (X, Y,Actual name)

      //Dated
      doc.setFontSize(12); // Set font size for labels
      doc.setFont("calibre", "bold");
      doc.text("Dated:", 100, 131); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.setFontSize(10); // Reset font size to normal
      doc.text(`${voucher?.dated}`, 115, 131); // (X, Y,Actual name)

      //rupees
      doc.setFontSize(12); // Set font size for labels
      doc.setFont("calibre", "bold");
      doc.text("Rupees:", 20, 141); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.setFontSize(10); // Reset font size to normal
      doc.text(`${voucher?.rupees}`, 45, 141); // (X, Y,Actual name)

      doc.rect(145, 142, 20, 20); //( X,Y,width,height)
      doc.setFont("calibre", "bold");
      doc.text("Stamp", 150, 154);

      //sign
      doc.setFontSize(12); // Set font size for labels
      doc.setFont("calibre", "bold");
      doc.text("Signature ", 30, 161); // Label "Name:"
      doc.text("Signature", 110, 161); // Label "Name:"

      doc.save("voucher.pdf");
    };
  };

  return (
    <div>
      <Header />
      <div className="mt-4">
        <div className="arrow-back-container">
          <BiArrowBack
            className="backLoginForm fs-2 text-dark"
            onClick={() => navigate(-1)}
          />
        </div>
        <h2 className="mb-4 text-center entity-column">
          Details of Voucher No: {voucher?.v_id}{" "}
        </h2>
      </div>
      <Container className="detail-voucher">

        <div className="d-flex flex-wrap w-100">
          <div className="w-50">
            {firstColumnKeys
              .filter((key) => key !== "id")
              .map((key) => renderVoucherRow(key, voucher[key]))}
          </div>
          <div className="w-50">
            {secondColumnKeys
              .filter((key) => key !== "id")
              .map((key) => renderVoucherRow(key, voucher[key]))}
          </div>
        </div>

        <div className="pdf-btn-voucher ">
          <Button
            // variant="primary"
            onClick={handleVoucherPdf}
            // className="pdf-btn-elebill"
          >
            <FaDownload className="pdf-btn" /> Voucher
          </Button>
        </div>

      </Container>
    </div>
  );
};

export default DetailVoucher;
