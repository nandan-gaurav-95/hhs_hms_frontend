import React from 'react'
import { APIS } from '../components/constants/api';
import axios from 'axios';

export const BloodCenterService ={
  
    // Create a new bloodCenter entry
createBloodCenter : async (formData) => {
    try{
        const response = await axios.post(APIS.CREATEBLOODCENTER, formData);
        console.log("BloodCenter",response.data.id);
        return response;
    }catch(error){
        throw error;
    }
},

  // Retrieve all bloodCenter 
  getAllBloodCenter :async () => {
    try {
        const response= await axios.get(APIS.GETALLBLOODCENTER,)
        return response.data;
    }catch(error){
        throw error;
    }
  },

   // Retrieve a specific bloodCenter by ID
   getBloodCenterById :async ()=>{
    try {
    const response=await axios.get(APIS.GETBLOODCENTERBYID,)
    return response.data;  
    } catch (error) {
        throw error;
    }
   },

    // Update an existing bloodCenter 
    updateBloodCenterById : async ()=>{
        try {
            const response= await axios.put(APIS.UPDATEBLOODCENTERBYID,)
            return response.data;
            
        } catch (error) {
            throw error; 
        }
    },
     // Delete an bloodCenter by ID
    deleteBloodCenterById : async ()=>{
       try {
         const response =await axios.delete(APIS.DELETEBLOODCENTERBYID,)
         return response.data;
       } catch (error) {
        throw error;
       }
    },

    //Blood group wise Inventory
    getbloodGroupInventory : async ()=>{
        try{
            const response =await axios.get(APIS.BLOODDONARINVENTORY,)
            return response.data
        }catch(error){
            throw error;
        }
    },
}

 
