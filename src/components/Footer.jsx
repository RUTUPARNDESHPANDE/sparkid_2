
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/footer.css";
import { API_BASE_URL } from "../api";
import logo from "../Assets/logo/logo-removebg-preview.png";

const Footer = () => {
  // Email subscription functionality can be added here when needed
  const { isDarkMode } = useContext(ThemeContext);


  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Us Section */}
        <div className="footer-section address">
          {/* <Link to='/'><img src={logo} alt="Brave SparkKids Logo" className="footer-logo" /></Link> */}
          <NavLink to="/">
            <img
              src={logo}
              alt="Brave Sparkids Logo"
              className={isDarkMode ? "dark-mode-logo" : ""}
              width="95"
              height="110"
            />
          </NavLink>
          <h3>Contact Us</h3>
          <p>
            Call: +91 82170 77217 <br />
            Email: sparkids@mail.com
          </p>
          <p>
            Address: Indi Regional Office<br />
            Behind BSNL Tower, Near Mallikarjun Temple,<br />
            Vidya Nagar, Sindagi Road, Indi - 586209
          </p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" aria-label="Dribbble"><i className="fab fa-dribbble"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        {/* Explore Section */}
        <div className="footer-section">
          <h3>Explore</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/franchise">Franchises</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Courses Section */}
        <div className="footer-section">
          <h3>Courses</h3>
          <ul>
            <li><Link to="/abacus">Abacus</Link></li>
            <li><Link to="/vedic">Vedic Maths</Link></li>
            <li><Link to="/rubic">Rubik's Cube</Link></li>
            <li><Link to="/writing">Writing</Link></li>
            <li><Link to="/reading">Reading</Link></li>
            <li><Link to="/spellingbee">Spelling Bee</Link></li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            {/* <li><Link to="/faq">FAQ's</Link></li> */}
            <li><Link to="/franchise#faq">FAQ's</Link></li>
            {/* <li><Link to="/#testimonials">Testimonials</Link></li> */}
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/policies">Policies</Link></li>
            <li><Link to="/terms">Terms &amp; Conditions</Link></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section subscribe">
          <h3>Subscribe to News Letters</h3>
          <p>Stay in the loop with the latest news and <br /> updates from SparkKids.</p>
          <form>
            <input type="email" placeholder="Email here" />
            <button type="submit">Subscribe Now</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Brave SparkKids, Inc. All Rights Reserved</p>
        {/* Admin link — small and unobtrusive, not shown in main navigation */}
        <p style={{ marginTop: '6px', fontSize: '12px', opacity: 0.45 }}>
          <Link to="/admin" style={{ color: 'inherit', textDecoration: 'none' }}>Admin</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
