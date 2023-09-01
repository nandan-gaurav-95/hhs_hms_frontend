const API_BASE_URL = "http://localhost:8080/api";

export const APIS ={

    //Form save these api are from hhs_hms which is backend project 
    PROPERTIES:`${API_BASE_URL}/properties`,
    REGISTER:`${API_BASE_URL}/regstr`,
    COMPANYNAME:`${API_BASE_URL}/companyNames`,



     //Form save these api are from hhs which is backend project
     CREATECOMPANY:`${API_BASE_URL}/create`,
     SAVECOMPANY:`${API_BASE_URL}/company`,//PutMapping
     ALLCOMPANYNAME:`${API_BASE_URL}/allCompanies`,
     GETPROPBYCMPNYNM:`${API_BASE_URL}/companiesByName`,


}