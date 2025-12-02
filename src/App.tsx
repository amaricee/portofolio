import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Profile />
      <About />
      <Projects />
    </div>
  );
}

export default App;
