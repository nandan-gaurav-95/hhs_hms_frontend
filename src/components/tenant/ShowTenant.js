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

// const ShowTenant = () => {
//   const [allTenant, setAllTenant] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     async function fetchTenant() {
//       try {
//         const response = await axios.get(APIS.GETALLTENANT);
//         if (response.status === 200) {
//           setAllTenant(response.data);
//         } else {
//           console.error("Error while fetching tenant");
//         }
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     }
//     fetchTenant();
//   }, []);

//   const handleViewDetails = async (id) => {
//     navigate(`/tenant-details/${id}`);
//   };

//   const handleSearch = () => {
//     console.log("Performing search for:", searchQuery);
//     // const results = allTenant.filter((tenant) =>
//     //   tenant?.tenantName.toLowerCase().includes(searchQuery.toLowerCase())
//     // );
//     // setSearchResults(results);
//   };

//   // const handleVoiceSearch = () => {
//   //   console.log("Initiating voice search...");
//   // };

//   return (
//     <div className="text-center">
//        <Sidebar>
//       <h2 className="mb-4">All Tenants</h2>
//       <Col className="mb-4 d-flex flex-column align-items-center">
//         <div className="input-group" style={{ maxWidth: "300px" }}>
//           <input
//             type="text"
//             placeholder="Search Tenant..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="form-control rounded"
//             style={{
//               borderTopRightRadius: "1.25rem",
//               borderBottomRightRadius: "1.25rem",
//             }}
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
//             {allTenant
//               .filter((tenant) =>
//                 tenant?.tenantName
//                   .toLowerCase()
//                   .includes(searchQuery.toLowerCase())
//               )
//               .map((tenant, index) => (
//                 <li
//                   key={index}
//                   className="list-group-item d-flex justify-content-between align-items-center"
//                 >
//                   {tenant?.tenantName}
//                   <Button
//                     color="primary"
//                     onClick={() => handleViewDetails(tenant.id)}
//                   >
//                     View Tenant Details
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

// export default ShowTenant;
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
import { logDOM } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import TenantDetails from './TenantDetails';
const ShowTenant = () => {
  const navigate = useNavigate();
    const tableData = [
      {
        id: 1,
        name: 'Mahesh Tawade',
        department: 'ITI College',
        allocatedShop:"A-1001",
        contactNum:'9657089541',
        securityDeposit:"20000.36",
        rentDue: '3000.00',
        electricityDue:"299.03",
        expiryDate:'20/12/2003',
        status:"Active",

    },
    {
        id: 2,
        name: 'Gaurav Nandan',
        department: 'Schools',
        allocatedShop:"A-1002",
        contactNum:'7894561230',
        securityDeposit:"25000.00",
        rentDue: '3000.00',
        electricityDue:"299.03",
        expiryDate:'20/12/2003',
        status:"Active",
    },
    {
        id: 3,
        name: 'Ankita Patil',
        department: 'Skill Center',
        allocatedShop:"A-1004",
        contactNum:'9874563210',
        securityDeposit:"15000.00",
        rentDue: '3000.00',
        electricityDue:"299.03",
        expiryDate:'20/12/2003',
        status:"In-Active",
    },
    ];

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
            
            if (sortType === 'Active' || sortType === 'In-Active') {
                return nameMatches && item.type === sortType && (departmentSortType === 'all' || item.department === departmentSortType);
            } else {
                return nameMatches && (departmentSortType === 'all' || item.department === departmentSortType);
            }
        });

        setFilteredData(filtered);
    };

    const handleSortChange = (event) => {
        const { value } = event.target;
        setSortType(value);

        // Reapply the search filter when the sort type changes
        const filtered = tableData.filter((item) => {
            const nameMatches = item.name.toLowerCase().includes(searchInput.toLowerCase());

            if (value === 'all') {
                return nameMatches && (departmentSortType === 'all' || item.department === departmentSortType);
            }  else if (value === 'Active') {
              return nameMatches && item.status === 'Active' && (departmentSortType === 'all' || item.department === departmentSortType);
            } else if (value === 'Inactive') {
              return nameMatches && item.status === 'In-Active' && (departmentSortType === 'all' || item.department === departmentSortType);
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
                return nameMatches && item.type === sortType && (value === 'all' || item.department === value);
            }
        });

        setFilteredData(filtered);
    };
    const handleViewProfile= (id)=>{
      console.log("Showing All Tenants on view Tenants Profile");
      navigate(`/tenant-details/${id}`);
      
    }
    
    const handleDelete= ()=>{
      // console.log("Delete tenant Successfully");
      window.confirm("Do you want to Delete this Tenant ?");
    }


    return (
        <div className="">
            {/* <Sidebar> */}
            <Header/>
                <h1 className="mb-4 text-center">Tenants Details</h1>

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
                           <option value="Inactive">Inactive</option>
                        </select>
                    </div>

                    <div className="ms-3">
                     
                        <select
                            id="departmentSortType"
                            className="form-select"
                            value={departmentSortType}
                            onChange={handleDepartmentSortChange}
                        >
                            <option value="Department">Department</option>
                            <option value="Schools">Schools</option>
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
                            <th>Sr. No.</th>
                            <th>Name</th>
                            <th>Department</th>
                            <th>AllocatedShop</th>
                            <th>Contact No</th>
                            <th>Deposit</th>
                            <th>Rent Due</th>
                            <th>ElectricityDue</th>
                            <th>Expiry Date</th>
                            <th>status</th>
                            <th>Action</th>              
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.department}</td>
                                <td>{item.allocatedShop}</td>
                                <td>{item.contactNum}</td>
                                <td>{item.securityDeposit}</td>
                                <td>{item.rentDue}</td>
                                <td>{item.electricityDue}</td>
                                <td>{item.expiryDate}</td>
                                <td>{item.status}</td>
                                <td>{item.action}
                                {/* </td>
                                <td> */}
                                  <div className="dropdown">
                                    <Dropdown >
                                      <Dropdown.Toggle
                                        variant="secondary"
                                        id="dropdownMenuButton"
                                      >
                                        &#8942;
                                      </Dropdown.Toggle>
                                      <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => handleViewProfile(item.id)}>View Profile</Dropdown.Item>
                                        <Dropdown.Item>Edit Profile</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleDelete()} className="red-text">Delete Profile</Dropdown.Item>
                                        <Dropdown.Item>Mark as a Resigned</Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                  </div>
                                </td>
                               
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <TenantDetails tableData={tableData} />
            {/* </Sidebar> */}
        </div>
    );
};

export default ShowTenant;

