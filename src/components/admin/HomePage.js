import React from 'react';
import Sidebar from "./Sidebar";
import Card from './Card';
import "../../asset/homepage.css";
import Header from '../common/Header';

export default function HomePage(){

    return(
       <div>
        
        <Sidebar>
        <Header/>
             <div className="card-container">
                <Card title="Property Management" />
                <Card title="Staff Management" />
                <Card title=" Inventory Management" />
                <Card title="Day Book" />
            </div>
            </Sidebar>
       </div>
    );
}