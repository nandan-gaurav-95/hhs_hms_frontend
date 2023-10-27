import React, { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Header from "../common/Header";
import "react-datepicker/dist/react-datepicker.css";
import "../../asset/style.css";
import { BiArrowBack } from "react-icons/bi";
import { Dropdown } from 'react-bootstrap';
import { HhsComplexService } from "../../services/HhsComplexService";
const ViewHHSComplex = () => {
  const [allhhscomplex, setAllhhscomplex] = useState({});
  
  
  const navigate = useNavigate();
  const handleViewProfile=(hc_id)=>{
    navigate (`/detailhhscomplex/${hc_id}`)
   }
   const fetchAllhhscomplex = async () => {
    try {
      const response = await HhsComplexService.getAllHhsComplex();
      console.log("API Responsehhscomplex:", response);
      if (Array.isArray(response)) {
        const hhsComplexobject={};
        response.forEach((hhscomplex) => {
          hhsComplexobject[hhscomplex.hc_id] = hhscomplex;
          });
          setAllhhscomplex(hhsComplexobject);
      } else {
        console.error("Invalid data received from the API:", response);
      }
    } catch (error) {
      console.error("Error fetching hhscomplex data:", error);
    }
  };
  useEffect(() => {
    fetchAllhhscomplex();
  }, []);
//   const handleEditProfile=(id)=>{
//     navigate (`/`)
//    }
//    const handleDelete=(id)=>{
//     navigate (`/`)
//    }
  return (
    <div>
      <Header />
      <div className="arrow-back-container">
        <BiArrowBack
          className="backLoginForm fs-2 text-dark"
          onClick={() => navigate(-1)}
        />
      </div>
      <h2 className="title">Details of HHS Complex</h2>

      <Table striped>
        <thead className="shadow-lg p-3 mb-5 bg-white rounded">
          <tr>
            <th>Sr. No.</th>
            <th>L.F. No</th>
            <th>R.R. NO</th>
            <th>Date</th>
            <th>Receiver Name</th>
            <th>Rupee</th>
            <th>Month</th>
            <th>Electrical Charges</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="shadow-lg p-3 mb-5 bg-white rounded">
  {Object.keys(allhhscomplex).map((hcId, index) => {
    const hhscomplex = allhhscomplex[hcId];
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{hhscomplex.lfNo}</td>
        <td>{hhscomplex.rrNo}</td>
        <td>{hhscomplex.date}</td>
        <td>{hhscomplex.receiverName}</td>
        <td>{hhscomplex.rupees}</td>
        <td>{hhscomplex.month}</td> 
        <td>{hhscomplex.eleCharges}</td>
        <td>
          <div className="dropdown">
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdownMenuButton">
                &#8942;
              </Dropdown.Toggle>
              <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleViewProfile(hcId)}>
                          View Profile
                        </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </td>
      </tr>
    );
  })}
</tbody>
      </Table>
    </div>
  );
};

export default ViewHHSComplex;