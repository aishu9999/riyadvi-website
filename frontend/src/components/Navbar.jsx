import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo">
        RIYADVI
      </Link>

      <nav className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Link to="/contact" className="navbar-cta">
        Let's Talk
      </Link>
    </header>
  );
}

export default Navbar;