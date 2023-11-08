import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Header from "../common/Header";
import "react-datepicker/dist/react-datepicker.css";
import "../../asset/style.css";
import axios from "axios";
import { APIS } from "../constants/api";
import { BiArrowBack } from "react-icons/bi";
import { Dropdown } from "react-bootstrap";
import { VoucherService } from "../../services/VoucherService";

const ViewVoucher = () => {
  const [allvoucher, setAllvoucher] = useState({});
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredVouchers, setFilteredVouchers] = useState({}); // Initially set to all vouchers
  const reversedData = Object.keys(filteredVouchers).reverse();

  const handleViewProfile = (v_id) => {
    navigate(`/detailvoucher/${v_id}`);
  };

  const fetchAllvoucher = async () => {
    try {
      const response = await VoucherService.getAllVoucher();
      console.log("API Response:", response);
      if (Array.isArray(response)) {
        const voucherobject = {};
        response.forEach((voucher) => {
          voucherobject[voucher.v_id] = voucher;
        });
        setAllvoucher(voucherobject);
        setFilteredVouchers(voucherobject); // Set filteredVouchers to initially contain all vouchers
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

  const handleEditProfile = (v_id) => {
    navigate(`/editvoucher/${v_id}`);
  };

  const handleDelete = async (v_id) => {
    try {
      await axios.delete(`${APIS.DELETEVOUCHERBYID}/${v_id}`);
      console.log("Deleted Successfully");
      const updatedVoucher = { ...allvoucher };
      delete updatedVoucher[v_id];
      setAllvoucher(updatedVoucher);
      setFilteredVouchers(updatedVoucher); // Update filteredVouchers after deleting
    } catch (error) {
      console.error("Error deleting Voucher:", error);
    }
  };

  const handleSearchInputChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);

    const filtered = Object.keys(allvoucher).filter((vouId) => {
      const voucher = allvoucher[vouId];
      const matchesSearch = Object.values(voucher).some((field) =>
        String(field).toLowerCase().includes(value.toLowerCase())
      );
      return matchesSearch;
    });

    const filteredVoucherData = {};
    filtered.forEach((vouId) => {
      filteredVoucherData[vouId] = allvoucher[vouId];
    });
    setFilteredVouchers(filteredVoucherData);
  };

  return (
    <div>
      <Header />
      <div className="mt-4">
      <div className="arrow-back-container">
        <BiArrowBack
          className="backLoginForm fs-2 text-dark"
          onClick={() => navigate(-1)}
        />
      </div>
      <h2 className="title">Voucher Details</h2>
      </div>
      <div className="d-flex seachcontentcenter mb-4 align-items-center">
        <div className="search ms-4">
          <input
            label="Search"
            type="text"
            className="form-control"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </div>
      </div>
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
          {/* {Object.keys(filteredVouchers).map((vouId, index) => {
            const voucher = filteredVouchers[vouId]; */}
            {reversedData.map((vouId, index) => {
              const voucher = filteredVouchers[vouId];
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
                        <Dropdown.Item onClick={() => handleViewProfile(vouId)}>
                          View Voucher
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => handleEditProfile(vouId)}>
                          Edit Voucher
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleDelete(vouId)}
                          className="red-text"
                        >
                          Delete
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

export default ViewVoucher;
