import { useEffect, useRef } from "react";

function About() {
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
        With around one year of experience in Informatics Engineering, I
        specialize in web development using HTML, CSS, JavaScript, Laravel, Go,
        React, and MySQL. I enjoy working independently or in a team, adapt
        quickly, and focus on creating innovative and impactful digital
        solutions.
      </p>
    </section>
  );
}

export default About;
