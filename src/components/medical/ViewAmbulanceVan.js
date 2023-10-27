import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Header from "../common/Header";
import "react-datepicker/dist/react-datepicker.css";
import "../../asset/style.css";
import { BiArrowBack } from "react-icons/bi";
import { Dropdown } from "react-bootstrap";
import { AmbulanceService } from "../../services/AmbulanceService";
const ViewAmbulanceVan = () => {
  const [allambulancevan, setAllambulancevan] = useState({});


  const navigate = useNavigate();
  const handleViewProfile = (amb_id) => {
    navigate(`/detailsambulancevan/${amb_id}`);
  };
  const fetchAllambulancevan = async () => {
    try {
      const response = await AmbulanceService.getAllAmbulance();
      console.log("API Response Ambulance:", response);
      if (Array.isArray(response)) {
        const ambulanceobject={};
        response.forEach((ambulance) => {
          ambulanceobject[ambulance.amb_id] = ambulance;
          });
          setAllambulancevan(ambulanceobject);
      } else {
        console.error("Invalid data received from the API:", response);
      }
    } catch (error) {
      console.error("Error fetching Ambulance data:", error);
    }
  };
  useEffect(() => {
    fetchAllambulancevan();
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
      <h2 className="title">Ambulance Van Details</h2>

      <Table striped>
        <thead className="shadow-lg p-3 mb-5 bg-white rounded">
          <tr>
            <th>Sr. No.</th>
            <th>Receiver Name</th>
            <th>Date</th>
            <th>Account Holder Name</th>
            <th>Rupee</th>
            <th>Remark</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="shadow-lg p-3 mb-5 bg-white rounded">
          {Object.keys(allambulancevan).map((ambId, index) => {
            const ambulance = allambulancevan[ambId];
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{ambulance.receiverName}</td>
                <td>{ambulance.date}</td>
                <td>{ambulance.accHolderName}</td>
                <td>{ambulance.rupee}</td>
                <td>{ambulance.remark}</td>
              
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
                          onClick={() => handleViewProfile(ambId)}
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

export default ViewAmbulanceVan;