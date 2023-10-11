import React, { useState } from "react";
import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBInput as Input,
  MDBBtn as Button,
} from "mdb-react-ui-kit";
import Sidebar from "../admin/Sidebar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Header from "../common/Header";
import { BiArrowBack } from "react-icons/bi";
const Receipt = () => {
  const navigate = useNavigate();
  const tableData = [
    {
      receiptno: "10",
      date: "2-4-99",
      tenantname: "xyz",
      shopno: "12",
      paymentmonth: "march",
      paymentmethod: "online",
      receivedbankname: "SBI",
    },
    {
      receiptno: "10",
      date: "2-4-99",
      tenantname: "xyz",
      shopno: "12",
      paymentmonth: "march",
      paymentmethod: "online",
      receivedbankname: "SBI",
    },
  ];

  return (
    <div className="">
      <Header />
      <div className="arrow-back-container">
        <BiArrowBack
          className="backLoginForm fs-2 text-dark"
          onClick={() => navigate(-1)}
        />
      </div>
      <h1 className=" mb-4 text-center">Receipt Details</h1>
      <Table striped>
        <thead className="shadow-lg p-3 mb-5 bg-white rounded">
          <tr>
            <th>Receipt No</th>
            <th>Date</th>
            <th>Tenant Name</th>
            <th>Shop No</th>
            <th>Payment Month</th>
            <th>Payment Method</th>
            <th>Received Bank Name</th>
          </tr>
        </thead>
        <tbody className="shadow-lg p-3 mb-5 bg-white rounded">
          {tableData.map((item) => (
            <tr key={item.receiptno}>
              <td>{item.receiptno}</td>
              <td>{item.date}</td>
              <td>{item.tenantname}</td>
              <td>{item.shopno}</td>
              <td>{item.paymentmonth}</td>
              <td>{item.paymentmethod}</td>
              <td>{item.receivedbankname}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default Receipt;