const API_BASE_URL = "http://localhost:8080/api";

export const APIS ={
     //login api
     CREATEACCOUNT:`${API_BASE_URL}/register`,//Post-method for create acc
     LOGINACCOUNT:`${API_BASE_URL}/login`,//post-method for login
     FORGOTPASSWORD:`${API_BASE_URL}/forgot-password`,//Post-method for password reset request

    //  property
     CREATEPROPERTY:`${API_BASE_URL}/property`,//Post-method for property 
     ALLPROPERTIES:`${API_BASE_URL}/property`,//Get-method
     GETPROPBYID:`${API_BASE_URL}/property`,// Get property by Id 
     UPDATEPROPERTY:`${API_BASE_URL}/property`,//  Update an existing property
     DELETEPROPERTY:`${API_BASE_URL}/property`,//Delete an property  by ID

    //tenants
    CREATETENANT:`${API_BASE_URL}/tenant`,//Post-method
    GETALLTENANT:`${API_BASE_URL}/tenant`,// Get-method
    GETTENANTBYID:`${API_BASE_URL}/tenant`,// Get specific tenants by ID
    UPDATETENANTBYID:`${API_BASE_URL}/tenant`,// Update an existing tenants
    DELETETENANTBYID:`${API_BASE_URL}/tenant`,//Delete an tenants  by ID
     
     //Employee
     CREATEEMPLOYEE: `${API_BASE_URL}/employee`,//Post-method
     GETALLEMPLOYEE:`${API_BASE_URL}/employee`,// Get-method
     GETEMPLOYEEBYID:`${API_BASE_URL}/employee`,// Get specific employee by ID
     UPDATEEMPLOYEEBYID:`${API_BASE_URL}/employee`,//Update an existing employee 
     DELETEEMPLOYEEBYID:`${API_BASE_URL}/employee`,//Delete a employee by ID
     CHANGEEMPLOYEESTATUS:`${API_BASE_URL}/empstatus`, // Change employee status
    
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
    
     // tapal
     CREATETAPAL: `${API_BASE_URL}/tapal`, //Post-method
     GETALLTAPAL: `${API_BASE_URL}/tapal`, // Get-method
     GETTAPALBYID: `${API_BASE_URL}/tapal`, // Get specific tapal by ID
     UPDATETAPALBYID: `${API_BASE_URL}/tapal`, // Update an existing tapal
     DELETETAPALBYID: `${API_BASE_URL}/tapal`, //Delete an tapal  by ID

     //payroll
     CREATEPAYROLL: `${API_BASE_URL}/payroll`,//Post-method
     GETALLPAYROLL:`${API_BASE_URL}/payroll`,// Get-method
     GETPAYROLLBYID:`${API_BASE_URL}/payroll`,// Get specific payroll entry by ID
     UPDATEPAYROLLBYID:`${API_BASE_URL}/payroll`,//Update an existing payroll entry
     DELETEPAYROLLBYID:`${API_BASE_URL}/payroll`,//Delete a payroll entry by ID

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

     //Ambulance
     CREATEAMBULANCE: `${API_BASE_URL}/ambulance`,//Post-method
     GETAMBULANCEALL:`${API_BASE_URL}/ambulance`,// Get-method
     GETAMBULANCEBYID:`${API_BASE_URL}/ambulance`,// Get specific Bank by ID
     UPDATEAMBULANCEBYID:`${API_BASE_URL}/ambulance`,//Update an existing Bank 
     DELETEAMBULANCEBYID:`${API_BASE_URL}/ambulance`,//Delete a Bank by ID

      //Blood-center
      CREATEBLOODCENTER: `${API_BASE_URL}/blood`,//Post-method
      GETBLOODCENTERALL:`${API_BASE_URL}/blood`,// Get-method
      GETBLOODCENTERBYID:`${API_BASE_URL}/blood`,// Get specific Bank by ID
      UPDATEBLOODCENTERBYID:`${API_BASE_URL}/blood`,//Update an existing Bank 
      DELETEBLOODCENTERBYID:`${API_BASE_URL}/blood`,//Delete a Bank by ID

   // Dargah complex
      CREATEDARGAHCOMPLEX: `${API_BASE_URL}/dc`,//Post-method
      GETDARGAHCOMPLEXALL:`${API_BASE_URL}/dc`,// Get-method
      GETDARGAHCOMPLEXBYID:`${API_BASE_URL}/dc`,// Get specific Bank by ID
      UPDATEDARGAHCOMPLEXBYID:`${API_BASE_URL}/dc`,//Update an existing Bank 
      DELETEDARGAHCOMPLEXBYID:`${API_BASE_URL}/dc`,//Delete a Bank by ID

   //Electricity Bill
      CREATEELECITYBILL: `${API_BASE_URL}/elebill`,//Post-method
      GETELECITYBILLALL:`${API_BASE_URL}/elebill`,// Get-method
      GETELECITYBILLBYID:`${API_BASE_URL}/elebill`,// Get specific Bank by ID
      UPDATEELECITYBILLBYID:`${API_BASE_URL}/elebill`,//Update an existing Bank 
      DELETEELECITYBILLBYID:`${API_BASE_URL}/elebill`,//Delete a Bank by ID

  // HHS -complex
      CREATEHHSCOMPLEX: `${API_BASE_URL}/hhs-complex`,//Post-method
      GETHHSCOMPLEXALL:`${API_BASE_URL}/hhs-complex`,// Get-method
      GETHHSCOMPLEXBYID:`${API_BASE_URL}/hhs-complex`,// Get specific Bank by ID
      UPDATEHHSCOMPLEXBYID:`${API_BASE_URL}/hhs-complex`,//Update an existing Bank 
      DELETEHHSCOMPLEXBYID:`${API_BASE_URL}/hhs-complex`,//Delete a Bank by ID

 // Parking
      CREATEPARKING: `${API_BASE_URL}/parking`,//Post-method
      GETPARKINGALL:`${API_BASE_URL}/parking`,// Get-method
      GETPARKINGBYID:`${API_BASE_URL}/parking`,// Get specific Bank by ID
      UPDATEPARKINGBYID:`${API_BASE_URL}/parking`,//Update an existing Bank 
      DELETEPARKINGBYID:`${API_BASE_URL}/parking`,//Delete a Bank by ID

      // vouchers
      CREATEVOUCHER: `${API_BASE_URL}/vouchers`,//Post-method
      GETVOUCHERALL:`${API_BASE_URL}/vouchers`,// Get-method
      GETVOUCHERBYID:`${API_BASE_URL}/vouchers`,// Get specific Bank by ID
      UPDATEVOUCHERBYID:`${API_BASE_URL}/vouchers`,//Update an existing Bank 
      DELETEVOUCHERBYID:`${API_BASE_URL}/vouchers`,//Delete a Bank by ID


}