import { Link } from "react-router-dom";
import Logo from "../assets/shared/logo.svg";

const Navigation = () => {
  return (
    <header className="primary-header flex">
      {/* Logo */}
      <div>
        <img src={Logo} alt="space tourism logo" className="logo" />
      </div>
      <button
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded="false"
      >
        <span className="sr-only">Menu</span>
      </button>
      {/* Navigation */}
      <nav>
        <ul
          id="primary-navigation"
          className="primary-navigation underline-indicators flex"
        >
          <li className="active">
            <Link
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              to={"/"}
            >
              <span>00</span>Home
            </Link>
          </li>
          <li>
            <Link
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              to={"destination"}
            >
              <span>01</span>Destination
            </Link>
          </li>
          <li>
            <Link
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              to={"crew"}
            >
              <span>02</span>Crew
            </Link>
          </li>
          <li>
            <Link
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              to={"technology"}
            >
              <span>03</span>Technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navigation;
