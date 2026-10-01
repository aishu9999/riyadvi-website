import { useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: "2021",
    title: "Company Foundation",
    text: "Launched with an innovative vision and technology solutions aimed at solving complex business challenges.",
  },
  {
    year: "2022",
    title: "Market Expansion",
    text: "Expanded our offerings to include additional services such as mobile app development and digital marketing.",
  },
  {
    year: "2023",
    title: "Expansion to International Markets",
    text: "Expanded our client base to include markets in Australia, successfully establishing our presence in the APAC region.",
  },
  {
    year: "2024",
    title: "Global Recognition",
    text: "Received the 'Star of Excellence' Award from the National Integrity Cultural Academy.",
  },
];

const achievements = [
  {
    value: "700+",
    label: "Completed Projects",
  },
  {
    value: "300+",
    label: "Project Progress",
  },
  {
    value: "1,000+",
    label: "Number of Clients",
  },
  {
    value: "100%",
    label: "Client Satisfaction",
  },
];

const values = [
  {
    title: "Mission",
    text: "Our mission is to deliver exceptional service and products that consistently exceed customer expectations.",
  },
  {
    title: "Vision",
    text: "We aim to be the most trusted and customer-centric company, creating long-lasting relationships with our clients.",
  },
  {
    title: "Goal",
    text: "Our goal is to continuously improve and innovate, ensuring our customers always receive the best experience.",
  },
];

function About() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".about-reveal",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <main className="about-page" ref={sectionRef}>
      {/* HERO */}

      <section className="about-hero">
        <div className="about-hero-content about-reveal">
          <p className="section-label">ABOUT RIYADVI</p>

          <h1>
            Empowering
            <span> Digital Innovation</span>
          </h1>

          <p>
            At Riyadvi Software Technologies, we are dedicated to
            revolutionizing the IT landscape with cutting-edge software
            solutions that drive growth, efficiency, and innovation.
          </p>
        </div>

        <div className="about-hero-visual about-reveal">
          <div className="about-orbit">
            <div className="about-orbit-core">R</div>
          </div>
        </div>
      </section>

      {/* COMPANY STORY */}

      <section className="about-story">
        <div className="about-section-heading about-reveal">
          <p className="section-label">WHAT WE ARE</p>

          <h2>
            Empowering
            <span> Digital Innovation</span>
          </h2>
        </div>

        <div className="about-story-text about-reveal">
          <p>
            At Riyadvi Software Technologies, we are dedicated to
            revolutionizing the IT landscape with cutting-edge software
            solutions that drive growth, efficiency, and innovation.
            From custom software development to IT consulting, our expert
            team ensures your business stays ahead in the digital era.
          </p>

          <p>
            Riyadvi Software Technologies began with a vision to provide
            comprehensive software solutions that cater to the unique
            needs of modern businesses. Over the years, we have evolved
            into a trusted partner for companies looking to transform
            their IT infrastructure, streamline operations, and enhance
            productivity.
          </p>
        </div>
      </section>

      {/* MISSION / VISION / GOAL */}

      <section className="about-values">
        <div className="about-section-heading about-reveal">
          <p className="section-label">OUR PURPOSE</p>

          <h2>
            Customer Satisfaction
            <span> Is Our Top Priority</span>
          </h2>

          <p>
            Customer satisfaction is at the heart of everything we do.
            Our commitment to understanding and meeting the unique needs
            of each client drives us to continuously improve and innovate.
          </p>
        </div>

        <div className="about-purpose-grid">
          {values.map((item, index) => (
            <div className="about-purpose-card about-reveal" key={item.title}>
              <span className="purpose-number">
                0{index + 1}
              </span>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPANY TIMELINE */}

      <section className="about-journey">
        <div className="about-section-heading about-reveal">
          <p className="section-label">COMPANY TIMELINE</p>

          <h2>
            Our Journey
            <span> Over the Years</span>
          </h2>

          <p>
            Experience our journey over the years, highlighting
            milestones and achievements.
          </p>
        </div>

        <div className="milestone-timeline">
          {milestones.map((milestone, index) => (
            <div
              className={`milestone ${
                index % 2 === 0 ? "milestone-left" : "milestone-right"
              } about-reveal`}
              key={milestone.year}
            >
              <div className="milestone-card">
                <span className="milestone-year">
                  {milestone.year}
                </span>

                <h3>{milestone.title}</h3>

                <p>{milestone.text}</p>
              </div>

              <div className="milestone-dot"></div>
            </div>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS */}

      <section className="about-achievements">
        <div className="about-section-heading about-reveal">
          <p className="section-label">WHAT WE ACHIEVED</p>

          <h2>
            Milestones That
            <span> Matter</span>
          </h2>

          <p>
            Here are some of the key milestones we've accomplished over
            the years.
          </p>
        </div>

        <div className="achievement-grid">
          {achievements.map((achievement) => (
            <div
              className="achievement-card about-reveal"
              key={achievement.label}
            >
              <strong>{achievement.value}</strong>
              <span>{achievement.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* GLOBAL PRESENCE */}

      <section className="about-global">
        <div className="about-section-heading about-reveal">
          <p className="section-label">GLOBAL PRESENCE</p>

          <h2>
            Connecting Clients
            <span> Across Markets</span>
          </h2>

          <p>
            Connecting clients in Australia and Canada.
          </p>
        </div>

        <div className="global-map about-reveal">
          <div className="global-point canada">
            <span></span>
            <p>Canada</p>
          </div>

          <div className="global-point australia">
            <span></span>
            <p>Australia</p>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="about-cta">
        <p className="section-label">LET'S CONNECT</p>

        <h2>
          Ready to move your
          <span> business forward?</span>
        </h2>

<div className="about-cta-actions">
  <Link to="/contact" className="primary-button">
    Get In Touch
  </Link>

  <Link to="/business-health-checkup" className="secondary-button">
    Business Health Checkup
  </Link>
</div>
      </section>
    </main>
  );
}

export default About;