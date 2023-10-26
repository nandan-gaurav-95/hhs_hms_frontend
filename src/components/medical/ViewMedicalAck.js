import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Header from "../common/Header";
import "react-datepicker/dist/react-datepicker.css";
import "../../asset/style.css";
import { BiArrowBack } from "react-icons/bi";
import { Dropdown } from "react-bootstrap";
const ViewMedicalAck = () => {
  const [viewmedicalack, setAllViewmedicalack] = useState({});
  const [allViewmedicalack] = useState({});

  const navigate = useNavigate();
  const handleViewProfile = (id) => {
    navigate(`/`);
  };
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
      <h2 className="title">Medical Acknowledgment Details</h2>

      <Table striped>
        <thead className="shadow-lg p-3 mb-5 bg-white rounded">
          <tr>
            <th>To Name</th>
            <th>Date</th>
            <th>Rupees</th>
            <th>Cheque No</th>
            <th>Dated</th>
            <th>Hospital I.P. NO.</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="shadow-lg p-3 mb-5 bg-white rounded">
          {Object.keys(allViewmedicalack).map((propId, index) => {
            const property = allViewmedicalack[propId];
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{viewmedicalack.ToName}</td>
                <td>{viewmedicalack.Date}</td>
                <td>{viewmedicalack.Rupees}</td>
                <td>{viewmedicalack.ChequeNo}</td>
                <td>{viewmedicalack.Dated}</td>
                <td>{viewmedicalack.HospitalIPNO}</td>
                <td>
                  <div className="dropdown">
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="secondary"
                        id="dropdownMenuButton"
                      >
                        &#8942;
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item
                          onClick={() => handleViewProfile(propId)}
                        >
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

export default ViewMedicalAck;