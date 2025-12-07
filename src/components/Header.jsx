import React, { useState, useContext, useEffect, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/header.css";
import logo from "../Assets/logo/logo-removebg-preview.png";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const closeNav = () => {
    setIsNavOpen(false);
    setIsDropdownOpen(false);
  };

  const handleDropdownToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const wasOpen = isDropdownOpen;
    setIsDropdownOpen(!isDropdownOpen);
    // Navigate to /courses when opening the dropdown
    if (!wasOpen) {
      navigate("/courses");
    }
  };

  // Close dropdown when clicking on other nav items
  const handleNavItemClick = () => {
    setIsDropdownOpen(false);
    setIsNavOpen(false);
  };

  // Close dropdown when route changes
  useEffect(() => {
    setIsDropdownOpen(false);
    setIsNavOpen(false);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && isDropdownOpen) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">
          <img
            src={logo}
            alt="Sparkids Logo"
            width="95"
            height="110"
            className={isDarkMode ? "dark-mode-logo" : ""}
          />
        </NavLink>
      </div>
      <div className={`hamburger ${isNavOpen ? "active" : ""}`} onClick={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`nav ${isNavOpen ? "active" : ""}`}>
        <button onClick={toggleTheme}>
          {isDarkMode ? "🌞 Mode" : "˚☽˚.⋆ Mode"}
        </button>
        <ul>
          <li>
            <NavLink
              to="/"
              onClick={closeNav}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={handleNavItemClick}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              AboutUs
            </NavLink>
          </li>
          <li className={`dropdown ${isDropdownOpen ? "open" : ""}`} ref={dropdownRef}>
            <button
              className="dropdown-toggle"
              id="dropdown-basic"
              onClick={handleDropdownToggle}
            >
              <span className="dropdown-label">
                Courses
                <svg
                  className={`dropdown-arrow ${isDropdownOpen ? "rotated" : ""}`}
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10.5L8 6.5L2 2.5"
                    stroke="var(--primary-orange)"
                    strokeWidth="3.37"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>

            {isDropdownOpen && (
              <div className="dropdown-menu-custom">
                <NavLink to="/courses" className="dropdown-item" onClick={handleNavItemClick}>
                  All Courses
                </NavLink>
                <NavLink to="/abacus" className="dropdown-item" onClick={handleNavItemClick}>
                  Abacus
                </NavLink>
                <NavLink to="/vedic" className="dropdown-item" onClick={handleNavItemClick}>
                  Vedic Maths
                </NavLink>
                <NavLink to="/rubic" className="dropdown-item" onClick={handleNavItemClick}>
                  Rubik
                </NavLink>
                <NavLink
                  to="/handwriting"
                  className="dropdown-item"
                  onClick={handleNavItemClick}
                >
                  Handwriting
                </NavLink>
                <NavLink to="/reading" className="dropdown-item" onClick={handleNavItemClick}>
                  Reading
                </NavLink>
                <NavLink to="/spellingbee" className="dropdown-item" onClick={handleNavItemClick}>
                  Spelling Bee
                </NavLink>
              </div>
            )}
          </li>
          <li>
            <NavLink
              to="/franchise"
              onClick={handleNavItemClick}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Franchise
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/careers"
              onClick={handleNavItemClick}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Careers
            </NavLink>
          </li>
          {/* Temporarily removed Insights page
          <li>
            <NavLink
              to="/insight"
              onClick={handleNavItemClick}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Insights
            </NavLink>
          </li>
          */}
          <li>
            <NavLink
              to="/contact"
              onClick={handleNavItemClick}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <button className="contact-us">Contact Us</button>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div
        className={`overlay ${isNavOpen ? "active" : ""}`}
        onClick={closeNav}
      ></div>
    </header>
  );
}

export default Header;