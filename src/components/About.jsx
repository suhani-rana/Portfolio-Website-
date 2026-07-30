import "../styles/about.css";
import SectionTitle from "./SectionTitle";

function About() {
  return (
    <section id="about" className="about">

      <SectionTitle
        subtitle="ABOUT ME"
        title="Who I Am"
      />

      <div className="about-grid">

        <div className="about-card">
          <h3>BCA Graduate</h3>

          <p>
            I'm Suhani Rana, a Bachelor of Computer Applications graduate
            passionate about technology, data analytics, and software
            development. I enjoy solving real-world problems through data and
            continuously improving my technical skills.
          </p>

          <p>
            My current focus is Data Analytics using Excel, SQL and Python while
            building practical projects that create business value.
          </p>
        </div>

        <div className="about-card">

          <div className="info">

            <div>
              <h4>Education</h4>
              <p>BCA Graduate (2026)</p>
            </div>

            <div>
              <h4>University</h4>
              <p>DSEU</p>
            </div>

            <div>
              <h4>Looking For</h4>
              <p>Internships & Entry-Level Roles</p>
            </div>

            <div>
              <h4>Interest</h4>
              <p>Data Analytics & Software Development</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;