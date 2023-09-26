import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { APIS } from "../constants/api";
import axios from "axios";
import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBBtn as Button,
  // MDBInput as Input,
} from "mdb-react-ui-kit";
import Sidebar from "../admin/Sidebar";


function PayrollDetails() {
  const { id } = useParams() || {};
  const [propData, setPropData] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [updatedPayroll, setUpdatedPayroll] = useState(propData.Payroll || {});
 
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        if (!id) return;
        const response = await axios.get(`${APIS.GETPAYROLLBYID}/${id}`);
        // console.log("Hiiiiiiiiiii",response);
        const { status = "", data } = response;
        if (status === 200) {
          setPropData(data);

          setUpdatedPayroll(data); // Initialize updatedPayroll with the current data

        } else {
          console.error("Error while fetching Payroll data");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);


  if (loading) {
    // Handle loading state here (e.g., display a loading spinner)
    return <div>Loading...</div>;
  }

  if (!propData) {
    // Handle the case when data is not available
    return <div>Data not available</div>;
  }

  const handleEditMode = async () => {
    setEditMode(!editMode);
    if (editMode) {

      try {
        console.log('data sent to upda', updatedPayroll);
        const response = await axios.put(`${APIS.GETALLPAYROLL}/${id}`, updatedPayroll);
        if (response.status === 200) {
          console.log("Payroll details updated successfully");
          navigate(`/payroll-details/${id}`)
        } else {
          console.error("Error while updating Payroll data");
          // Additional error handling or notifications can be added here
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      // Enter edit mode
      setEditMode(true);
    }
  };

  const goBack = (event) => {
    event.preventDefault();
    navigate("/allpayroll");
  };

  const handleChange = (event) => {
    // Update input value in edit mode
    const { name, value } = event.target;
    console.log(value);
    setUpdatedPayroll((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // console.log(propData);
  };

 
  const handleDelete = (index) => {
    // const updatedImages = [...selectedPhotos];
    // updatedImages.splice(index, 1);
    // setSelectedPhotos(updatedImages);

    // const updatedThumbnails = [...thumbnails];
    // updatedThumbnails.splice(index, 1);
    // setThumbnails(updatedThumbnails);
  };

  // Use the companyName in your component
  return (
    <div className="  ">
      <Sidebar>
      <Row className="justify-content-center">
        
        <Col>
          <h1 className="text-center mb-4">Payroll Details of {propData?.emp_name}</h1>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <ul className="list-group">
          <Row className="justify-content-center">
            <Col className="col-sm-5 ">
              {/* <strong>Name:</strong>
                        <li key={} className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.companyNm}</li> */}

              <strong>Empolyee ID:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="emp_id"
                  value={updatedPayroll.emp_id}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedPayroll.emp_id}
                </li>
              )}
              {/* <li  key={} className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.ctsNo}</li> */}

              <strong>Employee Name:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="emp_name"
                  value={updatedPayroll.emp_name}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedPayroll.emp_name}
                </li>
              )}
              {/* <li key={} className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {propData.email}</li> */}

              <strong>Date Of Hiring:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="date"
                  name="dateOfHiring"
                  value={updatedPayroll.dateOfHiring}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedPayroll.dateOfHiring}
                </li>
              )}
              {/* <li key={} className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.accountNm}</li> */}

              <strong>Date Of Leaving:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="date"
                  name="dateOfLeaving"
                  value={updatedPayroll.dateOfLeaving}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedPayroll.dateOfLeaving}
                </li>
              )}
              {/* <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.address}</li> */}

              <strong>Basic Salary:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="number"
                  name="basicSalary"
                  value={updatedPayroll.basicSalary}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedPayroll.basicSalary}
                </li>
              )}
              {/* <li className="list-group-item d-flex rounded-5 justify-content-between align-items-centeannualIncomedata.annualIncome}</li> */}

              <strong>Allowance:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="allowance"
                  value={updatedPayroll.allowance}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedPayroll.allowance}
                </li>
              )}
              {/* <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.boundries}</li> */}
            </Col>
            <Col className="col-sm-5 ">
              <strong>Deduction:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="deduction"
                  value={updatedPayroll.deduction}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedPayroll.deduction}
                </li>
              )}
              {/* <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.extentAcres}</li> */}

              <strong>Gross Salary:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="number"
                  name="grossSalary"
                  value={updatedPayroll.grossSalary}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedPayroll.grossSalary}
                </li>
              )}
              {/* <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.gazzetNo}</li> */}

              <strong>Net Salary:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="number"
                  name="netSalary"
                  value={updatedPayroll.netSalary}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedPayroll.netSalary}
                </li>
              )}
              {/* <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.gstNo}</li> */}

              <strong>PF Employee Contribution:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="pfEmployeeContribution"
                  value={updatedPayroll.pfEmployeeContribution}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedPayroll.pfEmployeeContribution}
                </li>
              )}
              {/* <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.registrationNo}</li> */}

              <strong>Loan Amount:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="number"
                  name="loanAmount"
                  value={updatedPayroll.loanAmount}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedPayroll.loanAmount}
                </li>
              )}
              {/* <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.taxAmt}</li> */}

              <strong>Loan Repayment Amount:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="number"
                  name="loanRepaymentAmount"
                  value={updatedPayroll.loanRepaymentAmount}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedPayroll.loanRepaymentAmount}
                </li>
              )}
              {/* <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.villageNm}</li> */}
            </Col>
          </Row>
        </ul>
      </Row>
      
      <Row className="text-center mt-4 form-group row ">
        <Col md-2>
          <Button
            variant="primary"
            square
            style={{ width: "100px" }}
            onClick={goBack}
          >
            Back
          </Button>
          <Button
            variant="primary"
            type="submit"
            square
            style={{ marginLeft: "10px", width: "100px" }}
            onClick={handleEditMode}
          >
            {editMode ? "Update" : "Edit"}
          </Button>
         
        </Col>
      </Row>
      </Sidebar>
     
    </div>
  );
}

export default PayrollDetails;