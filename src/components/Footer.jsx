import "../styles/footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaHeart
} from "react-icons/fa";

import profile from "../data/profile";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h2>Suhani Rana</h2>

        <p>
          Aspiring Data Analyst • Python Developer • Tech Explorer
        </p>

        <div className="footer-social">

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href={`https://wa.me/${profile.phone}`}
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>

        </div>

        <div className="footer-bottom">

          <p>

            Made with

            <FaHeart className="heart" />

            by Suhani Rana © {new Date().getFullYear()}

          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;