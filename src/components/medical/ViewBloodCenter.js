import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Header from "../common/Header";
import "react-datepicker/dist/react-datepicker.css";
import "../../asset/style.css";
import { BiArrowBack } from "react-icons/bi";
import { Dropdown } from "react-bootstrap"; 
import { BloodCenterService } from "../../services/BloodCenterService";
const ViewBloodCenter = () => {
  const [allbloodcenter, setAllbloodcenter] = useState({});


  const navigate = useNavigate();
  const handleViewProfile = (bc_id) => {
    navigate(`/detailbloodcenter/${bc_id}`);
  };
  const fetchAllbloodcenter = async () => {
    try {
      const response = await BloodCenterService.getAllBloodCenter();
      console.log("API Response:", response);
      if (Array.isArray(response)) {
        const bloodcenterobject={};
        response.forEach((bloodcenter) => {
          bloodcenterobject[bloodcenter.bc_id] = bloodcenter;
          });
          setAllbloodcenter(bloodcenterobject);
      } else {
        console.error("Invalid data received from the API:", response);
      }
    } catch (error) {
      console.error("Error fetching blood data:", error);
    }
  };
  useEffect(() => {
    fetchAllbloodcenter();
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
      <h2 className="title">Blood Center Details</h2>

      <Table striped>
        <thead className="shadow-lg p-3 mb-5 bg-white rounded">
          <tr>
          <th>Sr.No</th>
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
          {Object.keys(allbloodcenter).map((bcId, index) => {
            const bloodcenter = allbloodcenter[bcId];
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{bloodcenter.receiverName}</td>
                <td>{bloodcenter.date}</td>
                <td>{bloodcenter.ipNo}</td>
                <td>{bloodcenter.age}</td>
                <td>{bloodcenter.gender}</td>
                <td>{bloodcenter.hospitalName}</td>
              
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
                          onClick={() => handleViewProfile(bcId)}
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