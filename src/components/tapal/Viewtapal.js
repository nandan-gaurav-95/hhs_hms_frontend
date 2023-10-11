import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Header from "../common/Header";
import "react-datepicker/dist/react-datepicker.css";
import "../../asset/style.css";
import { BiArrowBack } from "react-icons/bi";
import { Dropdown } from 'react-bootstrap';
import { TapalService } from "../../services/TapalService";
import axios from 'axios';

import { APIS } from "../constants/api";
const Viewtapal = () => {
 
  const [allViewtapal] = useState({});
  const navigate = useNavigate();
  const [tapalData, setTapalData] = useState([]);
  
  const fetchTapalData = async () => {
    try {
      const response = await TapalService.getAllTapal();
      console.log("API Response:", response);
      if (Array.isArray(response)) {
        setTapalData(response);
      } else {
        console.error("Invalid data received from the API:", response);
      }
    } catch (error) {
      console.error("Error fetching tapal data:", error);
    }
  };

  useEffect(() => {
    fetchTapalData();
  }, []);

  const handleEditProfile=(id)=>{
    navigate (`/edit-tapal/${id}`)
   }
   const handleDelete= async (id) => {
    try {
      await axios.delete(`${APIS.DELETETAPALBYID}/${id}`);
      console.log("Deleted Successfully");
      const updatedTapalData = tapalData.filter((tapal) => tapal.id !== id);
      setTapalData(updatedTapalData);
    } catch (error) {
      console.error("Error deleting tapal:", error);
    }
  };
  return (
    <div>
      <Header />
      <div className="arrow-back-container">
        <BiArrowBack
          className="backLoginForm fs-2 text-dark"
          onClick={() => navigate(-1)}
        />
      </div>
      <h2 className="title">Tapal Details</h2>

      <Table striped>
        <thead className="shadow-lg p-3 mb-5 bg-white rounded">
          <tr>
            <th>Letter No</th>
            <th>Letter Type</th>
            <th>Date</th>
            <th>To Address</th>
            <th>From Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="shadow-lg p-3 mb-5 bg-white rounded">
        {tapalData.map((tapal, index) => {
          return (
            <tr key={tapal.id}>
              <td>{index + 1}</td>
              <td>{tapal.letterNo}</td>
              <td>{tapal.letterType}</td>
              <td>{tapal.date}</td>
              <td>{tapal.toAddress}</td>
              <td>{tapal.fromAddress}</td>

              <td>
          <div className="dropdown">
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdownMenuButton">
                &#8942;
              </Dropdown.Toggle>
              <Dropdown.Menu>
                
                <Dropdown.Item onClick={() => handleEditProfile(tapal.id)}>
                  Edit Tapal
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleDelete(tapal.id)}
                  className="red-text"
                >
                  Delete Tapal
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

export default Viewtapal;