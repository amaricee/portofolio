import { useEffect, useRef } from "react";
import "./About.css";
import { Link } from "react-router-dom";

function AboutPreview() {
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = aboutRef.current;
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
  }, []);

  return (
    <section id="about" className="about-section reveal" ref={aboutRef}>
      <h2 className="title">About Me</h2>

      <p className="text">
        With around one year of experience in web development using JavaScript,
        Laravel, Go, React, and MySQL. I enjoy working independently or in a team,
        adapt quickly, and focus on creating innovative and impactful digital
        solutions.
      </p>

      <div className="about-links">
        <Link to="/about" className="see-more-text">
          See more about me →
        </Link>
      </div>
    </section>
  );
}

export default AboutPreview;
