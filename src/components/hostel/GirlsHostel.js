import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBInput as Input,
  MDBBtn as Button,
} from "mdb-react-ui-kit";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../common/Header";
import { BiArrowBack } from "react-icons/bi";
import { GirlsHostelService } from "../../services/GirlsHostelService";

const GirlsHostel = () => {
  const navigate = useNavigate();
  const initialState = {
    // gh_id: "",//voucher no
    date: "",
    food: "",
    food_quantity: "",
    bill_amt: "",
    balance: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await GirlsHostelService.createGirlHostel(formData);
      console.log("hostel", response.data.id);
      if (response.status === 201) {
        console.log("Hostel Created Successfully");
        setFormData(initialState);
        toast.success("Submit Successful!", { autoClose: 1500 });
      } else {
        console.error("Failed To create Hostel");
        toast.error("Failed to submit Girls Hostel", { autoClose: 1500 });
      }
    } catch (error) {
      console.error("Error", error);
      toast.error("An error occurred during submission", { autoClose: 1500 });
    }
  };

  return (
    <div className=" ">
      <Header />
      <div className="mt-4">
      <div className="arrow-back-container">
        <BiArrowBack
          className="backLoginForm fs-2 text-dark"
          onClick={() => navigate(-1)}
        />
      </div>
      <h1 className=" mb-4 text-center">Girls Hostel Impressed Book</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          {/* <Col className="col-sm-5 ">
            <Input
              label="Vocher.No"
              type="number"
              name="gh_id"
              value={formData.gh_id}
              onChange={handleChange}
            />
          </Col> */}
          <Col className="col-sm-5">
            <Input
              label="Date"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Food Material"
              type="text"
              name="food"
              value={formData.food}
              onChange={handleChange}
              required
            />
          </Col>

          <Col className="col-sm-5">
            <Input
              label="Food Quantity (kG)"
              type="text"
              name="food_quantity"
              value={formData.food_quantity}
              onChange={handleChange}
              required
            />
          </Col>
        </Row>
        <Row className="row mt-8 mb-4  justify-content-evenly align-items-center">
          <Col className="col-sm-5 ">
            <Input
              label="Bill Amount"
              type="number"
              name="bill_amt"
              value={formData.bill_amt}
              onChange={handleChange}
              required
            />
          </Col>

          <Col className="col-sm-5 ">
            <Input
              label="Balance"
              type="number"
              name="balance"
              value={formData.balance}
              onChange={handleChange}
              required
            />
          </Col>
        </Row>
        <div className="text-center mt-4 ">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};
export default GirlsHostel;