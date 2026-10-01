import { Link, useParams } from "react-router-dom";
import services from "../data/services";
import ServiceVisual from "../components/ServiceVisual";

function ServiceDetails() {
  const { serviceId } = useParams();

  const service = services.find(
    (item) => item.id === serviceId
  );

  if (!service) {
    return (
      <main className="service-not-found">
        <h1>Service Not Found</h1>
        <Link to="/services">Back to Services</Link>
      </main>
    );
  }

  return (
    <main className="service-details">

      {/* SERVICE HERO */}
      <section className="service-hero">
        <div className="service-hero-content">
          <p className="section-label">OUR SERVICE</p>

          <h1>{service.title}</h1>

          <p>{service.description}</p>

          <Link to="/contact" className="primary-button">
            Discuss Your Project
          </Link>
        </div>

        <div className="service-hero-visual">
          <ServiceVisual />
        </div>
      </section>


      {/* SERVICE CONTENT */}
      <section className="service-content">

        {/* PROBLEM + SOLUTION */}
        <div className="service-block service-problem-solution">
          <div>
            <p className="section-label">THE CHALLENGE</p>

            <h2>The Problem</h2>

            <p>{service.problem}</p>
          </div>

          <div>
            <p className="section-label">OUR APPROACH</p>

            <h2>The Solution</h2>

            <p>{service.solution}</p>
          </div>
        </div>


        {/* FEATURES */}
        <div className="service-block">
          <p className="section-label">FEATURES</p>

          <h2>What We Deliver</h2>

          <div className="service-list">
            {service.features.map((feature) => (
              <div
                key={feature}
                className="service-list-item"
              >
                <span>✦</span>

                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>


        {/* USE CASES */}
        <div className="service-block">
          <p className="section-label">USE CASES</p>

          <h2>Where It Fits</h2>

          <div className="service-tags">
            {service.useCases.map((useCase) => (
              <span key={useCase}>
                {useCase}
              </span>
            ))}
          </div>
        </div>


        {/* TECHNOLOGY */}
        <div className="service-block">
          <p className="section-label">TECHNOLOGY</p>

          <h2>Technology Stack</h2>

          <div className="service-tags">
            {service.technologies.map((technology) => (
              <span key={technology}>
                {technology}
              </span>
            ))}
          </div>
        </div>


        {/* PROCESS */}
        <div className="service-block">
          <p className="section-label">PROCESS</p>

          <h2>How We Work</h2>

          <div className="service-process">
            {service.process.map((step, index) => (
              <div
                key={step}
                className="process-step"
              >
                <span>
                  0{index + 1}
                </span>

                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>


        {/* RELATED PORTFOLIO */}
        <div className="service-block">
          <p className="section-label">RELATED WORK</p>

          <h2>Related Portfolio</h2>

          <div className="service-tags">
            {service.relatedPortfolio.map((projectId) => (
              <Link
                key={projectId}
                to={`/portfolio/${projectId}`}
                className="service-portfolio-link"
              >
                View Case Study →
              </Link>
            ))}
          </div>
        </div>

      </section>


      {/* CTA */}
      <section className="service-cta">
        <p className="section-label">LET'S BUILD</p>

        <h2>Have a project in mind?</h2>

        <Link
          to="/contact"
          className="primary-button"
        >
          Book a Free Consultation
        </Link>
      </section>

    </main>
  );
}

export default ServiceDetails;