import { useState } from "react";
import { Link } from "react-router-dom";
import jobs from "../data/careers";

function Careers() {
  const [department, setDepartment] = useState("All");
  const [type, setType] = useState("All");
  const [location, setLocation] = useState("All");

  const filteredJobs = jobs.filter((job) => {
    const matchesDepartment =
      department === "All" || job.department === department;

    const matchesType =
      type === "All" || job.type === type;

    const matchesLocation =
      location === "All" || job.location === location;

    return (
      matchesDepartment &&
      matchesType &&
      matchesLocation
    );
  });

  const departments = [
    "All",
    ...new Set(jobs.map((job) => job.department)),
  ];

  const types = [
    "All",
    ...new Set(jobs.map((job) => job.type)),
  ];

  const locations = [
    "All",
    ...new Set(jobs.map((job) => job.location)),
  ];

  return (
    <main className="careers-page">

      {/* HERO */}
      <section className="careers-hero">
        <p className="section-label">CAREERS AT RIYADVI</p>

        <h1>
          Build the Future
          <span> With Us</span>
        </h1>

        <p>
          Join a team working across technology, design, and digital solutions
          to create meaningful experiences for businesses.
        </p>
      </section>


      {/* JOBS */}
      <section className="careers-list-section">

        <div className="careers-heading">
          <p className="section-label">OPEN POSITIONS</p>

          <h2>
            Find Your <span>Opportunity</span>
          </h2>
        </div>


        {/* FILTERS */}
        <div className="career-filters">

          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            {departments.map((item) => (
              <option key={item} value={item}>
                {item === "All"
                  ? "All Departments"
                  : item}
              </option>
            ))}
          </select>


          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            {types.map((item) => (
              <option key={item} value={item}>
                {item === "All"
                  ? "All Job Types"
                  : item}
              </option>
            ))}
          </select>


          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            {locations.map((item) => (
              <option key={item} value={item}>
                {item === "All"
                  ? "All Locations"
                  : item}
              </option>
            ))}
          </select>

        </div>


        {/* JOB CARDS */}
        <div className="jobs-grid">

          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <article
                className="job-card"
                key={job.id}
              >
                <div className="job-card-top">
                  <span>{job.department}</span>
                  <span>{job.type}</span>
                </div>

                <h3>{job.title}</h3>

                <p>{job.description}</p>

                <div className="job-meta">
                  <span>
                    📍 {job.location}
                  </span>

                  <span>
                    Experience: {job.experience}
                  </span>
                </div>

                <Link
                  to={`/careers/${job.id}`}
                  className="secondary-button"
                >
                  View Position →
                </Link>
              </article>
            ))
          ) : (
            <p className="no-jobs">
              No positions found for the selected filters.
            </p>
          )}

        </div>

      </section>

    </main>
  );
}

export default Careers;