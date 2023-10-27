import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Header from "../common/Header";
import "react-datepicker/dist/react-datepicker.css";
import "../../asset/style.css";
import { BiArrowBack } from "react-icons/bi";
import { Dropdown } from "react-bootstrap";
import { ElectricityBillService } from "../../services/ElectricityBillService";
const ViewElectricityBill = () => {
  const [allectricitybill, setAllectricitybill] = useState({});


  const navigate = useNavigate();
  const handleViewProfile = (ele_id) => {
    navigate(`/detailelectricitybill/${ele_id}`);
  };


  const fetchAllectricitybill = async () => {
    try {
      const response = await ElectricityBillService.getAllElectricityBill();
      console.log("API Response:", response);
      if (Array.isArray(response)) {
        const elebillobject={};
        response.forEach((elebill) => {
            elebillobject[elebill.ele_id] = elebill;
          });
          setAllectricitybill(elebillobject);
      } else {
        console.error("Invalid data received from the API:", response);
      }
    } catch (error) {
      console.error("Error fetching elebill data:", error);
    }
  };
  useEffect(() => {
    fetchAllectricitybill();
  }, []);
     const handleEditProfile=(ele_id)=>{
       navigate (`/editelectricitybill/${ele_id}`)
      }
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
      <h2 className="title">Electricity Bill Details</h2>

      <Table striped>
        <thead className="shadow-lg p-3 mb-5 bg-white rounded">
          <tr>
           <th>Sr. No.</th>
            <th>Name</th>
            <th>Shop No</th>
            <th>R.R. NO.</th>
            <th>Ledger Follo No</th>
            <th>Sanction Load</th>
            <th>Tariff</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="shadow-lg p-3 mb-5 bg-white rounded">
          {Object.keys(allectricitybill).map((eleId, index) => {
            const elebill = allectricitybill[eleId];
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{elebill.name}</td>
                <td>{elebill.shopNo}</td>
                <td>{elebill.rrNo}</td>
                <td>{elebill.ledger_follono}</td>
                <td>{elebill.sanctionLoad}</td>
                <td>{elebill.tariff}</td>
              
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
                          onClick={() => handleViewProfile(eleId)}
                        >
                          View ElectricityBill
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleEditProfile(eleId)}
                        >
                        Edit ElectricityBill
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

export default ViewElectricityBill;