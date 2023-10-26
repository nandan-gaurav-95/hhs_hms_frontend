import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Header from "../common/Header";
import "react-datepicker/dist/react-datepicker.css";
import "../../asset/style.css";
import { BiArrowBack } from "react-icons/bi";
import { Dropdown } from "react-bootstrap";
const ViewBloodCenter = () => {
  const [viewbloodcenter, setAllViewbloodcenter] = useState({});
  const [allViewbloodcenter] = useState({});

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
      <h2 className="title">Blood Center Details</h2>

      <Table striped>
        <thead className="shadow-lg p-3 mb-5 bg-white rounded">
          <tr>
            <th>Receiver Name</th>
            <th>Date</th>
            <th>I.P. NO.</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Hospital Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="shadow-lg p-3 mb-5 bg-white rounded">
          {Object.keys(allViewbloodcenter).map((propId, index) => {
            const property = allViewbloodcenter[propId];
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{viewbloodcenter.ReceiverName}</td>
                <td>{viewbloodcenter.Date}</td>
                <td>{viewbloodcenter.IPNO}</td>
                <td>{viewbloodcenter.Age}</td>
                <td>{viewbloodcenter.Gender}</td>
                <td>{viewbloodcenter.HospitalName}</td>
              
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

export default ViewBloodCenter;