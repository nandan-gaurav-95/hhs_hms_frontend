import axios from "axios";
import { APIS } from "../components/constants/api";

export const InventoryService ={

// Create a new day book entry 
    createInventoryItem : async (formData) => {
        try{
            const response = await axios.post(APIS.CREATEINVENTORY, formData);
            return response.data;

            //Hiii gaurav

        }catch(error){
            throw error;
        }

    }
}