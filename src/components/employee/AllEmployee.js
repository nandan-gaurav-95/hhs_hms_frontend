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


import React, { useState } from 'react';
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
import { NavLink, useNavigate } from 'react-router-dom';

const AllEmployee = () => {
    const tableData = [
      {
        emp_id: 1,
        name: 'Mahesh Tawade',
        contact:'9657089541',
        status: "Former",
        j_date: '01-06-2023',
        b_salary:'50000',
        position:"Teacher",
        department: 'School',
        gender: 'Male',
    },
    {
        emp_id: 5435355,
        name: 'Gaurav Nandan',
        contact:'9657089541',
        status: "Active",
        j_date: '01-06-2023',
        b_salary:'60000',
        position:"Doctor",
        department: 'Blood Collection Center',
        gender: 'Male',
    },
    {
        emp_id: 6453432,
        name: 'Ankita Patil',
        contact:'9657089541',
        status: "Active",
        j_date: '01-06-2023',
        b_salary:'70000',
        position:"HR",
        department: 'Skill Center',
        gender: 'Female',
    },
    ];

    const navigate = useNavigate();

    const [searchInput, setSearchInput] = useState('');
    const [filteredData, setFilteredData] = useState(tableData);
    const [sortType, setSortType] = useState('all'); // 'all', 'Consumable', or 'NonConsumable'
    const [departmentSortType, setDepartmentSortType] = useState('all'); // 'all' or specific department

    const handleSearchChange = (event) => {
        const { value } = event.target;
        setSearchInput(value);

        // Filter the tableData based on the search input, sort type, and department sort type
        const filtered = tableData.filter((item) => {
            const nameMatches = item.name.toLowerCase().includes(value.toLowerCase());
            
            if (sortType === 'Active' || sortType === 'Former') {
                return nameMatches && item.status === sortType && (departmentSortType === 'all' || item.department === departmentSortType);
            } else {
                return nameMatches && (departmentSortType === 'all' || item.department === departmentSortType);
            }
        });

        setFilteredData(filtered);
    };

    const handleMarkAsResigned = (empId) => {
        // Find the employee data by emp_id
        const updatedData = tableData.map((employee) => {
          if (employee.emp_id === empId) {
            // If it's the matching employee, update the status to "Former"
            return { ...employee, status: 'Former' };
          }
          return employee;
        });
      
        // Update the filteredData state to reflect the change
        setFilteredData(updatedData);
      
        // Optionally, you can save the updated data to your data source or state management
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

    const handleDelete =function(){ 
      window.confirm("The Employee will be get deleted permanantly");
    };

    const handleEditProfile =(emp_id)=> {
     
     navigate(`/employee-details/:${emp_id}`)
    };
    const handleViewProfile = (id) => {
        navigate(`/employeeprofile/${id}`);
      };

    return (
        <div className="">
            {/* <Sidebar> */}
            <Header/>
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
                            <option value="Active">Active</option>
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
                            <th>Basic Salary</th>
                            <th>Contact No</th>
                            <th>Status</th> 
                            <th>Action</th>              
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item) => (
                            <tr key={item.id}>
                                <td>{item.emp_id}</td>
                                <td>{item.name}</td>
                                <td>{item.j_date}</td>
                                <td>{item.department}</td>
                                <td>{item.position}</td>
                                <td>{item.gender}</td>
                                <td>{item.b_salary}</td>
                                <td>{item.contact}</td>
                                <td>{item.status}</td>
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
                                        <Dropdown.Item onClick={() => handleViewProfile(item.emp_id)}>View Profile</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleEditProfile(item.emp_id)}>Edit Profile</Dropdown.Item>
                                        <Dropdown.Item onClick={handleDelete} className="red-text">Delete</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleMarkAsResigned(item.emp_id)}>Mark as Resigned</Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                  </div>
                                </td>
                               
                            </tr>
                        ))}
                    </tbody>
                </Table>
            {/* </Sidebar> */}
        </div>
    );
};

export default AllEmployee;