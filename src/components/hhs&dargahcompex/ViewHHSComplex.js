import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Header from "../common/Header";
import "react-datepicker/dist/react-datepicker.css";
import "../../asset/style.css";
import { BiArrowBack } from "react-icons/bi";
import { Dropdown } from 'react-bootstrap';
const ViewHHSComplex = () => {
  const [viewhhscomplex, setAllViewhhscomplex] = useState({});
  const [allViewhhscomplex] = useState({});
  
  const navigate = useNavigate();
  const handleViewProfile=(id)=>{
    navigate (`/`)
   }
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
      <h2 className="title">HHS Complex Details</h2>

      <Table striped>
        <thead className="shadow-lg p-3 mb-5 bg-white rounded">
          <tr>
            <th>L.F. No</th>
            <th>R.R. NO</th>
            <th>Date</th>
            <th>Receiver Name</th>
            <th>Rupee</th>
            <th>Rupees in Words</th>
            <th>Electrical Charges</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="shadow-lg p-3 mb-5 bg-white rounded">
  {Object.keys(allViewhhscomplex).map((propId, index) => {
    const property = allViewhhscomplex[propId];
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{viewhhscomplex.L.F. No}</td>
        <td>{viewhhscomplex.R.R. NO}</td>
        <td>{viewhhscomplex.Date}</td>
        <td>{viewhhscomplex.ReceiverName}</td>
        <td>{viewhhscomplex.Rupee}</td>
        <td>{viewhhscomplex.RupeesinWords}</td> 
        <td>{viewhhscomplex.ElectricalCharges}</td>
        <td>
          <div className="dropdown">
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdownMenuButton">
                &#8942;
              </Dropdown.Toggle>
              <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleViewProfile(propId)}>
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