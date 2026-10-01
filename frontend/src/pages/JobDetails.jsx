import { Link, useParams } from "react-router-dom";
import jobs from "../data/careers";

function JobDetails() {
  const { jobId } = useParams();

  const job = jobs.find((item) => item.id === jobId);

  if (!job) {
    return (
      <main className="job-not-found">
        <p className="section-label">CAREERS</p>
        <h1>Position Not Found</h1>

        <Link to="/careers" className="primary-button">
          Back to Careers
        </Link>
      </main>
    );
  }

  return (
    <main className="job-details-page">
      <section className="job-details-hero">
        <div>
          <p className="section-label">{job.department}</p>

          <h1>
            {job.title}
          </h1>

          <p>{job.description}</p>

          <div className="job-details-meta">
            <span>📍 {job.location}</span>
            <span>💼 {job.type}</span>
            <span>Experience: {job.experience}</span>
          </div>
        </div>

        <div className="job-hero-card">
          <span>INTERESTED?</span>

          <h3>Join our team</h3>

          <p>
            Apply for this position and share your experience with us.
          </p>

          <a href="#apply" className="primary-button">
            Apply Now
          </a>
        </div>
      </section>

      <section className="job-details-content">
        <div className="job-detail-section">
          <p className="section-label">RESPONSIBILITIES</p>

          <h2>What you'll do</h2>

          <ul>
            {job.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="job-detail-section">
          <p className="section-label">REQUIREMENTS</p>

          <h2>What we're looking for</h2>

          <ul>
            {job.requirements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="job-apply-section" id="apply">
        <div>
          <p className="section-label">APPLICATION</p>

          <h2>
            Ready to <span>apply?</span>
          </h2>

          <p>
            Submit your details and our team will review your application.
          </p>
        </div>

        <Link
          to={`/careers/${job.id}/apply`}
          className="primary-button"
        >
          Apply for this Position
        </Link>
      </section>
    </main>
  );
}

export default JobDetails;