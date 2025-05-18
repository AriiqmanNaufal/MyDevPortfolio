import * as React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleItemClick = (item: string) => {
    setActiveItem(item);
    setMenuOpen(false); // Close menu after click (on mobile)
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <h1 className="logo">Work</h1>

        {/* Hamburger icon */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Nav items */}
        <div className={`nav-items ${menuOpen ? "open" : ""}`}>
          {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
            <a
              key={item}
              href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
              className={`nav-item ${activeItem === item ? "active" : ""}`}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
