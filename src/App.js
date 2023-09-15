import React  from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import RegistrationForm from './components/Register';
// import MyComponent from './components/Mycomponent';
import SampleRegForm from './components/SampleRegForm';
import SampleMyComponent from './components/SampleMyComponent';
import AllCompanyName from './components/AllCompanyName';
import PropertyDetails from './components/PropertyDetails';
import PropertyPhotoForm from './components/PropertyPhoto';
import TenantForm from './components/TenantForm';
import PayrollForm from './components/Payroll';
import InventoryForm from './components/InventoryItem';
import DayBook from './components/DayBook';
import EmployeeForm from './components/Employee';
import PaymentForm from './components/PaymentForm';
import ReceiptForm from './components/ReceiptForm';
import ExpenseForm from './components/ExpenseForm';
import Sidebar from './components/admin/Sidebar';
import Header from './components/admin/Header';
import SidebarHeader from './components/admin/Sidebar';


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
      <Route path="/inventory" element={<InventoryForm/>}></Route>
      <Route path="/daybook" element={<DayBook/>}></Route>
      <Route path="/empolyee" element={<EmployeeForm/>}></Route>
      <Route path="/payment" element={<PaymentForm/>}></Route>
      <Route path="/receipt" element={<ReceiptForm/>}></Route>
      <Route path="/expense" element={<ExpenseForm/>}></Route>

      </Routes>
      </Sidebar>
    </BrowserRouter>
    </div>
  );
}
export default App;

