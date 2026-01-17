import React, { useState } from "react";
import axios from "axios";

function Register({ setPage }) {
  const [suggestions, setSuggestions] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    permanentAddress: "",
    temporaryAddress: "",
    gender: "",
    qualification: "",
    company: "",
    role: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateField = (name, value) => {
    let error = "";

    if (!value.trim() && ["firstName", "lastName", "email", "contactNo", "gender", "username", "password", "confirmPassword"].includes(name)) {
      error = `${name.replace(/([A-Z])/g, " $1")} is required`;
    }

    if (name === "email" && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) error = "Enter a valid email";
    }

    if (name === "contactNo" && value) {
      const phoneRegex = /^[0-9]{10,}$/;
      if (!phoneRegex.test(value)) error = "Enter a valid contact number";
    }

    if (name === "confirmPassword" && value) {
      if (value !== formData.password) error = "Passwords do not match";
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleRegister = async () => {
    const hasErrors = Object.values(errors).some((err) => err);
    if (hasErrors) {
      alert("Please fix errors before submitting");
      return;
    } try {
      const res = await axios.post("http://127.0.0.1:8000/register", formData);
      alert(res.data.message); setPage("login");
    } catch (err) {
      const detail = err.response?.data?.detail;
      if (detail?.suggestions) {
        setSuggestions(detail.suggestions);
      } else {
        alert(detail?.error || "Registration failed");
      }
    }
  };

  const renderInput = (name, placeholder, type = "text") => (
    <div className="mb-2">
      <input
        className={`form-control form-control-sm ${errors[name] ? "is-invalid" : ""}`}
        name={name}
        type={type}
        placeholder={`${placeholder} *`}
        value={formData[name]}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors[name] && <div className="invalid-feedback">{errors[name]}</div>}
    </div>
  );

  return (
    <div className="container mt-4">
      <div className="card shadow-sm border-0">
        <div className="card-body p-4">
          <h3 className="text-center text-primary mb-3">Create Your Account</h3>
          <p className="text-muted text-center mb-4">Fields marked with * are mandatory.</p>

          <div className="row g-2">
            <div className="col-md-6">{renderInput("firstName", "First Name")}</div>
            <div className="col-md-6">{renderInput("lastName", "Last Name")}</div>
          </div>

          {renderInput("email", "Email", "email")}
          {renderInput("contactNo", "Contact No")}
          {renderInput("permanentAddress", "Permanent Address", "text")}
          {renderInput("temporaryAddress", "Temporary Address", "text")}

          <div className="mb-2">
            <select
              className={`form-select form-select-sm ${errors.gender ? "is-invalid" : ""}`}
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">Select Gender *</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
          </div>

          {renderInput("qualification", "Highest Qualification")}
          {renderInput("company", "Company")}
          {renderInput("role", "Role")}
          {renderInput("username", "Username")}
          {suggestions.length > 0 &&
            (
              <div className="alert alert-info mt-2">
                <strong>Suggestions:</strong>{" "}
                {suggestions.map((s, i) =>
                (
                  <span key={i} className="badge bg-secondary me-2">{s}</span>
                ))}
              </div>
            )}
          {renderInput("password", "Set Password", "password")}
          {renderInput("confirmPassword", "Confirm Password", "password")}

          <button className="btn btn-success w-100 mt-3" onClick={handleRegister}>
            Register
          </button>
          <button className="btn btn-link w-100 mt-2" onClick={() => setPage("login")}>
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
