import React, { useState, useEffect } from 'react';
import axios from "axios";
import { APIS } from "./constants/api";
import { useNavigate } from "react-router-dom";

import {
    MDBContainer as Container,
    MDBRow as Row,
    MDBCol as Col,
    // MDBInput as Input,
    MDBBtn as Button
  } from 'mdb-react-ui-kit';


const AllCompanyName = () => {

    const [companyNames, setCompanyNames] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        async function fetchCompanyNames() {
            try {
                const response = await axios.get(APIS.ALLCOMPANYNAME);
                if (response.status === 200) {
                    setCompanyNames(response.data); // Assuming the response contains the list of company names
                } else {
                    console.error("Error while fetching company names");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }
        fetchCompanyNames();
    }, []);
   



const handleViewDetails = async (name) => {
    try {
        const response = await axios.get(`${APIS.GETPROPBYCMPNYNM}/${name}`);
        if (response.status === 200) {
            const propData = response.data;
            // console.log(propData); // Assuming the response contains property details
            // Navigate to property details page with the data
            navigate("/propertyDetails", { state: { companyName: name } });
        } else {
            console.error("Error fetching property details");
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

  return(
<Container className="bg-light p-5 mt-5 w-50 rounded shadow justify-content-center align-items-center">
      <h2 className="text-center mb-4">Company Names:</h2>
      <Row className="justify-content-center">
        <Col md="8">
          <ul className="list-group">
            {companyNames.map((name, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {name}
                <Button color="primary" onClick={() => handleViewDetails(name)}>
                  View Property Details
                </Button>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
);
}

export default AllCompanyName
