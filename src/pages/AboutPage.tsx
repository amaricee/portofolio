import { Link } from "react-router-dom";
import "./AboutPage.css";

function AboutPage() {
  return (
    <section className="about-full">
      <Link to="/" className="back-btn">
        ←
      </Link>
      <h1>About Me</h1>

      <p>
        I am a passionate Web Developer with experience in JavaScript,
        TypeScript, Laravel, React, Go, and MySQL. I focus on building
        user-friendly, efficient, and visually engaging applications.
      </p>

      <p>
        Over the past year, I have worked on various real-world projects
        involving:
      </p>

      <ul>
        <li>Frontend development with React & TypeScript</li>
        <li>Backend with Laravel & Go</li>
        <li>API development and integration</li>
        <li>Database optimization using MySQL</li>
        <li>UI/UX implementation</li>
      </ul>

      <p>
        I enjoy learning new technologies and continuously improving my skills.
        Outside coding, I also explore UI/UX design and graphic design.
      </p>
    </section>
  );
}

export default AboutPage;
