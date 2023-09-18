import axios from "axios";
import { APIS } from "../components/constants/api";

export const TenantService ={

 
    createTenant : async (formData) => {
        try{
            const response = await axios.post(APIS.CREATETENANT, formData);
            console.log("TenantId",response.data.id);
            return response;
        }catch(error){
            throw error;
        }
    },

      // Retrieve all tenant
      getAllTenant :async () => {
        try {
            const response= await axios.get(APIS.GETALLTENANT,)
            return response.data;
        }catch(error){
            throw error;
        }
      },

       // Retrieve a specific tenant by ID
       getTenantById :async ()=>{
        try {
        const response=await axios.get(APIS.GETTENANTBYID,)
        return response.data;  
        } catch (error) {
            throw error;
        }
       },

        // Update an existing tenant
        updateTenantById : async ()=>{
            try {
                const response= await axios.put(APIS.UPDATETENANTBYID,)
                return response.data;
                
            } catch (error) {
                throw error; 
            }
        },
         // Delete an tenant by ID
        deleteTenantById : async ()=>{
           try {
             const response =await axios.delete(APIS.DELETETENANTBYID,)
             return response.data;
           } catch (error) {
            throw error;
           }
        },
}