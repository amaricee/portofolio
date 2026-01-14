import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import {
  Navbar,
  Profile,
  About,
  Projects,
  Experience,
  Footer,
} from "./components";
import AboutPage from "./pages/AboutPage";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <div className="container">
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={
            <div className="home-page fade-in">
              <Navbar />
              <Profile />
              <About />
              <Projects />
              <Experience />
              <Footer />
            </div>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

export default App;
