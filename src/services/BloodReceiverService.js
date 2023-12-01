import React from 'react'
import { APIS } from '../components/constants/api';
import axios from 'axios';

export const BloodReceiverService ={
  
    // Create a new bloodReceiver entry
createBloodReceiver : async (formData) => {
    try{
        const response = await axios.post(APIS.CREATEBLOODRECEIVER, formData);
        console.log("BloodReceiver",response.data);
        return response;
    }catch(error){
        throw error;
    }
},

  // Retrieve all bloodReceiver 
  getAllBloodReceiver :async () => {
    try {
        const response= await axios.get(APIS.GETALLBLOODRECEIVER,)
        return response.data;
    }catch(error){
        throw error;
    }
  },

   // Retrieve a specific bloodReceiver by ID
   getBloodReceiverById :async ()=>{
    try {
    const response=await axios.get(APIS.GETBLOODRECEIVERBYID,)
    return response.data;  
    } catch (error) {
        throw error;
    }
   },

    // Update an existing bloodReceiver 
    updateBloodReceiverById : async ()=>{
        try {
            const response= await axios.put(APIS.UPDATEBLOODRECEIVERBYID,)
            return response.data;
            
        } catch (error) {
            throw error; 
        }
    },
     // Delete an bloodReceiver by ID
    deleteBloodReceiverById : async ()=>{
       try {
         const response =await axios.delete(APIS.DELETEBLOODRECEIVERBYID,)
         return response.data;
       } catch (error) {
        throw error;
       }
    },
}