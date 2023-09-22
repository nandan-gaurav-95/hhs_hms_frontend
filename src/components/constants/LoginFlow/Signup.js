import React from "react";
import "../../../asset/style.css";
import {
  MDBContainer,
  MDBInput,
  MDBBtn,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import hhsLogo from "../../../asset/images/hhs logo.jpg";
import hhspage from "../../../asset/images/hhs page.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { AiFillEyeInvisible } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { HiOutlineSupport } from "react-icons/hi";

export default function Signup() {
  // back arrow
  const navigate = useNavigate();

  return (
    <body class="loginBOdyDiv  bg-light p-0">
      <MDBContainer fluid>
        <MDBRow>
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
                  wrapperClass="px-5 mb-4"
                  label="Name"
                  id="signupform2"
                  type="name"
                />
                <MDBInput
                  wrapperClass=" mb-4 "
                  label="Email address"
                  id="form1"
                  type="email"
                />
                <MDBRow>
                  <MDBCol>
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Gender"
                      id="form2"
                      type="gender"
                    />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Age"
                      id="form2"
                      type="age"
                    />
                  </MDBCol>
                </MDBRow>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Addresss"
                  id="form2"
                  type="address"
                />

                <MDBInput
                  wrapperClass="mb-4 d-flex align-item-center "
                  label="Password"
                  id="form2"
                  type="password"
                >
                  {" "}
                  <AiFillEyeInvisible className="mt-2 me-3" />
                </MDBInput>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Confirm Password"
                  id="form2"
                  type=" confirm password"
                />
                <MDBBtn>
                  <Link to="" className="Login_Btm ">
                    <text className="log in text-white">Sign Up</text>
                  </Link>
                </MDBBtn>
                <div className="text-center">
                  <p className="my-2">
                    Already have an account?
                    <Link to="/loginform" className="Signupdiv">
                      <text className="signup">Login</text>
                    </Link>
                  </p>

                  <p className="hr-lines mb-4">OR </p>

                  <MDBCol className=" login-logo-margin col-sm-12 mb-4">
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
                  </MDBCol>
                  
                  <div className="loginformpic mt-0 mb-0">
                    <img
                      src={hhsLogo}
                      alt="Login image"
                      className="loginimage"
                    />
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

          <MDBCol sm="6" className="d-none d-sm-block pe-0">
             <img src={hhspage} alt="Login image" className="signupimage" /> 
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </body>
  );
}
