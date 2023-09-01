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

    const [propData, setPropData] = useState([]);
    const [editMode, setEditMode] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        async function propDetails() {
            try {
                const companyNm = companyName;
                // console.log(companyNm);
                const response = await axios.get(`${APIS.GETPROPBYCMPNYNM}/${companyName}`);
                if (response.status === 200) {
                    // console.log("maheshhh");
                    setPropData(response.data); // Assuming the response contains the list of company names
                    console.log(propData);
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
      
    {propData.map((data, index) => (
                
                    <ul className="list-group">
                         <Row className="justify-content-center">
                        <Col md="6">
                        {/* <strong>Name:</strong>
                        <li key={index} className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.companyNm}</li> */}
                        
                        <strong>CST No:</strong>
                        {editMode ? (
                                    <input
                                        className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                                        type="text"
                                        value={data.ctsNo}
                                        onChange={(e) => {
                                            // Update input value in edit mode
                                            const newData = [...propData];
                                            newData[index].ctsNo = e.target.value;
                                            setPropData(newData);
                                        }}
                                    />
                            
                                ) : (
                                    <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                                        {data.ctsNo}
                                    </li>
                                )}
                        {/* <li  key={index} className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.ctsNo}</li> */}

                        <strong>Email:</strong>
                        {editMode ? (
                                    <input
                                        className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                                        type="text"
                                        value={data.email}
                                        onChange={(e) => {
                                            // Update input value in edit mode
                                            const newData = [...propData];
                                            newData[index].email = e.target.value;
                                            setPropData(newData);
                                        }}
                                    />
                            
                                ) : (
                                    <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                                        {data.email}
                                    </li>
                                )}
                        {/* <li key={index} className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.email}</li> */}
                        
                        <strong>Account Name:</strong>
                        {editMode ? (
                                    <input
                                        className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                                        type="text"
                                        value={data.accountNm}
                                        onChange={(e) => {
                                            // Update input value in edit mode
                                            const newData = [...propData];
                                            newData[index].accountNm = e.target.value;
                                            setPropData(newData);
                                        }}
                                    />
                            
                                ) : (
                                    <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                                        {data.accountNm}
                                    </li>
                                )}
                        {/* <li key={index} className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.accountNm}</li> */}

                        <strong>Address:</strong>
                        {editMode ? (
                                    <input
                                        className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                                        type="text"
                                        value={data.address}
                                        onChange={(e) => {
                                            // Update input value in edit mode
                                            const newData = [...propData];
                                            newData[index].address = e.target.value;
                                            setPropData(newData);
                                        }}
                                    />
                            
                                ) : (
                                    <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                                        {data.address}
                                    </li>
                                )}
                        {/* <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.address}</li> */}
                        
                        <strong>Annual Income:</strong>
                        {editMode ? (
                                    <input
                                        className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                                        type="text"
                                        value={data.annualIncome}
                                        onChange={(e) => {
                                            // Update input value in edit mode
                                            const newData = [...propData];
                                            newData[index].annualIncome = e.target.value;
                                            setPropData(newData);
                                        }}
                                    />
                            
                                ) : (
                                    <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                                        {data.annualIncome}
                                    </li>
                                )}
                        {/* <li className="list-group-item d-flex rounded-5 justify-content-between align-items-centeannualIncomedata.annualIncome}</li> */}
                        
                        <strong>Boundries:</strong>
                        {editMode ? (
                                    <input
                                        className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                                        type="text"
                                        value={data.boundries}
                                        onChange={(e) => {
                                            // Update input value in edit mode
                                            const newData = [...propData];
                                            newData[index].boundries = e.target.value;
                                            setPropData(newData);
                                        }}
                                    />
                            
                                ) : (
                                    <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                                        {data.boundries}
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
                                        value={data.extentAcres}
                                        onChange={(e) => {
                                            // Update input value in edit mode
                                            const newData = [...propData];
                                            newData[index].extentAcres = e.target.value;
                                            setPropData(newData);
                                        }}
                                    />
                            
                                ) : (
                                    <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                                        {data.extentAcres}
                                    </li>
                                )}
                        {/* <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.extentAcres}</li> */}

                        <strong>Gazzet No:</strong>
                        {editMode ? (
                                    <input
                                        className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                                        type="text"
                                        value={data.gazzetNo}
                                        onChange={(e) => {
                                            // Update input value in edit mode
                                            const newData = [...propData];
                                            newData[index].gazzetNo = e.target.value;
                                            setPropData(newData);
                                        }}
                                    />
                            
                                ) : (
                                    <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                                        {data.gazzetNo}
                                    </li>
                                )}
                        {/* <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.gazzetNo}</li> */}

                        <strong>GST No:</strong>
                        {editMode ? (
                                    <input
                                        className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                                        type="text"
                                        value={data.gstNo}
                                        onChange={(e) => {
                                            // Update input value in edit mode
                                            const newData = [...propData];
                                            newData[index].gstNo = e.target.value;
                                            setPropData(newData);
                                        }}
                                    />
                            
                                ) : (
                                    <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                                        {data.gstNo}
                                    </li>
                                )}
                        {/* <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.gstNo}</li> */}

                        <strong>Registration Number:</strong>
                        {editMode ? (
                                    <input
                                        className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                                        type="text"
                                        value={data.registrationNo}
                                        onChange={(e) => {
                                            // Update input value in edit mode
                                            const newData = [...propData];
                                            newData[index].registrationNo = e.target.value;
                                            setPropData(newData);
                                        }}
                                    />
                            
                                ) : (
                                    <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                                        {data.registrationNo}
                                    </li>
                                )}
                        {/* <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.registrationNo}</li> */}

                        <strong>Tax Amount:</strong>
                        {editMode ? (
                                    <input
                                        className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                                        type="text"
                                        value={data.taxAmt}
                                        onChange={(e) => {
                                            // Update input value in edit mode
                                            const newData = [...propData];
                                            newData[index].taxAmt = e.target.value;
                                            setPropData(newData);
                                        }}
                                    />
                            
                                ) : (
                                    <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                                        {data.taxAmt}
                                    </li>
                                )}
                        {/* <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.taxAmt}</li> */}

                        <strong>Village Name:</strong>
                        {editMode ? (
                                    <input
                                        className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                                        type="text"
                                        value={data.villageNm}
                                        onChange={(e) => {
                                            // Update input value in edit mode
                                            const newData = [...propData];
                                            newData[index].villageNm = e.target.value;
                                            setPropData(newData);
                                        }}
                                    />
                            
                                ) : (
                                    <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                                        {data.villageNm}
                                    </li>
                                )}
                        {/* <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.villageNm}</li> */}
                        </Col>
                        </Row>
                    </ul>
                    
            ))}
      
     
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

