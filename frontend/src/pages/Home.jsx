import ThreeHero from "../components/ThreeHero";
import TransformationSection from "../components/TransformationSection";
import ServicesSection from "../components/ServicesSection";
import TechnologyEcosystem from "../components/TechnologyEcosystem";
import WhyRiyadvi from "../components/WhyRiyadvi";
import { Link } from "react-router-dom";
function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-label">RIYADVI SOFTWARE TECHNOLOGIES</p>

          <h1>
            Custom Software & Digital Solutions
            <span> to Grow Your Business</span>
          </h1>

          <p className="hero-description">
            Web & App Development, UI/UX Design, and Business Strategy —
            all tailored to your needs.
          </p>

          <div className="hero-actions">
<Link to="/consultation" className="primary-button">
  Book a Free Consultation
</Link>

<Link to="/services" className="secondary-button">
  Explore Our Solutions
</Link>
          </div>
        </div>

    <div className="hero-visual">
  <ThreeHero />
</div>
      </section>
      <TransformationSection />
      <ServicesSection />
      <TechnologyEcosystem />
      <WhyRiyadvi />
    </main>
  );
}

export default Home;