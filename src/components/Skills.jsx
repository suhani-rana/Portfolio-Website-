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

        {skills.map((skill, index) => (

          <div className="skill-card" key={index}>

            <h3>{skill.category}</h3>

            <div className="skill-list">

              {skill.items.map((item, i) => (

                <span key={i}>{item}</span>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;