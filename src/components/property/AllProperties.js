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

// const AllCompanyName = () => {
//   const [allCompany, setAllCompany] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     async function fetchCompanyNames() {
//       try {
//         const response = await axios.get(APIS.ALLCOMPANYNAME);
//         // console.log("Hiiiii",response.data);
//         if (response.status === 200) {
//           setAllCompany(response.data);
//         } else {
//           console.error("Error while fetching company names");
//         }
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     }
//     fetchCompanyNames();
//   }, []);

//   const handleViewDetails = async (id) => {
//     navigate(`/comapany-details/${id}`);
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
//       <h2 className="mb-4">Company Names:</h2>
//       <Col className="mb-4 d-flex flex-column align-items-center">
//         <div className="input-group" style={{ maxWidth: "300px" }}>
//           <input
//             type="text"
//             placeholder="Search Company..."
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
//             {allCompany
//               .filter((company) =>
//                 company?.companyNm
//                   .toLowerCase()
//                   .includes(searchQuery.toLowerCase())
//               )
//               .map((company, index) => (
//                 <li
//                   key={index}
//                   className="list-group-item d-flex justify-content-between align-items-center"
//                 >
//                   {company?.companyNm}
//                   <Button
//                     color="primary"
//                     onClick={() => handleViewDetails(company.id)}
                    
//                   >
//                     View Property Details
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

// export default AllCompanyName;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { APIS } from "../constants/api";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; 
import Table from 'react-bootstrap/Table';
import {
  MDBContainer as Container,
  MDBCol as Col,
} from "mdb-react-ui-kit";
import "../../asset/style.css";
import { Dropdown } from 'react-bootstrap';
import Header from "../common/Header";
const AllProperties = () => {
  const tableData = [
    {
      id: 1,
      propertyName: "Company A",
      email: "companya@example.com",
      gstNo: "GST123456",
      contactNo: "1234567890",
      location: "Location A",
      size: "1000 sq.ft",
      gazzetNo: "Gazzet789",
      maintenanceCharges: "Yes",
    },
    {
      id: 2,
      propertyName: "Company B",
      email: "companyb@example.com",
      gstNo: "GST654321",
      contactNo: "9876543210",
      location: "Location B",
      size: "800 sq.ft",
      gazzetNo: "Gazzet456",
      maintenanceCharges: "No",
    },
];
  const [allCompany, setAllCompany] = useState(tableData);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/company-details/${id}`);
  };

  const handleSearch = () => {
    console.log("Performing search for:", searchQuery);
  };
  const handleViewProfile = (id) => {
    navigate(`/profile/${id}`);
  };
  const handleEditProfile=(id)=>{
    navigate (`/property-details/${id}`)
   }
  return (
    <div className="text-center">
      <Header/>
      <h2 className="mb-4"> Available Properties</h2>
      <Col className="mb-4 d-flex flex-column align-items-center">
        <div className="input-group" style={{ maxWidth: "300px" }}>
          <input
            type="text"
            placeholder="Search Company..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-control rounded"
            style={{
              borderTopRightRadius: "1.25rem",
              borderBottomRightRadius: "1.25rem",
            }}
          />
          <div className="input-group-append">
            <span className="input-group-text" onClick={handleSearch}>
              <FaSearch />
            </span>
          </div>
        </div>
      </Col>
      <Table>
        <thead className="shadow-lg p-3 mb-5 bg-white rounded">
          <tr>
            <th>SI.No</th>
            <th>Property Name</th>
            <th>Email ID</th>
            <th>GST NO</th>
            <th>Contact NO</th>
            <th>Location</th>
            <th>Size</th>
            <th>Gazzet NO</th>
            <th>Maintenance Charges</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="shadow-lg p-3 mb-5 bg-white rounded">
          {allCompany.map((company, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{company.propertyName}</td>
              <td>{company.email}</td>
              <td>{company.gstNo}</td>
              <td>{company.contactNo}</td>
              <td>{company.location}</td>
              <td>{company.size}</td>
              <td>{company.gazzetNo}</td>
              <td>{company.maintenanceCharges}</td>
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
                      <Dropdown.Item onClick={() => handleViewProfile(company.id)}>View Profile</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleEditProfile(company.id)}>Edit Profile</Dropdown.Item>
                      <Dropdown.Item>Delete Profile</Dropdown.Item>
                      
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </td>
              
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AllProperties;