import "../styles/contact.css";
import profile from "../data/profile";
import SectionTitle from "./SectionTitle";

function Contact() {
  return (
    <section id="contact" className="contact">

      <SectionTitle
        subtitle="CONTACT"
        title="Let's Connect"
      />

      <div className="contact-container">

        {/* Left */}

        <div className="contact-info">

          <h3>Get In Touch</h3>

          <p>
            I'm currently open to internships, freelance projects and
            entry-level opportunities. Feel free to reach out!
          </p>

          <div className="info-item">
            <strong>Email</strong>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>

          <div className="info-item">
            <strong>Phone</strong>
            <a href={`tel:${profile.phone}`}>{profile.phone}</a>
          </div>

          <div className="info-item">
            <strong>GitHub</strong>
            <a href={profile.github} target="_blank" rel="noreferrer">
              Visit GitHub
            </a>
          </div>

          <div className="info-item">
            <strong>LinkedIn</strong>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              Visit LinkedIn
            </a>
          </div>

        </div>

        {/* Right */}

        <form className="contact-form">

          <input type="text" placeholder="Your Name" required />

          <input type="email" placeholder="Your Email" required />

          <input type="text" placeholder="Subject" required />

          <textarea
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;