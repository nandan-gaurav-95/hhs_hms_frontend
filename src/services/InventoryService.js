import axios from "axios";
import { APIS } from "../components/constants/api";

export const InventoryService ={

// Create a new day book entry 
    createInventory: async (formData) => {
        try{
            const response = await axios.post(APIS.CREATEINVENTORY, formData);
            console.log("InventoryId",response.data.id);
            return response;
        }catch(error){
            throw error;
        }
    },


      // Retrieve all inventory items
      getAllInventoryItem :async () => {
        try {
            const response= await axios.get(APIS.GETALLINVENTORY,)
            return response.data;
        }catch(error){
            throw error;
        }
      },

       // Retrieve a specific inventory item by ID
       getInventoryItemById :async ()=>{
        try {
        const response=await axios.get(APIS.GETINVENTORYITEMBYID,)
        return response.data;  
        } catch (error) {
            throw error;
        }
       },

        // Update an existing inventory item
        updateInventoryItemById : async ()=>{
            try {
                const response= await axios.put(APIS.UPDATEINVENTORYITEMBYID,)
                return response.data;
                
            } catch (error) {
                throw error; 
            }
        },
         // Delete an inventory item by ID
        deleteInventoryItemById : async ()=>{
           try {
             const response =await axios.delete(APIS.DELETEINVENTORYITEMBYID,)
             return response.data;
           } catch (error) {
            throw error;
           }
        },
}