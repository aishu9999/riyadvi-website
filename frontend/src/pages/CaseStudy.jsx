import { Link, useParams } from "react-router-dom";
import portfolio from "../data/portfolio";
import CaseStudyVisual from "../components/CaseStudyVisual";

function CaseStudy() {
  const { projectId } = useParams();

  const project = portfolio.find(
    (item) => item.id === projectId
  );

  if (!project) {
    return (
      <main className="service-not-found">
        <h1>Project Not Found</h1>

        <Link to="/portfolio">
          Back to Portfolio
        </Link>
      </main>
    );
  }

  return (
    <main className="case-study-page">
      <section className="case-study-hero">
        <p className="section-label">
          {project.industry}
        </p>

        <h1>{project.title}</h1>
        <CaseStudyVisual />

        <p>
          A digital solution designed around the needs,
          goals, and requirements of {project.client}.
        </p>
      </section>

      <section className="case-study-content">
        <div className="case-study-info">
          <span>CLIENT</span>
          <h3>{project.client}</h3>
        </div>

        <div className="case-study-info">
          <span>INDUSTRY</span>
          <h3>{project.industry}</h3>
        </div>

        <div className="case-study-block">
          <p className="section-label">
            THE CHALLENGE
          </p>

          <h2>Understanding the Problem</h2>

          <p>{project.challenge}</p>
        </div>

        <div className="case-study-block">
          <p className="section-label">
            THE SOLUTION
          </p>

          <h2>Building the Experience</h2>

          <p>{project.solution}</p>
        </div>

        <div className="case-study-block">
          <p className="section-label">
            TECHNOLOGY
          </p>

          <h2>Technology Used</h2>

          <div className="service-tags">
            {project.technologies.map((technology) => (
              <span key={technology}>
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className="case-study-block">
          <p className="section-label">
            SERVICES
          </p>

          <h2>Services Delivered</h2>

          <div className="service-tags">
            {project.services.map((service) => (
              <span key={service}>
                {service}
              </span>
            ))}
          </div>
        </div>

        <div className="case-study-result">
          <p className="section-label">
            THE RESULT
          </p>

          <h2>{project.result}</h2>
        </div>
      </section>

      <section className="service-cta">
        <p className="section-label">
          HAVE A SIMILAR PROJECT?
        </p>

        <h2>
          Let's build something meaningful.
        </h2>

        <Link
          to="/contact"
          className="primary-button"
        >
          Start a Conversation
        </Link>
      </section>
    </main>
  );
}

export default CaseStudy;