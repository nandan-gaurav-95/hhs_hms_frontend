import React, { useState } from "react";
import "../../../asset/style.css";
import { MDBContainer, MDBCol, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { AiFillEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { APIS } from "../api";

export default function ForgetPage() {
  const navigate = useNavigate();
  const initialState ={
    email: "",
    newPassword: "",
    confirmPassword: "",
  }
  const [formData, setFormData] = useState(initialState);

  const handleResetPassword = async () => {
    try {
      if (formData.newPassword !== formData.confirmPassword) {
        // Handle password mismatch error
        console.error("Passwords do not match.");
        return;
      }

      // Make a POST request to the forgot password API
      const response = await axios.post(APIS.FORGOTPASSWORD, formData);

      console.log("Forgot", response);

      if (response.status === 200) {
        // Password reset successful, you can redirect or show a success message here
        console.log("Password reset successful!");
      } else {
        // Handle password reset error, e.g., show an error message
        console.error("Password reset failed.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };



  return (
    <div className="forgetpagemaindiv d-flex justify-content-center align-item-center">
      <MDBContainer className="rounded d-flex justify-content-center align-item-center">
        <BiArrowBack
          className="backLoginForm fs-2 mt-4 ms-3 rounded text-dark d-flex justify-content-start align-item-start"
          onClick={() => navigate(-1)}
        />
        <MDBCol className="col-sm-6 rounded d-flex justify-content-center align-items-center">
          <div className="bg-light rounded shadow w-75 px-3 pt-4 pb-5">
            <div className="loginformpic float-left"></div>
            <h2 className="loginformtext fs-3 fw-bold text-center p-5">
              Forgot Password
            </h2>
            <div className="px-5 d-flex flex-column justify-content-center align-items-center">
              <MDBInput
                wrapperClass=" mb-4 "
                label="Email address"
                id="form1"
                type="email"
          
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <MDBInput
                wrapperClass="mb-4 d-flex align-item-center "
                label="Enter New Password"
                id="form2"
                type="password"
          
                value={formData.newPassword}
                onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
              >
                {" "}
                <AiFillEyeInvisible className="mt-2 me-3" />
              </MDBInput>

              <MDBInput
                wrapperClass="mb-4 d-flex align-item-center "
                label="Confirm Password"
                id="form2"
                type="password"
             
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              >
                {" "}
                <AiFillEyeInvisible className="mt-2 me-3" />
              </MDBInput>
              <MDBBtn onClick={handleResetPassword}>
              <Link to="/" className="Forgetdiv">
                  <text className="forgetsubmit text-dark">Submit</text>
                </Link>
              </MDBBtn>
            </div>
          </div>
        </MDBCol>
      </MDBContainer>
    </div>
  );
}
