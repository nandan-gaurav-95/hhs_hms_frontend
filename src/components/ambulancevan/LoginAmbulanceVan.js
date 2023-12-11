import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import "../../asset/style.css";
// import hhspage from "../../../asset/images/hhs page.jpg";
import { HiOutlineSupport } from "react-icons/hi";
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBInput as Input,
  MDBBtn as Button,
  MDBCheckbox as Checkbox,
} from "mdb-react-ui-kit";
import hhsLogo from "../../asset/images/hhs_logo.png";
import backgroundImage from "../../asset/images/HHMS_bG.jpg";
function LoginAmbulanceVan() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [department, setDepartment] = useState("Ambulance Van");

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    navigate("/homeambulancevan"); // Redirect to the desired page after successful login
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
      <Container fluid className="loginBOdyDiv">
        <ToastContainer />
        <Col className="forbusiness-page">
          <div className="subforbusiness-page">
            <h2 className="loginformtext">H.H.S & H.M.S</h2>
            <p className="loginaddress">
              No.3, 1st Floor, Hazrath Hameed Shah Complex, Cubbonpet Main Road,
              Banglore - 560 002
            </p>
            <p className="subloginaddress">
              (Register Under Karnataka State Board of Auqaf)
            </p>
            <p className="subloginformtextprop">Ambulance Van Department</p>

            <div className="columnlogin">
              <Input
                wrapperClass="loginremember1"
                label="Email address"
                id="form1"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                wrapperClass="loginremember2"
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
                    <AiFillEye className="aifileye" />
                  ) : (
                    <AiFillEyeInvisible className="aifileye" />
                  )}
                </span>
              </Input>
              {passwordError && (
                <div className="text-danger">{passwordError}</div>
              )}

              <div className="remember">
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

              <div className="loginbtn">
                <Button className="logbtn" onClick={handleLogin}>
                  <text className="logincolor">Log In</text>
                </Button>
              </div>

              <div className="businesshr">
                <p className="acc">
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
                <div className="loginformpic">
                  <img
                    src={hhsLogo}
                    alt="Login image"
                    className="loginimage center-logo"
                  />
                </div>
                <div className="listcontainer">
                  <ul className="custom-list ">
                    <Link>
                      <li className="custom-list-item  ">
                        <text>
                          <HiOutlineSupport className="HiOutlineSupport" />
                          Support{" "}
                        </text>
                      </li>
                    </Link>
                    <Link>
                      <li className="custom-list-item ">
                        <text>Privacy Policy</text>
                      </li>
                    </Link>
                  </ul>
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

export default LoginAmbulanceVan;
