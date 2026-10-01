import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    requirement: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("Submitting...");

    try {
      const response = await fetch("https://riyadvi-website-huhp.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus("Your enquiry has been submitted successfully.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        requirement: "",
        message: "",
      });
    } catch (error) {
      setStatus(error.message || "Failed to submit enquiry.");
    }
  };
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <p className="section-label">CONTACT RIYADVI</p>

        <h1>
          Let's Build Something
          <span> Meaningful</span>
        </h1>

        <p>
          Tell us about your business, idea, or digital requirement and let's
          explore how technology can help you move forward.
        </p>
      </section>

      <section className="contact-section">
        <div className="contact-info">
          <p className="section-label">START A CONVERSATION</p>

          <h2>
            Have a project
            <span> in mind?</span>
          </h2>

          <p>
            Share your requirements with our team. We will review your enquiry
            and get back to you.
          </p>

          <div className="contact-details">
            <div>
              <span>Email</span>
              <p>info@riyadvisoftwaretechnologies.com</p>
            </div>

            <div>
              <span>Location</span>
              <p>India</p>
            </div>

            <div>
              <span>Availability</span>
              <p>Let's discuss your project</p>
            </div>
          </div>
        </div>

       <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="contact-name">Name</label>
            <input
  id="contact-name"
  name="name"
  type="text"
  placeholder="Your name"
  value={formData.name}
  onChange={handleChange}
  required
/>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contact-email">Email</label>
              <input
  id="contact-email"
  name="email"
  type="email"
  placeholder="Your email"
  value={formData.email}
  onChange={handleChange}
  required
/>
            </div>

            <div className="form-group">
              <label htmlFor="contact-phone">Phone</label>
            <input
  id="contact-phone"
  name="phone"
  type="tel"
  placeholder="Your phone number"
  value={formData.phone}
  onChange={handleChange}
/>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="company">Company</label>
       <input
  id="company"
  name="company"
  type="text"
  placeholder="Company name"
  value={formData.company}
  onChange={handleChange}
/>
          </div>

          <div className="form-group">
            <label htmlFor="requirement">Requirement</label>
        <input
  id="requirement"
  name="requirement"
  type="text"
  placeholder="What do you need help with?"
  value={formData.requirement}
  onChange={handleChange}
  required
/>
          </div>

          <div className="form-group">
            <label htmlFor="contact-message">Message</label>
        <textarea
  id="contact-message"
  name="message"
  rows="6"
  placeholder="Tell us about your project..."
  value={formData.message}
  onChange={handleChange}
  required
></textarea>
          </div>

          <button type="submit" className="primary-button">
            Send Enquiry
          </button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </section>
    </main>
  );
}

export default Contact;