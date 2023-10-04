import React from "react";
import { useParams } from "react-router-dom";
import { MDBContainer as Container,
          MDBBtn as Button, } from "mdb-react-ui-kit";

import Header from "../common/Header";



const AllocatedInventory = () => {
    const { id } = useParams();
    const Inventory = [
      {
        emp_id: 1,
        name: 'Mahesh Tawade',
        allocated_inventory: [
          {
            "item_id": "LAPTOP001",
            "item_name": "Laptop",
            "serial_number": "LT123456",
            "date_allocated": "2023-09-15",
            
          },
          {
            "item_id": "PHONE001",
            "item_name": "Mobile Phone",
            "serial_number": "MP789012",
            "date_allocated": "2023-09-15",
            
          },
          {
            "item_id": "MOUSE001",
            "item_name": "Mouse",
            "date_allocated": "2023-09-15"
          }
        ]
    },
    {
        emp_id: 5435355,
        name: 'Gaurav Nandan',
        allocated_inventory: [
          {
            "item_id": "LAPTOP002",
            "item_name": "Laptop",
            "serial_number": "LT987654",
            "date_allocated": "2023-08-20",
            
          },
          {
            "item_id": "DESKCHAIR001",
            "item_name": "Desk Chair",
            "date_allocated": "2023-08-20"
          }
        ]
    },
    ];
  


  const InventoryToShow = Inventory.find((employee) => employee.emp_id == id);

  console.log(InventoryToShow);
  if (!InventoryToShow) {
    return <div>No Inventory is Allocated to the selected employee</div>;
  }

  return (
    <div>
      <Header />
      <Container
        className="detail w-75 text-center"
        style={{
          height: "730px",
          width: "50%",
          boxShadow:
            "0 10px 30px rgba(0, 0, 0, 0.3), 0 6px 10px rgba(0, 0, 0, 0.23)",
          marginBottom: "0",
          marginTop: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
<div>
<h2 className="mb-4 text-center entity-column">Inventory  Allocation Details of {InventoryToShow.name}</h2>
        <table>
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Item ID</th>
              <th>Item Name</th>
              <th>Serial Number</th>
              <th>Date Allocated</th>
              
            </tr>
          </thead>
          <tbody>
            {InventoryToShow.allocated_inventory.map((item, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item.item_id}</td>
                <td>{item.item_name}</td>
                <td>{item.serial_number || "-"}</td>
                <td>{item.date_allocated}</td>
        
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </Container>
    </div>
  );
};

export default AllocatedInventory;