import React from 'react'
import { APIS } from '../components/constants/api';
import axios from 'axios';
export const ParkingService =  {
  // Create a new Parking entry
createParking : async (formData) => {
    try{
        const response = await axios.post(APIS.CREATEPARKING, formData);
        console.log("Parking",response.data.id);
        return response;
    }catch(error){
        throw error;
    }
},

  // Retrieve all Parking
  getAllParking :async () => {
    try {
        const response= await axios.get(APIS.GETALLPARKING,)
        return response.data;
    }catch(error){
        throw error;
    }
  },

   // Retrieve a specific Parking by ID
   getParkingById :async ()=>{
    try {
    const response=await axios.get(APIS.GETPARKINGBYID,)
    return response.data;  
    } catch (error) {
        throw error;
    }
   },

    // Update an existing Parking 
    updateParkingById : async ()=>{
        try {
            const response= await axios.put(APIS.UPDATEPARKINGBYID,)
            return response.data;
            
        } catch (error) {
            throw error; 
        }
    },
     // Delete an Parking by ID
    deleteParkingById : async ()=>{
       try {
         const response =await axios.delete(APIS.DELETEPARKINGBYID,)
         return response.data;
       } catch (error) {
        throw error;
       }
    },
}

 
