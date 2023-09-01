import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { APIS } from "./constants/api";

const SampleMyComponent = () => {


    const initialState = {
        companyName:'',
        villageNm: '',
        ctsNo: '',
        extentAcres: '',
        boundries: '',
        taxAmt: '',
        accountNm: '',
        annualIncome: '',
        address: '',
        registrationNo: '',
        gazzetNo: '',
        photo:'',
    };
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialState);
    const location = useLocation();
    const receivedFormData = location.state || {}; // Default to empty object if state is not present
useState(() => {
    setFormData(receivedFormData);
  }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        // Your submission logic here

        try {               
            const response = await axios.put(`${APIS.SAVECOMPANY}/${formData.companyName}`, formData);
            if (response.status === 200) {
              console.log('Company details updated successfully');
            navigate("/"); // Navigate to SampleMyComponent



            } else {
              console.error('Error while updating company data');
              // Additional error handling or notifications can be added here
            }
          } catch (error) {
            console.error('Error:', error);
          }
      };

  return (
    <MDBContainer className="bg-light p-5 mt-5 rounded shadow  justify-content-center align-items-center">
    <h1 className=" mb-4 text-center">From SampleMyComponent Details</h1>
    <form onSubmit={handleSubmit}>
            <MDBRow className="row mt-8 mb-2  justify-content-evenly align-items-center">
                    <MDBCol className="col-sm-5 ">
                        <MDBInput
                            label="Company Name"
                            type="text"
                            name="companyName"
                            value={receivedFormData.companyName}
                            onChange={handleChange}
                        />
                    </MDBCol>
                    <MDBCol className="col-sm-5 ">
                        <MDBInput
                            label="Town/Village"
                            type="text"
                            name="villageNm"
                            value={formData.villageNm}
                            onChange={handleChange}
                        />
                    </MDBCol>
                    
                </MDBRow>

                <MDBRow className="row mt-8 mb-2 justify-content-evenly align-items-center">
                    <MDBCol className="col-sm-5 ">
                        <MDBInput
                            label="CTS Number"
                            type="text"
                            name="ctsNo"
                            value={formData.ctsNo}
                            onChange={handleChange}
                        />
                    </MDBCol>
                    <MDBCol className="col-sm-5 ">
                        <MDBInput
                            label="extentAcres"
                            type="text"
                            name="extentAcres"
                            value={formData.extentAcres}
                            onChange={handleChange}
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow className="row mt-8 mb-2 justify-content-evenly align-items-center">
                    <MDBCol className="col-sm-5 ">
                        <MDBInput
                            label="boundries"
                            type="text"
                            name="boundries"
                            value={formData.boundries}
                            onChange={handleChange}
                        />
                    </MDBCol>
                    <MDBCol className="col-sm-5 ">
                        <MDBInput
                            label="taxAmt"
                            type="text"
                            name="taxAmt"
                            value={formData.taxAmt}
                            onChange={handleChange}
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow className="row mt-8 mb-2 justify-content-evenly align-items-center">
                    <MDBCol className="col-sm-5 ">
                        <MDBInput
                            label="accountNm"
                            type="text"
                            name="accountNm"
                            value={formData.accountNm}
                            onChange={handleChange}
                        />
                    </MDBCol>
                    <MDBCol className="col-sm-5 ">
                        <MDBInput
                            label="annualIncome"
                            type="text"
                            name="annualIncome"
                            value={formData.annualIncome}
                            onChange={handleChange}
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow className="row mt-8 mb-2 justify-content-evenly align-items-center">
                    <MDBCol className="col-sm-5 ">
                        <MDBInput
                            label="address"
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </MDBCol>
                    <MDBCol className="col-sm-5 ">
                        <MDBInput
                            label="registrationNo"
                            type="text"
                            name="registrationNo"
                            value={formData.registrationNo}
                            onChange={handleChange}
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow className="row mt-8 mb-2 justify-content-evenly align-items-center">
                    <MDBCol className="col-sm-5 ">
                        <MDBInput
                            label="gazzetNo"
                            type="text"
                            name="gazzetNo"
                            value={formData.gazzetNo}
                            onChange={handleChange}
                        />
                    </MDBCol>
                    <MDBCol className="col-sm-5 ">
                        <MDBInput
                            label="photo"
                            type="text"
                            name="photo"
                            value={formData.photo}
                            onChange={handleChange}
                        />
                    </MDBCol>
                </MDBRow>

                



               
               
                <div className="mt-4 text-center">
                    <MDBBtn type="submit">Submit</MDBBtn>
                </div>
            </form>
</MDBContainer>
  );
}

export default SampleMyComponent;
