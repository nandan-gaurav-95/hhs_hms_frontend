import axios from "axios";
import { APIS } from "../components/constants/api";

export const CompanyNameService ={

// Create a new day book entry 
getCompanyName : async () => {
        try{
            const response = await axios.get(APIS.ALLCOMPANYNAME);
            return response.data;

            //Hiii gaurav

        }catch(error){
            throw error;
        }

    }
}