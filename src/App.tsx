import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Profile from "./components/Profile";
import About from "./components/About";
import Projects from "./components/Projects";
import TechnicalSkills from "./components/TechnicalSkills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="container">
      <ScrollToTop />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Profile />
              <About />
              <Projects />
              <TechnicalSkills />
              <Experience />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* ABOUT FULL PAGE */}
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
