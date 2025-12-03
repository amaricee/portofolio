import project1 from "../assets/peribumi.png";
import project2 from "../assets/peribumi.png";
import project3 from "../assets/peribumi.png";
import project4 from "../assets/peribumi.png";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="title">PROJECTS</h2>

      <div className="project-wrapper">
        <div className="project-card">
          <img src={project1} alt="Project 1" className="project-image" />

          <a href="/project/1" className="more-info-btn">
            More Info →
          </a>
        </div>

        <div className="project-card">
          <img src={project2} alt="Project 2" className="project-image" />

          <a href="/project/2" className="more-info-btn">
            More Info →
          </a>
        </div>

        <div className="project-card">
          <img src={project3} alt="Project 3" className="project-image" />

          <a href="/project/3" className="more-info-btn">
            More Info →
          </a>
        </div>

        <div className="project-card">
          <img src={project4} alt="Project 4" className="project-image" />

          <a href="/project/4" className="more-info-btn">
            More Info →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
