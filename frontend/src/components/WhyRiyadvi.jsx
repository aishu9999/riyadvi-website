import { useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const approach = [
  {
    number: "01",
    title: "Strategy",
    text: "Understand the business requirement and define a clear digital direction.",
  },
  {
    number: "02",
    title: "Design",
    text: "Create intuitive and engaging experiences around user and business needs.",
  },
  {
    number: "03",
    title: "Development",
    text: "Build scalable digital solutions using modern technologies.",
  },
  {
    number: "04",
    title: "Marketing",
    text: "Connect digital solutions with strategies that improve reach and engagement.",
  },
  {
    number: "05",
    title: "Optimization",
    text: "Continuously improve performance, usability, and digital experiences.",
  },
  {
    number: "06",
    title: "Growth",
    text: "Support long-term business growth through technology and digital innovation.",
  },
];

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
    title: "International Expansion",
    text: "Expanded our client base to include markets in Australia and established a presence in the APAC region.",
  },
  {
    year: "2024",
    title: "Global Recognition",
    text: "Received the 'Star of Excellence' Award from the National Integrity Cultural Academy.",
  },
];

function WhyRiyadvi() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".approach-card",
        {
          opacity: 0,
          y: 70,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ".journey-card",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".journey-grid",
            start: "top 80%",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section className="why-riyadvi-section" ref={sectionRef}>

      {/* WHY RIYADVI */}

      <div className="why-riyadvi-heading">
        <p className="section-label">WHY RIYADVI</p>

        <h2>
          End-to-End Solutions
          <span> for Business Growth</span>
        </h2>

        <p>
          From strategy to growth, we bring together technology,
          design, marketing, and continuous optimization to create
          meaningful digital solutions.
        </p>
      </div>


      {/* APPROACH */}

      <div className="approach-grid">
        {approach.map((item) => (
          <div className="approach-card" key={item.number}>
            <span className="approach-number">
              {item.number}
            </span>

            <div className="approach-icon">
              <span></span>
            </div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>
          </div>
        ))}
      </div>


      {/* COMPANY JOURNEY */}

      <div className="journey-section">

        <div className="journey-heading">
          <p className="section-label">OUR JOURNEY</p>

          <h2>
            Growing With
            <span> Innovation</span>
          </h2>

          <p>
            From our foundation in 2021 to expanding into international
            markets, our journey reflects continuous innovation and growth.
          </p>
        </div>

        <div className="journey-grid">
          {milestones.map((milestone) => (
            <div
              className="journey-card"
              key={milestone.year}
            >
              <span className="journey-year">
                {milestone.year}
              </span>

              <h3>{milestone.title}</h3>

              <p>{milestone.text}</p>
            </div>
          ))}
        </div>

      </div>


      {/* BUSINESS HEALTH CHECKUP */}

      <div className="health-checkup-cta">

        <div>
          <p className="section-label">
            BUSINESS HEALTH CHECKUP
          </p>

          <h3>
            Understand Your Digital
            <span> Business Health</span>
          </h3>

          <p>
            Evaluate your website, digital presence, marketing,
            technology, and business challenges through our
            structured Business Health Checkup.
          </p>
        </div>

        <Link
          to="/business-health-checkup"
          className="primary-button"
        >
          Start Business Health Checkup →
        </Link>

      </div>


      {/* SOFTWARE PROJECT PLANNING GUIDE */}

      <div className="planning-guide-cta">

        <p className="section-label">
          FREE RESOURCE
        </p>

        <h3>
          Plan Your Next Software Project With Clarity
        </h3>

        <p>
          Get our free Software Project Planning Guide to understand
          the key stages of planning, designing, developing, and
          launching a software project.
        </p>

        <Link
          to="/software-project-planning-guide"
          className="primary-button"
        >
          Get the Free Guide →
        </Link>

      </div>

    </section>
  );
}

export default WhyRiyadvi;