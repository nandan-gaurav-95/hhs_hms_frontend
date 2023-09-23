import axios from "axios";
import { APIS } from "../components/constants/api";

export const SampleRegFormService ={

 
    createSampleRegForm : async (formData) => {
        try{
            const response = await axios.post(APIS.CREATECOMPANY, formData);
            console.log("SampleRegFormId",response.data.id);
            return response;
        }catch(error){
            throw error;
        }
    },

      // Retrieve all tenant
      getAllSampleRegForm :async () => {
        try {
            const response= await axios.get(APIS.GETALLSAMPLEREGFORM,)
            return response.data;
        }catch(error){
            throw error;
        }
      },

       // Retrieve a specific tenant by ID
       getSampleRegFormById :async ()=>{
        try {
        const response=await axios.get(APIS.GETSAMPLEREGFORMBYID,)
        return response.data;  
        } catch (error) {
            throw error;
        }
       },

        // Update an existing tenant
        updateSampleRegFormById : async ()=>{
            try {
                const response= await axios.put(APIS.UPDATESAMPLEREGFORMBYID,)
                return response.data;
                
            } catch (error) {
                throw error; 
            }
        },
         // Delete an tenant by ID
        deleteSampleRegFormIById : async ()=>{
           try {
             const response =await axios.delete(APIS.DELETESAMPLEREGFORMBYID,)
             return response.data;
           } catch (error) {
            throw error;
           }
        },
}