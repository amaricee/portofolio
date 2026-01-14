import "./Footer.css";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <span className="footer-left">Muhammad Ramadan © 2025</span>

      <div className="footer-center">
        <a href="https://instagram.com/_danramaa" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com/in/amaricee" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/amaricee" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:mhmdramaa1109@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
