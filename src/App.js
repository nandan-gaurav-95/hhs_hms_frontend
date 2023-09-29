import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import RegisterProp from "./components/property/RegisterProp";
import AllCompanyName from "./components/property/AllCompanyName";
import PropertyDetails from "./components/property/PropertyDetails";
import PropertyPhotoForm from "./components/property/PropertyPhoto";
import TenantForm from "./components/tenant/TenantForm";
import PayrollForm from "./components/payroll/Payroll";
import InventoryForm from "./components/inventory/InventoryItem";
import AllinventoryForm from "./components/inventory/Allinventory";
import InventoryDetails from "./components/inventory/Inventroydetails";
import EmployeeForm from "./components/employee/Employee";
import PaymentForm from "./components/payment/PaymentForm";
import ReceiptForm from "./components/receipt/ReceiptForm";
import AllReceipt from "./components/receipt/AllReceipt";
import ReceiptDetails from "./components/receipt/ReceiptDetails";
import ExpenseForm from "./components/expense/ExpenseForm";
import AllExpense from "./components/expense/AllExpense";
import ExpenseDetails from "./components/expense/ExpenseDetails";

import Allpayroll from "./components/payroll/Allpayroll";
import PayrollDetails from "./components/payroll/PayrollDetails";
import AllEmployeeForm from "./components/employee/AllEmployee";
import EmpolyeeDetails from "./components/employee/Employeedetails";
import AllpaymentForm from "./components/payment/Allpayment";
import PaymentDetails from "./components/payment/paymentDetails";
import StudentData from "./components/student/StudentData";
import AllStudentForm from "./components/student/AllStudent";
import StudentDetails from "./components/student/StudentDetails";
import BankForm from "./components/bank/BankForm";
import ShowBank from "./components/bank/ShowBank";
import BankDetails from "./components/bank/BankDetails";
import ShowTenant from "./components/tenant/ShowTenant";
import PropertyDetailsTenant from "./components/tenant/PropertyDetailsTenant";
import DayBook from "./components/daybook/DayBook";
import AllDaybook from "./components/daybook/AllDaybook";
import PropertyDetailsDaybook from "./components/daybook/PropertyDetailsDaybook";
import ForgetPage from "./components/constants/LoginFlow/Forgetpage";

import Signup from "./components/constants/LoginFlow/Signup";
import HomePage from "./components/admin/HomePage";
import ConsumableForm from "./components/inventory/Consumable";
import NonConsumable from "./components/inventory/NonConsumable";
import Property from "./components/property/Property";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
<Routes>
            {/* sign in */}
            {/* <Route path="" element={<LoginForm />}></Route> */}
            <Route path="/" element={<HomePage />}></Route> 
            <Route path="/forgetPage" element={<ForgetPage />}></Route>
            <Route path="/signUp" element={<Signup />}></Route>

            {/*prpperty management*/}
            <Route path="/register" element={<RegisterProp />}></Route>
            <Route path="/allCompanyName" element={<AllCompanyName />}></Route>
            <Route path="/comapany-details/:id" element={<PropertyDetails />}></Route>
            <Route path="/properties" element={<Property/>}></Route>
            <Route path="/property-photo/:id" element={<PropertyPhotoForm />}></Route>
            <Route path="/tenant" element={<TenantForm />}></Route>
            <Route path="/showtenant" element={<ShowTenant />}></Route>
            <Route path="/tenant-details/:id" element={<PropertyDetailsTenant />}></Route>
            <Route path="/payroll" element={<PayrollForm />}></Route>
            <Route path="/allpayroll" element={<Allpayroll />}></Route>
            {/* <Route path="/payroll-details/:id" element={<PayrollDetails />}></Route> */}
            <Route path="/payroll-details" element={<PayrollDetails />}></Route>

            {/* Inventory Management */}
            <Route path="/inventory" element={<InventoryForm />}></Route>
            <Route path="/allinventory" element={<AllinventoryForm />}></Route>
            <Route path="/inventory-details/:id" element={<InventoryDetails />}></Route>
            <Route path="/consumableform" element={<ConsumableForm />}></Route>
            <Route path="/nonconsumableform" element={<NonConsumable />}></Route>


            {/* Employee Management */}
            <Route path="/empolyee" element={<EmployeeForm />}></Route>
            <Route path="/allempolyee" element={<AllEmployeeForm />}></Route>
            <Route path="/employee-details/:id" element={<EmpolyeeDetails />}></Route>


            <Route path="/daybook" element={<DayBook />}></Route>
            <Route path="/alldaybook" element={<AllDaybook />}></Route>
            <Route path="/daybook-details/:id" element={<PropertyDetailsDaybook />}></Route>
            <Route path="/payment" element={<PaymentForm />}></Route>
            <Route path="/allpayment" element={<AllpaymentForm />}></Route>
            <Route path="/payment-details/:id" element={<PaymentDetails />}></Route>
            <Route path="/receipt" element={<ReceiptForm />}></Route>
            <Route path="/allreceipt" element={<AllReceipt />}></Route>
            <Route path="/receipt-details/:id" element={<ReceiptDetails />}></Route>
            <Route path="/expense" element={<ExpenseForm />}></Route>
            <Route path="/allexpense" element={<AllExpense />}></Route>
            <Route path="/expense-details/:id" element={<ExpenseDetails />}></Route>
            <Route path="/student" element={<StudentData />}></Route>
            <Route path="/allstudent" element={<AllStudentForm />}></Route>
            <Route path="/student-details/:id" element={<StudentDetails />}></Route>
            <Route path="/bankform" element={<BankForm />}></Route>
            <Route path="/showbank" element={<ShowBank />}></Route>
            <Route path="/bank-details/:id" element={<BankDetails />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
