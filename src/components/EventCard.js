import React from "react";
import "./EventCard.css";

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <img src={event.image} alt={event.title} className="event-image" />
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p><strong>Date:</strong> {event.date}</p>
    </div>
  );
};

export default EventCard;
