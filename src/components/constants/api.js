const API_BASE_URL = "http://localhost:8080/api";

export const APIS ={

    //Form save these api are from hhs_hms which is backend project 
    PROPERTIES:`${API_BASE_URL}/properties`,
    REGISTER:`${API_BASE_URL}/regstr`,
    COMPANYNAME:`${API_BASE_URL}/companyNames`,


     //Form save these api are from hhs which is backend project
     CLOUDUPLOAD:`${API_BASE_URL}/cloud-upload`,//multiple image are uploaded to the cloud not create in frontend


     CREATECOMPANY:`${API_BASE_URL}/create`,//Post-method for company 
     SAVECOMPANY:`${API_BASE_URL}/company`,//PutMapping
     ALLCOMPANYNAME:`${API_BASE_URL}/companies`,
     GETPROPBYCMPNYID:`${API_BASE_URL}/companiesById`,// Get company data by Id 
     COMPANYPHOTOS:`${API_BASE_URL}/company-photo`,//upload properties photo with particular company
     GETCOMPANYPHOTOS:`${API_BASE_URL}/company-photo`,// Retrieve the list of photo file names for the specified company ID
     DELETECOMPANYPHOTOS:`${API_BASE_URL}/company-photos`,

     //tenants
     CREATETENANT:`${API_BASE_URL}/tenants`,//Post-method
     GETALLTENANT:`${API_BASE_URL}/tenants`,// Get-method
     GETTENANTBYID:`${API_BASE_URL}/tenants`,// Get specific tenants by ID
     UPDATETENANTBYID:`${API_BASE_URL}/tenants`,// Update an existing tenants
     DELETETENANTBYID:`${API_BASE_URL}/tenants`,//Delete an tenants  by ID

     // inventory 
     CREATEINVENTORY: `${API_BASE_URL}/inventory`,//Post-method
     GETALLINVENTORY:`${API_BASE_URL}/inventory`,// Get-method
     GETINVENTORYITEMBYID:`${API_BASE_URL}/inventory`,// Get specific inventory item by ID
     UPDATEINVENTORYITEMBYID:`${API_BASE_URL}/inventory`,// Update an existing inventory item
     DELETEINVENTORYITEMBYID:`${API_BASE_URL}/inventory`,//Delete an inventory item by ID

      // daybook
     CREATEDAYBOOK:  `${API_BASE_URL}/daybook`,//Post-method
     GETALLDAYBOOK:`${API_BASE_URL}/daybook`,// Get-method
     GETDAYBOOKBYID:`${API_BASE_URL}/daybook`,// Get specific day book entry by ID
     UPDATEDAYBOOKBYID:`${API_BASE_URL}/daybook`,// Update an existing day book entry
     DELETEDAYBOOKBYID:`${API_BASE_URL}/daybook`,//Delete a day book entry by ID

     //payroll
     CREATEPAYROLL: `${API_BASE_URL}/payroll`,//Post-method
     GETALLPAYROLL:`${API_BASE_URL}/payroll`,// Get-method
     GETPAYROLLBYID:`${API_BASE_URL}/payroll`,// Get specific payroll entry by ID
     UPDATEPAYROLLBYID:`${API_BASE_URL}/payroll`,//Update an existing payroll entry
     DELETEPAYROLLBYID:`${API_BASE_URL}/payroll`,//Delete a payroll entry by ID

     //Employee
     CREATEEMPLOYEE: `${API_BASE_URL}/employee`,//Post-method
     GETALLEMPLOYEE:`${API_BASE_URL}/employee`,// Get-method
     GETEMPLOYEEBYID:`${API_BASE_URL}/employee`,// Get specific employee by ID
     UPDATEEMPLOYEEBYID:`${API_BASE_URL}/employee`,//Update an existing employee 
     DELETEEMPLOYEEBYID:`${API_BASE_URL}/employee`,//Delete a employee by ID

     //Payment
     CREATEPAYMENT: `${API_BASE_URL}/payment`,//Post-method
     GETALLPAYMENT:`${API_BASE_URL}/payment`,// Get-method
     GETPAYMENTBYID:`${API_BASE_URL}/payment`,// Get specific Payment by ID
     UPDATEPAYMENTBYID:`${API_BASE_URL}/payment`,//Update an existing Payment 
     DELETEPAYMENTBYID:`${API_BASE_URL}/payment`,//Delete a Payment by ID
     GENERATEPAYMENTPDFBYID:`${API_BASE_URL}/paymentgeneratepdf`,//Get-method

    //Receipt
    CREATERECEIPT: `${API_BASE_URL}/receipt`,//Post-method
     GETALLRECEIPT:`${API_BASE_URL}/receipt`,// Get-method
     GETRECEIPTBYID:`${API_BASE_URL}/receipt`,// Get specific Receipt by ID
     UPDATERECEIPTBYID:`${API_BASE_URL}/receipt`,//Update an existing Receipt 
     DELETERECEIPTBYID:`${API_BASE_URL}/receipt`,//Delete a Receipt by ID
     GENERATERECEIPTPDFBYID :`${API_BASE_URL}/receiptgeneratepdf`,//Get-method

    //Expense
     CREATEEXPENSE: `${API_BASE_URL}/expense`,//Post-method
     GETALLEXPENSE:`${API_BASE_URL}/expense`,// Get-method
     GETEXPENSEBYID:`${API_BASE_URL}/expense`,// Get specific Expense by ID
     UPDATEEXPENSEBYID:`${API_BASE_URL}/expense`,//Update an existing Expense 
     DELETEEXPENSEBYID:`${API_BASE_URL}/expense`,//Delete a Expense by ID
     GENERATEEXPENSEPDFBYID:`${API_BASE_URL}/expensegeneratepdf`, //Generate Expense pdf by id 


     //Student
     CREATESTUDENT: `${API_BASE_URL}/students`,//Post-method
     GETALLSTUDENT:`${API_BASE_URL}/students`,// Get-method
     GETSTUDENTBYID:`${API_BASE_URL}/students`,// Get specific Expense by ID
     UPDATESTUDEBTID:`${API_BASE_URL}/students`,//Update an existing Expense 
     DELETESTUDENTBYID:`${API_BASE_URL}/students`,//Delete a Expense by ID


      
     //Bank
     CREATEBANK: `${API_BASE_URL}/bank`,//Post-method
     GETALLBANK:`${API_BASE_URL}/bank`,// Get-method
     GETBANKBYID:`${API_BASE_URL}/bank`,// Get specific Bank by ID
     UPDATEBANKBYID:`${API_BASE_URL}/bank`,//Update an existing Bank 
     DELETEBANKBYID:`${API_BASE_URL}/bank`,//Delete a Bank by ID


}