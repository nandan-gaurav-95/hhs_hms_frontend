import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { APIS } from "../constants/api";
import axios from "axios";
import { TenantService } from "../../services/TenantService";


const TenantDetails = (props) => {
    const { id } = useParams() || {};
    const navigate = useNavigate();
    const [tenantData, setTenantData] = useState(null);
    

    useEffect(  ()=>{
        const fetchTenantById = async ()=>{
            try {
                
                const response = await TenantService.getTenantById(id);
                
                console.log("tenant Details",response);
                setTenantData(response);
                

                
            } catch (error) {
                console.error("Error fetching tenant details:", error);
                
            }
        };
        fetchTenantById();

    },[id])

  
      
      return (
        <div>
             <div>
            {tenantData ? (
                
                <div>
                    <h1>Tenant Details</h1>
                    <p>Tenant Id: {tenantData?.data?.id}</p>
                    <p>Tenant Name: {tenantData?.tenantName}</p>
                    <p>Deposit: {tenantData?.securityDeposit}</p>
                    {/* Display other tenant details here */}
                </div>
            ) : (
                <p>Loading tenant details...</p>
            )}
        </div>
       
      </div>
  )
}

export default TenantDetails
