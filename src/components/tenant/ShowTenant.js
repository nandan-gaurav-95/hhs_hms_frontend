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
import React, { useState, useEffect } from "react";
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
import { BiArrowBack } from "react-icons/bi";
import axios from "axios";
import { APIS } from "../constants/api";
import { TenantService } from "../../services/TenantService";

const ShowTenant = () => {
  const navigate = useNavigate();
  // const tableData = [];

  const [tenantData, setTenantData] = useState({});
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const fetchTenantData = async () => {
    try {
      const response = await TenantService.getAllTenant();
      console.log("API Response:", response); // Log the entire response
      if (Array.isArray(response)) {
        const tenantObject = {};
        response.forEach((tenant) => {
          // Use the tenant's tnt_id as the key in the object
          tenantObject[tenant.tnt_id] = tenant;
        });
        console.log("Tenant data:", tenantObject);
        setTenantData(tenantObject);
      } else {
        console.error("Invalid data received from the API:", response);
      }
    } catch (error) {
      console.error("Error fetching tenant data:", error);
    }
  };

  useEffect(() => {
    fetchTenantData();
  }, []);

  const handleDepartmentChange = (event) => {
    const { value } = event.target;
    setSelectedDepartment(value);
  };

  const handleStatusChange = (event) => {
    const { value } = event.target;
    setSelectedStatus(value);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleEditProfile = (tnt_id) => {
    navigate(`/tenant-details/${tnt_id}`);
  };

  const handleDelete = async (tnt_id) => {
    const confirmDelete = window.confirm("Do you want to delete this Tenant?");
    if (confirmDelete) {
      try {
        await axios.delete(`${APIS.DELETETENANTBYID}/${tnt_id}`);
        console.log("Deleted Successfully");
        const updatedTenant = [...tenantData]; // Create a copy of the tenantData array
        const indexToDelete = updatedTenant.findIndex(item => item.tnt_id === tnt_id);
        if (indexToDelete !== -1) {
          updatedTenant.splice(indexToDelete, 1); // Remove the tenant with the given tnt_id
          setTenantData(updatedTenant); // Update the state with the modified array
        }
      } catch (error) {
        console.error("Error deleting tenant:", error);
      }
    }
  };
  

  const handleViewProfile = (tnt_id) => {
    navigate(`/tenantprofile/${tnt_id}`);
  };

  // const filteredData = tenantData.filter((item) => {
  //   const departmentMatch =
  //     selectedDepartment === "all" || item.department === selectedDepartment;
  //   const statusMatch =
  //     selectedStatus === "all" || item.status === selectedStatus;
  //   const searchMatch =
  //     searchQuery === "" ||
  //     (item.tenantName &&
  //       item.tenantName.toLowerCase().includes(searchQuery.toLowerCase()));

  //   return departmentMatch && statusMatch && searchMatch;
  // });

  return (
    <div className="">
      <Header />
      <div className="arrow-back-container">
        <BiArrowBack
          className="backLoginForm fs-2 text-dark"
          onClick={() => navigate(-1)}
        />
      </div>
      <h1 className="mb-4 text-center">Tenants Details</h1>

      <div className="d-flex mb-4 align-items-center">
        <input
          label="Search"
          type="text"
          className="form-control"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />

        <div className="ms-2">
          <select
            id="departmentFilter"
            className="form-select"
            value={selectedDepartment}
            onChange={handleDepartmentChange}
          >
            <option value="all">Departments</option>
            <option value="Schools">Schools</option>
            <option value="ITI College">ITI College</option>
            <option value="Skill Center">Skill Center</option>
            <option value="Blood Collection Center">
              Blood Collection Center
            </option>
            <option value="Hostel">Hostel</option>
            <option value="Masjid">Masjid</option>
            <option value="Dargah">Dargah</option>
          </select>
        </div>

        <div className="ms-2">
          <select
            id="statusFilter"
            className="form-select"
            value={selectedStatus}
            onChange={handleStatusChange}
          >
            <option value="all">Status</option>
            <option value="Present">Present</option>
            <option value="Former">Former</option>
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
        {Object.keys(tenantData).map((tntId, index) => {
  const tenant = tenantData[tntId];
  return (
    <tr key={tntId}>
      <td>{index + 1}</td>
      <td>{tenant.tenantName}</td>
      <td>{tenant.department}</td>
      <td>{tenant.allocatedShop}</td>
      <td>{tenant.contactNum}</td>
      <td>{tenant.securityDeposit}</td>
      <td>{tenant.rentDue}</td>
      <td>{tenant.electricityDue}</td>
      <td>{tenant.expiryDate}</td>
      <td>{tenant.status}</td>
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
              <Dropdown.Item onClick={() => handleViewProfile(tntId)}>
                View Profile
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleEditProfile(tntId)}>
                Edit Profile
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => handleDelete(tntId)}
                className="red-text"
              >
                Delete Profile
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

export default ShowTenant;

