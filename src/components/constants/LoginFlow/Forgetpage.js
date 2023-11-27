import React, { useState } from "react";
import "../../../asset/style.css";
import { MDBContainer, MDBCol, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { APIS } from "../api";

export default function ForgetPage() {
  const navigate = useNavigate();
  const initialState = {
    email: "",
    newPassword: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [passwordVisible, setPasswordVisible] = useState(false);

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
    <div className="forgetpagemaindiv">
      <MDBContainer className="subforget">
        <BiArrowBack
          className="backLoginFormforget "
          onClick={() => navigate(-1)}
        />
        <MDBCol className="mainforget">
          <div className="bglight">
            <div className="loginformpic "></div>
            <h2 className="loginformtext ">Forgot Password</h2>
            <div className="forgetcolumn ">
              <MDBInput
                wrapperClass=" mb-4 "
                label="Email address"
                id="form1"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <MDBInput
                wrapperClass="mb-4 d-flex align-item-center "
                label="Enter New Password"
                id="form2"
                type={passwordVisible ? "text" : "password"}
                value={formData.newPassword}
                onChange={(e) =>
                  setFormData({ ...formData, newPassword: e.target.value })
                }
              >
                <span
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  style={{ cursor: "pointer" }}
                >
                  {passwordVisible ? (
                    <AiFillEye className="aifileye" />
                  ) : (
                    <AiFillEyeInvisible className="aifileye" />
                  )}
                </span>
              </MDBInput>

              <MDBInput
                wrapperClass="mb-4 d-flex align-item-center "
                label="Confirm Password"
                id="form2"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
              >
                {" "}
                <span
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  style={{ cursor: "pointer" }}
                >
                  {passwordVisible ? (
                    <AiFillEye className="aifileye" />
                  ) : (
                    <AiFillEyeInvisible className="aifileye" />
                  )}
                </span>
              </MDBInput>
              <MDBBtn onClick={handleResetPassword}>
                <Link to="/" className="Forgetdiv">
                  <text className="forgetsubmit">Submit</text>
                </Link>
              </MDBBtn>
            </div>
          </div>
        </MDBCol>
      </MDBContainer>
    </div>
  );
}