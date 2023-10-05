import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Header from '../common/Header';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import '../../asset/style.css';
import { BiArrowBack } from "react-icons/bi";

const Transactions = () => {
  const navigate = useNavigate();

  const [tableData, setTableData] = useState([
    {
      formID: '1',
      bankName: 'SBI',
      amt: '23456',
      accountName: 'cash',
      date: '23-10-03', // Change date format to 'YY-MM-DD'
      accRecieverNm: 'xyz',
      accHolderNm: 'pqr',
    },
    {
      formID: '2',
      bankName: 'Kotak',
      amt: '111111',
      accountName: 'phonepay',
      date: '23-05-03', // Change date format to 'YY-MM-DD'
      accRecieverNm: 'abc',
      accHolderNm: 'def',
    },
    {
      formID: '3',
      bankName: 'HDFC',
      amt: '22222',
      accountName: 'cheque',
      date: '22-9-04', // Change date format to 'YY-MM-DD'
      accRecieverNm: 'stu',
      accHolderNm: 'vwx',
    },
    {
      formID: '4',
      bankName: 'Canara',
      amt: '33333',
      accountName: 'cash',
      date: '23-9-09', // Change date format to 'YY-MM-DD'
      accRecieverNm: 'xyz',
      accHolderNm: 'pqr',
    },
    {
      formID: '5',
      bankName: 'Maharashtra',
      amt: '444444',
      accountName: 'cheque',
      date: '23-3-04', // Change date format to 'YY-MM-DD'
      accRecieverNm: 'stu',
      accHolderNm: 'vwx',
    },
  ]);
  
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [startDate, setStartDate] = useState(null); // State for custom start date
  const [endDate, setEndDate] = useState(null);     // State for custom end date

  const filterData = () => {
    const currentDate = moment();
    let filteredData = [];

    switch (selectedFilter) {
      case 'yesterday':
        filteredData = tableData.filter(item =>
          moment(item.date, 'YY-MM-DD').isSame(currentDate.clone().subtract(1, 'day'), 'day')
        );
        break;
      case '3months':
        // Calculate the date exactly 3 months ago from the current date
        const threeMonthsAgo = currentDate.clone().subtract(3, 'months');
        filteredData = tableData.filter(item =>
          moment(item.date, 'YY-MM-DD').isSameOrAfter(threeMonthsAgo, 'day') &&
          moment(item.date, 'YY-MM-DD').isBefore(currentDate) // Check if it's before the current date
        );
        break;
      case '6months':
        // Calculate the date exactly 6 months ago from the current date
        const sixMonthsAgo = currentDate.clone().subtract(6, 'months');
        filteredData = tableData.filter(item =>
          moment(item.date, 'YY-MM-DD').isSameOrAfter(sixMonthsAgo, 'day') &&
          moment(item.date, 'YY-MM-DD').isBefore(currentDate) // Check if it's before the current date
        );
        break;
      case '1year':
        // Calculate the date exactly 1 year ago from the current date
        const oneYearAgo = currentDate.clone().subtract(1, 'year');
        filteredData = tableData.filter(item =>
          moment(item.date, 'YY-MM-DD').isSameOrAfter(oneYearAgo, 'day') &&
          moment(item.date, 'YY-MM-DD').isBefore(currentDate) // Check if it's before the current date
        );
        break;
        case 'custom':
          // Custom date filtering based on startDate and endDate
          if (startDate && endDate) {
            filteredData = tableData.filter(item => {
              const itemDate = moment(item.date, 'YY-MM-DD');
              return itemDate.isSameOrAfter(startDate, 'day') && itemDate.isSameOrBefore(endDate, 'day');
            });
          }
          break;
      default:
        filteredData = tableData; // Show all data for 'all' filter
        break;
    }
  
    return filteredData;
  };
  

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const filteredData = filterData();

  return (
    <div>
      <Header />
      <div className="arrow-back-container">
        <BiArrowBack
          className="backLoginForm fs-2 text-dark"
          onClick={() => navigate(-1)}
        />
      </div>
      <h2 className="title">Transaction History</h2>
      <div>
        <select onChange={(e) => handleFilterChange(e.target.value)}>
          <option value="all">Show All</option>
          <option value="yesterday">Yesterday</option>
          <option value="3months">3 Months </option>
          <option value="6months">6 Months </option>
          <option value="1year">1 Year </option>
          <option value="custom">Custom</option>
        </select>
        {selectedFilter === 'custom' && (
          <div>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Start Date"
              className="form-control"
            />
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              placeholderText="End Date"
              className="form-control"
            />
          </div>
        )}
      
      </div>
      <Table striped>
        <thead>
          <tr>
            <th>Form Id</th>
            <th>Amount</th>
            <th>Bank Name</th>
            <th>Date</th>
            <th>Account Name</th>
            <th>Acc Reciever Nm</th>
            <th>Acc Holder Nm</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.formID}>
              <td>{item.formID}</td>
              <td>{item.amt}</td>
              <td>{item.bankName}</td>
              <td>{item.date}</td>
              <td>{item.accountName}</td>
              <td>{item.accRecieverNm}</td>
              <td>{item.accHolderNm}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Transactions;