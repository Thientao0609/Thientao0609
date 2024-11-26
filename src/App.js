import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import Home from "./components/Home";
import Friends from "./components/Friends";
import Events from "./components/Events";
import Marketplace from "./components/Marketplace";
import Gaming from "./components/Gaming";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import Messenger from "./components/Messenger"; // Import Messenger
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Kiểm tra trạng thái đăng nhập từ localStorage
  useEffect(() => {
    const loggedIn = localStorage.getItem("isAuthenticated");
    if (loggedIn === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  // Xử lý đăng nhập
  const handleLogin = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      alert("Đăng nhập thành công!");
    } else {
      alert("Email hoặc mật khẩu không đúng!");
    }
  };

  // Xử lý đăng xuất
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    alert("Đăng xuất thành công!");
  };

  // Route bảo vệ, chỉ truy cập được khi đã đăng nhập
  const ProtectedRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <Router>
      <div className="app">
        {/* Navbar chỉ hiển thị khi đã đăng nhập */}
        {isAuthenticated && (
          <nav className="navbar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/friends" className="nav-link">Friends</Link>
            <Link to="/events" className="nav-link">Events</Link>
            <Link to="/marketplace" className="nav-link">Marketplace</Link>
            <Link to="/gaming" className="nav-link">Gaming</Link>
            <Link to="/messenger" className="nav-link">Messenger</Link> {/* Link đến Messenger */}
            <button onClick={handleLogout} className="nav-link logout-btn">Logout</button>
          </nav>
        )}

        {/* Định nghĩa các Routes */}
        <Routes>
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Route Quên mật khẩu */}
          <Route path="/" element={<ProtectedRoute element={<Home />} />} />
          <Route path="/friends" element={<ProtectedRoute element={<Friends />} />} />
          <Route path="/events" element={<ProtectedRoute element={<Events />} />} />
          <Route path="/marketplace" element={<ProtectedRoute element={<Marketplace />} />} />
          <Route path="/gaming" element={<ProtectedRoute element={<Gaming />} />} />
          <Route path="/messenger" element={<ProtectedRoute element={<Messenger />} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
