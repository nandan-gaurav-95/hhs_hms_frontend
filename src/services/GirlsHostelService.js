import axios from "axios";
import { APIS } from "../components/constants/api";

export const GirlsHostelService = {
 
    // add hostel entry
    createGirlHostel : async (formData) => {
        try{
            const response = await axios.post(APIS.CREATEHOSTEL, formData);
            console.log("hostel",response.data.id);
            return response;
        }catch(error){
            throw error;
        }
    },

     // Retrieve all hostel
     getAllGirlsHostel :async () => {
        try {
            const response= await axios.get(APIS.GETALLHOSTEL,)
            return response.data;
        }catch(error){
            throw error;
        }
      },
    // Retrieve all hostel
    getAllGirlsHostel :async () => {
        try {
            const response= await axios.get(APIS.GETHOSTELBYID,)
            return response.data;
        }catch(error){
            throw error;
        }
      },
     
        // Update an existing hostel
        updateGirlsHostelById : async ()=>{
            try {
                const response= await axios.put(APIS.UPDATEHOSTELBYID,)
                return response.data;
                
            } catch (error) {
                throw error; 
            }
        },
             // Delete an hostel by ID
             deleteGirlsHostelById : async ()=>{
                try {
                  const response =await axios.delete(APIS.DELETEHOSTELBYID,)
                  return response.data;
                } catch (error) {
                 throw error;
                }
             },


}

