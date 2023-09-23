import axios from "axios";
import { APIS } from "../components/constants/api";


export const StudentService ={

    // Create a new day book entry 
        createstudent : async (formData) => {
            try{
                const response = await axios.post(APIS.CREATESTUDENT, formData);
                console.log("SI No.",response.data.id);
                return response;
            }catch(error){
                throw error;
            }
        },
    
          // Retrieve all inventory items
          getallstudent :async () => {
            try {
                const response= await axios.get(APIS.GETALLSTUDENT,)
                return response.data;
            }catch(error){
                throw error;
            }
          },
    
           // Retrieve a specific inventory item by ID
           getstudentById :async ()=>{
            try {
            const response=await axios.get(APIS.GETSTUDENTBYID,)
            return response.data;  
            } catch (error) {
                throw error;
            }
           },
    
            // Update an existing inventory item
            updatestudentById : async ()=>{
                try {
                    const response= await axios.put(APIS.UPDATESTUDEBTID,)
                    return response.data;
                    
                } catch (error) {
                    throw error; 
                }
            },
             // Delete an inventory item by ID
            deletestudentById : async ()=>{
               try {
                 const response =await axios.delete(APIS.DELETESTUDENTBYID,)
                 return response.data;
               } catch (error) {
                throw error;
               }
            },
    }