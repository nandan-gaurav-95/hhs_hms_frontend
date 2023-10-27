import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Header from "../common/Header";
import "react-datepicker/dist/react-datepicker.css";
import "../../asset/style.css";
import { BiArrowBack } from "react-icons/bi";
import { Dropdown } from "react-bootstrap";
import { MedicalService } from "../../services/MedicalService";
const ViewMedicalAck = () => {
  const [allmedicalack, setAllmedicalack] = useState({});

  const navigate = useNavigate();
  const handleViewProfile = (mdack_id) => {
    navigate(`/detailmedicalack/${mdack_id}`);
  };

  const fetchAllmedicalack = async () => {
    try {
      const response = await MedicalService.getAllMedical();
      console.log("API Response medical complex:", response);
      if (Array.isArray(response)) {
        const medicalobject={};
        response.forEach((medical) => {
          medicalobject[medical.mdack_id] = medical;
          });
          setAllmedicalack(medicalobject);
      } else {
        console.error("Invalid data received from the API:", response);
      }
    } catch (error) {
      console.error("Error fetching medical complex data:", error);
    }
  };
  useEffect(() => {
    fetchAllmedicalack();
  }, []);
     const handleEditProfile=(mdack_id)=>{
      navigate (`/editmedicalack/${mdack_id}`)
      }
  //    const handleDelete=(id)=>{
  //     navigate (`/`)
  //    }
  return (
    <div>
      <Header />
      <div className="arrow-back-container">
        <BiArrowBack
          className="backLoginForm fs-2 text-dark"
          onClick={() => navigate(-1)}
        />
      </div>
      <h2 className="title">Medical Acknowledgment Details</h2>

      <Table striped>
        <thead className="shadow-lg p-3 mb-5 bg-white rounded">
          <tr>
          <th>Sr. No.</th>
            <th>To Name</th>
            <th>Date</th>
            <th>Rupees</th>
            <th>Cheque No</th>
            <th>Dated</th>
            <th>Hospital I.P. NO.</th>
            <th>Disease</th>
            <th>Remark</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="shadow-lg p-3 mb-5 bg-white rounded">
          {Object.keys(allmedicalack).map((mdackId, index) => {
            const medical = allmedicalack[mdackId];
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{medical.toName}</td>
                <td>{medical.date}</td>
                <td>{medical.rupees}</td>
                <td>{medical.chequeNo}</td>
                <td>{medical.dated}</td>
                <td>{medical.hospIpNo}</td>
                <td>{medical.disease}</td>
                <td>{medical.remark}</td>
                <td>
                  <div className="dropdown">
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="secondary"
                        id="dropdownMenuButton"
                      >
                        &#8942;
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item
                          onClick={() => handleViewProfile(mdackId)}
                        >
                          View Medical Ack
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleEditProfile(mdackId)}
                        >
                          Edit Medical Ack
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ViewMedicalAck;