// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Events from "./pages/Events";
import BookEvent from "./pages/BookEvent.js";
import ManageEvents from "./pages/ManageEvents";

const App = () => {
  return (
    <Router>
      <div>
        <nav style={{ padding: "10px", backgroundColor: "#eee" }}>
          <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
          <Link to="/events" style={{ margin: "0 10px" }}>Events</Link>
          <Link to="/manage-events" style={{ margin: "0 10px" }}>Create / Update Event</Link>
          <Link to="/book-ticket" style={{ margin: "0 10px" }}>Book Event</Link>
        </nav>

        <div style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/manage-events" element={<ManageEvents />} />
            <Route path="/book-ticket" element={<BookEvent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
