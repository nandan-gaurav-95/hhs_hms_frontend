import axios from "axios";
import { APIS } from "../constants/api";

export const InventoryService ={


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