import "../styles/contact.css";
import profile from "../data/profile";
import SectionTitle from "./SectionTitle";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">

      <SectionTitle
        subtitle="CONTACT"
        title="Let's Connect"
      />

      <div className="contact-container">

        {/* LEFT */}

        <div className="contact-info">

          <h3>Let's Build Something Amazing 🚀</h3>

          <p>
            I'm currently looking for internships,
            freelance work and entry-level opportunities.
            If you have an exciting project or job opportunity,
            I'd love to hear from you.
          </p>

          <div className="info-card">

            <FaEnvelope className="info-icon" />

            <div>

              <h4>Email</h4>

              <a href={`mailto:${profile.email}`}>
                {profile.email}
              </a>

            </div>

          </div>

          <div className="info-card">

            <FaPhoneAlt className="info-icon" />

            <div>

              <h4>Phone</h4>

              <a href={`tel:${profile.phone}`}>
                {profile.phone}
              </a>

            </div>

          </div>

          <div className="info-card">

            <FaGithub className="info-icon" />

            <div>

              <h4>GitHub</h4>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                Visit GitHub
              </a>

            </div>

          </div>

          <div className="info-card">

            <FaLinkedin className="info-icon" />

            <div>

              <h4>LinkedIn</h4>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                Visit LinkedIn
              </a>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button>

            <FaPaperPlane />

            Send Message

          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;