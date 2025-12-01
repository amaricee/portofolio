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
    <section id="about" className="section reveal" ref={aboutRef}>
      <h2 className="title">About Me</h2>
      <p className="text">
        Lulusan baru tahun 2025 Program Studi Teknik Informatika dengan semangat tinggi untuk terus belajar dan mengembangkan
        keterampilan dalam bidang teknologi informasi. Memiliki ketertarikan yang kuat pada pengembangan web dan desain grafis, serta
        berpengalaman menggunakan HTML, CSS, JavaScript, Laravel, Go, dan React. Terampil bekerja secara mandiri maupun tim, dengan kemampuan komunikasi yang
        baik untuk berkolaborasi dalam proyek kreatif maupun teknis. Berorientasi pada solusi, cepat beradaptasi, dan memiliki tujuan untuk
        berkontribusi dalam pengembangan solusi digital yang inovatif dan bermanfaat.
      </p>
    </section>
  );
}

export default About;
