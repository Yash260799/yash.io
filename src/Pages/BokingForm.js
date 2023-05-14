import React, { useState } from "react";
import "../css/booking-form.css";
import { Form, FormGroup } from "reactstrap";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Modal,Button } from 'react-bootstrap'

const BookingForm = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    amount:"",
    fromLocation: "",
    dropLocation: "",
    noOfDays: "",
    date: ""
  });
  const [modalOpeningStatus, setModalOpeningStatus ] = useState(false);

  const { firstName, lastName, email, phone, amount, fromLocation,dropLocation,noOfDays, date} =
    user;

  const openDialog=()=>{
      setModalOpeningStatus(true);
  }
  
  const closeDialog=()=>{
    setModalOpeningStatus(false);
  }

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:8080/booking", user);
    if(response.status===200){
      console.log(user);
      console.log("success");
      openDialog();
  }
    

  };

  return (
    <div>

    
    <form onSubmit={(e) => onSubmit(e)}>
      <FormGroup className="booking__form d-inline-block me-1 mb-4">
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={firstName}
          required
          onChange={(e) => onInputChange(e)}
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block me-1 mb-4">
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={lastName}
          required
          onChange={(e) => onInputChange(e)}
        />
      </FormGroup>

  

      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="number"
          placeholder="Phone Number"
          name="phone"
          value={phone}
          required
          onChange={(e) => onInputChange(e)}
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="number"
          placeholder="Amount Of Car"
          name="amount"
          value={amount}
          required
          onChange={(e) => onInputChange(e)}
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="text"
          placeholder="From Location"
          name="fromLocation"
          value={fromLocation}
          required
          onChange={(e) => onInputChange(e)}
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="text"
          placeholder="Drop Location"
          name="dropLocation"
          value={dropLocation}
          required
          onChange={(e) => onInputChange(e)}
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-1 mb-4">
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          required
          onChange={(e) => onInputChange(e)}
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-1 mb-4">
        <input
          type="number"
          placeholder="Number Of Days"
          name="noOfDays"
          value={noOfDays}
          required
          onChange={(e) => onInputChange(e)}
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="date"
          placeholder="Journey Date"
          className="date"
          name="date"
          value={date}
          required
          onChange={(e) => onInputChange(e)}
        />
      </FormGroup>

      <br />
      <button type="submit" className="btn btn-primary d-inline-block me-4 mb-4">
          Book Car
        </button>
      
    </form>
    <Modal show={modalOpeningStatus} onHide={closeDialog}>
          <Modal.Header closeButton>
            <Modal.Title>Application form Sumbitted!!!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Now Go For The Payment</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={closeDialog}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
  );
};

export default BookingForm;
