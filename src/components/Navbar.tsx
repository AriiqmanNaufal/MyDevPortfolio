import * as React from "react";
import { useState } from "react";
// No need to import separate Navigation.css since styles are in index.css

const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <h1 className="logo">Work</h1>
        <div className="nav-items">
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
