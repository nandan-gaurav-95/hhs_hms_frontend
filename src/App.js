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

      </Routes>
      </Sidebar>
    </BrowserRouter>
    </div>
  );
}
export default App;

