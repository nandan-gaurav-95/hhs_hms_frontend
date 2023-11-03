import React, { useState } from "react";
import "../../../asset/style.css";
import {
  MDBContainer,
  MDBInput,
  MDBBtn,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import hhsLogo from "../../../asset/images/hhs_logo.png";
// import hhspage from "../../../asset/images/hhs page.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import backgroundImage from "../../../asset/images/HHMS_bG.jpg";
import { BiArrowBack } from "react-icons/bi";
import { HiOutlineSupport } from "react-icons/hi";
import axios from "axios";
import { APIS } from "../api";
import { ToastContainer, toast } from "react-toastify";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
export default function Signup() {
  // back arrow
  const navigate = useNavigate();

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  const initialState = {
    name: "",
    email: "",
    password: "",
    dept: "",
  };
  const [formData, setFormData] = useState(initialState);
  // const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmpasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  // Function to handle form submission
  const handleSignup = async () => {
    try {
      // Make a POST request to the registration API
      console.log("HHIiiiiiii", formData);
      const response = await axios.post(APIS.CREATEACCOUNT, formData);
      if (response.status === 200) {
        console.log("Registration successful!");
        setFormData(initialState);
        toast.success("Submit successful!", {
          position: "top-right", // Adjust the position as needed
          autoClose: 1000,
        });
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        // Handle registration error, e.g., show an error message
        console.error("Registration failed.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  // Function to update form data when input fields change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handlePasswordChange = (event) => {
  //   const newPassword = event.target.value;
  //   setPassword(newPassword);

  //   // Password validation rules
  //   const passwordPattern = /^(?=.[a-z])(?=.[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  //   if (!passwordPattern.test(newPassword)) {
  //     setPasswordError(
  //       "Password must contain at least 8 characters, including one lowercase letter, one uppercase letter, and one number."
  //     );
  //   } else {
  //     setPasswordError("");
  //   }
  // };

  return (
    <div className="background-login" style={backgroundImageStyle}>
    {/* <div class="loginBOdyDiv bg-light d-flex justify-content-center align-item-center"> */}
      <ToastContainer />
      <MDBContainer
        fluid
        className="loginBOdyDiv d-flex align-items-center justify-content-center"
      >
        {/* <MDBRow> */}
        <MDBCol className="forbusiness-page col-sm-6 rounded py-0">
          <BiArrowBack
            className="backLoginForm fs-2 mt-4 ms-3 rounded  text-dark d-flex justify-content-start align-item-start"
            onClick={() => navigate(-1)}
          />

          <div className="d-flex flex-row  justify-content-md-center ">
            <div className="d-flex  w-75  p-5 py-1 pb-0 d-flex  flex-column  justify-content-center align-item-center">
              <h2 className="loginformtext fs-3 fw-bold text-center">
                H.H.S & H.M.S
              </h2>
              <p className="text-center pb-3">Sign Up to Account</p>

              <MDBInput
                wrapperClass="mb-4"
                label="Name"
                id="signupform2"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <MDBInput
                wrapperClass=" mb-4 "
                label="Email address"
                id="form1"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />

              <select
                className="form-select department-select transparent-input"
                wrapperClass="mb-4"
                label="Department"
                id="form2"
                type="text"
                name="dept"
                value={formData.dept}
                onChange={handleChange}
              >
                <option value="">Select Department</option>
                {/* <option value="Institutation Management"> Institutation Management </option> */}
                <option value="Property">Property Management</option>
                <option value="Inventory">Inventory Management</option>
                <option value="Employee">Employee Management</option>
                {/* <option value="Daybook">Daybook</option> */}
                <option value="Tenant ">Tenant Management</option>
                <option value="Tapal">Tapal</option>
                {/* <option value="Financial Assistance"> Financial Assistance </option> */}
                <option value="Electricity">Electricity</option>
                <option value="Voucher">Vouchers</option>
                <option value="Girls Hostel">Girls Hostel</option>
                <option value="HHS Complex">HHS Complex</option>
                <option value="Dargah Complex">Dargah Complex</option>
                <option value="Medical Acknowledgment">Medical Acknowledgment</option>
                <option value="Ambulance Van">Ambulance Van</option>
                <option value="Blood Center">Blood Center</option>
                <option value="Parking">Parking</option>
              </select>

              <MDBInput
                wrapperClass="mb-4  py-1 d-flex align-item-center "
                label="Password"
                id="form2"
                name="password"
                type={passwordVisible ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
              >
                <span
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  style={{ cursor: "pointer" }}
                >
                  {passwordVisible ? (
                    <AiFillEye className="mt-2 me-3" />
                  ) : (
                    <AiFillEyeInvisible className="mt-2 me-3" />
                  )}
                </span>
              </MDBInput>
              {passwordError && (
                <div className="text-danger">{passwordError}</div>
              )}
              <MDBInput
                wrapperClass="mb-4  py-1 d-flex align-item-center "
                label="Confirm Password"
                id="form2"
                type={confirmpasswordVisible ? "text" : "Password"}
              >
                <span
                  onClick={() =>
                    setConfirmPasswordVisible(!confirmpasswordVisible)
                  }
                  style={{ cursor: "pointer" }}
                >
                  {confirmpasswordVisible ? (
                    <AiFillEye className="mt-2 me-3" />
                  ) : (
                    <AiFillEyeInvisible className="mt-2 me-3" />
                  )}
                </span>
              </MDBInput>
              <MDBBtn onClick={handleSignup}>
                <text className="login text-white">Sign Up</text>
              </MDBBtn>
              <div className="text-center">
                <p className="my-2">
                  Already have an account?
                  <Link to="/" className="Signupdiv">
                    <text className="signup">Login</text>
                  </Link>
                </p>

                {/* <p className="hr-lines mb-4">OR </p> */}

                {/* <MDBCol className=" login-logo-margin col-sm-12 mb-4">
                    <Link to="" className="loginfacebook ">
                      <text className="facebook_log  py-2 d-flex  align-items-center">
                        {" "}
                        <BsFacebook className=" fs-3 mx-5 d-flex align-items-center" />{" "}
                        <span className=" ms-4 text-dark d-flex justify-content-center align-items-center">
                          continue with facebook
                        </span>
                      </text>
                    </Link>
                  </MDBCol>

                  <MDBCol className="login-logo-margin col-sm-12 mb-4">
                    <Link to="" className="logingoogle">
                      <text className="google_log py-2 d-flex  align-items-center ">
                        {" "}
                        <FcGoogle className="fs-3 mx-5 d-flex align-items-center" />
                        <span className="ms-4 text-dark d-flex justify-content-center align-items-center">
                          continue with google
                        </span>
                      </text>
                    </Link>
                  </MDBCol> */}

                <div className="loginformpic mt-0 mb-0">
                  <img src={hhsLogo} alt="Login image" className="loginimage" />
                </div>

                {/* bottom link list */}

                <div className="listcontainer w-100 d-flex justify-content-center ">
                  <ul className="custom-list d-flex justify-content-center ">
                    {/* <span className="GBDiv pt-1 pe-0 me-0">GB</span>
                      <Link>
                        <li className="ps-0 ms-0 pe-2 custom-list-item list-unstyled">
                          <text>English</text>
                        </li>
                      </Link> */}
                    <Link>
                      <li className=" pe-4 custom-list-item  ">
                        <text>
                          <HiOutlineSupport className="pt-0 pb-1" />
                          Support{" "}
                        </text>
                      </li>
                    </Link>
                    <Link>
                      <li className="pe-2 custom-list-item ">
                        <text>Privacy Policy</text>
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </MDBCol>

        {/* <MDBCol sm="6" className="d-none d-sm-block pe-0">
             <img src={hhspage} alt="Login image" className="signupimage" /> 
          </MDBCol> */}
        {/* </MDBRow> */}
      </MDBContainer>
    </div>
    // </div>
  );
}