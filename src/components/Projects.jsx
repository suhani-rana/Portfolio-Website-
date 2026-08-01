import "../styles/projects.css";
import projects from "../data/projects";
import SectionTitle from "./SectionTitle";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
} from "react-icons/fa";

function Projects() {
  return (
    <section id="projects" className="projects">

      <SectionTitle
        subtitle="MY WORK"
        title="Featured Projects"
      />

      <div className="projects-grid">

        {projects.map((project) => (

          <div className="project-card" key={project.id}>

            <div className="project-image">

              <img
                src={project.image}
                alt={project.title}
              />

              <div className="project-overlay">

                <span className="featured-badge">
                  <FaStar />
                  Featured Project
                </span>

              </div>

            </div>

            <div className="project-content">

              <span className="project-tag">
                Portfolio Project
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">

                {project.tech.map((tech, index) => (

                  <span key={index}>
                    {tech}
                  </span>

                ))}

              </div>

              <div className="project-buttons">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                  Source Code
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt />
                  View Project
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;