import ServicesSection from "../components/ServicesSection";

function Services() {
  return (
    <main className="services-page">
      <section className="services-page-hero">
        <p className="section-label">OUR SERVICES</p>

        <h1>
          Digital Solutions
          <span> Built for Growth</span>
        </h1>

        <p>
          Explore our technology, design, and digital solutions created around
          your business goals.
        </p>
      </section>

      <ServicesSection />
    </main>
  );
}

export default Services;