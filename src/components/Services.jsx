import "../styles/services.css";
import SectionTitle from "./SectionTitle";

const opportunities = [
  "Data Analyst Internship",
  "Software Developer Internship",
  "Frontend Developer Internship",
  "Freelance Projects",
  "Entry-Level IT Roles",
  "Open Source Collaboration"
];

function Services() {
  return (
    <section id="services" className="services">
      <SectionTitle
        subtitle="OPEN TO WORK"
        title="Looking For Opportunities"
      />

      <div className="services-grid">
        {opportunities.map((item, index) => (
          <div className="service-card" key={index}>
            <span>🚀</span>
            <h3>{item}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;