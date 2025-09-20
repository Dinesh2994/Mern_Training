import React from "react";
import EventCard from "../components/EventCard";

const Events = () => {
  // Static event data (you can replace with API later)
  const events = [
    {
      _id: "1",
      title: "Birthday Celebration",
      description: "Fun-filled birthday event with decorations and music.",
      date: "20-09-2025",
      image: "https://m.media-amazon.com/images/I/81TOpYfph9L._UF350,350_QL80_.jpg",
    },
    {
      _id: "2",
      title: "Wedding Ceremony",
      description: "Grand wedding event with traditional rituals.",
      date: "15-10-2025",
      image: "https://assets.thenodmag.com/website-assets/Featured_stylemeupwithsakshi_43cc7b6f32-1x1.jpg",
    },
    {
      _id: "3",
      title: "College Fest",
      description: "Annual college fest with cultural events and competitions.",
      date: "01-11-2025",
      image: "https://media.collegedekho.com/media/img/news/college_fests.jpg?height=310&width=615",
    },
    {
      _id: "4",
      title: "Annual Day",
      description: "School annual day function with student performances.",
      date: "05-12-2025",
      image: "https://www.thepresidiumschool.com/common/images/gallery/pages/Events/Annual-Fest/annual-day-0001.jpg",
    },
    {
      _id: "5",
      title: "Silver Jubilee",
      description: "Celebrating 25 years of excellence.",
      date: "20-12-2025",
      image: "https://www.adobe.com/in/express/discover/wishes/media_120fc63352cfb6668e0f3ad9850399652d7066eaf.jpg?width=750&format=jpg&optimize=medium",
    },
    {
      _id: "6",
      title: "Golden Jubilee",
      description: "Celebrating 50 glorious years.",
      date: "10-01-2026",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlp2kdGyWByuxL-EjVL685oQy4k1dMFm83Q7i5Q9GVUyIPLi0pjdXJB3xMi0fK9nS1Xnc&usqp=CAU",
    },
  ];

  return (
    <div>
      <h2>Events</h2>
      <div className="events-container" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {events.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
