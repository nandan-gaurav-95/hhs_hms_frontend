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
function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
}
export default App;
