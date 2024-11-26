// components/Messenger.js
import React, { useState } from "react";
import './Messenger.css';  // Tạo và import CSS riêng biệt cho Messenger

const Messenger = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "John", text: "Chào bạn!" },
    { id: 2, sender: "Jane", text: "Chào, bạn khỏe không?" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() === "") {
      alert("Vui lòng nhập tin nhắn!");
      return;
    }

    const newMessageObj = {
      id: messages.length + 1,
      sender: "Bạn",  // Giả sử người dùng là "Bạn"
      text: newMessage,
    };

    setMessages([...messages, newMessageObj]);
    setNewMessage("");  // Làm trống input sau khi gửi
  };

  return (
    <div className="messenger-container">
      <h2>Messenger</h2>
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <strong>{message.sender}:</strong> <span>{message.text}</span>
          </div>
        ))}
      </div>
      <div className="send-message">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Nhập tin nhắn..."
        />
        <button onClick={handleSendMessage}>Gửi</button>
      </div>
    </div>
  );
};

export default Messenger;
