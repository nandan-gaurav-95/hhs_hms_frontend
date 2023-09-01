import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { APIS } from './constants/api';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
    MDBContainer as Container,
    MDBRow as Row,
    MDBCol as Col,
    MDBBtn as Button,
    // MDBInput as Input,
  } from 'mdb-react-ui-kit';

function PropertyDetails() {
    const location = useLocation();
    const { companyName } = location.state || {};

    const [propData, setPropData] = useState("");
    const [editMode, setEditMode] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        async function propDetails() {
            try {
              
                const response = await axios.get(`${APIS.GETPROPBYCMPNYNM}/${companyName}`);
                if (response.status === 200) {
                    // console.log("maheshhh");
                    setPropData(response.data[0]); 
                    
                } else {
                    console.error("Error while fetching company names");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }
        propDetails();
    }, []);

    if (!companyName) {
        // Handle the case when data is not available
        return <div>Data not available</div>;
    }

    const handleEditMode = () => {
        setEditMode(!editMode);
    };

    const goBack = (event) => {
        event.preventDefault();
        navigate("/allCompanyName");
      }

    // Use the companyName in your component
    return (
    <Container className="bg-light p-5 mt-5 w-75 rounded shadow justify-content-center align-items-center">
    <h2 className="text-center mb-4">Property Details of {companyName}</h2>
    <Row className="justify-content-center">
            
                    <ul className="list-group">
                         <Row className="justify-content-center">
                        <Col md="6">
                        {/* <strong>Name:</strong>
                        <li key={} className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.companyNm}</li> */}
                        
                        <strong>CST No:</strong>
                        {editMode ? (
                                    <input
                                        className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                                        type="text"
                                        value={propData.ctsNo}
                                        onChange={(e) => {
                                            // Update input value in edit mode
                                            const newData = [...propData];
                                            newData.ctsNo = e.target.value;
                                            setPropData(newData);
                                        }}
                                    />
                            
                                ) : (
                                    <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                                        {propData.ctsNo}
                                    </li>
                                )}
                        {/* <li  key={} className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.ctsNo}</li> */}

                        <strong>Email:</strong>
                        {editMode ? (
                                    <input
                                        className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                                        type="text"
                                        value={propData.email}
                                        onChange={(e) => {
                                            // Update input value in edit mode
                                            const newData = [...propData];
                                            newData.email = e.target.value;
                                            setPropData(newData);
                                        }}
                                    />
                            
                                ) : (
                                    <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                                        {propData.email}
                                    </li>
                                )}
                        {/* <li key={} className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {propData.email}</li> */}
                        
                        <strong>Account Name:</strong>
                        {editMode ? (
                                    <input
                                        className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                                        type="text"
                                        value={propData.accountNm}
                                        onChange={(e) => {
                                            // Update input value in edit mode
                                            const newData = [...propData];
                                            newData.accountNm = e.target.value;
                                            setPropData(newData);
                                        }}
                                    />
                            
                                ) : (
                                    <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                                        {propData.accountNm}
                                    </li>
                                )}
                        {/* <li key={} className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.accountNm}</li> */}

                        <strong>Address:</strong>
                        {editMode ? (
                                    <input
                                        className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                                        type="text"
                                        value={propData.address}
                                        onChange={(e) => {
                                            // Update input value in edit mode
                                            const newData = [...propData];
                                            newData.address = e.target.value;
                                            setPropData(newData);
                                        }}
                                    />
                            
                                ) : (
                                    <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                                        {propData.address}
                                    </li>
                                )}
                        {/* <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.address}</li> */}
                        
                        <strong>Annual Income:</strong>
                        {editMode ? (
                                    <input
                                        className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                                        type="text"
                                        value={propData.annualIncome}
                                        onChange={(e) => {
                                            // Update input value in edit mode
                                            const newData = [...propData];
                                            newData.annualIncome = e.target.value;
                                            setPropData(newData);
                                        }}
                                    />
                            
                                ) : (
                                    <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                                        {propData.annualIncome}
                                    </li>
                                )}
                        {/* <li className="list-group-item d-flex rounded-5 justify-content-between align-items-centeannualIncomedata.annualIncome}</li> */}
                        
                        <strong>Boundries:</strong>
                        {editMode ? (
                                    <input
                                        className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                                        type="text"
                                        value={propData.boundries}
                                        onChange={(e) => {
                                            // Update input value in edit mode
                                            const newData = [...propData];
                                            newData.boundries = e.target.value;
                                            setPropData(newData);
                                        }}
                                    />
                            
                                ) : (
                                    <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                                        {propData.boundries}
                                    </li>
                                )}
                        {/* <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.boundries}</li> */}
                        </Col>
                        <Col md="6">

                        <strong>Extent Acres:</strong>
                        {editMode ? (
                                    <input
                                        className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                                        type="text"
                                        value={propData.extentAcres}
                                        onChange={(e) => {
                                            // Update input value in edit mode
                                            const newData = [...propData];
                                            newData.extentAcres = e.target.value;
                                            setPropData(newData);
                                        }}
                                    />
                            
                                ) : (
                                    <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                                        {propData.extentAcres}
                                    </li>
                                )}
                        {/* <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.extentAcres}</li> */}

                        <strong>Gazzet No:</strong>
                        {editMode ? (
                                    <input
                                        className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                                        type="text"
                                        value={propData.gazzetNo}
                                        onChange={(e) => {
                                            // Update input value in edit mode
                                            const newData = [...propData];
                                            newData.gazzetNo = e.target.value;
                                            setPropData(newData);
                                        }}
                                    />
                            
                                ) : (
                                    <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                                        {propData.gazzetNo}
                                    </li>
                                )}
                        {/* <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.gazzetNo}</li> */}

                        <strong>GST No:</strong>
                        {editMode ? (
                                    <input
                                        className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                                        type="text"
                                        value={propData.gstNo}
                                        onChange={(e) => {
                                            // Update input value in edit mode
                                            const newData = [...propData];
                                            newData.gstNo = e.target.value;
                                            setPropData(newData);
                                        }}
                                    />
                            
                                ) : (
                                    <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                                        {propData.gstNo}
                                    </li>
                                )}
                        {/* <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.gstNo}</li> */}

                        <strong>Registration Number:</strong>
                        {editMode ? (
                                    <input
                                        className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                                        type="text"
                                        value={propData.registrationNo}
                                        onChange={(e) => {
                                            // Update input value in edit mode
                                            const newData = [...propData];
                                            newData.registrationNo = e.target.value;
                                            setPropData(newData);
                                        }}
                                    />
                            
                                ) : (
                                    <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                                        {propData.registrationNo}
                                    </li>
                                )}
                        {/* <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.registrationNo}</li> */}

                        <strong>Tax Amount:</strong>
                        {editMode ? (
                                    <input
                                        className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                                        type="text"
                                        value={propData.taxAmt}
                                        onChange={(e) => {
                                            // Update input value in edit mode
                                            const newData = [...propData];
                                            newData.taxAmt = e.target.value;
                                            setPropData(newData);
                                        }}
                                    />
                            
                                ) : (
                                    <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                                        {propData.taxAmt}
                                    </li>
                                )}
                        {/* <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.taxAmt}</li> */}

                        <strong>Village Name:</strong>
                        {editMode ? (
                                    <input
                                        className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                                        type="text"
                                        value={propData.villageNm}
                                        onChange={(e) => {
                                            // Update input value in edit mode
                                            const newData = [...propData];
                                            newData.villageNm = e.target.value;
                                            setPropData(newData);
                                        }}
                                    />
                            
                                ) : (
                                    <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                                        {propData.villageNm}
                                    </li>
                                )}
                        {/* <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.villageNm}</li> */}
                        </Col>
                        </Row>
                    </ul>
                    
            
      
     
    </Row>
    <Row className="text-center mt-4 form-group row ">
    
              <Col md-2 >
                <Button  variant="primary"
                 square 
                 style={{width:'100px'}}
                 onClick={goBack
                 }>
                  Back
                </Button>
                <Button
                
                variant="primary"
                type="submit" 
                square 
                style={{ marginLeft: '10px', width:'100px' }}
                onClick={handleEditMode}  > 
                  {editMode ? 'Update' : 'Edit'}
                </Button>   
              </Col>
    </Row>
    
  </Container>
    );
}


export default PropertyDetails;

