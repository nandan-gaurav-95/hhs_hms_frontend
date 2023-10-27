import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Header from "../common/Header";
import "react-datepicker/dist/react-datepicker.css";
import "../../asset/style.css";
import { BiArrowBack } from "react-icons/bi";
import { Dropdown } from "react-bootstrap";
import { ParkingService } from "../../services/ParkingService"
const ViewParking = () => {
  const [allparking, setAllparking] = useState({});
 

  const navigate = useNavigate();
  const handleViewProfile = (p_id) => {
    navigate(`/detailparking/${p_id}`);
  };
  const fetchAllparking = async () => {
    try {
      const response = await ParkingService.getAllParking();
      console.log("API Response:", response);
      if (Array.isArray(response)) {
        const parkingobject={};
        response.forEach((parking) => {
          parkingobject[parking.p_id] = parking;
          });
          setAllparking(parkingobject);
      } else {
        console.error("Invalid data received from the API:", response);
      }
    } catch (error) {
      console.error("Error fetching parking data:", error);
    }
  };
  useEffect(() => {
    fetchAllparking();
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
      <h2 className="title">Parking Details</h2>

      <Table striped>
        <thead className="shadow-lg p-3 mb-5 bg-white rounded">
          <tr>
            <th>Sr.No.</th>
            <th>Receiver Name</th>
            <th>Date</th>
            <th>Rupee</th>
            <th>Parking Rent</th>
            <th>Month</th>
            <th>Remark</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="shadow-lg p-3 mb-5 bg-white rounded">
          {Object.keys(allparking).map((parkId, index) => {
            const parking = allparking[parkId];
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{parking.receiverName}</td>
                <td>{parking.date}</td>
                <td>{parking.rupee}</td>
                <td>{parking.parkingRent}</td>
                <td>{parking.month}</td>
                <td>{parking.remark}</td>
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
                          onClick={() => handleViewProfile(parkId)}
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

export default ViewParking;