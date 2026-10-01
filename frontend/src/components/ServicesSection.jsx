import { Link } from "react-router-dom";
import services from "../data/services";
import ServiceVisual from "./ServiceVisual";

function ServicesSection() {
  return (
    <section className="services-section">
      <div className="services-heading">
        <p className="section-label">OUR SERVICES</p>

        <h2>
          Digital Solutions
          <span> Built for Growth</span>
        </h2>

        <p>
          From strategy and design to development and immersive experiences,
          we create technology solutions tailored to your business.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <Link
            to={`/services/${service.id}`}
            className="service-card"
            key={service.id}
          >
            <ServiceVisual />
            <span className="service-number">
              0{index + 1}
            </span>

            <h3>{service.title}</h3>

            <p>{service.shortDescription}</p>

            <div className="service-technologies">
              {service.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <span className="service-link">
              Explore Service →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;