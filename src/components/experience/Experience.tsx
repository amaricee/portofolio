import { useEffect, useRef } from "react";
import "./Experience.css";

function Experience() {
const experienceRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = experienceRef.current;
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
    <section className="experience-section" ref={experienceRef}>
      <h2 className="title">EXPERIENCE</h2>

      <div className="experience-wrapper">
        <div className="experience-item">
          <h3>Web Developer</h3>
          <span className="experience-company">PT Peribumi Cahaya Nusa</span>
          <span className="experience-time">2024 – 2025</span>
          <p>
            Developed and maintained a training & certification website using
            Laravel 11, MySQL, and real-time features with Socket.IO. Worked on
            FAQ system, personal chat, and product management features.
          </p>
        </div>

        <div className="experience-item">
          <h3>Freelance Web Developer</h3>
          <span className="experience-company">Self-Employed</span>
          <span className="experience-time">2023 – Present</span>
          <p>
            Built several web applications and portfolio projects using React,
            JavaScript, and Laravel. Focused on clean UI, responsive layouts, and
            efficient backend logic.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
