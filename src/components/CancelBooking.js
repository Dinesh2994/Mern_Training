import React from "react";
import './CancelBooking.css';

const CancelBooking = ({ onCancel, bookingName }) => (
  <div className="cancel-booking">
    <h3>Cancel Booking for {bookingName}</h3>
    <button onClick={onCancel}>Cancel Booking</button>
  </div>
);

export default CancelBooking;
