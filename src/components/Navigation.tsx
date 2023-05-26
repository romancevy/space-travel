import "./navigation.css";
import { Link } from "react-router-dom";
import Logo from "../assets/shared/logo.svg";
import { useState } from "react";
import { NAVLINKS } from "../data/data";

const Navigation = () => {
  // für den hamburger menu toggle
  const [isVisible, setIsVisible] = useState(false);
  // für den Unterstrich
  const [isActive, setIsActive] = useState("home");

  const toggleMenu = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <header className="primary-header flex">
      {/* Logo */}
      <div>
        <img src={Logo} alt="space tourism logo" className="logo" />
      </div>
      <button
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded={isVisible}
        onClick={toggleMenu}
      >
        <span className="sr-only">Menu</span>
      </button>
      {/* Navigation */}
      <nav>
        <ul
          id="primary-navigation"
          className={`primary-navigation underline-indicators flex ${
            isVisible ? "visible" : ""
          }`}
        >
          {NAVLINKS.map((item) => (
            <li
              key={item.name}
              className={isActive === item.name ? "active" : ""}
            >
              <Link
                className="ff-sans-cond uppercase text-white letter-spacing-2"
                to={item.path}
                onClick={() => setIsActive(item.name)}
              >
                <span>{item.id}</span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Navigation;
