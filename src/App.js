<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SampleMyComponent from "./components/company/SampleMyComponent";
import PropertyDetails from "./components/company/PropertyDetails";
import PropertyPhotoForm from "./components/company/PropertyPhoto";
import TenantForm from "./components/tenant/TenantForm";
import PayrollForm from "./components/payroll/Payroll";
import InventoryForm from "./components/inventory/InventoryItem";
import DayBook from "./components/daybook/DayBook";
import EmployeeForm from "./components/employee/Employee";
import PaymentForm from "./components/payment/PaymentForm";
import ReceiptForm from "./components/receipt/ReceiptForm";
import ExpenseForm from "./components/expense/ExpenseForm";
import Sidebar from "./components/admin/Sidebar";
import AllCompanyName from "./components/company/AllCompanyName";
import SampleRegForm from "./components/company/SampleRegForm";
import ShowTenant from "./components/tenant/ShowTenant";
import PropertyDetailsTenant from "./components/tenant/PropertyDetailsTenant";
import AllDaybook from "./components/daybook/AllDaybook";
import PropertyDetailsDaybook from "./components/daybook/PropertyDetailsDaybook";
import AllReceipt from "./components/receipt/AllReceipt";
import ReceiptDetails from "./components/receipt/ReceiptDetails";
import AllExpense from "./components/expense/AllExpense";
import ExpenseDetails from "./components/expense/ExpenseDetails";
import BankForm from "./components/Bank/BankForm";
import ShowBank from "./components/Bank/ShowBank";
import BankDetails from "./components/Bank/BankDetails";
import LoginForm from "./components/constants/LoginFlow/Login";
import ForgetPage from "./components/constants/LoginFlow/Forgetpage";
import ForgetPassword from "./components/constants/LoginFlow/ForgetPassword";
import Otp from "./components/constants/LoginFlow/Otp";
import ResetPassword from "./components/constants/LoginFlow/ResetPassword";
import Signup from "./components/constants/LoginFlow/Signup";
function App() {
  return (
    <div className="App">
       {/* <BrowserRouter>
      
        <Sidebar>
          <Routes>
            <Route path="/" element={<SampleRegForm />}></Route>
            <Route path="/allCompanyName" element={<AllCompanyName />}></Route>
            <Route path="/comapany-details/:id"element={<PropertyDetails />}></Route>
            <Route path="/properties" element={<SampleMyComponent />}></Route>
            <Route path="/property-photo/:id" element={<PropertyPhotoForm />}></Route>
            <Route path="/tenant" element={<TenantForm />}></Route>
            <Route path="/showtenant" element={<ShowTenant />}></Route>
            <Route path="/tenant-details/:id" element={<PropertyDetailsTenant/>}></Route>
            <Route path="/payroll" element={<PayrollForm />}></Route>
            <Route path="/inventory" element={<InventoryForm />}></Route>
            <Route path="/daybook" element={<DayBook />}></Route>
            <Route path="/alldaybook" element={<AllDaybook />}></Route>
            <Route path="/daybook-details/:id" element={<PropertyDetailsDaybook/>}></Route>
            <Route path="/empolyee" element={<EmployeeForm />}></Route>
            <Route path="/payment" element={<PaymentForm />}></Route>
            <Route path="/receipt" element={<ReceiptForm />}></Route>
            <Route path="/allreceipt" element={<AllReceipt />}></Route>
            <Route path="/receipt-details/:id" element={<ReceiptDetails />}></Route>
            <Route path="/expense" element={<ExpenseForm />}></Route>
            <Route path="/allexpense" element={<AllExpense />}></Route>
            <Route path="/expense-details/:id" element={<ExpenseDetails />}></Route>
            <Route path="/bankform" element={<BankForm />}></Route>
            <Route path="/showbank" element={<ShowBank />}></Route>
            <Route path="/bank-details/:id" element={<BankDetails />}></Route>

          </Routes>
        </Sidebar>
      </BrowserRouter>  */}
       <BrowserRouter>
        <Routes>
          <Route path="/loginform" element={<LoginForm />}></Route>
          <Route path="/forgetPage" element={<ForgetPage />}></Route>
          <Route path="/forgetPassword" element={<ForgetPassword />}></Route>
          <Route path="/otp" element={<Otp />}></Route>
          <Route path="/resetPassword" element={<ResetPassword />}></Route>
          <Route path="/signUp" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter> 
=======
import React  from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";


import SampleRegForm from './components/company/SampleRegForm';
import SampleMyComponent from './components/company/SampleMyComponent';
import AllCompanyName from './components/company/AllCompanyName';
import PropertyDetails from './components/company/PropertyDetails';
import PropertyPhotoForm from './components/company/PropertyPhoto';
import TenantForm from './components/Tenant/TenantForm';
import PayrollForm from './components/Payroll/Payroll';
import InventoryForm from './components/Inventory/InventoryItem';
import AllinventoryForm from './components/Inventory/Allinventory';
import InventoryDetails from './components/Inventory/Inventroydetails';
import DayBook from './components/DayBook/DayBook';
import EmployeeForm from './components/Employee/Employee';
import PaymentForm from './components/Payment/PaymentForm';
import ReceiptForm from './components/Receipt/ReceiptForm';
import ExpenseForm from './components/Expense/ExpenseForm';
import Sidebar from './components/admin/Sidebar';
import Header from './components/admin/Header';
import SidebarHeader from './components/admin/Sidebar';
import Photos from './components/constants/Photos';
import Allpayroll from './components/Payroll/Allpayroll';
import PayrollDetails from './components/Payroll/PayrollDetails';
import AllEmployeeForm from './components/Employee/AllEmployee';
import EmpolyeeDetails from './components/Employee/Employeedetails';
import AllpaymentForm from './components/Payment/Allpayment';
import PaymentDetails from './components/Payment/paymentDetails';
import StudentData from './components/Student/StudentData';
import AllStudentForm from './components/Student/AllStudent';
import StudentDetails from './components/Student/StudentDetails';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Sidebar>
      <Routes>
      {/* <Route path="/header" element={<Header />}></Route>
      <Route path="/sidebarHeader" element={<SidebarHeader/>}></Route> */}
      <Route path="/" element={<SampleRegForm/>}></Route>
      <Route path="/allCompanyName" element={<AllCompanyName/>}></Route>
      <Route path="/comapany-details/:id" element={<PropertyDetails/>}></Route>
      <Route path="/properties" element={<SampleMyComponent/>}></Route>
      <Route path="/property-photo/:id" element={<PropertyPhotoForm/>}></Route>

      <Route path="/tenant" element={<TenantForm/>}></Route>

      <Route path="/payroll" element={<PayrollForm/>}></Route>
      <Route path="/allpayroll" element={<Allpayroll/>}></Route>
      <Route path="/payroll-details/:id" element={<PayrollDetails/>}></Route>

      <Route path="/inventory" element={<InventoryForm/>}></Route>
      <Route path="/allinventory" element={<AllinventoryForm/>}></Route>
      <Route path="/inventory-details/:id" element={<InventoryDetails/>}></Route>

      <Route path="/daybook" element={<DayBook/>}></Route>

      <Route path="/empolyee" element={<EmployeeForm/>}></Route>
      <Route path="/allempolyee" element={<AllEmployeeForm/>}></Route>
      <Route path="/empolyee-details/:id" element={<EmpolyeeDetails/>}></Route>

      <Route path="/payment" element={<PaymentForm/>}></Route>
      <Route path="/allpayment" element={<AllpaymentForm/>}></Route>
      <Route path="/payment-details/:id" element={<PaymentDetails/>}></Route>

      <Route path="/receipt" element={<ReceiptForm/>}></Route>

      <Route path="/expense" element={<ExpenseForm/>}></Route>

      <Route path="/photo" element={<Photos/>}></Route>

      <Route path="/student" element={<StudentData/>}></Route>
      <Route path="/allstudent" element={<AllStudentForm/>}></Route>
      <Route path="/student-details/:id" element={<StudentDetails/>}></Route>

      </Routes>
      </Sidebar>
    </BrowserRouter>
>>>>>>> d04171144032451eaaf49e14d23f24edb91b2ee4
    </div>
  );
}
export default App;
<<<<<<< HEAD
=======

>>>>>>> d04171144032451eaaf49e14d23f24edb91b2ee4
