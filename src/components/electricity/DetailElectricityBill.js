import React, { useState, useEffect } from "react";
import axios from "axios";
import { APIS } from "../constants/api";
import { BiArrowBack } from "react-icons/bi";
import { FaDownload } from "react-icons/fa";
import { MDBContainer as Container, MDBBtn as Button } from "mdb-react-ui-kit";
import Header from "../common/Header";
import logo from "../../asset/images/hhslogo.jpg";
import jsPDF from "jspdf";
import { useNavigate, useParams } from "react-router-dom";
const DetailElectricityBill = () => {
  const { id } = useParams();
  const [electricitybill, setElectricitybill] = useState(null);
  const navigate = useNavigate();

  // Function to fetch property by ID
  const fetchElectricityBillById = async () => {
    try {
      const response = await axios.get(`${APIS.GETELECITYBILLBYID}/${id}`);
      console.log("pdf data", response.data);
      setElectricitybill(response.data);
    } catch (error) {
      console.error("Error fetching ElectricityBill:", error);
      // Handle the error as needed (e.g., show an error message)
    }
  };

  // Call the fetchPropertyById function when the component mounts
  useEffect(() => {
    fetchElectricityBillById();
  }, [id]);

  const humanReadableNames = {
    //  ele_id; //ElectricityBill for the month

    month: "Month",
    name: "Name",
    shopNo: "Shop No.",
    rrNo: "RR No.",
    ledger_follono: "Ledger Follo. No.",
    sanctionLoad: "Sanction Load",
    tariff: "Tariff",
    presentReading: "Present Reading",
    previousReading: "Previous Reading",
    unitConsumed: "Unit Consumed",
    unitSancd: "Unit Sanction",
    dateOfReading: "Date Of Reading",
  };

  const renderElectricityBillRow = (key, value) => {
    if (key === "ele_id") {
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
  };

  if (!electricitybill) {
    return <div>ElectricityBill not found.</div>;
  }

  const electricitybillKeys = Object.keys(electricitybill);
  const halfLength = Math.ceil(electricitybillKeys.length / 2);
  const firstColumnKeys = electricitybillKeys.slice(0, halfLength);
  const secondColumnKeys = electricitybillKeys.slice(halfLength);

  //Electricity bill pdf
  const handleEleBillPdf = () => {
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
      doc.rect(12, 9, 186, 46);
      doc.setFontSize(15);
      doc.setTextColor(24, 94, 26); // RGB color (dark green)
      doc.setFont("helvetica", "bold"); // Use the 'helvetica' font family
      doc.text("Hazrath Hameed Shah & Hazrath Muhib Shah Khadri(RA),", 53, 22); // Adjust the Y position as needed
      doc.text("Dargahs & Allied Waqf Institutions", 85, 28);
      doc.setFont("helvetica", "normal"); // Reset font style to normal
      doc.setFontSize(9);
      doc.setTextColor(75, 93, 183); // RGB color (Blue)
      doc.text(
        "No.3,1st Floor,Hazrath Hameed Shah Complex,Cubbonpet Main Road,Banglore - 560 002",
        53,
        34
      );
      doc.text("(Register Under Karnataka State Board of Auqaf)", 73, 38);
      doc.text("Tel : 080-22211356 / 22240309", 145, 42);
      //PDF Heading
      doc.setTextColor(59, 48, 182);
      doc.rect(12, 45, 186, 150); // (X, Y, Width, Height)
      doc.setFont("helvetica", "bold"); // Use the 'helvetica' font family

      // expiryDate will be convert into current month
      doc.setFontSize(14);
      doc.text(
        `Electricity Bill, For The Month Of :${electricitybill?.month}`,
        50,
        52
      ); // Adjust the Y position as needed
      doc.setFont("helvetica", "normal"); // Reset font style to normal

      // Reset text color to default (black)
      doc.setTextColor(0);
      doc.setFontSize(12);
      doc.setFont("calibre", "bold");
      doc.rect(12, 55, 98, 10); // (X, Y, Width, Height)
      doc.text("Name: ", 25, 61); // Label "Name:"
      doc.setFont("calibre", "normal");
      doc.text(`${electricitybill?.name}`, 65, 61); // (X, Y,Actual name)

      //unit
      doc.rect(12, 55, 118, 10); // (X, Y, Width, Height) 2nd verticle line
      doc.text("Unit", 115, 61); // Label "Name:"
      doc.rect(12, 65, 118, 10); // (X, Y, Width, Height) 2nd verticle line
      doc.rect(12, 75, 118, 10); // (X, Y, Width, Height) 2nd verticle line
      doc.rect(12, 85, 118, 10); // (X, Y, Width, Height) 2nd verticle line

      //rate
      doc.rect(12, 55, 138, 10); // (X, Y, Width, Height)
      doc.text("Rate", 135, 61); // (X,Y, Label "Rate:"

      //amount
      doc.text("Amount ", 155, 61); // Label "amount:"
      // Add tenant details here...

      //Shop no
      doc.setFontSize(12); // Set font size for labels
      doc.setFont("calibre", "bold");
      doc.rect(12, 65, 186, 10); // (X, Y, Width, Height)
      doc.rect(12, 65, 98, 10); // (X, Y, Width, Height)
      doc.text("Shop No. :", 25, 71); // Label "Name:"

      doc.rect(12, 65, 138, 10); //(X, Y, Width, Height) 3rd verticle line
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.setFontSize(10); // Reset font size to normal
      doc.text(`${electricitybill?.shopNo}`, 65, 71); // (X, Y,Actual name)

      //RR Num   not defined
      doc.setFontSize(12); // Set font size for labels
      doc.setFont("calibre", "bold");
      doc.rect(12, 75, 138, 10); // (X, Y, Width, Height)
      doc.rect(12, 75, 98, 10); // (X, Y, Width, Height)
      doc.text("R.R NO. :", 25, 81); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.setFontSize(10); // Reset font size to normal
      doc.text(`${electricitybill?.rrNo}`, 65, 81); //(X, Y, Actual name)

      //Ledger & Follo
      doc.setFontSize(12); // Set font size for labels
      doc.setFont("calibre", "bold");
      doc.rect(12, 85, 186, 10); // (X, Y, Width, Height)
      doc.rect(12, 85, 73, 10); // (X, Y, Width, Height)
      doc.text("Ledger & Follo No :", 25, 91); // Label "Ledger & Follo"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.setFontSize(10); // Reset font size to normal
      doc.text(`${electricitybill?.ledger_follono}`, 65, 91); // (X, Y, Actual name)

      //Fixed Charges
      doc.rect(12, 85, 98, 10); // (X, Y, Width, Height)
      doc.rect(12, 85, 138, 10);

      doc.text("Fixed Charges", 87, 91); // (X,Y, Label "Rate:"

      //sactionLoad
      doc.setFontSize(12); // Set font size for labels
      doc.setFont("calibre", "bold");
      doc.rect(12, 95, 73, 10); // (X, Y, Width, Height) 1st verticle line
      doc.text("Sanction Load :", 25, 101); // Label saction load
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.setFontSize(10); // Reset font size to normal
      doc.text(`${electricitybill?.sanctionLoad}`, 65, 101); // (X, Y, Actual name)

      //Consumption Charges
      doc.rect(12, 95, 98, 10); // (X, Y, Width, Height)
      doc.rect(12, 95, 118, 10); // (X, Y, Width, Height) 2nd verticle line
      doc.rect(12, 95, 138, 10);
      doc.text("Consumption", 87, 99); // (X,Y, Label "Rate:"
      doc.text("Charges", 90, 103);

      //Tariff
      doc.setFontSize(12); // Set font size for labels
      doc.rect(12, 105, 186, 10); // (X, Y, Width, Height)
      doc.setFont("calibre", "bold");
      doc.text("Tariff :", 25, 111); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.rect(12, 105, 46, 10); // (X, Y, Width, Height)
      doc.setFontSize(10); // Reset font size to normal
      doc.text(`${electricitybill?.tariff}`, 40, 111); // (X, Y, Actual name)

      doc.rect(12, 105, 98, 10); // (X, Y, Width, Height)
      doc.setFontSize(10); // Reset font size to normal
      doc.rect(12, 105, 98, 10); // (X, Y, Width, Height)
      doc.text("HT 2 B", 65, 111); // (X, Y, Actual name)
      doc.rect(12, 105, 73, 10); // (X, Y, Width, Height) 1st verticle line

      //  total
      doc.rect(12, 105, 118, 10); // (X, Y, Width, Height) 4th verticle line
      doc.setFont("calibre", "bold");
      doc.text("TOTAL", 87, 111); // (X,Y, Label "Rate:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.rect(12, 105, 138, 10); //(X, Y, Width, Height) 5th verticle line

      //present reading
      doc.setFontSize(12); // Set font size for labels
      doc.setFont("calibre", "bold");
      doc.text("Present Reading:", 25, 121); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.rect(12, 115, 46, 10); // (X, Y, Width, Height) 1st verticle line
      doc.rect(12, 115, 73, 10);
      doc.setFontSize(10); // Reset font size to normal
      doc.text(`${electricitybill?.presentReading}`, 65, 121); // (X, Y, Actual name)

      doc.rect(12, 115, 73, 10); // (X, Y, Width, Height) 2nd verticle line
      doc.setFontSize(10); // Reset font size to normal
      doc.rect(12, 115, 98, 10); // (X, Y, Width, Height) 3rd verticle line
      doc.rect(12, 115, 118, 10); // (X, Y, Width, Height) 4th verticle line
      doc.rect(12, 115, 138, 10); // (X, Y, Width, Height) 5th verticle line

      //  tax5%
      doc.text("Tax 5%", 87, 121); // (X,Y, Label "Rate:"

      //previous reading
      doc.setFontSize(12); // Set font size for labels
      doc.rect(12, 125, 186, 10); // (X, Y, Width, Height)
      doc.setFont("calibre", "bold");
      doc.text("Previous Reading", 25, 131); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.rect(12, 125, 46, 10); // (X, Y, Width, Height) 1st verticle line
      doc.setFontSize(10); // Reset font size to normal
      doc.text(`${electricitybill?.previousReading}`, 65, 131); // (X, Y, Actual name)

      doc.rect(85, 125, 25, 70); // (X, Y, Width, Height) 3rd verticle line
      doc.rect(130, 125, 20, 70);
      // doc.setFontSize(10); // Reset font size to normal

      //  bill amount
      doc.text("Bill Amount", 87, 131); // (X,Y, Label "Rate:"

      //unit consumed
      doc.setFontSize(12); // Set font size for labels
      doc.setFont("calibre", "bold");
      doc.text("Unit Consumed", 25, 141); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.rect(58, 135, 27, 10); // (X, Y, Width, Height) 2nd verticle line
      doc.setFontSize(10); // Reset font size to normal
      doc.text(`${electricitybill?.unitConsumed}`, 65, 141); // (X, Y, Actual name)

      //unit sancd
      doc.setFontSize(12); // Set font size for labels
      doc.rect(12, 145, 46, 10); // (X, Y, Width, Height)
      doc.setFont("calibre", "bold");
      doc.text("Unit Sancd.", 25, 151); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.rect(12, 145, 73, 10); // (X, Y, Width, Height) 2nd verticle line
      doc.setFontSize(10); // Reset font size to normal
      doc.text(`${electricitybill?.unitSancd}`, 65, 151); // (X, Y, Actual name)

      //date of reading
      doc.setFontSize(12); // Set font size for labels
      doc.rect(12, 155, 46, 10); // (X, Y, Width, Height)
      doc.setFont("calibre", "bold");
      doc.text("Date of Reading", 25, 161); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.rect(12, 155, 73, 10); // (X, Y, Width, Height) 2nd verticle line
      doc.setFontSize(10); // Reset font size to normal

      //  1st MOnth
      doc.text("1st of The Month", 60, 161); // (X,Y, Label

      //  Disconnection & Reconnection
      doc.text("Disconnection", 88, 141); // (X,Y, Label
      doc.text("Reconnection", 88, 151); // (X,Y, Label
      doc.text("Charges", 90, 161); // (X,Y, Label

      //note
      doc.setFontSize(12); // Set font size for labels

      doc.setFont("calibre", "bold");
      doc.text("Note :", 25, 171); // Label "Name:"
      doc.setFont("calibre", "normal"); // Reset font style to normal
      doc.text("Bills to be paid on or before", 36, 171); // Label "Name:"
      doc.text("15th of the every month.", 21, 177); // Label "Name:"
      doc.text("Electrical connection will be", 21, 184); // Label "Name:"
      doc.text("Disconnected after the due date.", 21, 191); // Label "Name:"

      doc.text("Arrears", 90, 171); // Label "Name:"
      doc.rect(85, 165, 113, 10); // (X, Y, Width, Height) 2nd verticle line

      doc.text("Interest", 90, 181); // Label "Name:"

      doc.text("Amount Due", 86, 191); // Label "Name:"
      doc.rect(85, 185, 113, 10); // (X, Y, Width, Height) 2nd verticle line

      //important instructions
      doc.setFont("calibre", "bold");
      doc.setFontSize(12);
      doc.rect(12, 195, 186, 66); // (X, Y, Width, Height) 2nd verticle line
      doc.text(" Important Instructions", 83, 202); // Label "Name:"
      doc.setFontSize(10); // Reset font size to normal
      doc.setFont("calibre", "normal");
      doc.text(
        "1. Cheque / Drafts shall be drawn in favour of President/Secretary H.H.S & H.M.S., Bangalore",
        21,
        207
      ); // Label "Name:"
      doc.text(
        "2. Bill is to be paid in full. No part payment will be accepted.",
        21,
        212
      ); // Label "Name:"
      doc.text(
        "3. Please Check the correctness of R.R.No. Ledger No and amount in the receipt.",
        21,
        217
      );
      doc.text(
        "4. Non-receipt of bill is not a valid reason for non-payment..",
        21,
        222
      );
      doc.text(
        "5. (a) Electrical connection will be disconnected afte due date of every month.",
        21,
        227
      );
      doc.text(
        "(b) The owner reserves the right of disconnection without assigning any reason.",
        25,
        232
      );
      doc.text(
        "6. Payments, if made, after the due date will bear interest at 2% per month.",
        21,
        237
      );

      doc.rect(12, 241, 186, 20);
      doc.text(
        "Fixed Charges    :                Rs. 240/- per KW or part there off the sanction load",
        21,
        247
      );
      doc.text("Energy Charges  :                Rs. 8.90 per unit", 21, 252);
      doc.text(
        "D & R Charges   :                Rs. 25/- per Disconnection",
        21,
        257
      );

      doc.setFontSize(12);
      doc.text("Meter Reader", 31, 272);
      doc.text("Special Officer", 131, 272);

      //Payment Mode
      //  doc.setFontSize(12); // Set font size for labels
      //  doc.rect(20, 105, 160, 10);// (X, Y, Width, Height)
      //  doc.setFont('calibre', 'bold');
      //  doc.rect(20, 115, 90, 10);// (X, Y, Width, Height)
      //  doc.text("Payment Mode :", 25, 121); // Label "Name:"
      //  doc.setFont('calibre', 'normal'); // Reset font style to normal
      //  doc.setFontSize(10); // Reset font size to normal
      //  doc.text(${electricitybill.paymentMethod}, 70, 121); // (X, Y, Actual name)

      //CollectionDetails
      //  doc.setFontSize(12); // Set font size for labels
      //  doc.rect(20, 125, 160, 10);// (X, Y, Width, Height)
      //  doc.setFont('calibre', 'bold');
      //  doc.rect(20, 125, 45, 10);// (X, Y, Width, Height)
      //  doc.text("CollectionDetails :", 25, 131); // Label "Name:"
      //  doc.setFont('calibre', 'normal'); // Reset font style to normal
      //  doc.setFontSize(10); // Reset font size to normal
      //  doc.text(${electricitybill.CollectionDetails}, 70, 131); // (X, Y, Actual name)

      // Save the PDF with a specific name

      doc.save("electricity-bill.pdf");
      console.log("Download PDF clicked", electricitybill);
      //  console.log("Download PDF clicked");
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
          Electricity Bill of {electricitybill.month}{" "}
        </h2>
      </div>
      <Container className="detail-ele">
        <div className="columnarrangement">
          <div className="subcolumnarrangement">
            {firstColumnKeys
              .filter((key) => key !== "id")
              .map((key) =>
                renderElectricityBillRow(key, electricitybill[key])
              )}
          </div>
          <div className="subcolumnarrangement1">
            {secondColumnKeys
              .filter((key) => key !== "id")
              .map((key) =>
                renderElectricityBillRow(key, electricitybill[key])
              )}
          </div>
        </div>
        <div className="pdf-btn-div">
          <Button
            variant="primary"
            onClick={handleEleBillPdf}
            className="pdf-btn-ele"
          >
            <FaDownload /> Electricity Bill PDF
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default DetailElectricityBill;
