import axios from "axios";
import { APIS } from "../components/constants/api";

export const DargahComplexService ={

// Create a new DargahComplex
    createDargahComplex : async (formData) => {
        try{
            const response = await axios.post(APIS.CREATEDARGAHCOMPLEX, formData);
            console.log("DargahComplexID",response.data.id);
            return response;
        }catch(error){
            throw error;
        }
    },

      // Retrieve all inventory items
      getAllDargahComplex :async () => {
        try {
            const response= await axios.get(APIS.GETALLDARGAHCOMPLEX,)
            return response.data;
        }catch(error){
            throw error;
        }
      },

       // Retrieve a specific inventory item by ID
       getDargahComplexById :async ()=>{
        try {
        const response=await axios.get(APIS.GETDARGAHCOMPLEXBYID,)
        return response.data;  
        } catch (error) {
            throw error;
        }
       },

        // Update an existing inventory item
        updateDargahComplexById : async ()=>{
            try {
                const response= await axios.put(APIS.UPDATEDARGAHCOMPLEXBYID,)
                return response.data;
                
            } catch (error) {
                throw error; 
            }
        },
         // Delete an inventory item by ID
        deleteDargahComplexById : async ()=>{
           try {
             const response =await axios.delete(APIS.DELETEDARGAHCOMPLEXBYID,)
             return response.data;
           } catch (error) {
            throw error;
           }
        },
}