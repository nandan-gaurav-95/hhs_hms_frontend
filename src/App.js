import React  from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationForm from './components/Register';
import MyComponent from './components/Mycomponent';
import SampleRegForm from './components/SampleRegForm';
import SampleMyComponent from './components/SampleMyComponent';
import AllCompanyName from './components/AllCompanyName';
import PropertyDetails from './components/PropertyDetails';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      {/* <Route path="/" element={<RegistrationForm/>}></Route> */}
      <Route path="/" element={<SampleRegForm/>}></Route>
      <Route path="/allCompanyName" element={<AllCompanyName/>}></Route>
      <Route path="/propertyDetails" element={<PropertyDetails/>}></Route>
      {/* <Route path="/properties" element={<MyComponent/>}></Route> */}
      <Route path="/properties" element={<SampleMyComponent/>}></Route>
      {/* <Route path="/show-company" element={<RegistrationForm/>}></Route> */}
      </Routes>
    </BrowserRouter>
    </div>
  );

}
export default App;

