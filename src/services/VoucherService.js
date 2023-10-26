import React from 'react'
import { APIS } from '../components/constants/api';
import axios from 'axios';
export const VoucherService = {
  
 // Create a new Voucher entry
 createVoucher : async (formData) => {
    try{
        const response = await axios.post(APIS.CREATEVOUCHER, formData);
        console.log("Voucher",response.data.id);
        return response;
    }catch(error){
        throw error;
    }
},

  // Retrieve all Voucher
  getAllVoucher :async () => {
    try {
        const response= await axios.get(APIS.GETALLVOUCHER,)
        return response.data;
    }catch(error){
        throw error;
    }
  },

   // Retrieve a specific Voucher by ID
   getVoucherById :async ()=>{
    try {
    const response=await axios.get(APIS.GETVOUCHERBYID,)
    return response.data;  
    } catch (error) {
        throw error;
    }
   },

    // Update an existing Voucher 
    updateVoucherById : async ()=>{
        try {
            const response= await axios.put(APIS.UPDATEVOUCHERBYID,)
            return response.data;
            
        } catch (error) {
            throw error; 
        }
    },
     // Delete an Voucher by ID
    deleteVoucherById : async ()=>{
       try {
         const response =await axios.delete(APIS.DELETEVOUCHERBYID,)
         return response.data;
       } catch (error) {
        throw error;
       }
    },

}

 
