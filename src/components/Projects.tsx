import { useEffect, useRef } from "react";
import project1 from "../assets/peribumi.png";
import project2 from "../assets/peribumi.png";
import project3 from "../assets/peribumi.png";
import project4 from "../assets/peribumi.png";
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
      <h2 className="title">PROJECTS</h2>

      <div className="project-wrapper">
        <div className="project-card">
          <a href="/project/1" className="project-link">
            <img src={project1} alt="Project 1" className="project-image" />
            <div className="project-overlay">
              <span>View Project</span>
            </div>
          </a>
        </div>

        <div className="project-card">
          <a href="/project/2" className="project-link">
            <img src={project2} alt="Project 2" className="project-image" />
            <div className="project-overlay">
              <span>View Project</span>
            </div>
          </a>
        </div>

        <div className="project-card">
          <a href="/project/3" className="project-link">
            <img src={project3} alt="Project 3" className="project-image" />
            <div className="project-overlay">
              <span>View Project</span>
            </div>
          </a>
        </div>

        <div className="project-card">
          <a href="/project/4" className="project-link">
            <img src={project4} alt="Project 4" className="project-image" />
            <div className="project-overlay">
              <span>View Project</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
