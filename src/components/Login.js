import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css';  // Import CSS file riêng biệt cho trang Login

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <div className="login-container">
      <h2>Đăng nhập</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Mật khẩu</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Đăng nhập</button>
      </form>
      <div className="login-links">
        <p>
          Chưa có tài khoản? <Link to="/signup">Đăng ký tại đây</Link>
        </p>
        <p>
          <Link to="/forgot-password">Quên mật khẩu?</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
