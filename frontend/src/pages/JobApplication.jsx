import { useParams } from "react-router-dom";
import { useState } from "react";
import jobs from "../data/careers";

function JobApplication() {
  const { jobId } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [resume, setResume] = useState(null);
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleResumeChange = (event) => {
    setResume(event.target.files[0]);
  };
    const handleSubmit = async (event) => {
    event.preventDefault();

    if (!resume) {
      setStatus("Please upload your resume.");
      return;
    }

    setStatus("Submitting application...");

    try {
      const data = new FormData();

      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("position", job.title);
      data.append("message", formData.message);
      data.append("resume", resume);

      const response = await fetch(
        "http://localhost:5000/api/applications",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Something went wrong."
        );
      }

      setStatus(
        "Your application has been submitted successfully."
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setResume(null);
    } catch (error) {
      setStatus(
        error.message || "Failed to submit application."
      );
    }
  };
  const job = jobs.find((item) => item.id === jobId);

  if (!job) {
    return (
      <main className="job-not-found">
        <p className="section-label">CAREERS</p>
        <h1>Position Not Found</h1>
      </main>
    );
  }

  return (
    <main className="job-application-page">
      <section className="application-header">
        <p className="section-label">CAREER APPLICATION</p>

        <h1>
          Apply for <span>{job.title}</span>
        </h1>

        <p>
          Fill in your details below and submit your application.
        </p>
      </section>

      <section className="application-form-section">
        <form className="application-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
          <input
  id="name"
  name="name"
  type="text"
  placeholder="Enter your full name"
  value={formData.name}
  onChange={handleChange}
  required
/>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
            <input
  id="email"
  name="email"
  type="email"
  placeholder="Enter your email"
  value={formData.email}
  onChange={handleChange}
  required
/>
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
           <input
  id="phone"
  name="phone"
  type="tel"
  placeholder="Enter your phone number"
  value={formData.phone}
  onChange={handleChange}
  required
/>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="position">Position</label>
            <input
              id="position"
              type="text"
              value={job.title}
              readOnly
            />
          </div>

          <div className="form-group">
            <label htmlFor="resume">Resume</label>
          <input
  id="resume"
  name="resume"
  type="file"
  accept=".pdf,.doc,.docx"
  onChange={handleResumeChange}
  required
/>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
          <textarea
  id="message"
  name="message"
  rows="6"
  placeholder="Tell us about yourself..."
  value={formData.message}
  onChange={handleChange}
></textarea>
          </div>

          <button type="submit" className="primary-button">
            Submit Application
          </button>
          {status && (
  <p className="form-status">
    {status}
  </p>
)}
        </form>
      </section>
    </main>
  );
}

export default JobApplication;