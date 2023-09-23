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


function StudentDetails() {
  const { id } = useParams() || {};
  const [propData, setPropData] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [updatedStudent, setUpdatedStudent] = useState(propData.Student || {});
 
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        if (!id) return;
        const response = await axios.get(`${APIS.GETSTUDENTBYID}/${id}`);
        // console.log("Hiiiiiiiiiii",response);
        const { status = "", data } = response;
        if (response.data) {
          setPropData(data);

          setUpdatedStudent(data); // Initialize updatedStudent with the current data

        } else {
          console.error("Error while fetching Student data");
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
        console.log('data sent to upda', updatedStudent);
        const response = await axios.put(`${APIS.GETALLSTUDENT}/${id}`, updatedStudent);
        if (response.status === 200) {
          console.log("Student details updated successfully");
          navigate(`/student-details/${id}`)
        } else {
          console.error("Error while updating Student data");
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
    navigate("/allstudent");
  };

  const handleChange = (event) => {
    // Update input value in edit mode
    const { name, value } = event.target;
    console.log(value);
    setUpdatedStudent((prevData) => ({
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
    <div className=" p-2 mt-2 ">
      <Row className="justify-content-center">
        
        <Col>
          <h1 className="text-center mb-4">Student Details of {propData?.name}</h1>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <ul className="list-group">
          <Row className="justify-content-center">
            <Col className="col-sm-5 ">
              {/* <strong>Name:</strong>
                        <li key={} className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.companyNm}</li> */}

              <strong>SI No.:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="id"
                  value={updatedStudent.id}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedStudent.id}
                </li>
              )}
              {/* <li  key={} className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.ctsNo}</li> */}

              <strong>Name:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="name"
                  value={updatedStudent.name}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedStudent.name}
                </li>
              )}
              {/* <li key={} className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {propData.email}</li> */}

              <strong>Father Name:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="father_name"
                  value={updatedStudent.father_name}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedStudent.father_name}
                </li>
              )}
              <strong>Date Of Birth:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="date"
                  name="dateofbirth"
                  value={updatedStudent.dateofbirth}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedStudent.dateofbirth}
                </li>
              )}
               <strong>Mobile No.:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="number"
                  name="tel"
                  value={updatedStudent.mobile_no}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedStudent.mobile_no}
                </li>
              )}
             
 </Col>
            <Col className="col-md-5">
              <strong>gender:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="gender"
                  value={updatedStudent.gender}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedStudent.gender}
                </li>
              )}
              {/* <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.address}</li> */}

              <strong>Qualification:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="qualification"
                  value={updatedStudent.qualification}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedStudent.qualification}
                </li>
              )}
              {/* <li className="list-group-item d-flex rounded-5 justify-content-between align-items-centeannualIncomedata.annualIncome}</li> */}

              <strong>Trade:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="trade"
                  value={updatedStudent.trade}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedStudent.trade}
                </li>
              )}
              <strong>Total Fees:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="total_fees"
                  value={updatedStudent.total_fees}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedStudent.total_fees}
                </li>
              )}
              <strong>Session:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="session"
                  value={updatedStudent.session}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedStudent.session}
                </li>
              )}
              {/* <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center"> {data.boundries}</li> */}
            </Col>
            <Col className="col-sm-5 ">
           
               
               <strong>Address:</strong>
              {editMode ? (
                <input
                  className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                  type="text"
                  name="address"
                  value={updatedStudent.address}
                  onChange={handleChange}
                />
              ) : (
                <li className="list-group-item d-flex rounded-5 justify-content-between align-items-center">
                  {updatedStudent.address}
                </li>
              )}
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
      
     
    </div>
  );
}

export default StudentDetails;