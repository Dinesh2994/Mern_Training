# EventMate – Event Management & Ticket Booking

EventMate is a **full-stack event management and ticket booking application** built with **React**, **Node.js**, **Express**, and **MongoDB**.  
It allows users to create, view, book, update, and cancel events seamlessly.

---

## 🏆 Features

### Create
- Add new events with title, description, date, time, and images.
- Book tickets for upcoming events.

### Read
- View all upcoming events in a user-friendly layout.
- Check participants and ticket details.

### Update
- Update event details like title, description, date, and time.
- Reschedule events as needed.

### Delete
- Cancel ticket bookings.
- Remove events from the system.

---

## 💻 Tech Stack
- **Frontend:** React, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **API Testing:** Postman

---

## 📂 Frontend Folder Structure (`capstone/`)
``text
capstone/
├─ public/
│ ├─ index.html
│ └─ images/ // Event images
├─ src/
│ ├─ api/
│ │ └─ api.js // API calls
│ ├─ components/
│ │ ├─ EventCard.js
│ │ ├─ EventCard.css
│ │ ├─ EventForm.js
│ │ ├─ EventForm.css
│ │ ├─ BookingForm.js
│ │ ├─ BookingForm.css
│ │ ├─ CancelBooking.js
│ │ └─ CancelBooking.css
│ ├─ pages/
│ │ ├─ Home.js
│ │ ├─ Events.js
│ │ ├─ BookTicket.js
│ │ └─ ManageEvents.js
│ ├─ App.js
│ ├─ App.css
│ └─ index.js
├─ package.json
└─ README.me

---

## 📂 Backend Folder Structure (`backend/`)

backend/
├─ models/
│ ├─ Event.js // Event schema
│ └─ Booking.js // Booking schema
├─ routes/
│ ├─ eventRoutes.js // Event APIs: create, read, update, delete
│ └─ bookingRoutes.js // Booking APIs: book, cancel
├─ controllers/ // (optional for cleaner code)
│ ├─ eventController.js
│ └─ bookingController.js
├─ config/
│ └─ db.js // MongoDB connection
├─ server.js // Entry point
├─ package.json
└─ .env // MONGO_URI, PORT

yaml
Copy code
