import axios from "axios";
import { APIS } from "../components/constants/api";

export const EmployeeService ={

 
    //add Employee
    createEmployee : async (formData) => {
        try{
            const response = await axios.post(APIS.CREATEEMPLOYEE, formData);
            console.log("EmployeeId",response.data.id);
            return response;
        }catch(error){
            throw error;
        }
    },

      // Retrieve all employee
      getAllEmployee :async () => {
        try {
            const response= await axios.get(APIS.GETALLEMPLOYEE,)
            return response;
        }catch(error){
            throw error;
        }
      },

       // Retrieve a specific employee by ID
       getEmployeeById :async ()=>{
        try {
        const response=await axios.get(APIS.GETEMPLOYEEBYID,)
        return response;  
        } catch (error) {
            throw error;
        }
       },

        // Update an existing employee
        updateEmployeeById : async ()=>{
            try {
                const response= await axios.put(APIS.UPDATEEMPLOYEEBYID,)
                return response;
                
            } catch (error) {
                throw error; 
            }
        },
         // Delete an employee by ID
        deleteEmployeeById : async ()=>{
           try {
             const response =await axios.delete(APIS.DELETEEMPLOYEEBYID,)
             return response;
           } catch (error) {
            throw error;
           }
        },
}