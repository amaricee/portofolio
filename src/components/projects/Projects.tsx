import { useEffect, useRef } from "react";
import project1 from "../../assets/peribumi.png";
import project2 from "../../assets/elbarra.png";
import project3 from "../../assets/To-Do-List.png";
import "./Projects.css";

function Projects() {
  const projectsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = projectsRef.current;
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
    <section id="projects" className="projects-section" ref={projectsRef}>
      <h2 className="title project-title">PROJECTS</h2>

      <div className="project-wrapper">
        <div className="project-card">
          <a href="/project/1" className="project-link">
            <img src={project1} alt="Project 1" className="project-image" />
            <div className="project-overlay">
              <span>Peribumi Consultant</span>
            </div>
          </a>
        </div>

        <div className="project-card">
          <a href="/project/2" className="project-link">
            <img src={project2} alt="Project 2" className="project-image" />
            <div className="project-overlay">
              <span>Elbarra Nursery</span>
            </div>
          </a>
        </div>

        <div className="project-card">
          <a href="/project/3" className="project-link">
            <img src={project3} alt="Project 3" className="project-image" />
            <div className="project-overlay">
              <span>To-Do-List</span>
            </div>
          </a>
        </div>
      </div>

      {/* ===== RIGHT : SKILLS ===== */}
      <div className="skills-column">
        <h2 className="skills-title">TECHNICAL SKILLS</h2>

        <div className="skills-wrapper">
          <div className="skill-item">
            <h3>Go</h3>
          </div>
          <div className="skill-item">
            <h3>React</h3>
          </div>
          <div className="skill-item">
            <h3>JavaScript</h3>
          </div>
          <div className="skill-item">
            <h3>TypeScript</h3>
          </div>
          <div className="skill-item">
            <h3>Python</h3>
          </div>
          <div className="skill-item">
            <h3>Laravel</h3>
          </div>
          <div className="skill-item">
            <h3>MySQL</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
