import React from "react";
import { MDBContainer, MDBCol, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
// import logo from "../../assets/images/1234 1.png";
import  "../../../asset/style.css";

import { BiArrowBack } from "react-icons/bi";

export default function ResetPassword() {
  // back arrow
  const navigate = useNavigate();

  return (
    <body class="forgetpagemaindiv bg-light  d-flex justify-content-center align-item-center">
      <MDBContainer className="  rounded d-flex  justify-content-center align-item-center">
        <BiArrowBack
          className="backLoginForm fs-2 mt-4 ms-3 rounded  text-dark d-flex justify-content-start align-item-start"
          onClick={() => navigate(-1)}
        />

        <MDBCol className="col-sm-6  rounded d-flex  justify-content-center align-item-center">
          <div className=" bg-light rounded shadow  w-75 px-3 pt-4 pb-5">
            <div className="loginformpic float-left">
              {/* <img src={logo} className="loginpic float-left" alt="logo" /> */}
            </div>

            <h2 className="loginformtext fs-3 fw-bold text-center p-5">
              Reset Password
            </h2>
            <div className="px-5 d-flex flex-column justify-content-center align-item-center">
              <MDBInput
                wrapperClass="px-5 mb-4"
                label="Enter New Password"
                id="form1"
                type="password"
              />
              <MDBInput
                wrapperClass="px-5 mb-4"
                label="Confirm Password"
                id="form1"
                type="password"
              />
              <MDBBtn className="mb-5">
                <Link to="/loginform" className="Forgetdiv">
                  <text className="forgetsubmit text-dark">Submit</text>
                </Link>
              </MDBBtn>
            </div>
          </div>
        </MDBCol>
      </MDBContainer>
    </body>
  );
}
