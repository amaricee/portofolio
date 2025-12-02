import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import About from "./components/About";
import Projects from "./components/Projects";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="container">
      <ScrollToTop />
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Profile />
              <About />
              <Projects />
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
