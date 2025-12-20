import { useEffect, useRef } from "react";
import "./Contact.css";
import { Mail, Instagram, Linkedin } from "lucide-react";

function Contact() {
  const contactRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = contactRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="contact-section" ref={contactRef}>
      <h2 className="title">CONNECT</h2>

      <div className="contact-wrapper">
        <a href="mailto:emailkamu@gmail.com" className="contact-link">
          <Mail size={18} />
          <span>mhmdramaa1109@gmail.com</span>
        </a>

        <a
          href="https://instagram.com/usernamekamu"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <Instagram size={18} />
          <span>_danramaa</span>
        </a>

        <a
          href="https://linkedin.com/in/usernamekamu"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <Linkedin size={18} />
          <span>Muhammad Ramadan</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
