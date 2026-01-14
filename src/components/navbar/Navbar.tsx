import { useState } from "react"
import "./Navbar.css"

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className={`navbar ${open ? "open" : ""}`}>
      <div className="nav-container">

        {/* Top (hamburger center) */}
        <div className="nav-top">
          <button
            className={`hamburger ${open ? "active" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Menu */}
        <div className="menu-wrapper">
          <ul className="nav-menu">
            <li><a href="#projects">Project</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#" className="login-btn">Login</a></li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
