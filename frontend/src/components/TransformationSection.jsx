import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Business Challenge",
    text: "We understand your business goals, challenges, and digital requirements.",
  },
  {
    number: "02",
    title: "Strategy",
    text: "We create a clear digital strategy aligned with your business objectives.",
  },
  {
    number: "03",
    title: "Design",
    text: "We transform ideas into intuitive and engaging digital experiences.",
  },
  {
    number: "04",
    title: "Technology",
    text: "We build scalable solutions using modern technologies and architecture.",
  },
  {
    number: "05",
    title: "Launch",
    text: "We deploy, test, optimize, and prepare your solution for real users.",
  },
  {
    number: "06",
    title: "Growth",
    text: "We continuously improve your digital product to support business growth.",
  },
];

function TransformationSection() {
  const sectionRef = useRef(null);
useGSAP(
  () => {
    const cards = gsap.utils.toArray(".transformation-card");

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );

    gsap.fromTo(
      ".transformation-line-progress",
      {
        scaleX: 0,
      },
      {
        scaleX: 1,
        transformOrigin: "left center",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          end: "bottom 75%",
          scrub: 1,
        },
      }
    );
  },
  { scope: sectionRef }
);
  return (
    <section className="transformation-section" ref={sectionRef}>
      <div className="transformation-heading">
        <p className="section-label">OUR APPROACH</p>

        <h2>
          From Business Challenge
          <span> to Business Growth</span>
        </h2>

        <p>
          We combine strategy, design, technology, and continuous optimization
          to transform ideas into meaningful digital solutions.
        </p>
      </div>

      <div className="transformation-grid">
        <div className="transformation-line">
  <div className="transformation-line-progress"></div>
</div>
        {steps.map((step) => (
          <div className="transformation-card" key={step.number}>
            <span className="step-number">{step.number}</span>

            <h3>{step.title}</h3>

            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TransformationSection;