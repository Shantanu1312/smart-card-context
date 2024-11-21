import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { readSmartCard } from "../services/smartCardService";
import { authenticateUser } from "../services/apiService";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    setError("");
  
    try {
      const userData = await readSmartCard();
      const response = await authenticateUser(userData);
  
      
      if (userData.userId !== "12345" || userData.name !== "John Doe") {
        throw new Error("User ID and Name do not match the expected values.");
      }
  
      alert(response.message);
      login(userData); 
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "An error occurred during login.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="login-container">
      <h1>Smart Card Authentication</h1>
      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Authenticating..." : "Login with Smart Card"}
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default LoginPage;
