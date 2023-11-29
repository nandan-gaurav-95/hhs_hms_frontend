import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterProp from "./components/property/RegisterProp";
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
import Property from "./components/property/Property";
import ShowInventory from "./components/inventory/ShowInventory";
import AddInventory from "./components/inventory/AddInventory";

import ViewPropertyDetail from "./components/property/ViewPropertyDetails";
import TenantDetails from "./components/tenant/TenantDetails";
import AllProperties from "./components/property/AllProperties";
import ViewTenantDetail from "./components/tenant/ViewTenantDetail";
import ViewEmpProfile from "./components/employee/ViewEmpProfile";
import Transactions from "./components/daybook/Transactions";
import School from "./components/institute/School";
import Viewdaybook from "./components/daybook/Viewdaybook";
import AllocatedInventory from "./components/employee/AllocatedInventory";
import DistributeInventory from "./components/inventory/DistributeInventory";
import Addtapal from "./components/tapal/Addtapal";
import Viewtapal from "./components/tapal/Viewtapal";
import Edittapal from "./components/tapal/Edittapal";
import Payment from "./components/daybook/Payment";
import Receipt from "./components/daybook/Receipt";
import GirlsHostel from "./components/hostel/GirlsHostel"


import Scholarship from "./components/financial_assistance/Scholarship";
import Medicalaid from "./components/financial_assistance/Medicalaid";

//hhs and dargah complex
import HHSComplex from "./components/hhscomplex/HHSComplex";
import ViewHHSComplex from "./components/hhscomplex/ViewHHSComplex";
import DargahComplex from "./components/dargahcompex/DargahComplex";
import ViewDargahComplex from "./components/dargahcompex/ViewDargahComplex";

//medical
import BloodCenter from "./components/bloodcenter/BloodCenter";
import ViewBloodCenter from "./components/bloodcenter/ViewBloodCenter";
import AmbulanceVan from "./components/ambulancevan/AmbulanceVan";
import ViewAmbulanceVan from "./components/ambulancevan/ViewAmbulanceVan";
import MedicalAck from "./components/medicalack/MedicalAck";
import ViewMedicalAck from "./components/medicalack/ViewMedicalAck";

//parking
import Parking from "./components/parking/Parking";
import ViewParking from "./components/parking/ViewParking";

//voucher
import Voucher from "./components/voucher/Voucher";
import ViewVoucher from "./components/voucher/ViewVoucher";
//Electricity
import ElectricityBill from "./components/electricity/ElectricityBill";
import ViewElectricityBill from "./components/electricity/ViewElectricityBill";
import DetailMedicalAck from "./components/medicalack/DetailMedicalAck";
import DetailElectricityBill from "./components/electricity/DetailElectricityBill";
import DetailVoucher from "./components/voucher/DetailVoucher";
import DetailParking from "./components/parking/DetailParking";
import DetailDargahComplex from "./components/dargahcompex/DetailDargahComplex";
import DetailHHSComplex from "./components/hhscomplex/DetailHHSComplex";
import DetailBloodCenter from "./components/bloodcenter/DetailBloodCenter";
import DetailsAmbulanceVan from "./components/ambulancevan/DetailsAmbulanceVan";

//Edit
import EditElectricityBill from "./components/electricity/EditElectricityBill";
import EditVoucher from "./components/voucher/EditVoucher";
import EditHHSComplex from "./components/hhscomplex/EditHHSComplex";
import EditDargahComplex from "./components/dargahcompex/EditDargahComplex";
import EditAmbulanceVan from "./components/ambulancevan/EditAmbulanceVan";
import EditBloodCenter from "./components/bloodcenter/EditBloodCenter";
import EditParking from "./components/parking/EditParking";
import EditMedicalAck from "./components/medicalack/EditMedicalAck";
import LoginForm from "./components/constants/LoginFlow/Login";
import LoginProperty from "./components/property/LoginProperty";
import HomeProperty from "./components/property/HomeProperty";
import HomeInventory from "./components/inventory/HomeInventory";
import LoginInventory from "./components/inventory/LoginInventory";
import LoginTenant from "./components/tenant/LoginTenant";
import HomeTenant from "./components/tenant/HomeTenant";
import LoginTapal from "./components/tapal/LoginTapal";
import HomeTapal from "./components/tapal/HomeTapal";
import LoginVoucher from "./components/voucher/LoginVoucher";
import HomeVoucher from "./components/voucher/HomeVoucher";
import LoginDargah from "./components/dargahcompex/LoginDargah";
import HomeDargah from "./components/dargahcompex/HomeDargah";
import LoginEmployee from "./components/employee/LoginEmployee";
import HomeEmployee from "./components/employee/HomeEmployee";
import LoginElectricity from "./components/electricity/LoginElectricity";
import HomeElectricity from "./components/electricity/HomeElectricity";
import LoginHHSComplex from "./components/hhscomplex/LoginHHSComplex";
import HomeHHSComplex from "./components/hhscomplex/HomeHHSComplex";
import LoginMedicalAck from "./components/medicalack/LoginMedicalAck";
import HomeMedicalAck from "./components/medicalack/HomeMedicalAck";
import LoginAmbulanceVan from "./components/ambulancevan/LoginAmbulanceVan";
import HomeAmbulanceVan from "./components/ambulancevan/HomeAmbulanceVan";
import LoginBloodCenter from "./components/bloodcenter/LoginBloodCenter";
import HomeBloodCenter from "./components/bloodcenter/HomeBloodCenter";
import LoginParking from "./components/parking/LoginParking";
import HomeParking from "./components/parking/HomeParking";
import LoginGirlsHostel from "./components/hostel/LoginGirlsHostel";
import HomeGirlsHostel from "./components/hostel/HomeGirlsHostel";
import ViewGirlsHostel from "./components/hostel/ViewGirlsHostel";
import EditGirlsHostel from "./components/hostel/EditGirlsHostel";
import DetailGirlsHostel from "./components/hostel/DetailGirlsHostel";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* sign in */}
          <Route path="login" element={<LoginForm />}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/forgetPage" element={<ForgetPage />}></Route>
          <Route path="/signUp" element={<Signup />}></Route>

          {/*property management*/}
          <Route path="/register" element={<RegisterProp />}></Route>

          <Route path="/loginprop" element={<LoginProperty />}></Route>
          <Route path="/homeprop" element={<HomeProperty />}></Route>
          <Route path="/allProperties" element={<AllProperties />}></Route>
          <Route path="/profile/:id" element={<ViewPropertyDetail />}></Route>
          <Route path="/property-details/:id" element={<PropertyDetails />}></Route>
          <Route path="/properties" element={<Property />}></Route>
          <Route path="/property-photo/:id" element={<PropertyPhotoForm />}></Route>
         
         {/* tenant */} 
          <Route path="/logintenant" element={<LoginTenant />}></Route>
          <Route path="/hometenant" element={<HomeTenant />}></Route>
          <Route path="/tenant" element={<TenantForm />}></Route>
          <Route path="/showtenant" element={<ShowTenant />}></Route>
          <Route path="/tenant-details/:id" element={<TenantDetails />}></Route>
          {/* <Route path="/tenant-details/:id" element={<PropertyDetailsTenant />}></Route> */}
          <Route path="/tenantprofile/:id" element={<ViewTenantDetail />}></Route>

          <Route path="/payroll" element={<PayrollForm />}></Route>
          <Route path="/allpayroll" element={<Allpayroll />}></Route>
          {/* <Route path="/payroll-details/:id" element={<PayrollDetails />}></Route> */}
          <Route path="/payroll-details" element={<PayrollDetails />}></Route>

          {/* Inventory Management */}
          <Route path="/logininventory" element={<LoginInventory />}></Route>
          <Route path="/homeinventory" element={<HomeInventory />}></Route>
          <Route path="/inventory" element={<InventoryForm />}></Route>
          <Route path="/allinventory" element={<AllinventoryForm />}></Route>
          <Route path="/inventory-details/:id" element={<InventoryDetails />} ></Route>
          <Route path="/addinventory" element={<AddInventory />}></Route>
          <Route path="/showinventory" element={<ShowInventory />}></Route>
          <Route path="/distributeinventory" element={<DistributeInventory />}></Route>
          <Route path="/allocated-inventory/:id" element={<AllocatedInventory />} />


          {/* Employee Management */}
          <Route path="/loginemployee" element={<LoginEmployee />}></Route>
          <Route path="/homeemployee" element={<HomeEmployee />}></Route>
          <Route path="/employee" element={<EmployeeForm />}></Route>
          <Route path="/allemployee" element={<AllEmployeeForm />}></Route>
          <Route path="/employee-details/:id" element={<EmpolyeeDetails />}></Route>
          <Route path="/employeeprofile/:id" element={<ViewEmpProfile />} ></Route>

          {/* Daybook */}
          <Route path="/daybook" element={<DayBook />}></Route>
          <Route path="/alldaybook" element={<AllDaybook />}></Route>
          <Route path="/daybook-details/:id" element={<PropertyDetailsDaybook />} ></Route>
          <Route path="/transaction" element={<Transactions />}></Route>
          <Route path="/viewdaybook" element={<Viewdaybook />}></Route>

          {/* Tapal */}
          <Route path="/logintapal" element={<LoginTapal />}></Route>
          <Route path="/hometapal" element={<HomeTapal />}></Route>
          <Route path="/addtapal" element={<Addtapal />}></Route>
          <Route path="/viewtapal" element={<Viewtapal />}></Route>
          <Route path="/edit-tapal/:id" element={<Edittapal />}></Route>


          <Route path="/payment" element={<PaymentForm />}></Route>
          <Route path="/allpayment" element={<AllpaymentForm />}></Route>
          <Route path="/payment-details/:id" element={<PaymentDetails />} ></Route>
          <Route path="/receipt" element={<ReceiptForm />}></Route>
          <Route path="/allreceipt" element={<AllReceipt />}></Route>
          <Route path="/receipt-details/:id" element={<ReceiptDetails />} ></Route>
          <Route path="/expense" element={<ExpenseForm />}></Route>
          <Route path="/allexpense" element={<AllExpense />}></Route>
          <Route path="/expense-details/:id" element={<ExpenseDetails />} ></Route>
          <Route path="/student" element={<StudentData />}></Route>
          <Route path="/allstudent" element={<AllStudentForm />}></Route>
          <Route path="/student-details/:id" element={<StudentDetails />}></Route>
          <Route path="/bankform" element={<BankForm />}></Route>
          <Route path="/showbank" element={<ShowBank />}></Route>
          <Route path="/bank-details/:id" element={<BankDetails />}></Route>

          <Route path="/school" element={<School />}></Route>
          <Route path="/paymentt" element={<Payment />}></Route>
          <Route path="/receiptt" element={<Receipt />}></Route>

          <Route path="/scholarship" element={<Scholarship />}></Route>
          <Route path="/medicalaid" element={<Medicalaid />}></Route>

         {/* girl hostel */}
          <Route path="/logingirlshostel" element={<LoginGirlsHostel />}></Route>
          <Route path="/homegirlshostel" element={<HomeGirlsHostel />}></Route>
          <Route path="/viewgirlshostel" element={<ViewGirlsHostel />}></Route>
          <Route path="/detailgirlshostel/:id" element={<DetailGirlsHostel />}></Route>
          <Route path="/editgirlshostel/:id" element={<EditGirlsHostel />}></Route>
          <Route path="/hostel" element={<GirlsHostel />}></Route>

         {/* hhscomplex */}
          <Route path="/loginhhscomplex" element={<LoginHHSComplex />}></Route>
          <Route path="/homehhscomplex" element={<HomeHHSComplex />}></Route>
          <Route path="/hhscomplex" element={<HHSComplex />}></Route>
          <Route path="/viewhhscomplex" element={<ViewHHSComplex/>}></Route>
          <Route path="/detailhhscomplex/:id" element={<DetailHHSComplex />}></Route>
          <Route path="/edithhscomplex/:id" element={<EditHHSComplex />}></Route>
  
         {/* Dargah */}
         <Route path="/logindargah" element={<LoginDargah />}></Route>
          <Route path="/homedargah" element={<HomeDargah />}></Route>
          <Route path="/dargahcomplex" element={<DargahComplex />}></Route>
          <Route path="/viewdargahcomplex" element={<ViewDargahComplex/>}></Route>
          <Route path="/detaildergah/:id" element={<DetailDargahComplex />}></Route>
          <Route path="/editdargahcomplex/:id" element={<EditDargahComplex />}></Route>

         {/* blood center */}
         <Route path="/loginbloodcenter" element={<LoginBloodCenter />}></Route>
          <Route path="/homebloodcenter" element={<HomeBloodCenter />}></Route>
          <Route path="/bloodcenter" element={<BloodCenter />}></Route>
          <Route path="/viewbloodcenter" element={<ViewBloodCenter />}></Route>

          <Route path="/detailbloodcenter/:id" element={<DetailBloodCenter />}></Route>
          <Route path="/editbloodcenter/:id" element={<EditBloodCenter />}></Route>

          
          {/* ambulance Van */}
          <Route path="/loginambulancevan" element={<LoginAmbulanceVan />}></Route>
          <Route path="/homeambulancevan" element={<HomeAmbulanceVan />}></Route>
          <Route path="/ambulancevan" element={<AmbulanceVan />}></Route>
          <Route path="/viewambulancevan" element={<ViewAmbulanceVan />}></Route>
          <Route path="/detailsambulancevan/:id" element={<DetailsAmbulanceVan />}></Route>
          <Route path="/editambulancevan/:id" element={<EditAmbulanceVan />}></Route>
          
          {/* parking */}
          <Route path="/loginparking" element={<LoginParking />}></Route>
          <Route path="/homeparking" element={<HomeParking />}></Route>
          <Route path="/parking" element={<Parking />}></Route>
          <Route path="/viewparking" element={<ViewParking />}></Route>
          <Route path="/detailparking/:id" element={<DetailParking />}></Route>
          <Route path="/editparking/:id" element={<EditParking />}></Route>


          {/* medicalack */}
          <Route path="/loginmedicalack" element={<LoginMedicalAck />}></Route>
          <Route path="/homemedicalack" element={<HomeMedicalAck />}></Route>
          <Route path="/medicalack" element={<MedicalAck />}></Route>
          <Route path="/viewmedicalack" element={<ViewMedicalAck/>}></Route>
          <Route path="/detailmedicalack/:id" element={<DetailMedicalAck />}></Route>
          <Route path="/editmedicalack/:id" element={<EditMedicalAck />}></Route>


         {/* voucher  */}
          <Route path="/loginvoucher" element={<LoginVoucher />}></Route>
          <Route path="/homevoucher" element={<HomeVoucher />}></Route>
          <Route path="/voucher" element={<Voucher />}></Route>
          <Route path="/viewvoucher" element={<ViewVoucher />}></Route>
          <Route path="/detailvoucher/:id" element={<DetailVoucher />}></Route>
          <Route path="/editvoucher/:id" element={<EditVoucher />}></Route>

         {/* electricity */}
          <Route path="/loginelectricity" element={<LoginElectricity />}></Route>
          <Route path="/homeelectricity" element={<HomeElectricity />}></Route>
          <Route path="/electricitybill" element={<ElectricityBill />}></Route>
          <Route path="/viewelectricitybill" element={<ViewElectricityBill />}></Route>
          <Route path="/detailelectricitybill/:id" element={<DetailElectricityBill />}></Route>
          <Route path="/editelectricitybill/:id" element={<EditElectricityBill />}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;