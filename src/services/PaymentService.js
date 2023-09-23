import axios from "axios";
import { APIS } from "../components/constants/api";

export const PaymentService ={

<<<<<<< HEAD
// Create a new day book entry 
=======
// Create a new Payment entry 
>>>>>>> d04171144032451eaaf49e14d23f24edb91b2ee4
    createPayment : async (formData) => {
        try{
            const response = await axios.post(APIS.CREATEPAYMENT, formData);
            console.log("PaymentId",response.data.id);
            return response;
        }catch(error){
            throw error;
        }
    },

      // Retrieve all inventory items
      getAllPayment :async () => {
        try {
            const response= await axios.get(APIS.GETALLPAYMENT,)
            return response.data;
        }catch(error){
            throw error;
        }
      },

       // Retrieve a specific inventory item by ID
       getPaymentById :async ()=>{
        try {
        const response=await axios.get(APIS.GETPAYMENTBYID,)
        return response.data;  
        } catch (error) {
            throw error;
        }
       },

        // Update an existing inventory item
        updatePaymentById : async ()=>{
            try {
                const response= await axios.put(APIS.UPDATEPAYMENTBYID,)
                return response.data;
                
            } catch (error) {
                throw error; 
            }
        },
         // Delete an inventory item by ID
        deletePaymentById : async ()=>{
           try {
             const response =await axios.delete(APIS.DELETEPAYMENTBYID,)
             return response.data;
           } catch (error) {
            throw error;
           }
        },
<<<<<<< HEAD
=======

         // Retrieve all items payment pdf
      generatePdf :async (id) => {
        try {
            const response= await axios.get(`APIS.GENERATEPDF/${id}`,
            {
                responseType: 'blob', // Treat the response as a binary blob
              }
            );
            console.log("API Response:", response); 
            return response.data;
        }catch(error){
            console.error("API Error:", error);
            throw error;
        }
      },
>>>>>>> d04171144032451eaaf49e14d23f24edb91b2ee4
}