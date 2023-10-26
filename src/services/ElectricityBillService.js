import React from 'react'
import { APIS } from '../components/constants/api';

export const ElectricityBillService = {
 
    // Create a new electricity Bill entry
createElectricityBill : async (formData) => {
    try{
        const response = await axios.post(APIS.CREATEELECITYBILL, formData);
        console.log("Ele bill ",response.data.id);
        return response;
    }catch(error){
        throw error;
    }
},

  // Retrieve all electricity Bill 
  getAllElectricityBill :async () => {
    try {
        const response= await axios.get(APIS.GETALLELECITYBILL,)
        return response.data;
    }catch(error){
        throw error;
    }
  },

   // Retrieve a specific electricity Bill by ID
   getElectricityBillById :async ()=>{
    try {
    const response=await axios.get(APIS.GETELECITYBILLBYID,)
    return response.data;  
    } catch (error) {
        throw error;
    }
   },

    // Update an existing electricity Bill 
    updateElectricityBillById : async ()=>{
        try {
            const response= await axios.put(APIS.UPDATEELECITYBILLBYID,)
            return response.data;
            
        } catch (error) {
            throw error; 
        }
    },
     // Delete an electricity Bill by ID
    deleteElectricityBillById : async ()=>{
       try {
         const response =await axios.delete(APIS.DELETEELECITYBILLBYID,)
         return response.data;
       } catch (error) {
        throw error;
       }
    },
}
