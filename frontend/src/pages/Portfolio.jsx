import { Link } from "react-router-dom";
import portfolio from "../data/portfolio";

function Portfolio() {
  return (
    <main className="portfolio-page">
      <section className="portfolio-hero">
        <p className="section-label">OUR WORK</p>

        <h1>
          Digital Experiences
          <span> That Create Impact</span>
        </h1>

        <p>
          Explore selected projects across technology, healthcare,
          real estate, lifestyle, and other industries.
        </p>
      </section>

      <section className="portfolio-grid">
        {portfolio.map((project, index) => (
          <Link
            to={`/portfolio/${project.id}`}
            className="portfolio-card"
            key={project.id}
          >
            <div className="portfolio-card-visual">
              <span>0{index + 1}</span>
            </div>

            <div className="portfolio-card-content">
              <p>{project.industry}</p>

              <h2>{project.title}</h2>

              <span>View Case Study →</span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}

export default Portfolio;