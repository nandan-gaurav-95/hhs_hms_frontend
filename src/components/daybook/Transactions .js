import React, { useState } from "react";
import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBInput as Input,
  MDBBtn as Button,
} from "mdb-react-ui-kit";
import Sidebar from "../admin/Sidebar";
import Table from "react-bootstrap/Table";
import Header from "../common/Header";
import { Dropdown } from "react-bootstrap";
import { logDOM } from "@testing-library/react";
import { useNavigate } from "react-router-dom";

const Transactions = () => {
  const [filteredData, setFilteredData] = useState();
  return (
    <div className="">
      <Header />
      <h1 className="mb-4 text-center">Transactions Details</h1>
      <div className="d-flex mb-8 align-items-center">
        <Button variant="primary" className="w-25">
          View Transactions
        </Button>

        <div>
          <Button variant="primary" className="w-25">
            View Transactions
          </Button>
        </div>
        <div>
          <Button variant="primary" className="w-25">
            View Transactions
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
