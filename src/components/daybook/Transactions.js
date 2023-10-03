import React, { useState } from 'react';
import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBInput as Input,
  MDBBtn as Button,
} from 'mdb-react-ui-kit';
import Sidebar from '../admin/Sidebar';
import Table from 'react-bootstrap/Table';
import Header from '../common/Header';
import { FaFilter } from 'react-icons/fa';
import { BsReverseListColumnsReverse, BsFillFilterSquareFill, BsFillCalendarDateFill } from 'react-icons/bs';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import '../../asset/style.css';

const Transactions = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedColumn, setSelectedColumn] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [startDate, setStartDate] = useState(moment().subtract(29, 'days').toDate());
  const [endDate, setEndDate] = useState(new Date());
  const [calendarVisible, setCalendarVisible] = useState(false);

  const presets = {
    'Today': [moment(), moment()],
    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    // Rest of your search logic
  };

  const handleColumnSelect = (event) => {
    setSelectedColumn(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  const handlePresetClick = (preset) => {
    const [start, end] = presets[preset];
    setStartDate(start.toDate());
    setEndDate(end.toDate());
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const toggleCalendar = () => {
    setCalendarVisible(!calendarVisible);
  };

  const selectDateText = calendarVisible ? 'Close Calendar' : 'Select Date';

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
              <option value="">Customize Columns</option>
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
          <div
            style={{
              position: 'relative',
              display: 'inline-block',
              marginLeft: '10px',
              width: '500px',

            }}
          >
            <Button variant="link" onClick={toggleCalendar}>
              <BsFillCalendarDateFill />
              &nbsp;{selectDateText}
            </Button>
            {calendarVisible && (
              <div style={{ position: 'absolute', top: '30px', zIndex: '999' }}>
                <DatePicker
                  selected={startDate}
                  onChange={handleDateChange}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  inline
                />
                <div style={{ marginTop: '0px' }}>
                  {Object.keys(presets).map((preset) => (
                    <button
                      key={preset}
                      className="btn btn-link"
                      onClick={() => handlePresetClick(preset)}
                    >
                      {preset}
                    </button>
                  ))}
                </div>
              </div>
            )}
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