import axios from "axios";
import { APIS } from "../components/constants/api";

export const ReceiptService ={

 
    createReceipt : async (formData) => {
        try{
            const response = await axios.post(APIS.CREATERECEIPT, formData);
            console.log("ReceiptId",response.data.id);
            return response;
        }catch(error){
            throw error;
        }
    },

      // Retrieve all tenant
      getAllReceipt :async () => {
        try {
            const response= await axios.get(APIS.GETALLRECEIPT,)
            return response.data;
        }catch(error){
            throw error;
        }
      },

       // Retrieve a specific tenant by ID
       getReceiptById :async ()=>{
        try {
        const response=await axios.get(APIS.GETRECEIPTBYID,)
        return response.data;  
        } catch (error) {
            throw error;
        }
       },

        // Update an existing tenant
        updateReceiptById : async ()=>{
            try {
                const response= await axios.put(APIS.UPDATERECEIPTBYID,)
                return response.data;
                
            } catch (error) {
                throw error; 
            }
        },
         // Delete an tenant by ID
        deleteReceiptById : async ()=>{
           try {
             const response =await axios.delete(APIS.DELETERECEIPTBYID,)
             return response.data;
           } catch (error) {
            throw error;
           }
        },
}