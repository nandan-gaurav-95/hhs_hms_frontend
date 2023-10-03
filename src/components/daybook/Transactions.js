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
import { BsReverseListColumnsReverse , BsFillFilterSquareFill,BsFillCalendarDateFill} from "react-icons/bs";

const Transactions = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedColumn, setSelectedColumn] = useState(""); 
  const [filterValue, setFilterValue] = useState(""); 
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Custom");

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
    setShowDropdown(false);
  };

  const handleApplyDateFilter = () => {
   
    console.log("Selected date:", selectedDate);
  };
  const handleOptionSelect = (option) => {
    if (option === "Custom") {
      // Handle the "Custom" option here, you can show a custom date picker.
      // For now, let's just select the current date.
      setSelectedDate(new Date());
    } else {
      // Handle other options like "Past six months," "This Month," etc.
      // You can update the selectedDate accordingly.
    }
    setSelectedOption(option);
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
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
          <div className="input-group-append">
            <span className="input-group-text">
              <BsReverseListColumnsReverse />
            </span>
          </div>
            <select onChange={handleColumnSelect} className="filter-select">
              <option value="">Select Column to Filter</option>
              <option value="description">Description</option>
              <option value="amount">Amount</option>
            </select>
            <div className="input-group-append">
            <span className="input-group-text">
              <BsFillFilterSquareFill />
            </span>
          </div>
            <Input
              type="text"
              label="Filters"
              value={filterValue}
              onChange={handleFilterChange}
              className="filter-input"
            />
          </div>
          <div className="date-filter" style={{ marginLeft: '10px' }}>
          <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <BsFillCalendarDateFill />
                </span>
              </div>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select Date"
                className="form-control" // Use Bootstrap form-control class
              />
            </div>
           
          </div>
          {/* <div className="date-filter" style={{ marginLeft: "10px" }}>
        <div className="date-picker-container">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select Date"
            className="date-input"
          />
          <div className={`date-dropdown ${showDropdown ? "show" : ""}`}>
            <button className="date-dropdown-button" onClick={toggleDropdown}>
              {selectedOption}
            </button>
            <ul className="date-dropdown-options horizontal">
              <li onClick={() => handleOptionSelect("Past six months")}>
                Past six months
              </li>
              <li onClick={() => handleOptionSelect("This Month")}>
                This Month
              </li>
              <li onClick={() => handleOptionSelect("This Week")}>This Week</li>
              <li onClick={() => handleOptionSelect("Today")}>Today</li>
              <li onClick={() => handleOptionSelect("Custom")}>Custom</li>
            </ul>
          </div>
        </div>
      </div> */}
        </div>
        
      </div>
      <div>
           <h2 className="title">Transaction History</h2>
        </div>
    </div>
  );
};

export default Transactions;