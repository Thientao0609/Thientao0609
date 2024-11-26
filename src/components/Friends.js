// import React from "react";

// function Friends() {
//   return (
//     <div>
//       <h1>Friends</h1>
//       <p>Connect with your friends here!</p>
//     </div>
//   );
// }

// export default Friends;


import React, { useState } from "react";
import "./Friends.css";

function Friends() {
  // Dữ liệu mẫu bạn bè
  const [friends, setFriends] = useState([
    { id: 1, name: "John Doe", profilePic: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: 2, name: "Jane Smith", profilePic: "https://randomuser.me/api/portraits/women/1.jpg" },
    { id: 3, name: "Emily Clark", profilePic: "https://randomuser.me/api/portraits/women/2.jpg" },
    { id: 4, name: "Michael Brown", profilePic: "https://randomuser.me/api/portraits/men/2.jpg" },
    { id: 5, name: "Sara Williams", profilePic: "https://randomuser.me/api/portraits/women/3.jpg" },
  ]);

  return (
    <div className="friends-page">
      <header className="friends-header">
        <h1>Friends</h1>
        <p>Find and connect with your friends.</p>
      </header>

      <div className="friends-list">
        {friends.map((friend) => (
          <div key={friend.id} className="friend-item">
            <img
              src={friend.profilePic}
              alt={friend.name}
              className="friend-profile-pic"
            />
            <div className="friend-info">
              <h2>{friend.name}</h2>
              <button className="friend-button">Send Message</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Friends;
