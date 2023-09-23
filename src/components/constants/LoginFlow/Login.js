import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { AiFillEyeInvisible } from "react-icons/ai";
import  "../../../asset/style.css";
import hhspage from "../../../asset/images/hhs page.jpg";
import { HiOutlineSupport } from "react-icons/hi";


import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBInput as Input,
  MDBBtn as Button,
  MDBCheckbox as Checkbox,
} from "mdb-react-ui-kit";
import hhsLogo from "../../../asset/images/hhs logo.jpg";
function LoginForm() {
  const navigate = useNavigate();

  return (
    <body class="loginBOdyDiv bg-light p-0 m-0">
      <Container fluid className="loginBOdyDiv">
      {/* <Col sm="6" className="d-none d-sm-block h-100 w-50 pe-0">
      <img src={hhsLogo} alt="Login image" className="loginimage" />
          </Col> */}
        <Row>
          <Col className="forbusiness-page col-sm-6 rounded py-0">
            <div className="d-flex flex-row  justify-content-md-center ">
              <div className="d-flex  w-75  p-5 py-1 pb-0 d-flex  flex-column  justify-content-center align-item-center">
                <h2 className="loginformtext fs-3 p-3 fw-bold text-center">
                  H.H.S & H.M.S
                </h2>
                <p className="text-center">Login In to Your Account</p>

                <div className=" px-4 pb-0 d-flex  flex-column  justify-content-center">
                  <Input
                    wrapperClass="px-5 mb-4 py-1"
                    label="Email address"
                    id="form1"
                    type="email"
                  />
                  <Input
                    wrapperClass="mb-4  py-1 d-flex align-item-center "
                    label="Password"
                    id="form2"
                    type="password"
                  >
                    {" "}
                    <AiFillEyeInvisible className="mt-2 me-3" />
                  </Input>

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

                  <Button className="mb-2">
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

                    <p className="hr-lines mb-4">OR </p>

                    <Col className=" login-logo-margin col-sm-12 mb-4">
                      <Link to="" className="loginfacebook ">
                        <text className="facebook_log  py-2 d-flex  align-items-center">
                          {" "}
                          <BsFacebook className=" fs-3 mx-5 d-flex align-items-center" />{" "}
                          <span className=" ms-4 text-dark d-flex justify-content-center align-items-center">
                            continue with facebook
                          </span>
                        </text>
                      </Link>
                    </Col>

                    <Col className="login-logo-margin col-sm-12 mb-2">
                      <Link to="" className="logingoogle">
                        <text className="google_log py-2 d-flex  align-items-center ">
                          {" "}
                          <FcGoogle className="fs-3 mx-5 d-flex align-items-center" />
                          <span className="ms-4 text-dark d-flex justify-content-center align-items-center">
                            continue with google
                          </span>
                        </text>
                      </Link>
                    </Col>
                    <div className="loginformpic mt-3 mt-0 mb-0">
                    <img
                      src={hhsLogo}
                      alt="Login image"
                      className="loginimage"
                    />
                  </div>
                    <div className="listcontainer w-100 d-flex justify-content-center ">
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

          <Col
            sm="8"
            className="loginImgDiv h-100 w-50 d-none d-sm-block  ps-0 pe-0"
          >
            <img src={hhspage} alt="Login image" className="signupimage" /> 
          </Col>
        </Row>
      </Container>
    </body>
  );
}

export default LoginForm;
