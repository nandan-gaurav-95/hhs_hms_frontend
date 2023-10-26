import React from 'react'
import { APIS } from '../components/constants/api';
import axios from 'axios';

export  const AmbulanceService =  {
 
    
// Create a new ambulance entry
createAmbulance : async (formData) => {
    try{
        const response = await axios.post(APIS.CREATEAMBULANCE, formData);
        console.log("Ambulance",response.data.id);
        return response;
    }catch(error){
        throw error;
    }
},

  // Retrieve all ambulance 
  getAllAmbulance :async () => {
    try {
        const response= await axios.get(APIS.GETALLAMBULANCE,)
        return response.data;
    }catch(error){
        throw error;
    }
  },

   // Retrieve a specific ambulance by ID
   getAmbulanceById :async ()=>{
    try {
    const response=await axios.get(APIS.GETAMBULANCEBYID,)
    return response.data;  
    } catch (error) {
        throw error;
    }
   },

    // Update an existing ambulance 
    updateAmbulanceById : async ()=>{
        try {
            const response= await axios.put(APIS.UPDATEAMBULANCEBYID,)
            return response.data;
            
        } catch (error) {
            throw error; 
        }
    },
     // Delete an ambulance by ID
    deleteAmbulanceById : async ()=>{
       try {
         const response =await axios.delete(APIS.DELETEAMBULANCEBYID,)
         return response.data;
       } catch (error) {
        throw error;
       }
    },

}


