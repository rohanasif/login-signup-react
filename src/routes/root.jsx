// Inside Root.js
import React from "react";
import Navbar from "../components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Login from "./Login";
import Signup from "./Signup";
import ErrorPage from "./error-page";
import Home from "./Home";

const Dashboard = () => {
  return <p>Welcome to the Dashboard!</p>;
};

export default function Root() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Navbar />
      <Routes>
        {isLoggedIn ? (
          <Route path="/" element={<Dashboard />} />
        ) : (
          <Route path="/" element={<Home />} />
        )}
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={isLoggedIn ? <Navigate to="/" /> : <Signup />}
        />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
