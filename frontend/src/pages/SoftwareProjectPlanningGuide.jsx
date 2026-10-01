import { useState } from "react";

function SoftwareProjectPlanningGuide() {
  const [submitted, setSubmitted] = useState(false);
const [formData, setFormData] = useState({
  name: "",
  company: "",
  email: "",
  phone: "",
});
const handleChange = (event) => {
  setFormData({
    ...formData,
    [event.target.id]: event.target.value,
  });
};
const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await fetch(
      "https://riyadvi-website-huhp.onrender.com/api/lead-magnet",
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

    setSubmitted(true);

    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
    });
  } catch (error) {
    alert(error.message || "Failed to submit request.");
  }
};


  return (
    <main className="planning-guide-page">
      <section className="planning-guide-hero">
        <p className="section-label">FREE RESOURCE</p>

        <h1>
          Software Project
          <span> Planning Guide</span>
        </h1>

        <p>
          A practical guide to help you understand the key stages of planning,
          designing, developing, and launching a software project.
        </p>
      </section>

      <section className="planning-guide-section">
        <div className="planning-guide-content">
          <p className="section-label">PLAN WITH CLARITY</p>

          <h2>
            Turn Your
            <span> Software Idea</span>
            Into a Clear Plan
          </h2>

          <p>
            Before starting development, a clear project plan can help define
            business goals, users, features, technology requirements, and
            development priorities.
          </p>

          <div className="planning-guide-points">
            <div>
              <span>01</span>
              <p>Define your business and project goals</p>
            </div>

            <div>
              <span>02</span>
              <p>Identify important features and user requirements</p>
            </div>

            <div>
              <span>03</span>
              <p>Plan technology, design, development, and testing</p>
            </div>

            <div>
              <span>04</span>
              <p>Prepare for launch, optimization, and future growth</p>
            </div>
          </div>
        </div>

        <div className="planning-guide-form-wrapper">
          {!submitted ? (
            <form
              className="planning-guide-form"
              onSubmit={handleSubmit}
            >
              <p className="section-label">GET THE GUIDE</p>

              <h2>Access the Free Guide</h2>

              <p>
                Enter your details and we'll provide access to the Software
                Project Planning Guide.
              </p>

              <div className="form-group">
                <label htmlFor="guide-name">Name</label>
            <input
  id="name"
  type="text"
  placeholder="Your name"
  value={formData.name}
  onChange={handleChange}
  required
/>
              </div>

              <div className="form-group">
                <label htmlFor="guide-company">Company</label>
            <input
  id="company"
  type="text"
  placeholder="Company name"
  value={formData.company}
  onChange={handleChange}
  required
/>
              </div>

              <div className="form-group">
                <label htmlFor="guide-email">Email</label>
           <input
  id="email"
  type="email"
  placeholder="Business email"
  value={formData.email}
  onChange={handleChange}
  required
/>
              </div>

              <div className="form-group">
                <label htmlFor="guide-phone">Phone</label>
            <input
  id="phone"
  type="tel"
  placeholder="Phone number"
  value={formData.phone}
  onChange={handleChange}
  required
/>
              </div>

              <button type="submit" className="primary-button">
                Get the Guide →
              </button>
            </form>
          ) : (
            <div className="planning-guide-success">
              <span className="success-icon">✓</span>

              <p className="section-label">REQUEST RECEIVED</p>

              <h2>Your Guide is Ready</h2>

              <p>
                Thank you for your interest. Your access request has been
                received.
              </p>

              <button
                type="button"
                className="primary-button"
                onClick={() => setSubmitted(false)}
              >
                Back to Form
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default SoftwareProjectPlanningGuide;