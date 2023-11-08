import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Header from "../common/Header";
import "react-datepicker/dist/react-datepicker.css";
import "../../asset/style.css";
import { BiArrowBack } from "react-icons/bi";
import axios from "axios";
import { APIS } from "../constants/api";
import { Dropdown } from "react-bootstrap";
import { ElectricityBillService } from "../../services/ElectricityBillService";

const ViewElectricityBill = () => {
  const [allectricitybill, setAllectricitybill] = useState({});
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEleBill, setFilteredEleBill] = useState({});
  const reversedData = Object.keys(filteredEleBill).reverse();

  const handleViewProfile = (ele_id) => {
    navigate(`/detailelectricitybill/${ele_id}`);
  };

  const fetchAllectricitybill = async () => {
    try {
      const response = await ElectricityBillService.getAllElectricityBill();
      console.log("API Response:", response);
      if (Array.isArray(response)) {
        const elebillobject = {};
        response.forEach((elebill) => {
          elebillobject[elebill.ele_id] = elebill;
        });
        setAllectricitybill(elebillobject);
        setFilteredEleBill(elebillobject); // Set initially
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

  const handleEditProfile = (ele_id) => {
    navigate(`/editelectricitybill/${ele_id}`);
  };

  const handleDelete = async (ele_id) => {
    try {
      await axios.delete(`${APIS.DELETEELECITYBILLBYID}/${ele_id}`);
      console.log("Deleted Successfully");
      const updatedElectricityBill = { ...allectricitybill };
      delete updatedElectricityBill[ele_id];
      setAllectricitybill(updatedElectricityBill);
      setFilteredEleBill(updatedElectricityBill); // Update filtered data
    } catch (error) {
      console.error("Error deleting ElectricityBill:", error);
    }
  };

  const handleSearchInputChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);

    const filtered = Object.keys(allectricitybill).filter((eleId) => {
      const elebill = allectricitybill[eleId];
      const matchesSearch = Object.values(elebill).some((field) =>
        String(field).toLowerCase().includes(value.toLowerCase())
      );
      return matchesSearch;
    });

    const filteredElectricityBill = {};
    filtered.forEach((eleId) => {
      filteredElectricityBill[eleId] = allectricitybill[eleId];
    });
    setFilteredEleBill(filteredElectricityBill);
  };

  return (
    <div>
      <Header />
      <div className="mt-4">
      <div className="arrow-back-container">
        <BiArrowBack
          className="backLoginForm fs-2 text-dark"
          onClick={() => navigate(-1)}
        />
      </div>
      <h2 className="title">Electricity Bill Details</h2>
      </div>
      <div className="d-flex seachcontentcenter mb-4 align-items-center">
        <div className=" search ms-4">
          <input
            label="Search"
            type="text"
            className="form-control"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </div>
      </div>
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
          {/* {Object.keys(filteredEleBill).map((eleId, index) => {
            const elebill = allectricitybill[eleId]; */}
              {reversedData.map((eleId, index) => {
              const elebill = filteredEleBill[eleId];
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
                        <Dropdown.Item
                          onClick={() => handleDelete(eleId)}
                          className="red-text"
                        >
                          Delete
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
