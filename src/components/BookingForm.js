import React, { useState } from "react";
import "./BookingForm.css";

const BookingForm = ({ onBook }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [event, setEvent] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onBook({ name, email, event, date, time });
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label>Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label>Event</label>
      <input
        placeholder="Event name (e.g., Birthday Party)"
        value={event}
        onChange={(e) => setEvent(e.target.value)}
        required
      />

      <label>Date</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <label>Time</label>
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <button type="submit">Book Ticket</button>
    </form>
  );
};
export default BookingForm;
