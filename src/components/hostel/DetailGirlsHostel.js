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

const DetailGirlsHostel = () => {

    const { id } = useParams();
    const [girlshostel, setGirlsHostel] = useState(null); 
    const navigate = useNavigate();
    
    useEffect(() => {
      // Function to fetch property by ID
      const fetchGirlshostelById = async () => {
        try {
          const response = await axios.get(`${APIS.GETHOSTELBYID}/${id}`);
          console.log("complex",response.data);
          setGirlsHostel(response.data);
        } catch (error) {
          console.error("Error fetching GirlsHostel:", error);
          // Handle the error as needed (e.g., show an error message)
        }
      };
  
      // Call the fetchPropertyById function when the component mounts
      fetchGirlshostelById();
    }, [id]);
  
    const renderGirlshostelRow = (key, value) => (
      <div key={key} className="d-flex entity-row">
        <div className="entity-name">
          {key.replace(/([A-Z])/g, " $1").trim()}:
        </div>
        <div className="entity-value" style={{ whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
          {value}
        </div>
      </div>
    );
  
    if (!girlshostel) {
      return <div>girlshostel not found.</div>;
    }
  
    const girlshostelKeys = Object.keys(girlshostel);
    const halfLength = Math.ceil(girlshostelKeys.length / 2);
    const firstColumnKeys = girlshostelKeys.slice(0, halfLength);
    const secondColumnKeys = girlshostelKeys.slice(halfLength);

  return (
    <div>
    <Header />
    <div className="maindetails">
    <div className="arrow-back-container">
      <BiArrowBack
        className="addbacklogo"
        onClick={() => navigate(-1)}
      />
    </div>
    <h2 className="propertyview">Details of Girls Hostel </h2>
    </div>
    <Container
      className="detail-girlhostel"
    >
       <div className="columnarrangement">
    <div className="subcolumnarrangement">
      {firstColumnKeys
        .filter((key) => key !== "id")
        .map((key) => renderGirlshostelRow(key, girlshostel[key]))}
    </div>
    <div className="subcolumnarrangement1girl">
      {secondColumnKeys
        .filter((key) => key !== "id")
        .map((key) => renderGirlshostelRow(key, girlshostel[key]))}
    </div>
  </div>
 
    </Container>
  </div>
  )
}

export default DetailGirlsHostel;