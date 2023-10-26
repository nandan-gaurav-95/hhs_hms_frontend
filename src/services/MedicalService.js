import React from 'react'
import { APIS } from '../components/constants/api';

export const MedicalService =  {
  // Create a new Medical entry
 createMedical : async (formData) => {
    try{
        const response = await axios.post(APIS.CREATEMEDICALACKNWLDGE, formData);
        console.log("Voucher",response.data.id);
        return response;
    }catch(error){
        throw error;
    }
},

  // Retrieve all Medical
  getAllMedical :async () => {
    try {
        const response= await axios.get(APIS.GETALLMEDICALACKNWLDGE,)
        return response.data;
    }catch(error){
        throw error;
    }
  },

   // Retrieve a specific Medical by ID
   getMedicalById :async ()=>{
    try {
    const response=await axios.get(APIS.GETMEDICALACKNWLDGEBYID,)
    return response.data;  
    } catch (error) {
        throw error;
    }
   },

    // Update an existing Medical 
    updateMedicalById : async ()=>{
        try {
            const response= await axios.put(APIS.UPDATEMEDICALACKNWLDGEBYID,)
            return response.data;
            
        } catch (error) {
            throw error; 
        }
    },
     // Delete an Medical by ID
    deleteMedicalById : async ()=>{
       try {
         const response =await axios.delete(APIS.DELETEMEDICALACKNWLDGEBYID,)
         return response.data;
       } catch (error) {
        throw error;
       }
    },
}

 
