import axios from "axios";
import { APIS } from "../components/constants/api";

export const DaybookService ={

 
    createDaybook : async (formData) => {
        try{
            const response = await axios.post(APIS.CREATEDAYBOOK, formData);
            console.log("DaybookId",response.data.id);
            return response;
        }catch(error){
            throw error;
        }
    },

      // Retrieve all daybook
      getAllDaybook :async () => {
        try {
            const response= await axios.get(APIS.GETALLDAYBOOK,)
            return response.data;
        }catch(error){
            throw error;
        }
      },

       // Retrieve a specific daybook by ID
       getDaybookById :async ()=>{
        try {
        const response=await axios.get(APIS.GETDAYBOOKBYID,)
        return response.data;  
        } catch (error) {
            throw error;
        }
       },

        // Update an existing daybook
        updateDaybookById : async ()=>{
            try {
                const response= await axios.put(APIS.UPDATEDAYBOOKBYID,)
                return response.data;
                
            } catch (error) {
                throw error; 
            }
        },
         // Delete an daybook by ID
        deleteDaybookById : async ()=>{
           try {
             const response =await axios.delete(APIS.DELETEDAYBOOKBYID,)
             return response.data;
           } catch (error) {
            throw error;
           }
        },
}