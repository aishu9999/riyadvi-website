import { useState } from "react";

function Consultation() {
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
      const response = await fetch(
        "http://localhost:5000/api/consultation",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus(
        "Your free consultation request has been submitted successfully."
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        requirement: "",
        message: "",
      });
    } catch (error) {
      setStatus(
        error.message || "Failed to submit consultation request."
      );
    }
  };

  return (
    <main className="consultation-page">
      <section className="consultation-hero">
        <p className="section-label">FREE CONSULTATION</p>

        <h1>
          Let's Build Something
          <span> Great Together</span>
        </h1>

        <p>
          Tell us about your business, project, or digital idea.
          Our team will help you explore the right technology and
          strategy for your goals.
        </p>
      </section>

      <section className="consultation-section">
        <div className="consultation-content">
          <p className="section-label">BOOK A FREE CONSULTATION</p>

          <h2>
            Turn Your
            <span> Idea Into Reality</span>
          </h2>

          <p>
            Whether you need a website, mobile application, UI/UX
            design, digital marketing, or a complete digital solution,
            let's discuss your requirements.
          </p>

          <div className="consultation-points">
            <div>
              <span>01</span>
              <p>Understand your business requirements</p>
            </div>

            <div>
              <span>02</span>
              <p>Explore the right technology and strategy</p>
            </div>

            <div>
              <span>03</span>
              <p>Discuss project scope and next steps</p>
            </div>
          </div>
        </div>

        <div className="consultation-form-wrapper">
          <form
            className="consultation-form"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
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
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
              />
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
              <label htmlFor="requirement">What do you need?</label>
              <select
                id="requirement"
                name="requirement"
                value={formData.requirement}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                <option value="Web Development">
                  Web Development
                </option>
                <option value="App Development">
                  App Development
                </option>
                <option value="Digital Marketing">
                  Digital Marketing
                </option>
                <option value="AR/VR">
                  AR / VR
                </option>
                <option value="3D Modeling">
                  3D Modeling
                </option>
                <option value="UI/UX Design">
                  UI / UX Design
                </option>
                <option value="Other">
                  Other
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Tell us about your project</label>
              <textarea
                id="message"
                name="message"
                placeholder="Describe your project or requirement..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="primary-button">
              Book Free Consultation →
            </button>

            {status && (
              <p className="form-status">
                {status}
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

export default Consultation;