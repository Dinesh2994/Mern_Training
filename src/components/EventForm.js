import React, { useState } from "react";
import './EventForm.css';

const EventForm = ({ onSubmit, eventData }) => {
  const [title, setTitle] = useState(eventData?.title || "");
  const [description, setDescription] = useState(eventData?.description || "");
  const [date, setDate] = useState(eventData?.date || "");
  const [image, setImage] = useState(eventData?.image || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, date, image });
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
      <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required />
      <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
      <input placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EventForm;
