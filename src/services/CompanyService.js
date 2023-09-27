import axios from "axios";
import { APIS } from "../components/constants/api";

export const CompanyService ={
// Create a new Property entry 
    createProperty : async (formData) => {
        try{
            const response = await axios.post(APIS.CREATEPROPERTY, formData);
            console.log("PropertyId",response.data.id);
            return response;
        }catch(error){
            throw error;
        }
    },

// get All Property Name
getCompanyName : async () => {
        try{
            const response = await axios.get(APIS.ALLCOMPANYNAME);
            return response.data;

            //Hiii gaurav

        }catch(error){
            throw error;
        }

    },
   
}