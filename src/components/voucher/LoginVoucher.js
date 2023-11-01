import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import "../../asset/style.css"
// import hhspage from "../../../asset/images/hhs page.jpg";
import { HiOutlineSupport } from "react-icons/hi";
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { toast,ToastContainer } from "react-toastify";
import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBInput as Input,
  MDBBtn as Button,
  MDBCheckbox as Checkbox,
} from "mdb-react-ui-kit";
import hhsLogo from "../../asset/images/hhs_logo.png";
import backgroundImage  from "../../asset/images/HHMS_bG.jpg";
function LoginVoucher() {
 
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  
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
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  const navigate = useNavigate();
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const handleLogin = async () => {
    // try {
    //   // Prepare the login data from your form inputs (email and password)
    //   const loginData = {
    //     email:email,// Get email value from your form input,
    //     password: password// Get password value from your form input,
    //   };
  
    //   // Make a POST request to your backend API endpoint for login
    //   console.log(loginData);
    //   const response = await axios.post(APIS.LOGINACCOUNT, loginData);

    //   if (response.status === 200) {
    //     // Handle successful login (e.g., redirect to another page)
    //     console.log("Login successful!");
        navigate("/homevoucher"); // Redirect to the desired page after successful login
    //   } else {
    //     // Handle login error, e.g., show an error message
    //     console.error("Login failed.");
    //   }
    // } catch (error) {
    //   // Handle network errors or other exceptions
    //     toast.error("Login Error", {
    //     position: "top-right", // Adjust the position as needed
    //     autoClose: 1000,
    //   });
    //   console.error("Error:", error);
    // }
  };

  return (
    //  <body class="loginBOdyDiv bg-light d-flex justify-content-center align-item-center 
    //  ">
    <div className="background-login" style={backgroundImageStyle}>
      <Container fluid className="loginBOdyDiv mt-4 d-flex align-items-center justify-content-center h-100">
      <ToastContainer/>
          <Col className="forbusiness-page col-sm-6 rounded py-0">
            <div className="d-flex flex-row  justify-content-md-center ">
              <div className="d-flex  w-75  p-5 py-1 pb-0 d-flex  flex-column  justify-content-center align-item-center">
                <h2 className="loginformtext fs-3 p-3 fw-bold text-center">
                  H.H.S & H.M.S
                </h2>
                <p className="text-center">Login In to Voucher</p>

                <div className=" px-4 pb-0 d-flex  flex-column  justify-content-center">
                  <Input
                    wrapperClass="mb-4 py-1"
                    label="Email address"
                    id="form1"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                 <Input
                  wrapperClass="mb-4  py-1 d-flex align-item-center "
                  label="Password"
                  id="form2"
                  type={passwordVisible ? "text" : "password"}
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
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
                </Input>
                {passwordError && (
                  <div className="text-danger">{passwordError}</div>
                )}

                  <div className="d-flex justify-content-between  mb-4">
                    <Checkbox
                      className="flexCheck"
                      value=""
                      id="flexCheckDefault"
                      label="Remember me"
                    />
                    <Link to="/forgetPage" className="Forgetmail ">
                      <text className="forgetpasss">Forgot password?</text>
                    </Link>
                  </div>

                  <Button className="mb-2"  onClick={handleLogin}>
                    <Link to="" className="Continue text-center ">
                      <text className="continue pt-0 mt-0 text-dark ">
                        Log In
                      </text>
                    </Link>
                  </Button>

                  <div className="businesshr text-center">
                     <p className="my-2 mb-2">
                      Don't have Account?
                      <Link to="/signUp" className="Signupdiv">
                        <text className="signup">Create Account</text>
                      </Link>
                    </p>

                    {/* <p className="hr-lines mb-4">OR </p> */} 

                    {/* <Col className=" login-logo-margin col-sm-12 mb-4">
                      <Link to="" className="loginfacebook ">
                        <text className="facebook_log  py-2 d-flex  align-items-center">
                          {" "}
                          <BsFacebook className=" fs-3 mx-5 d-flex align-items-center" />{" "}
                          <span className=" ms-4 text-dark d-flex justify-content-center align-items-center">
                            continue with facebook
                          </span>
                        </text>
                      </Link>
                    </Col> */}

                    {/* <Col className="login-logo-margin col-sm-12 mb-2">
                      <Link to="" className="logingoogle">
                        <text className="google_log py-2 d-flex  align-items-center ">
                          {" "}
                          <FcGoogle className="fs-3 mx-5 d-flex align-items-center" />
                          <span className="ms-4 text-dark d-flex justify-content-center align-items-center">
                            continue with google
                          </span>
                        </text>
                      </Link>
                    </Col> */}
                    <div className="loginformpic mt-3 mt-0 mb-0">
                    <img
                      src={hhsLogo}
                      alt="Login image"
                      className="loginimage"
                    />
                  </div>
                    <div className="listcontainer w-100 mt-2 d-flex justify-content-center ">
                      <ul className="custom-list d-flex justify-content-center ">
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
            </div>
          </Col>

          {/* <Col
            sm="8"
            className="loginImgDiv h-100 w-50 d-none d-sm-block  ps-0 pe-0"
          >
            <img src={hhspage} alt="Login image" className="signupimage" /> 
          </Col> */}
        {/* </Row> */}
      </Container>
    
     </div>
  );
}

export default LoginVoucher;