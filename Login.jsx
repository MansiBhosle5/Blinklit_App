import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/Blinkit/login", {
        email,
        password,
      });

      console.log("Login response:", res.data); // 👈 for debugging

      // ✅ Ensure response includes user object
      if (res.data && res.data.user) {
        alert("Login successful!");
        setUser(res.data.user); // setUser will update app state
        navigate("/"); // redirect to homepage
      } else {
        alert("Invalid login response. Please try again.");
      }

    } catch (error) {
      const msg = error.response?.data?.message;

      if (msg === "User not found") {
        alert("User not found. Please register first.");
      } else if (msg === "Invalid password") {
        alert("Incorrect password.");
      } else {
        alert("Login failed. Please try again.");
      }

      console.error("Login error:", error);
    }
  };

  return (
    <div className="login-box">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
