import "../styles/navbar.css";
import profile from "../data/profile";

import {
  FaWhatsapp,
  FaCode
} from "react-icons/fa";

function Navbar() {
  return (
    <header className="navbar">

      <div className="container">

        {/* Logo */}

        <a href="#home" className="logo">

          <div className="logo-circle">
            <FaCode />
          </div>

          <div className="logo-text">
            <h2>{profile.name}</h2>
            <span>{profile.title}</span>
          </div>

        </a>

        {/* Navigation */}

        <nav>

          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#education">Education</a>

          <a href="#skills">Skills</a>

          <a href="#projects">Projects</a>

          <a href="#services">Open To Work</a>

          <a href="#contact">Contact</a>

        </nav>

        {/* Connect Button */}

        <a
          href={`https://wa.me/${profile.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="connect-btn"
        >
          <FaWhatsapp />
          <span>Connect With Me</span>
        </a>

      </div>

    </header>
  );
}

export default Navbar;