import axios from "axios";
import { APIS } from "../components/constants/api";

export const PropertyService ={
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
getAllProperties : async () => {
        try{
            const response = await axios.get(APIS.ALLPROPERTIES);
            return response;
            //Hiii gaurav
        }catch(error){
            throw error;
        }
    },

    // get Property by Id
getPropertyById : async () => {
    try{
        const response = await axios.get(APIS.GETPROPBYID);
        return response;
    }catch(error){
        throw error;
    }
},
    // get Property by Id
    updatePropertyById : async () => {
        try{
            const response = await axios.put(APIS.UPDATEPROPERTY);
            return response.data;
        }catch(error){
            throw error;
        }
    
    },
      // delete Property by Id
      deletePropertyById : async () => {
        try{
            const response = await axios.delete(APIS.DELETEPROPERTY);
            return response.data;
        }catch(error){
            throw error;
        }
    
    },
   
}