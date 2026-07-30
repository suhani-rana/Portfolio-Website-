import "../styles/hero.css";
import profile from "../assets/images/profile.jpeg";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">

        {/* LEFT SIDE */}
        <div className="hero-text">

          <span className="hero-badge">
            🚀 Open to Internships & Entry-Level Opportunities
          </span>

          <h1>
            Hi, I'm <span>Suhani Rana</span>
          </h1>

          <h2>
            <Typewriter
              words={[
                "Aspiring Data Analyst",
                "Python Developer",
                "SQL Enthusiast",
                "Excel Dashboard Creator",
                "Tech Explorer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={45}
              delaySpeed={1800}
            />
          </h2>

          <p>
            Passionate about technology, data, and solving real-world problems.
            I enjoy building practical projects, learning modern technologies,
            and continuously improving my skills.
          </p>

          <div className="hero-buttons">

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </a>

            <a
              href="/resume.pdf"
              download
            >
              Download Resume
            </a>

            <a
              href="https://wa.me/919311890883"
              target="_blank"
              rel="noreferrer"
            >
              Connect With Me
            </a>

          </div>

          <div className="hero-stats">

            <div className="stat-card">
              <h3>4+</h3>
              <p>Projects</p>
            </div>

            <div className="stat-card">
              <h3>BCA</h3>
              <p>Graduate</p>
            </div>

            <div className="stat-card">
              <h3>100%</h3>
              <p>Learning</p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="hero-image">

          <div className="image-glow"></div>

          <div className="image-frame">
            <img
              src={profile}
              alt="Suhani Rana"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;