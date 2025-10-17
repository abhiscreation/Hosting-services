import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const navigate = useNavigate();
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus("submitting");
    setTimeout(() => {
      console.log("Login attempt:", formData);
      setStatus("success");
      alert("Login successful! (Simulated)");
      setFormData({ email: "", password: "" });
      setStatus("idle");
      navigate("/");
    }, 1000);
  };

  const handleClose = () => {
    navigate("/");
  };

  const handleClickOutside = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      navigate("/");
    }
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        navigate("/");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [navigate]);

  return (
    <div className="grok-auth-container">
      <div className="grok-auth-backdrop" />
      <div className="grok-auth-form-wrap">
        <div className={`grok-auth-form ${status === "submitting" ? "grok-auth--work" : "grok-auth--idle"}`} ref={formRef}>
          <button className="grok-auth-close" onClick={handleClose} aria-label="Close">
            &times;
          </button>
          <div className="grok-auth-head">
            <h2 className="grok-auth-title">Login to Your Account</h2>
            <p className="grok-auth-subtitle">| WOMP WOMP |</p>
          </div>
          <form className="grok-auth-body" onSubmit={handleSubmit}>
            <div className="grok-auth-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`grok-auth-input ${errors.email ? "is-error" : ""}`}
                placeholder="Enter your email"
                aria-label="Email"
              />
              {errors.email && <span className="grok-auth-error">{errors.email}</span>}
            </div>
            <div className="grok-auth-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`grok-auth-input ${errors.password ? "is-error" : ""}`}
                placeholder="Enter your password"
                aria-label="Password"
              />
              {errors.password && <span className="grok-auth-error">{errors.password}</span>}
            </div>
            <button
              type="submit"
              className="grok-auth-cta"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Logging in..." : "Login"}
            </button>
            <p className="grok-auth-switch">
              Don't have an account? <a href="/signup">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;