import Profile from "./components/Profile";
import About from "./components/About";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Profile />
      <About />
      <Projects />
    </div>
  );
}

export default App;
