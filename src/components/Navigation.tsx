import "./navigation.css";
import { NavLink } from "react-router-dom";
import Logo from "../assets/shared/logo.svg";
import { useState } from "react";
import { NAVLINKS } from "../data/data";
import { nanoid } from "nanoid";

const Navigation = () => {
  // für das hamburger menu toggle
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsVisible((prevState) => prevState !== true);
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
      <nav
        className={`primary-navigation underline-indicators flex ${
          isVisible ? "visible" : ""
        }`}
      >
        {NAVLINKS.map((item) => (
          <NavLink
            key={nanoid()}
            className="ff-sans-cond uppercase text-white letter-spacing-2"
            to={item.path}
          >
            <span>{item.id}</span>
            {item.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};
export default Navigation;
