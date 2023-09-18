import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { APIS } from "./constants/api";
import "../asset/style.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBInput as Input,
  MDBBtn as Button,
} from "mdb-react-ui-kit";
// import { SampleRegFormService } from "../services/SampleRegFormService";
const SampleRegForm = () => {
  const navigate = useNavigate();
  const initialState = {
    companyNm: "",
    email: "",
    gstNo: "",
    mobNo: "",
    // logo: ''
    logo: null, // Change to null for the file input
  };
  const [formData, setFormData] = useState(initialState);
  const [validationErrors, setValidationErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    // Validate company name
    if (!formData.companyNm.trim()) {
      errors.companyNm = "Company Name is required";
    }

    // Validate email
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    // Validate GST No
    if (!formData.gstNo.trim()) {
      errors.gstNo = "GST No is required";
    }

    // Validate Mobile No
    if (!formData.mobNo.trim()) {
      errors.mobNo = "Mobile No is required";
    } else if (!/^[0-9]+$/.test(formData.mobNo)) {
      errors.mobNo = "contact No must contain only numbers";
    } else if (formData.mobNo.trim().length > 13) {
      errors.mobNo = "Contact No cannot be greater than 13 digits";
    }

    // Validate Logo
    if (!formData.logo) {
      errors.logo = "Logo is required";
    }

    // Return the errors object
    return errors;
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormData({
      ...formData,
      logo: file,
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear the validation error for the changed field
    clearValidationError(name);
  };

  const clearValidationError = (fieldName) => {
    const updatedValidationErrors = { ...validationErrors };
    delete updatedValidationErrors[fieldName];
    setValidationErrors(updatedValidationErrors);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const errors = validateForm();
    setValidationErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Clear validation errors
      setValidationErrors({});

      const formDataToSend = new FormData();
      formDataToSend.append("companyData", JSON.stringify(formData));
      formDataToSend.append("image", formData.logo);

      try {
        const response = await axios.post(APIS.CREATECOMPANY, formDataToSend, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (response.status === 200) {
          console.log("Company details saved successfully");
          setFormData(initialState);

          // Move the diffToast function call here
          diffToast();

          setTimeout(() => {
            navigate("/properties", {
              state: {
                companyId: response.data.id,
                companyName: formData.companyNm,
              },
            });
          }, 1000);
        }
      } catch (error) {
        console.error("Error:", error);

        toast.error("Submission failed. Please try again later.", {
          position: "top-right",
          autoClose: 1000,
        });
      }
    } else {
      toast.error("Validation errors. Please check your input.", {
        position: "top-right",
        autoClose: 1000,
      });
    }
  };

  const AllCompanyNameDetails = (event) => {
    event.preventDefault();
    navigate("/allCompanyName");
  };

  const diffToast = () => {
    toast.success("Submit successful!", {
      position: "top-right", // Adjust the position as needed
      autoClose: 1000,
    });
  };

  // const areAllFieldsFilled = () => {
  //   return (
  //     formData.companyNm.trim() &&
  //     formData.email.trim() &&
  //     formData.gstNo.trim() &&
  //     formData.mobNo.trim()
  //   );
  // };
  const condition = true;
  return (
    <div className=" p-2 mt-2 ">
      <h1 className=" mb-4 text-center">Sample Reg Form Company</h1>
      <Row className="justify-content-center">
        <Col md="6">
          <form onSubmit={handleSubmit}>
            <div className="form-field ">
              <Input
                label="Company Name"
                type="text"
                name="companyNm"
                value={formData.companyNm}
                onChange={handleChange}
                className="mt-4"
              />
              {validationErrors.companyNm && (
                <div className="text-danger ">{validationErrors.companyNm}</div>
              )}
            </div>

            <div className="form-field">
              <Input
                label="Email ID"
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-4"
              />
              {validationErrors.email && (
                <div className="text-danger">{validationErrors.email}</div>
              )}
            </div>

            <div className="form-field">
              <Input
                label="GST NO"
                type="text"
                name="gstNo"
                value={formData.gstNo}
                onChange={handleChange}
                className=" mt-4"
              />
              {validationErrors.gstNo && (
                <div className="text-danger ">{validationErrors.gstNo}</div>
              )}
            </div>

            <div className="form-field">
              <Input
                label="Contact No"
                type="tel"
                name="mobNo"
                value={formData.mobNo}
                onChange={handleChange}
                className="mt-4"
              />
              {validationErrors.mobNo && (
                <div className="text-danger">{validationErrors.mobNo}</div>
              )}
            </div>

            <div className="form-field">
              <Input
                label=" "
                type="file"
                name="logo"
                onChange={handleImageChange}
                className="mt-4"
              />
              {validationErrors.logo && (
                <div className="text-danger">{validationErrors.logo}</div>
              )}
            </div>

            <div className="text-center mt-4 form-group row ">
              <div className="col">
                <Button
                  variant="primary"
                  type="submit"
                  square={condition ? "true" : "false"}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
                <ToastContainer />
              </div>
            </div>
          </form>

          <div className="text-center mt-4 form-group row ">
          <div className="col">
            <Button
              variant="primary"
              type="button"
              square
              onClick={AllCompanyNameDetails}
            >
              AllCompanyName
            </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SampleRegForm;
