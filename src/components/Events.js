// import React from "react";

// function Events() {
//   return (
//     <div>
//       <h1>Events Page</h1>
//       <p>Discover and create events.</p>
//     </div>
//   );
// }

// export default Events;


import React, { useState } from "react";
import "./Events.css";

function Events() {
  // Dữ liệu mẫu về sự kiện
  const [events, setEvents] = useState([
    { id: 1, title: "Summer Party", description: "Join us for a fun summer party!", date: "2024-12-20 18:00", image: "https://via.placeholder.com/300x150?text=Summer+Party" },
    { id: 2, title: "Tech Meetup", description: "A meetup for tech enthusiasts!", date: "2024-12-25 10:00", image: "https://via.placeholder.com/300x150?text=Tech+Meetup" },
    { id: 3, title: "Yoga Retreat", description: "Relax and rejuvenate at our yoga retreat.", date: "2025-01-10 08:00", image: "https://via.placeholder.com/300x150?text=Yoga+Retreat" },
    { id: 4, title: "Music Concert", description: "A live music concert featuring local artists.", date: "2025-01-15 19:00", image: "https://via.placeholder.com/300x150?text=Music+Concert" },
  ]);

  return (
    <div className="events-page">
      <header className="events-header">
        <h1>Upcoming Events</h1>
        <p>Explore and join the latest events happening around you.</p>
      </header>

      <div className="events-list">
        {events.map((event) => (
          <div key={event.id} className="event-item">
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-info">
              <h2>{event.title}</h2>
              <p className="event-description">{event.description}</p>
              <p className="event-date">{event.date}</p>
              <button className="join-button">Join Event</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
