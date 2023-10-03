import React, { useState } from "react";
import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBInput as Input,
  MDBBtn as Button,
} from "mdb-react-ui-kit";
import Sidebar from "../admin/Sidebar";
import Table from "react-bootstrap/Table";
import Header from "../common/Header";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../asset/style.css";
import CustomColumn from "./CustomColumn"; // Update the path accordingly
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Transactions = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedColumn, setSelectedColumn] = useState(""); 
  const [filterValue, setFilterValue] = useState(""); 
  const [selectedDate, setSelectedDate] = useState(null);

  const transactionData = [
    { id: 1, description: "Transaction 1", amount: 100 },
    { id: 2, description: "Transaction 2", amount: 150 },
    // Add more transaction data as needed
  ];

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredTransactions = transactionData.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm)
    );

    setFilteredData(filteredTransactions);
  };

  const handleColumnSelect = (event) => {
    setSelectedColumn(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleApplyDateFilter = () => {
   
    console.log("Selected date:", selectedDate);
  };

  return (
    <div>
      <Header />
      
      <div className="box">
      <div className="search-input">
        <Input
          type="text"
          label="Search Transactions"
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>
        <div className="button-container">
          <Button variant="primary" className="mx-2">
            View Live Transaction
          </Button>
          <div className="filter-options">
            <select onChange={handleColumnSelect} className="filter-select">
              <option value="">Select Column to Filter</option>
              <option value="description">Description</option>
              <option value="amount">Amount</option>
            </select>
            <Input
              type="text"
              label="Filters"
              value={filterValue}
              onChange={handleFilterChange}
              className="filter-input"
            />
          </div>
          <div className="date-filter" style={{ marginLeft: '10px' }}>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select Date"
              className="date-input"
            />
            {/* <Button variant="primary" onClick={handleApplyDateFilter}>
              Apply Date Filter
            </Button> */}
          </div>
        </div>
        
      </div>
      <div>
           <h2 className="title">Transaction History</h2>
        </div>
    </div>
  );
};

export default Transactions;