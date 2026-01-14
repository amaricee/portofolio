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
    <section id="experience" className="experience-section" ref={experienceRef}>
      <h2 className="title">EXPERIENCE</h2>

      <div className="experience-wrapper">
        <div className="experience-item">
          <h3>Web Developer</h3>
          <span className="experience-company">PT Peribumi Cahaya Nusa</span>
          <span className="experience-time">Oct 2024 – Jan 2025</span>
          <p>
            - Website Development of Peri Bumi Consultant (Konsultanqta.com)
          </p>
          <p>
            - Developed Authentication and Email Verification features using
            Laravel 11
          </p>
          <p>- Database management with MySQL</p>
        </div>

        <div className="experience-item">
          <h3>Frontend & Backend Web Developer</h3>
          <span className="experience-company">PT Presentologic</span>
          <span className="experience-time">Aug 2023 – Jan 2024</span>
          <p>- MSIB Batch 5</p>
          <p>- 
            Successfully implemented, tested, and optimized Progressive Web Apps
            (PWA) in a Restaurant Catalog Application as a Final Project
          </p>
          <p>- 
            Utilized Webpack as a module bundler and Node.js as the runtime
            environment in application development
          </p>
          <p>- Gained knowledge in building high-performance websites</p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
