import React, { useState } from "react";
import "./styleForPage/LoginPage.css";
import classNames from "classnames";

const LoginPage = () => {
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    surname: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email address";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }
    if (isSignUpActive) {
      if (!formData.name) {
        newErrors.name = "Name is required";
      }
      if (!formData.surname) {
        newErrors.surname = "Surname is required";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(isSignUpActive ? "Signing up..." : "Logging in...");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleToggle = (isSignUp) => {
    setIsSignUpActive(isSignUp);
    setErrors({}); // Clear errors when switching forms
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">{isSignUpActive ? "SIGN UP" : "LOG IN"}</h2>
        <div className="login-icon"></div>
        <form onSubmit={handleSubmit}>
          <div className="input-fields">
            {isSignUpActive && (
              <div className="login-name-container">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="login-input name-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && <div className="error">{errors.name}</div>}
                <input
                  type="text"
                  name="surname"
                  placeholder="Surname"
                  className="login-input name-input"
                  value={formData.surname}
                  onChange={handleChange}
                  required
                />
                {errors.surname && <div className="error">{errors.surname}</div>}
              </div>
            )}
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="login-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <div className="error">{errors.email}</div>}
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="login-input"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <div className="login-forgot">Forgot Password</div>
          <div className="login-buttons-container">
            <div className="login-buttons">
              <button
                type="button"
                className={classNames("login-button", {
                  active: isSignUpActive,
                })}
                onClick={() => handleToggle(true)}
              >
                Sign up
              </button>
              <button
                type="button"
                className={classNames("login-button", {
                  active: !isSignUpActive,
                })}
                onClick={() => handleToggle(false)}
              >
                Log in
              </button>
            </div>
          </div>
          <button type="submit" className="login-apply-btn">
            Apply
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
