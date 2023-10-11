import axios from "axios";
import { APIS } from "../components/constants/api";

export const TapalService ={

 
    createTapal : async (formData) => {
        try{
            const response = await axios.post(APIS.CREATETAPAL, formData);
            console.log("TenantId",response.data.id);
            return response;
        }catch(error){
            throw error;
        }
    },

      // Retrieve all tenant
      getAllTapal :async () => {
        try {
            const response= await axios.get(APIS.GETALLTAPAL,)
            return response.data;
        }catch(error){
            throw error;
        }
      },

       // Retrieve a specific tenant by ID
       getTapalById :async ()=>{
        try {
        const response=await axios.get(APIS.GETTAPALBYID,)
        return response;  
        // console.log( "Service",response);
        } catch (error) {
            throw error;
        }
       },

        // Update an existing tenant
        updateTapalById : async ()=>{
            try {
                const response= await axios.put(APIS.UPDATETAPALBYID,)
                return response.data;
                
            } catch (error) {
                throw error; 
            }
        },
         // Delete an tenant by ID
        deleteTapalById : async ()=>{
           try {
             const response =await axios.delete(APIS.DELETETAPALBYID,)
             return response.data;
           } catch (error) {
            throw error;
           }
        },
}