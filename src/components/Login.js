// import React, { useState } from 'react';
// import './Login.css';

// function Login({ onLoginSuccess }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Kiểm tra tài khoản và mật khẩu (ví dụ cơ bản)
//     if (email === 'ThienTaoApple' && password ==='123456') {
//       alert('Đăng nhập thành công!');
//       onLoginSuccess();  // Đăng nhập thành công, chuyển sang trang chủ
//     } else {
//       alert('Tài khoản hoặc mật khẩu không chính xác!');
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-left">
//         <h1 className="logo">facebook</h1>
//         <p className="description">Connect with friends and the world around you on Facebook.</p>
//       </div>

//       <div className="login-right">
//         <form className="login-form" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             className="login-input"
//             placeholder="Email or phone number"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             className="login-input"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button type="submit" className="login-button">Log In</button>
//         </form>

//         <a href="/" className="forgot-password">Forgot password?</a>
//         <div className="divider"></div>
//         <button className="create-account">Create New Account</button>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    navigate("/");
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
