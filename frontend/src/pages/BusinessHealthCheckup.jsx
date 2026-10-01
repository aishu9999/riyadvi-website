import { useState } from "react";

const steps = [
  "Business Information",
  "Website & Digital Presence",
  "Marketing",
  "Technology",
  "Business Challenges",
  "Submission",
];

function BusinessHealthCheckup() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
  businessName: "",
  email: "",
  phone: "",
  industry: "",
  website: "",
  digitalPresence: "",
  marketingChannels: "",
  marketingGoal: "",
  technology: "",
  technologyChallenge: "",
  challenges: "",
});

const [status, setStatus] = useState("");
const handleChange = (event) => {
  setFormData({
    ...formData,
    [event.target.id]: event.target.value,
  });
};
const handleSubmit = async (event) => {
  event.preventDefault();

  setStatus("Submitting...");

  try {
    const response = await fetch(
      "https://riyadvi-website-huhp.onrender.com/api/health-checkup",
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

    setStatus("Your Business Health Checkup has been submitted successfully.");

    setFormData({
      businessName: "",
      email: "",
      phone: "",
      industry: "",
      website: "",
      digitalPresence: "",
      marketingChannels: "",
      marketingGoal: "",
      technology: "",
      technologyChallenge: "",
      challenges: "",
    });

    setCurrentStep(0);
  } catch (error) {
    setStatus(
      error.message || "Failed to submit Business Health Checkup."
    );
  }
};
  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const previousStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <main className="health-checkup-page">
      <section className="health-checkup-hero">
        <p className="section-label">BUSINESS HEALTH CHECKUP</p>

        <h1>
          Understand Your Digital
          <span> Business Health</span>
        </h1>

        <p>
          Evaluate your current digital presence, technology, marketing, and
          business challenges to identify opportunities for improvement.
        </p>
      </section>

      <section className="health-checkup-section">
        <div className="health-progress">
          {steps.map((step, index) => (
            <div
              className={`health-step ${
                index === currentStep ? "active" : ""
              } ${index < currentStep ? "completed" : ""}`}
              key={step}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>

        <form className="health-form" onSubmit={handleSubmit}>
          {currentStep === 0 && (
            <div className="health-form-step">
              <p className="section-label">STEP 01</p>
              <h2>Business Information</h2>

              <div className="form-group">
                <label htmlFor="business-name">Business Name</label>
            <input
  id="businessName"
  type="text"
  placeholder="Your business name"
  value={formData.businessName}
  onChange={handleChange}
  required
/>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="business-email">Email</label>
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
                  <label htmlFor="business-phone">Phone</label>
                <input
  id="phone"
  type="tel"
  placeholder="Phone number"
  value={formData.phone}
  onChange={handleChange}
  required
/>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="business-industry">Industry</label>
             <input
  id="industry"
  type="text"
  placeholder="Your industry"
  value={formData.industry}
  onChange={handleChange}
/>
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div className="health-form-step">
              <p className="section-label">STEP 02</p>
              <h2>Website & Digital Presence</h2>

              <div className="form-group">
                <label htmlFor="website">Website URL</label>
             <input
  id="website"
  type="url"
  placeholder="https://example.com"
  value={formData.website}
  onChange={handleChange}
/>
              </div>

              <div className="form-group">
                <label htmlFor="digital-presence">
                  How would you describe your digital presence?
                </label>

                <select
  id="digitalPresence"
  value={formData.digitalPresence}
  onChange={handleChange}
>
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option>Strong</option>
                  <option>Needs Improvement</option>
                  <option>Very Limited</option>
                  <option>No Digital Presence</option>
                </select>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="health-form-step">
              <p className="section-label">STEP 03</p>
              <h2>Marketing</h2>

              <div className="form-group">
                <label htmlFor="marketing-channels">
                  Current Marketing Channels
                </label>

            <textarea
  id="marketingChannels"
  rows="5"
  placeholder="SEO, social media, paid advertising, email marketing..."
  value={formData.marketingChannels}
  onChange={handleChange}
></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="marketing-goal">Primary Marketing Goal</label>

               <select
  id="marketingGoal"
  value={formData.marketingGoal}
  onChange={handleChange}
>
                  <option value="" disabled>
                    Select a goal
                  </option>
                  <option>Brand Awareness</option>
                  <option>Lead Generation</option>
                  <option>Sales Growth</option>
                  <option>Customer Engagement</option>
                </select>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="health-form-step">
              <p className="section-label">STEP 04</p>
              <h2>Technology</h2>

              <div className="form-group">
                <label htmlFor="technology">
                  Current Technology / Software
                </label>

              <textarea
  id="technology"
  rows="5"
  placeholder="Tell us about the software, platforms, or technologies you currently use..."
  value={formData.technology}
  onChange={handleChange}
></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="technology-challenge">
                  Main Technology Challenge
                </label>

            <input
  id="technologyChallenge"
  type="text"
  placeholder="What technology challenge are you facing?"
  value={formData.technologyChallenge}
  onChange={handleChange}
/>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="health-form-step">
              <p className="section-label">STEP 05</p>
              <h2>Business Challenges</h2>

              <div className="form-group">
                <label htmlFor="challenges">
                  What are your biggest business challenges?
                </label>

              <textarea
  id="challenges"
  rows="7"
  placeholder="Describe the challenges you want to solve..."
  value={formData.challenges}
  onChange={handleChange}
  required
></textarea>
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="health-form-step health-submission">
              <p className="section-label">STEP 06</p>

              <h2>Ready to Submit</h2>

              <p>
                Review your information and submit the Business Health Checkup.
                Your information will be securely sent to our team for review.
              </p>

              <button type="submit" className="primary-button">
                Submit Health Checkup
              </button>
            </div>
          )}

          <div className="health-form-actions">
            {currentStep > 0 && (
              <button
                type="button"
                className="secondary-button"
                onClick={previousStep}
              >
                ← Previous
              </button>
            )}

            {currentStep < steps.length - 1 && (
              <button
                type="button"
                className="primary-button"
                onClick={nextStep}
              >
                Continue →
              </button>
            )}
          </div>
          {status && <p className="form-status">{status}</p>}
        </form>
      </section>
    </main>
  );
}

export default BusinessHealthCheckup;