import axios from "axios";
import { APIS } from "../components/constants/api";

export const PayrollService ={

 
    createPayroll : async (formData) => {
        try{
            const response = await axios.post(APIS.CREATEPAYROLL, formData);
            console.log("PayrollId",response.data.id);
            return response;
        }catch(error){
            throw error;
        }
    },

      // Retrieve all Payroll
      getAllPayroll :async () => {
        try {
            const response= await axios.get(APIS.GETALLPAYROLL,)
            return response.data;
        }catch(error){
            throw error;
        }
      },

       // Retrieve a specific Payroll by ID
       getPayrollById :async ()=>{
        try {
        const response=await axios.get(APIS.GETPAYROLLBYID,)
        return response.data;  
        } catch (error) {
            throw error;
        }
       },

        // Update an existing payroll
        updatePayrollById : async ()=>{
            try {
                const response= await axios.put(APIS.UPDATEPAYROLLBYID,)
                return response.data;
                
            } catch (error) {
                throw error; 
            }
        },
         // Delete an payroll by ID
        deletePayrollById : async ()=>{
           try {
             const response =await axios.delete(APIS.DELETEPAYROLLBYID,)
             return response.data;
           } catch (error) {
            throw error;
           }
        },
}