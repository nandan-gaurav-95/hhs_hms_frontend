import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Header from "../common/Header";
import "react-datepicker/dist/react-datepicker.css";
import "../../asset/style.css";
import { BiArrowBack } from "react-icons/bi";
import { Dropdown } from "react-bootstrap";
import { VoucherService } from "../../services/VoucherService";
const ViewVoucher = () => {
  const [allvoucher, setAllvoucher] = useState({});
  
  const navigate = useNavigate();
  const handleViewProfile = (v_id) => {
    navigate(`/detailvoucher/${v_id}`);
  };

  const fetchAllvoucher = async () => {
    try {
      const response = await VoucherService.getAllVoucher();
      console.log("API Respons:", response);
      if (Array.isArray(response)) {
        const voucherobject={};
        response.forEach((voucher) => {
          voucherobject[voucher.v_id] = voucher;
          });
          setAllvoucher(voucherobject);
      } else {
        console.error("Invalid data received from the API:", response);
      }
    } catch (error) {
      console.error("Error fetching voucher data:", error);
    }
  };
  useEffect(() => {
    fetchAllvoucher();
  }, []);
     const handleEditProfile=(v_id)=>{
       navigate (`/editvoucher/${v_id}`)
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
      <h2 className="title">Voucher Details</h2>

      <Table striped>
        <thead className="shadow-lg p-3 mb-5 bg-white rounded">
          <tr>
          <th>Sr. No.</th>
            
            <th>Date</th>
            <th>Amount Paid</th>
            <th>Towards</th>
            <th>Cheque No.</th>
            <th>Dated</th>
            <th>Rupees</th>
            <th>Remark</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="shadow-lg p-3 mb-5 bg-white rounded">
          {Object.keys(allvoucher).map((vouId, index) => {
            const voucher = allvoucher[vouId];
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{voucher.date}</td>
                <td>{voucher.amtPaid}</td>
                <td>{voucher.towards}</td>
                <td>{voucher.chequeNo}</td>
                <td>{voucher.dated}</td>
                <td>{voucher.rupees}</td>
                <td>{voucher.remark}</td>
              
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
                          onClick={() => handleViewProfile(vouId)}
                        >
                          View Voucher
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleEditProfile(vouId)}
                        >
                          Edit Voucher
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

export default ViewVoucher