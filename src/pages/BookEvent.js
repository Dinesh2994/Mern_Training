import React from "react";
import BookingForm from "../components/BookingForm";
import CancelBooking from "../components/CancelBooking";

const BookTicket = () => {
  const handleBooking = (data) => {
    console.log("Ticket Booked:", data);
    alert(
      `🎟 Ticket booked for ${data.event} by ${data.name} on ${data.date} at ${data.time}`
    );
  };

  const handleCancel = () => {
    console.log("Booking Cancelled!");
    alert("❌ Booking Cancelled!");
  };

  return (
    <div>
      <h2>Book Event</h2>
      <BookingForm onBook={handleBooking} />

      <h2>Cancel Booking</h2>
      <CancelBooking bookingName="John Doe" onCancel={handleCancel} />
    </div>
  );
};

export default BookTicket;
