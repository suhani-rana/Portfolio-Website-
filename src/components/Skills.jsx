import "../styles/skills.css";
import skills from "../data/skills";
import SectionTitle from "./SectionTitle";

function Skills() {
  return (
    <section id="skills" className="skills">

      <SectionTitle
        subtitle="SKILLS"
        title="Technical Skills"
      />

      <div className="skills-grid">

        {skills.map((category, index) => (

          <div className="skill-card" key={index}>

            <h3>{category.category}</h3>

            {category.skills.map((skill, i) => (

              <div className="skill-item" key={i}>

                <div className="skill-info">

                  <span>{skill.name}</span>

                  <span>{skill.level}%</span>

                </div>

                <div className="progress">

                  <div
                    className="progress-fill"
                    style={{ width: `${skill.level}%` }}
                  ></div>

                </div>

              </div>

            ))}

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;