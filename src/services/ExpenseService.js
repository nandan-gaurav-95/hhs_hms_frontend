import axios from "axios";
import { APIS } from "../components/constants/api";

export const ExpenseService ={

 
    createExpense : async (formData) => {
        try{
            const response = await axios.post(APIS.CREATEEXPENSE, formData);
            console.log("ExpenseId",response.data.id);
            return response;
        }catch(error){
            throw error;
        }
    },

      // Retrieve all tenant
      getAllExpense :async () => {
        try {
            const response= await axios.get(APIS.GETALLEXPENSE,)
            return response.data;
        }catch(error){
            throw error;
        }
      },

       // Retrieve a specific tenant by ID
       getExpenseById :async ()=>{
        try {
        const response=await axios.get(APIS.GETEXPENSEBYID,)
        return response.data;  
        } catch (error) {
            throw error;
        }
       },

        // Update an existing tenant
        updateExpenseById : async ()=>{
            try {
                const response= await axios.put(APIS.UPDATEEXPENSEBYID,)
                return response.data;
                
            } catch (error) {
                throw error; 
            }
        },
         // Delete an tenant by ID
        deleteExpenseById : async ()=>{
           try {
             const response =await axios.delete(APIS.DELETEXPENSEBYID,)
             return response.data;
           } catch (error) {
            throw error;
           }
        },
}