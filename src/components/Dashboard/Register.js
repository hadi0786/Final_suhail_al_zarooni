import { notification } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import CustomizedSteppers from "./Stepper";
import BASE_URL from "../../BaseUrl";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email, password}),
      });

      const data = await response.json();
      if (response.ok) {
        // Save token or user data if needed
        // localStorage.setItem('token', data.token);
        navigate("/admindashboard"); // Navigate to the dashboard
      } else {
        notification.error(data.message || "Login failed. Please try again.");
        // setError();
      }
    } catch (error) {
      notification.error("An error occurred. Please try again.");
      setError("");
    }
  };

  return (
<div class="containerRegister">
        <div class="title">
            <p>Registration</p>
        </div>

  <CustomizedSteppers/>
    </div>
  );
};

export default Register;
