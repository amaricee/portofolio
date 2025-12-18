import { useEffect, useRef } from "react";
import "./TechnicalSkills.css";

function TechnicalSkills() {
  const skillRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = skillRef.current;
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
    <section className="skills-section" ref={skillRef}>
      <h2 className="title">TECHNICAL SKILLS</h2>

      <div className="skills-wrapper">
        <div className="skill-item">
          <h3>Go</h3>
          <p>Intermediate</p>
        </div>

        <div className="skill-item">
          <h3>React</h3>
          <p>Intermediate</p>
        </div>

        <div className="skill-item">
          <h3>JavaScript</h3>
          <p>Advanced</p>
        </div>

        <div className="skill-item">
          <h3>TypeScript</h3>
          <p>Intermediate</p>
        </div>

        <div className="skill-item">
          <h3>Laravel</h3>
          <p>Advanced</p>
        </div>

        <div className="skill-item">
          <h3>MySQL</h3>
          <p>Intermediate</p>
        </div>
      </div>
    </section>
  );
}

export default TechnicalSkills;
