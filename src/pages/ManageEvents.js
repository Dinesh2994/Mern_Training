import React from "react";
import EventForm from "../components/EventForm";

const ManageEvents = () => {
  const handleEventSubmit = (data) => {
    console.log("Event Submitted:", data);
  };

  return (
    <div>
      <h2>Create / Update Event</h2>
      <EventForm onSubmit={handleEventSubmit} />
    </div>
  );
};

export default ManageEvents;
