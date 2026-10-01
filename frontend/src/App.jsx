import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ServiceDetails from "./pages/ServiceDetails";
import Portfolio from "./pages/Portfolio";
import CaseStudy from "./pages/CaseStudy";
import Services from "./pages/Services";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Careers from "./pages/Careers";
import JobDetails from "./pages/JobDetails";
import JobApplication from "./pages/JobApplication";
import Contact from "./pages/Contact";
import BusinessHealthCheckup from "./pages/BusinessHealthCheckup";
import SoftwareProjectPlanningGuide from "./pages/SoftwareProjectPlanningGuide";
import Consultation from "./pages/Consultation";
import AdminDashboard from "./pages/AdminDashboard";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:serviceId" element={<ServiceDetails />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:projectId" element={<CaseStudy />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:postId" element={<BlogDetails />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/:jobId" element={<JobDetails />} />
        <Route path="/careers/:jobId/apply" element={<JobApplication />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/business-health-checkup" element={<BusinessHealthCheckup />} />
        <Route path="/software-project-planning-guide" element={<SoftwareProjectPlanningGuide />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/admin" element={<AdminDashboard />} />

      </Routes>
    </>
  );
}

export default App;