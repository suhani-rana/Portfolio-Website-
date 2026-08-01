import { useState, useEffect } from "react";
import "../styles/navbar.css";
import profile from "../data/profile";

import {
  FaWhatsapp,
  FaCode,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <div className="container">

        {/* Logo */}

        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >

          <div className="logo-circle">
            <FaCode />
          </div>

          <div className="logo-text">
            <h2>{profile.name}</h2>
            <span>{profile.title}</span>
          </div>

        </a>

        {/* Desktop Navigation */}

        <nav className="desktop-nav">

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#services">Open To Work</a>
          <a href="#contact">Contact</a>

        </nav>

        {/* Desktop Button */}

        <a
          href={`https://wa.me/${profile.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="connect-btn"
        >
          <FaWhatsapp />
          <span>Connect With Me</span>
        </a>

        {/* Hamburger */}

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>

        <a href="#home" onClick={closeMenu}>Home</a>

        <a href="#about" onClick={closeMenu}>About</a>

        <a href="#education" onClick={closeMenu}>Education</a>

        <a href="#skills" onClick={closeMenu}>Skills</a>

        <a href="#projects" onClick={closeMenu}>Projects</a>

        <a href="#services" onClick={closeMenu}>Open To Work</a>

        <a href="#contact" onClick={closeMenu}>Contact</a>

        <a
          href={`https://wa.me/${profile.whatsapp}`}
          className="mobile-btn"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp />
          Connect With Me
        </a>

      </div>

    </header>
  );
}

export default Navbar;