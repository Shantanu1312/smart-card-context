import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./DashboardPage.css";

const DashboardPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <h1>Welcome, {user?.name || "User"}!</h1>
      <p>User ID: {user?.userId}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default DashboardPage;
