// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { APIS } from "../constants/api";
// import { useNavigate } from "react-router-dom";
// import { FaSearch, FaMicrophone } from "react-icons/fa"; 

// import {
//   MDBContainer as Container,
//   MDBRow as Row,
//   MDBCol as Col,
//   MDBBtn as Button,
// } from "mdb-react-ui-kit";
// import Sidebar from "../admin/Sidebar";

// const AllEmployee = () => {
//   const [allEmployee, setAllEmployee] = useState([]); // Corrected variable name
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     async function fetchEmployee() {
//       try {
//         const response = await axios.get(APIS.CREATEEMPLOYEE);
//         // console.log("Hiiiii",response.data);
//         if (response.status === 200) {
//           setAllEmployee(response.data); // Corrected variable name
//         } else {
//           console.error("Error while fetching Employee");
//         }
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     }
//     fetchEmployee();
//   }, []);

//   const handleViewDetails = async (emp_id) => {
//     navigate(`/empolyee-details/${emp_id}`);
//   };
//   const handleSearch = () => {
//     console.log("Performing search for:", searchQuery);
//   };

//   // const handleVoiceSearch = () => {
//   //   console.log("Initiating voice search...");
//   // };

//   return (
//     <div className="text-center">
//       <Sidebar>
//       <h2 className="mb-4">Employee Details:</h2>
//       <Col className="mb-4 d-flex flex-column align-items-center">
//         <div className="input-group" style={{ maxWidth: "300px" }}>
//           <input
//             type="text"
//             placeholder="Search Employee..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="form-control rounded"
//             style={{ borderTopRightRadius: "1.25rem", borderBottomRightRadius: "1.25rem" }}
//           />
//           <div className="input-group-append">
//             <span className="input-group-text" onClick={handleSearch}>
//               <FaSearch />
//             </span>
//           </div>
//           {/* <div className="input-group-append">
//             <span className="input-group-text" onClick={handleVoiceSearch}>
//               <FaMicrophone />
//             </span>
//           </div> */}
//         </div>
        
//       </Col>
//       <Row className="justify-content-center">
//         <Col className="col-sm-5 d-flex justify-content-center">
//           <ul className="list-group">
//             {allEmployee
//               .filter((Employee) =>
//               Employee?.empName
//                   .toLowerCase()
//                   .includes(searchQuery.toLowerCase())
//               )
//               .map((Employee, index) => (
//                 <li
//                   key={index}
//                   className="list-group-item d-flex justify-content-between align-items-center"
//                 >
//                   {Employee?.empName}
//                   <Button
//                     color="primary"
//                     onClick={() => handleViewDetails(Employee.emp_id)}
                    
//                   >
//                     View Employee Details
//                   </Button>
//                 </li>
//               ))}
//           </ul>
//         </Col>
//       </Row>
//       </Sidebar>
//     </div>
//   );
// };

// export default AllEmployee;


import React, { useState ,useEffect} from 'react';
import {
    MDBContainer as Container,
    MDBRow as Row,
    MDBCol as Col,
    MDBInput as Input,
    MDBBtn as Button
} from 'mdb-react-ui-kit';
import Sidebar from '../admin/Sidebar';
import Table from 'react-bootstrap/Table';
import Header from '../common/Header';
import { Dropdown } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import { EmployeeService } from '../../services/EmployeeService';
import axios from 'axios';
import { APIS } from '../constants/api';

const AllEmployee = () => {
     const tableData = [];

    const [allEmployee, setAllEmployee]=useState({});
    const navigate = useNavigate();

    const [searchInput, setSearchInput] = useState('');
    const [filteredData, setFilteredData] = useState(tableData);
    const [sortType, setSortType] = useState('all'); // 'all', 'Consumable', or 'NonConsumable'
    const [departmentSortType, setDepartmentSortType] = useState('all'); // 'all' or specific department


    // Function to fetch data from the API
   const fetchAllEmployee = async () => {
    try {
      const response = await EmployeeService.getAllEmployee();
      const employeeObject = {};
      response.data.forEach((employee) => {
        // Use the employee's emp_id as the key in the object
        employeeObject[employee.emp_id] = employee;
      });
      console.log("hiiiiii",employeeObject);
      setAllEmployee(employeeObject);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
    useEffect(()=>{
        fetchAllEmployee();
    },[]);

    const handleSearchChange = (event) => {
        const { value } = event.target;
        setSearchInput(value);

        // Filter the tableData based on the search input, sort type, and department sort type
        const filtered = tableData.filter((item) => {
            const nameMatches = item.name.toLowerCase().includes(value.toLowerCase());
            
            if (sortType === 'Present' || sortType === 'Former') {
                return nameMatches && item.status === sortType && (departmentSortType === 'all' || item.department === departmentSortType);
            } else {
                return nameMatches && (departmentSortType === 'all' || item.department === departmentSortType);
            }
        });

        setFilteredData(filtered);
    };

    const handleMarkAsResigned = async (empId) => {
        // Find the employee data by emp_id
        // const updatedData = tableData.map((employee) => {
        //   if (employee.emp_id === empId) {
        //     // If it's the matching employee, update the status to "Former"
        //     return { ...employee, status: 'Former' };
        //   }
        //   return employee;
        // });
      
        // // Update the filteredData state to reflect the change
        // setFilteredData(updatedData);
      
        // Optionally, you can save the updated data to your data source or state management

        try {
          await axios.put(`${APIS.CHANGEEMPLOYEESTATUS}/${empId}`);
            // Create a copy of the state object
            // const updatedEmployes = { ...allEmployee };
          // Update the state with the modified object
          // setAllEmployee(updatedEmployes);\
          fetchAllEmployee();
        } catch (error) {
            console.error("Error while changing the status:", error);  
        }

      };
      

    const handleSortChange = (event) => {
        const { value } = event.target;
        setSortType(value);

        // Reapply the search filter when the sort type changes
        const filtered = tableData.filter((item) => {
            const nameMatches = item.name.toLowerCase().includes(searchInput.toLowerCase());

            if (value === 'all') {
                return nameMatches && (departmentSortType === 'all' || item.department === departmentSortType);
            } else {
                return nameMatches && item.status === value && (departmentSortType === 'all' || item.department === departmentSortType);
            }
        });

        setFilteredData(filtered);
    };

    const handleDepartmentSortChange = (event) => {
        const { value } = event.target;
        setDepartmentSortType(value);

        // Reapply the search filter when the department sort type changes
        const filtered = tableData.filter((item) => {
            const nameMatches = item.name.toLowerCase().includes(searchInput.toLowerCase());

            if (sortType === 'all') {
                return nameMatches && (value === 'all' || item.department === value);
            } else {
                return nameMatches && item.status === sortType && (value === 'all' || item.department === value);
            }
        });

        setFilteredData(filtered);
    };

    const handleViewProfile = (emp_id) => {
        navigate(`/employeeprofile/${emp_id}`);
      };
    const handleEditProfile =(id)=> {
     navigate(`/employee-details/${id}`)
    };
  

      const handleDelete =async (emp_id)=>{ 
        //    window.confirm("The Employee will be get deleted permanantly");
    
        try {
          await axios.delete(`${APIS.DELETEEMPLOYEEBYID}/${emp_id}`);
          console.log("Deleted Successfully");
            // Create a copy of the state object
            const updatedEmployes = { ...allEmployee };
            // Remove the employee with the given emp_id
          delete updatedEmployes[emp_id];
      
          // Update the state with the modified object
          setAllEmployee(updatedEmployes);
        } catch (error) {
            console.error("Error deleting employee:", error);  
        }
        };
    

    return (
        <div className="">
            {/* <Sidebar> */}
            <Header/>
          
            <div className="arrow-back-container">
        <BiArrowBack
          className="backLoginForm fs-2 text-dark"
          onClick={() => navigate(-1)}
        />
      </div>
                <h1 className="mb-4 text-center">Employee Details</h1>

                <div className="d-flex mb-8 align-items-center">
                    <Input
                        label="Search"
                        type="text"
                        value={searchInput}
                        onChange={handleSearchChange}
                    />

                    <div className="ms-3">
                      
                        <select
                            id="sortType"
                            className="form-select"
                            value={sortType}
                            onChange={handleSortChange}
                        >
                            <option value="all">All</option>
                            <option value="Present">Present</option>
                            <option value="Former">Former</option>
                        </select>
                    </div>

                    <div className="ms-3">
                     
                        <select
                            id="departmentSortType"
                            className="form-select"
                            value={departmentSortType}
                            onChange={handleDepartmentSortChange}
                        >
                            <option >Department</option>
                            <option value="School">School</option>
                            <option value="ITI College">ITI College</option>
                            <option value="Skill Center">Skill Center</option>
                            <option value="Blood Collection Center"> Blood Collection Center</option>
                            <option value="Hostel">Hostel</option>
                            <option value="Masjid">Masjid</option>
                            <option value="Dargah">Dargah</option>
                        </select>
                    </div>
                </div>

                <Table striped>
                    <thead>
                        <tr>
                            <th>Employee Id</th>
                            <th>Name</th>
                            <th>Joining Date</th>
                            <th>Department</th>
                            <th>Position</th>
                            <th>Gender</th>
                            <th>Loan Amount</th>
                             
                            <th>Contact No</th>
                            <th>Status</th> 
                            <th>Action</th>   
                                    
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(allEmployee).map((empId,index)=>{
                            const employee= allEmployee[empId];
                            return(
                                <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{employee.empName}</td>
                                <td>{employee.dateOfHiring}</td>
                                <td>{employee.department}</td>
                                <td>{employee.position}</td>
                                <td>{employee.gender}</td>
                                <td>{employee.loanAmount}</td>
                               
                                <td>{employee.contactNum}</td>
                                <td>{employee.status}</td>
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
                                        <Dropdown.Item onClick={() => handleViewProfile(empId)}>View Profile</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleEditProfile(empId)}>Edit Profile</Dropdown.Item>
                                        <Dropdown.Item onClick={()=>handleDelete(empId)} className="red-text">Delete</Dropdown.Item>
                                        <Dropdown.Item> <Link to={`/allocated-inventory/${empId}`}>Inventory Details</Link></Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleMarkAsResigned(empId)}>Mark as Resigned</Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                  </div>
                                </td>
                               
                            </tr>
                            );
                             })}
                    </tbody>
                </Table>
            {/* </Sidebar> */}
        </div>
    );
};

export default AllEmployee;