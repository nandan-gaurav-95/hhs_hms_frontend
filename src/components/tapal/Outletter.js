import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Header from "../common/Header";
import "react-datepicker/dist/react-datepicker.css";
import "../../asset/style.css";
import { BiArrowBack } from "react-icons/bi";

const Outletter = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="arrow-back-container">
        <BiArrowBack
          className="backLoginForm fs-2 text-dark"
          onClick={() => navigate(-1)}
        />
      </div>
      <h2 className="title">Tapal Details</h2>

      <Table striped>
        <thead>
          <tr>
            <th>To Address</th>
            <th>From Address</th>
            <th>Date</th>
            <th>Letter No</th>
          </tr>
        </thead>
      </Table>
    </div>
  );
};

export default Outletter