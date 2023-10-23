import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setError(null);

    // Basic validation: Check if both username and password are entered
    if (!formData.username || !formData.password) {
      setError("Please enter both username and password.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/users");
      const users = await response.json();

      const user = users.find(
        (user) =>
          user.username === formData.username &&
          user.password === formData.password
      );

      if (!user) {
        throw new Error("Invalid credentials. Please try again.");
      }

      // Login successful, navigate to the homepage or dashboard
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-main">
      <Navbar />
      <div className="container mx-auto mt-4">
        <div className="max-w-md mx-auto bg-white p-8 border rounded shadow">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          {error && (
            <div className="text-red-600 mb-4">
              <i>{error}</i>
            </div>
          )}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Username"
                className="w-full px-4 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className="w-full px-4 py-2 border rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
