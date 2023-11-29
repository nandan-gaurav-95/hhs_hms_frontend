import React from 'react'
import { APIS } from '../components/constants/api';
import axios from 'axios';
export const MedicalAidService =  {
  // Create a new Medical aid entry
 CreateMedicalAid : async (formData) => {
    try{
        const response = await axios.post(APIS.CREATEMEDICALAID, formData);
        console.log("Medicl Aid Service",response.data.id);
        return response;
    }catch(error){
        throw error;
    }
},
// Retrieve all Medical aid
getAllMedicalAid :async () => {
    try {
        const response= await axios.get(APIS.GETALLMEDICALAID,)
        return response.data;
    }catch(error){
        throw error;
    }
  },

   // Retrieve a specific Medical aid by ID
   getMedicalAidById :async ()=>{
    try {
    const response=await axios.get(APIS.GETMEDICALAIDBYID,)
    return response.data;  
    } catch (error) {
        throw error;
    }
   },

    // Update an existing Medical aid 
    updateMedicalAidById : async ()=>{
        try {
            const response= await axios.put(APIS.UPDATEMEDICALAIDBYID,)
            return response.data;
            
        } catch (error) {
            throw error; 
        }
    },
     // Delete an Medical aid by ID
    deleteMedicalAidById : async ()=>{
       try {
         const response =await axios.delete(APIS.DELETEMEDICALAIDBYID,)
         return response.data;
       } catch (error) {
        throw error;
       }
    },
}