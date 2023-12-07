import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Header from "../common/Header";
import "react-datepicker/dist/react-datepicker.css";
import "../../asset/style.css";
import axios from "axios";
import { APIS } from "../constants/api";
import { BiArrowBack } from "react-icons/bi";
import { Dropdown } from "react-bootstrap";
import { BloodCenterService } from "../../services/BloodCenterService";


const BloodGroupInv = () => {
    const [allBloodGroup,setAllBloodGroup]=useState({});
    const reversedData = Object.keys(allBloodGroup).reverse();

    const navigate = useNavigate();
    const fetchBloodGroupInv =async()=>{
        try {
            const response=await BloodCenterService.getbloodGroupInventory();
            console.log("Blood Group Inventory",response);
            if (Array.isArray(response)) {
                const bloodGroupObject = {};
                response.forEach((bloodgroup) => {
                    bloodGroupObject[bloodgroup.bs_id] = bloodgroup;
                });
                setAllBloodGroup(bloodGroupObject);
              } else {
                console.error("Invalid data received from the API:", response);
              }
           
        } catch (error) {
            console.error("Error fetching blood group Inv data:", error);
        }
    };

    useEffect(() => {
        fetchBloodGroupInv();
      }, []);

  return (
    <div className="mainview">
      <Header />
      <div className="submainview">
        <div className="arrow-back-container">
          <BiArrowBack className="addbacklogo" onClick={() => navigate(-1)} />
        </div>
        <h2 className="availabletext">Blood Group Inventory Details</h2>
      </div>
     
      <Table striped>
        <thead className="viewbody">
          <tr>
            <th>Sr. No.</th>
           
            <th>Blood Group</th>
            <th>Total Unit NO.</th>
          </tr>
        </thead>
        <tbody className="subviewbody">
          {/* {Object.keys(filteredBloodCenter).map((bcId, index) => {
            const bloodCenter = allBloodCenter[bcId]; */}
         {reversedData.map((bsId, index) => {
            const bloodCenter = allBloodGroup[bsId];
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                
                <td>{bloodCenter.bloodgroup}</td>
                <td>{bloodCenter.totalUnitsInStock}</td>
               
               
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default BloodGroupInv
