// import React, { useState } from 'react';
// import {
//   MDBContainer as Container,
//   MDBRow as Row,
//   MDBCol as Col,
//   MDBInput as Input,
//   MDBBtn as Button,
// } from 'mdb-react-ui-kit';
// import Sidebar from '../admin/Sidebar';
// import Table from 'react-bootstrap/Table';
// import Header from '../common/Header';
// import { FaFilter } from 'react-icons/fa';
// import { BsReverseListColumnsReverse, BsFillFilterSquareFill, BsFillCalendarDateFill } from 'react-icons/bs';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import moment from 'moment';
// import '../../asset/style.css';

// const Transactions = () => {
//   const [filteredData, setFilteredData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedColumn, setSelectedColumn] = useState('');
//   const [filterValue, setFilterValue] = useState('');
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [startDate, setStartDate] = useState(moment().subtract(29, 'days').toDate());
//   const [endDate, setEndDate] = useState(new Date());
//   const [calendarVisible, setCalendarVisible] = useState(false);

//   const presets = {
//     'Today': [moment(), moment()],
//     'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
//     'Last 7 Days': [moment().subtract(6, 'days'), moment()],
//     'Last 30 Days': [moment().subtract(29, 'days'), moment()],
//     'This Month': [moment().startOf('month'), moment().endOf('month')],
//     'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
//   };

//   const handleSearch = (event) => {
//     const searchTerm = event.target.value.toLowerCase();
//     setSearchTerm(searchTerm);
//     // Rest of your search logic
//   };

//   const handleColumnSelect = (event) => {
//     setSelectedColumn(event.target.value);
//   };

//   const handleFilterChange = (event) => {
//     setFilterValue(event.target.value);
//   };

//   const handlePresetClick = (preset) => {
//     const [start, end] = presets[preset];
//     setStartDate(start.toDate());
//     setEndDate(end.toDate());
//   };

//   const handleDateChange = (dates) => {
//     const [start, end] = dates;
//     setStartDate(start);
//     setEndDate(end);
//   };

//   const toggleCalendar = () => {
//     setCalendarVisible(!calendarVisible);
//   };

//   const selectDateText = calendarVisible ? 'Close Calendar' : 'Select Date';

//   return (
//     <div>
//       <Header />
//       <div className="box">
//         <div className="search-input">
//           <Input
//             type="text"
//             label="Search Transactions"
//             value={searchTerm}
//             onChange={handleSearch}
//             className="search-input"
//           />
//         </div>
//         <div className="button-container">
//           <Button variant="primary" className="mx-2">
//             View Live Transaction
//           </Button>
//           <div className="filter-options">
//             <div className="input-group-append">
//               <span className="input-group-text">
//                 <BsReverseListColumnsReverse />
//               </span>
//             </div>
//             <select onChange={handleColumnSelect} className="filter-select">
//               <option value="">Customize Columns</option>
//               <option value="description">Description</option>
//               <option value="amount">Amount</option>
//             </select>
//             <div className="input-group-append">
//               <span className="input-group-text">
//                 <BsFillFilterSquareFill />
//               </span>
//             </div>
//             <Input
//               type="text"
//               label="Filters"
//               value={filterValue}
//               onChange={handleFilterChange}
//               className="filter-input"
//             />
//           </div>
//           <div
//             style={{
//               position: 'relative',
//               display: 'inline-block',
//               marginLeft: '10px',
//               width: '500px',

//             }}
//           >
//             <Button variant="link" onClick={toggleCalendar}>
//               <BsFillCalendarDateFill />
//               &nbsp;{selectDateText}
//             </Button>
//             {calendarVisible && (
//               <div style={{ position: 'absolute', top: '30px', zIndex: '999' }}>
//                 <DatePicker
//                   selected={startDate}
//                   onChange={handleDateChange}
//                   startDate={startDate}
//                   endDate={endDate}
//                   selectsRange
//                   inline
//                 />
//                 <div style={{ marginTop: '0px' }}>
//                   {Object.keys(presets).map((preset) => (
//                     <button
//                       key={preset}
//                       className="btn btn-link"
//                       onClick={() => handlePresetClick(preset)}
//                     >
//                       {preset}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//       <div>
//         <h2 className="title">Transaction History</h2>
//       </div>
//     </div>
//   );
// };

// export default Transactions;

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
  const tableData = [
    {
      formID: '1',
      bankName: 'SBI',
      amt: '23456',
      accountName: 'cash', 
      date: '2-10-23',
      accRecieverNm: "xyz",
      accHolderNm: "pqr",
    } ,
    {
      formID: '2',
      bankName: 'Kotak',
      amt: '111111',
      accountName: 'phonepay', 
      date: '3-7-23',
      accRecieverNm: "abc",
      accHolderNm: "def",
    } ,
    {
      formID: '3',
      bankName: 'HDFC',
      amt: '22222',
      accountName: 'cheque', 
      date: '4-11-22',
      accRecieverNm: "stu",
      accHolderNm: "vwx",
    } ,
  ];
  
  const [filteredData, setFilteredData] = useState(tableData);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const applyFilter = (filter) => {
    const currentDate = new Date();
    let startDate;
    switch (filter) {
      case 'Yesterday':
        startDate = new Date(currentDate);
        startDate.setDate(currentDate.getDate() - 1);
        break;
      case '3 Months Before':
        startDate = new Date(currentDate);
        startDate.setMonth(currentDate.getMonth() - 3);
        break;
      case '6 Months Before':
        startDate = new Date(currentDate);
        startDate.setMonth(currentDate.getMonth() - 6);
        break;
      case '1 Year Before':
        startDate = new Date(currentDate);
        startDate.setFullYear(currentDate.getFullYear() - 1);
        break;
      default:
        startDate = null;
    }

    if (startDate) {
      const filtered = tableData.filter((item) => {
        const itemDate = moment(item.date, 'DD-MM-YY').toDate();
        return itemDate >= startDate && itemDate <= currentDate;
      });
      setFilteredData(filtered);
    } else {
      setFilteredData(tableData);
    }

    setSelectedFilter(filter);
  };

  return (
    <div>
      <Header />
      <div className="box">
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
            <select
              onChange={(e) => applyFilter(e.target.value)}
              className="filter-select"
              value={selectedFilter}
            >
              <option value="All">Show All</option>
              <option value="Yesterday">Yesterday</option>
              <option value="3 Months Before">3 Months Before</option>
              <option value="6 Months Before">6 Months Before</option>
              <option value="1 Year Before">1 Year Before</option>
            </select>
            <div className="input-group-append">
              <span className="input-group-text">
                <BsFillFilterSquareFill />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="title">Transaction History</h2>
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
    </div>
  );
};

export default Transactions;