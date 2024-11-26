import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleForgotPassword = (e) => {
    e.preventDefault();

    // Lấy danh sách người dùng từ localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((user) => user.email === email);

    if (user) {
      setMessage(
        "Hướng dẫn đặt lại mật khẩu đã được gửi đến email của bạn (mô phỏng)."
      );
      // Ở đây bạn có thể tích hợp API để gửi email
    } else {
      setMessage("Email không tồn tại trong hệ thống.");
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Quên mật khẩu</h2>
      <form onSubmit={handleForgotPassword}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Nhập email của bạn"
          />
        </div>
        <button type="submit">Gửi yêu cầu</button>
      </form>
      {message && <p className="message">{message}</p>}
      <p>
        Nhớ lại mật khẩu? <Link to="/login">Đăng nhập</Link>
      </p>
    </div>
  );
};

export default ForgotPassword;
