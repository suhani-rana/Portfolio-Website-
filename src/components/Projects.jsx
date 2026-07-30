import "../styles/projects.css";
import projects from "../data/projects";
import SectionTitle from "./SectionTitle";

function Projects() {
  return (
    <section id="projects" className="projects">

      <SectionTitle
        subtitle="PROJECTS"
        title="Featured Projects"
      />

      <div className="projects-grid">

        {projects.map((project) => (

          <div className="project-card" key={project.id}>

            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">

                {project.tech.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}

              </div>

              <div className="project-buttons">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
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