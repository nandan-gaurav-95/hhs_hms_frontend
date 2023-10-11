import React, { useState } from 'react';
import {
    MDBContainer as Container,
    MDBRow as Row,
    MDBCol as Col,
    MDBInput as Input,
    MDBBtn as Button
} from 'mdb-react-ui-kit';
import Sidebar from '../admin/Sidebar';
import { Link, NavLink, useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Header from '../common/Header';
import { BiArrowBack } from "react-icons/bi";
const Payment = () => {
    const navigate = useNavigate();
    const tableData = [
        {
        cashremittiancetobank: '10',
        date: '2-4-99',
        amount: '500', 
        chequeissuedname: 'xyz',
        voucherno: '12', 
        voucherdate:'2-4-99',
        chequeamount: '1000', 
        chequedate: '2-4-99',
        purpose: 'abc', 
        department: 'xyz', 
       } ,
       {
        cashremittiancetobank: '10',
        date: '2-4-99',
        amount: '500', 
        chequeissuedname: 'xyz',
        voucherno: '12', 
        voucherdate:'2-4-99',
        chequeamount: '1000', 
        chequedate: '2-4-99',
        purpose: 'abc', 
        department: 'xyz', 
       } ,
       
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
                <h1 className=" mb-4 text-center">Payment Details</h1>
                <Table striped>
                    <thead className="shadow-lg p-3 mb-5 bg-white rounded">
                        <tr>
                            <th>CashRemittiancetoBank</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Cheque Issued Name</th>
                            <th>Voucher No</th>
                            <th>Voucher Date</th>
                            <th>Cheque Amount</th>
                            <th>Cheque Date</th>
                            <th>Purpose</th>
                            <th>Department</th>
                             </tr>
                    </thead>
                    <tbody className="shadow-lg p-3 mb-5 bg-white rounded">
                        {tableData.map((item) => (
                            <tr key={item.cashremittiancetobank}>
                                <td>{item.cashremittiancetobank}</td>
                                <td>{item.date}</td>
                                <td>{item.amount}</td>
                                <td>{item.chequeissuedname}</td>
                                <td>{item.voucherno}</td>
                                <td>{item.voucherdate}</td>
                                <td>{item.chequeamount}</td>
                                <td>{item.chequedate}</td>
                                <td>{item.purpose}</td>
                                <td>{item.department}</td>
                                
                                <td>
                               
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            
        </div>
    );
};
export default Payment;