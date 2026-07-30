import "../styles/education.css";
import SectionTitle from "./SectionTitle";

function Education() {
  return (
    <section id="education" className="education">

      <SectionTitle
        subtitle="EDUCATION"
        title="Academic Journey"
      />

      <div className="timeline">

        <div className="timeline-item">

          <div className="timeline-dot"></div>

          <div className="timeline-card">

            <span className="year">2023 – 2026</span>

            <h3>Bachelor of Computer Applications (BCA)</h3>

            <h4>Delhi Skill and Entrepreneurship University (DSEU)</h4>

            <p>
              Built a strong foundation in Programming, Database Management,
              Data Analytics, Software Development and Computer Fundamentals.
              Worked on practical projects using Excel, SQL and Python.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;