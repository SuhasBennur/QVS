import React, { useState } from "react";
import axios from "axios";

function FormPage() {
  const initialState = {
    firstName: "",
    lastName: "",
    site: "",
    focalPoint: "",
    location: "",
    qualifications: "",
    roles: "",
    workExperience: "",
    startDate: "",
    endDate: "",
    additionalInfo: "",
    attachments: null,
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleDownload = () => {
    window.open("http://127.0.0.1:8000/download/forms", "_blank");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    const userId = localStorage.getItem("userId"); 
    data.append("userId", userId);
    
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null && formData[key] !== "") {
        data.append(key, formData[key]);
      }
    });

    try {
      const res = await axios.post("http://127.0.0.1:8000/forms", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert(res.data.message);

      // ✅ Reset form fields after successful submission
      setFormData(initialState);
      e.target.reset(); // clears file input and text fields
    } catch (err) {
      alert(err.response?.data?.detail || "Submission failed");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <input
            className="form-control"
            name="firstName"
            placeholder="First Name *"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <input
            className="form-control"
            name="lastName"
            placeholder="Last Name *"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <input
            className="form-control"
            name="site"
            placeholder="Site"
            value={formData.site}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <input
            className="form-control"
            name="focalPoint"
            placeholder="Focal Point"
            value={formData.focalPoint}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <input
            className="form-control"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <input
            className="form-control"
            name="qualifications"
            placeholder="Qualifications"
            value={formData.qualifications}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <input
            className="form-control"
            name="roles"
            placeholder="Roles"
            value={formData.roles}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <input
            className="form-control"
            name="workExperience"
            placeholder="Work Experience"
            value={formData.workExperience}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
            <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            className="form-control"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
            <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            className="form-control"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <textarea
            className="form-control"
            name="additionalInfo"
            placeholder="Additional Info"
            value={formData.additionalInfo}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-12">
          <input
            type="file"
            className="form-control"
            name="attachments"
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </div>
      </form>
      <button
        className="btn btn-secondary w-100 mt-2"
        onClick={handleDownload}
      >
        Download Submitted Forms (Excel)
      </button>
    </div>
  );
}

export default FormPage;
