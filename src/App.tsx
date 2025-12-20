import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import {
  Profile,
  About,
  Projects,
  TechnicalSkills,
  Experience,
  Contact,
  Footer,
} from "./components";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="container">
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={
            <div className="home-page fade-in">
              <Profile />
              <About />
              <Projects />
              <TechnicalSkills />
              <Experience />
              <Contact />
              <Footer />
            </div>
          }
        />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
