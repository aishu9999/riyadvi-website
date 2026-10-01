import { useState, useEffect } from "react";

function AdminDashboard() {
  const [stats, setStats] = useState({
    contacts: 0,
    consultations: 0,
    healthCheckups: 0,
    leads: 0,
    applications: 0,
  });

  const [contactList, setContactList] = useState([]);
  const [consultationList, setConsultationList] = useState([]);
const [healthCheckupList, setHealthCheckupList] = useState([]);
const [leadList, setLeadList] = useState([]);
const [applicationList, setApplicationList] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [
          contactsResponse,
          consultationsResponse,
          healthResponse,
          leadsResponse,
          applicationsResponse,
        ] = await Promise.all([
          fetch("https://riyadvi-website-huhp.onrender.com/api/contact"),
          fetch("https://riyadvi-website-huhp.onrender.com/api/consultation"),
          fetch("https://riyadvi-website-huhp.onrender.com/api/health-checkup"),
          fetch("https://riyadvi-website-huhp.onrender.com/api/lead-magnet"),
          fetch("https://riyadvi-website-huhp.onrender.com/api/applications"),
        ]);

        const contacts = await contactsResponse.json();
        const consultations = await consultationsResponse.json();
        const healthCheckups = await healthResponse.json();
        const leads = await leadsResponse.json();
        const applications = await applicationsResponse.json();

        setContactList(contacts.data || []);
        setConsultationList(consultations.data || []);
setHealthCheckupList(healthCheckups.data || []);
setLeadList(leads.data || []);
setApplicationList(applications.data || []);

        setStats({
          contacts: contacts.data?.length || 0,
          consultations: consultations.data?.length || 0,
          healthCheckups: healthCheckups.data?.length || 0,
          leads: leads.data?.length || 0,
          applications: applications.data?.length || 0,
        });
      } catch (error) {
        console.error("Failed to fetch dashboard stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <main className="admin-dashboard-page">
      <section className="admin-dashboard-header">
        <p className="section-label">ADMIN DASHBOARD</p>

        <h1>
          Riyadvi
          <span> Leads & Applications</span>
        </h1>

        <p>
          Manage enquiries, consultations, health checkups,
          lead magnet requests, and career applications.
        </p>
      </section>

      <section className="admin-stats">
        <div className="admin-stat-card">
          <span>01</span>
          <h2>Contact Enquiries</h2>
          <p>{stats.contacts}</p>
        </div>

        <div className="admin-stat-card">
          <span>02</span>
          <h2>Consultations</h2>
          <p>{stats.consultations}</p>
        </div>

        <div className="admin-stat-card">
          <span>03</span>
          <h2>Health Checkups</h2>
          <p>{stats.healthCheckups}</p>
        </div>

        <div className="admin-stat-card">
          <span>04</span>
          <h2>Lead Magnet</h2>
          <p>{stats.leads}</p>
        </div>

        <div className="admin-stat-card">
          <span>05</span>
          <h2>Applications</h2>
          <p>{stats.applications}</p>
        </div>
      </section>
            <section className="admin-data-section">
        <div className="admin-section-heading">
          <p className="section-label">CONTACT ENQUIRIES</p>
          <h2>Recent Enquiries</h2>
        </div>

        {contactList.length === 0 ? (
          <p className="admin-empty">
            No contact enquiries found.
          </p>
        ) : (
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Company</th>
                  <th>Requirement</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {contactList.map((contact) => (
                  <tr key={contact._id}>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone || "—"}</td>
                    <td>{contact.company || "—"}</td>
                    <td>{contact.requirement}</td>
                    <td>
                      {new Date(contact.createdAt).toLocaleDateString()}
                    </td>
                    <td>
                      <span className="admin-status">
                        {contact.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
      <section className="admin-data-section">
  <div className="admin-section-heading">
    <p className="section-label">CONSULTATIONS</p>
    <h2>Consultation Requests</h2>
  </div>

  {consultationList.length === 0 ? (
    <p className="admin-empty">
      No consultation requests found.
    </p>
  ) : (
    <div className="admin-table-wrapper">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
            <th>Requirement</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {consultationList.map((consultation) => (
            <tr key={consultation._id}>
              <td>{consultation.name}</td>
              <td>{consultation.email}</td>
              <td>{consultation.phone || "—"}</td>
              <td>{consultation.company || "—"}</td>
              <td>{consultation.requirement}</td>
              <td>
                {new Date(
                  consultation.createdAt
                ).toLocaleDateString()}
              </td>
              <td>
                <span className="admin-status">
                  {consultation.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
</section>
<section className="admin-data-section">
  <div className="admin-section-heading">
    <p className="section-label">BUSINESS HEALTH CHECKUPS</p>
    <h2>Health Checkup Requests</h2>
  </div>

  {healthCheckupList.length === 0 ? (
    <p className="admin-empty">
      No health checkup requests found.
    </p>
  ) : (
    <div className="admin-table-wrapper">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Business</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Industry</th>
            <th>Website</th>
            <th>Marketing Goal</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {healthCheckupList.map((health) => (
            <tr key={health._id}>
              <td>{health.businessName}</td>
              <td>{health.email}</td>
              <td>{health.phone || "—"}</td>
              <td>{health.industry || "—"}</td>
              <td>{health.website || "—"}</td>
              <td>{health.marketingGoal || "—"}</td>
              <td>
                {new Date(
                  health.createdAt
                ).toLocaleDateString()}
              </td>
              <td>
                <span className="admin-status">
                  {health.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
</section>
<section className="admin-data-section">
  <div className="admin-section-heading">
    <p className="section-label">LEAD MAGNET</p>
    <h2>Project Planning Guide Requests</h2>
  </div>

  {leadList.length === 0 ? (
    <p className="admin-empty">
      No lead magnet requests found.
    </p>
  ) : (
    <div className="admin-table-wrapper">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {leadList.map((lead) => (
            <tr key={lead._id}>
              <td>{lead.name}</td>
              <td>{lead.company || "—"}</td>
              <td>{lead.email}</td>
              <td>{lead.phone || "—"}</td>
              <td>
                {new Date(
                  lead.createdAt
                ).toLocaleDateString()}
              </td>
              <td>
                <span className="admin-status">
                  {lead.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
</section>
<section className="admin-data-section">
  <div className="admin-section-heading">
    <p className="section-label">CAREER APPLICATIONS</p>
    <h2>Recent Applications</h2>
  </div>

  {applicationList.length === 0 ? (
    <p className="admin-empty">
      No career applications found.
    </p>
  ) : (
    <div className="admin-table-wrapper">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Position</th>
            <th>Message</th>
            <th>Resume</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {applicationList.map((application) => (
            <tr key={application._id}>
              <td>{application.name}</td>
              <td>{application.email}</td>
              <td>{application.phone}</td>
              <td>{application.position}</td>
              <td>{application.message || "—"}</td>

              <td>
             {application.resume ? (
  <a
    href={`https://riyadvi-website-huhp.onrender.com/${application.resume.replace(/\\/g, "/")}`}
    target="_blank"
    rel="noopener noreferrer"
    className="admin-resume"
  >
    View Resume
  </a>
) : (
  "—"
)}
              </td>

              <td>
                {new Date(
                  application.createdAt
                ).toLocaleDateString()}
              </td>

              <td>
                <span className="admin-status">
                  {application.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
</section>
    </main>
  );
}

export default AdminDashboard;