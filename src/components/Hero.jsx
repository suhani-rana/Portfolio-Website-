import "../styles/hero.css";
import profile from "../data/profile";
import profileImage from "../assets/images/Profile.jpeg";

import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

import {
  fadeUp,
  fadeLeft,
  fadeRight,
} from "../utils/animation";

import {
  FaWhatsapp,
  FaDownload,
  FaEye,
} from "react-icons/fa";

function Hero() {
  return (
    <motion.section
      id="home"
      className="hero"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="hero-content">

        {/* LEFT SIDE */}
        <motion.div
          className="hero-text"
          variants={fadeLeft}
        >
          <span className="hero-badge">
            🚀 Open to Internships & Entry-Level Opportunities
          </span>

          <h1>
            Hello, I'm <span>{profile.name}</span>
          </h1>

          <h2>
            <Typewriter
              words={[
                "Aspiring Data Analyst",
                "Excel Dashboard Creator",
                "SQL Enthusiast",
                "Python Programmer",
                "React Learner",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={45}
              delaySpeed={1800}
            />
          </h2>

          <p>{profile.bio}</p>

          <div className="hero-buttons">

            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
            >
              <FaEye />
              <span>View Resume</span>
            </a>

            <a
              href={profile.resume}
              download
            >
              <FaDownload />
              <span>Download Resume</span>
            </a>

            <a
              href={`https://wa.me/${profile.whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
              <span>Connect With Me</span>
            </a>

          </div>

          <div className="hero-stats">

            <div className="stat-card">
              <h3>4+</h3>
              <p>Projects Built</p>
            </div>

            <div className="stat-card">
              <h3>Excel</h3>
              <p>SQL • Python</p>
            </div>

            <div className="stat-card">
              <h3>Open</h3>
              <p>Internships</p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="hero-image"
          variants={fadeRight}
        >

          <div className="image-glow"></div>

          <div className="image-frame">
            <img
              src={profileImage}
              alt={profile.name}
            />
          </div>

        </motion.div>

      </div>
    </motion.section>
  );
}

export default Hero;