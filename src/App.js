import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import Home from "./components/Home";
import Friends from "./components/Friends";
import Events from "./components/Events";
import Marketplace from "./components/Marketplace";
import Gaming from "./components/Gaming";
import Login from "./components/Login";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isAuthenticated");
    if (loggedIn === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "ThienTaoApple@gmail.com" && password === "123456") {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      alert("Login successful!");
    } else {
      alert("Invalid email or password!");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    alert("Logged out successfully!");
  };

  const ProtectedRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <Router>
      <div className="app">
        {isAuthenticated && (
          <nav className="navbar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/friends" className="nav-link">Friends</Link>
            <Link to="/events" className="nav-link">Events</Link>
            <Link to="/marketplace" className="nav-link">Marketplace</Link>
            <Link to="/gaming" className="nav-link">Gaming</Link>
            {/* <Link to="/gioithieu" className="nav-link">Gaming</Link> */}

            <button onClick={handleLogout} className="nav-link logout-btn">Logout</button>
          </nav>
        )}

        <Routes>
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/" element={<ProtectedRoute element={<Home />} />} />
          <Route path="/friends" element={<ProtectedRoute element={<Friends />} />} />
          <Route path="/events" element={<ProtectedRoute element={<Events />} />} />
          <Route path="/marketplace" element={<ProtectedRoute element={<Marketplace />} />} />
          <Route path="/gaming" element={<ProtectedRoute element={<Gaming />} />} />
          {/* <Route path="/gioithieu" element={<ProtectedRoute element={<Gioithieu />} />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
