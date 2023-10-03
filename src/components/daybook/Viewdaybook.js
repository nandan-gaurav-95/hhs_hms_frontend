import React, { useState } from 'react';
import {
    MDBContainer as Container,
    MDBRow as Row,
    MDBCol as Col,
    MDBInput as Input,
    MDBBtn as Button
} from 'mdb-react-ui-kit';
import Sidebar from '../admin/Sidebar';
import Table from 'react-bootstrap/Table';
import Header from '../common/Header';

const Viewdaybook = () => {
    const tableData = [
        {
        formID: '1',
        amt: '23456',
        paymentMethod: 'cash', 
        date: '2-4-99',
       } ,
       {
        formID: '2',
        amt: '11111',
        paymentMethod: 'cheque', 
        date: '2-7-99',
       } ,
       {
        formID: '3',
        amt: '222222',
        paymentMethod: 'online', 
        date: '2-8-99',
       } ,
    ];
   

    return (
        <div className="">
              <Header />
                <h1 className=" mb-4 text-center">Transaction Details</h1>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Form Id</th>
                            <th>Amount</th>
                            <th>Payment Method</th>
                            <th>Date</th>
                             </tr>
                    </thead>
                    <tbody>
                        {tableData.map((item) => (
                            <tr key={item.formID}>
                                <td>{item.formID}</td>
                                <td>{item.amt}</td>
                                <td>{item.paymentMethod}</td>
                                <td>{item.date}</td>
                                
                                <td>
                               
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            
        </div>
    );
};
export default Viewdaybook;