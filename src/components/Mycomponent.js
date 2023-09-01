// src/Infoform.js
import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import axios from "axios";
import { APIS } from "./constants/api";
// import { useLocation } from 'react-router-dom';

const Infoform = () => {
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
        gazzet_no: '',
        photo:"",

    };
   
        // const location = useLocation();
        // const searchParams = new URLSearchParams(location.search);
        // const companyName = searchParams.get('company');
        
      
    const [formData, setFormData] = useState({ initialState });
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(APIS.PROPERTIES, formData);
            if (response.status === 201) {
                console.log("Form data saved successfully");
                setFormData(initialState);
            } else {
                console.error("Error while saving from data");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

    };


    
   

    return (
        <MDBContainer className="bg-light p-5 mt-5 rounded shadow  justify-content-center align-items-center">
            <h1 className=" mb-4 text-center">Enter your Property Details</h1>
            <form onSubmit={handleSubmit}>
                <MDBRow className="row mt-8 mb-6 justify-content-evenly align-items-center">
                    <MDBCol className="col-sm-5 ">
                        <MDBInput
                            label="Company Name"
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                        />
                    </MDBCol>
                    <MDBCol className="col-sm-5">
                        <MDBInput
                            label=" Town/Village"
                            type="text"
                            name="villageNm"
                            value={formData.villageNm}
                            onChange={handleChange}
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow className="row mt-4  justify-content-evenly align-items-center">
                    <MDBCol className="col-sm-5">
                        <MDBInput
                            label="Sy. No.Or CTS No"
                            type="syno"
                            name="ctsNo"
                            value={formData.ctsNo}
                            onChange={handleChange}
                        />
                    </MDBCol>
                    <MDBCol className="col-sm-5">
                        <MDBInput

                            label="Extent in Acres  or Sq.Ft"
                            type="extentinacres"
                            name="extentAcres"
                            value={formData.extentAcres}
                            onChange={handleChange}
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow className="row mt-4  justify-content-evenly align-items-center">
                    <MDBCol className="col-sm-5">
                        <MDBInput
                            label="Boundaries"
                            type="text"
                            name="boundries"
                            value={formData.boundries}
                            onChange={handleChange}

                        />
                    </MDBCol>
                    <MDBCol className="col-sm-5">
                        <MDBInput
                            label="Assessment or Tax to be paid annually"
                            type="text"
                            name="taxAmt"
                            value={formData.taxAmt}
                            onChange={handleChange}
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow className="row mt-4  justify-content-evenly align-items-center">
                    <MDBCol className="col-sm-5">
                        <MDBInput
                            label="Name of the Khatedar"
                            type="text"
                            name="accountNm"
                            value={formData.accountNm}
                            onChange={handleChange}
                        />
                    </MDBCol>
                    <MDBCol className="col-sm-5">
                        <MDBInput
                            label="Income derived annually"
                            type="text"
                            name="annualIncome"
                            value={formData.annualIncome}
                            onChange={handleChange}
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow className="row mt-4  justify-content-evenly align-items-center">
                    <MDBCol className="col-sm-5">
                        <MDBInput
                            label="Name & Address of Waqif"
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </MDBCol>
                    <MDBCol className="col-sm-5">
                        <MDBInput
                            label="Certificate of Registration No."
                            type="text"
                            name="registrationNo"
                            value={formData.registrationNo}
                            onChange={handleChange}

                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow className="row mt-4 justify-content-evenly align-items-center">
                    <MDBCol className="col-sm-5">
                        <MDBInput
                            label="Gazette Notification No."
                            type="text"
                            name="gazzet_no"
                            value={formData.gazzet_no}
                            onChange={handleChange}
                        />
                    </MDBCol>
                    <MDBCol className="col-sm-5">
                        <MDBInput
                           label=""
                           type="file"
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
export default Infoform;