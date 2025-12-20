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
      <p className="text">
        Hello! My name is Muhammad Ramadan, an Informatics Engineering graduate
        with approximately one year of experience in web development using
        JavaScript, Laravel, Go, React, and MySQL. I am able to work both
        independently and collaboratively, adapt quickly to new challenges, and
        consistently focus on creating innovative and impactful digital
        solutions. I enjoy the process of developing modern and efficient web
        applications while ensuring a smooth and meaningful user experience.
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
