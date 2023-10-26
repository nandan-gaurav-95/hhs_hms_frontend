import React from 'react'
import { APIS } from '../components/constants/api';
import axios from 'axios';
export const HhsComplexService = {

    // Create a new Hhs-Complex entry
createHhsComplex : async (formData) => {
    try{
        const response = await axios.post(APIS.CREATEHHSCOMPLEX, formData);
        console.log("HhsComplex",response.data.id);
        return response;
    }catch(error){
        throw error;
    }
},

  // Retrieve all Hhs-Complex
  getAllHhsComplex :async () => {
    try {
        const response= await axios.get(APIS.GETALLHHSCOMPLEX,)
        return response.data;
    }catch(error){
        throw error;
    }
  },

   // Retrieve a specific Hhs-Complex by ID
   getHhsComplexById :async ()=>{
    try {
    const response=await axios.get(APIS.GETHHSCOMPLEXBYID,)
    return response.data;  
    } catch (error) {
        throw error;
    }
   },

    // Update an existing Hhs-Complex 
    updateHhsComplexById : async ()=>{
        try {
            const response= await axios.put(APIS.UPDATEHHSCOMPLEXBYID,)
            return response.data;
            
        } catch (error) {
            throw error; 
        }
    },
     // Delete an Hhs-Complex by ID
    deleteHhsComplexById : async ()=>{
       try {
         const response =await axios.delete(APIS.DELETEHHSCOMPLEXBYID,)
         return response.data;
       } catch (error) {
        throw error;
       }
    },
}


