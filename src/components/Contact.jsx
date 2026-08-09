import emailjs from "@emailjs/browser";
import { useRef } from "react";

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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xr0d2xp",
        "template_ux2uovg",
        form.current,
        "cMRboNWnUdJM8v7nd"
      )
      .then(() => {
        alert("Message Sent Successfully ✅");
        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message ❌");
      });
  };

  return (
    <section id="contact" className="contact">

      <SectionTitle
        subtitle="GET IN TOUCH"
        title="Contact Me"
      />

      <div className="contact-container">

        {/* LEFT */}

        <div className="contact-info">

          <h3>Let's Work Together</h3>

          <p>
            I'm actively seeking internships, freelance projects,
            and entry-level opportunities in Data Analytics and
            Software Development. If you have an opportunity or
            would like to collaborate, I'd love to hear from you.
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

        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            name="title"
            placeholder="Subject"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">

            <FaPaperPlane />

            Send Message

          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;