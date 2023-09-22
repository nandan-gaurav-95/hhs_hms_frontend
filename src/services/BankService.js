import axios from "axios";
import { APIS } from "../components/constants/api";

export const BankService ={

// Create a new day book entry 
    createBank : async (formData) => {
        try{
            const response = await axios.post(APIS.CREATEBANK, formData);
            console.log("BankId",response.data.id);
            return response;
        }catch(error){
            throw error;
        }
    },

      // Retrieve all inventory items
      getAllBank :async () => {
        try {
            const response= await axios.get(APIS.GETALLBANK,)
            return response.data;
        }catch(error){
            throw error;
        }
      },

       // Retrieve a specific inventory item by ID
       getBankById :async ()=>{
        try {
        const response=await axios.get(APIS.GETBANKBYID,)
        return response.data;  
        } catch (error) {
            throw error;
        }
       },

        // Update an existing inventory item
        updateBankById : async ()=>{
            try {
                const response= await axios.put(APIS.UPDATEBANKBYID,)
                return response.data;
                
            } catch (error) {
                throw error; 
            }
        },
         // Delete an inventory item by ID
        deleteBankById : async ()=>{
           try {
             const response =await axios.delete(APIS.DELETEBANKBYID,)
             return response.data;
           } catch (error) {
            throw error;
           }
        },
}