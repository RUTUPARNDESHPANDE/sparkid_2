import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/ScrollToTop.css'; // Ensure styles are handled in CSS

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  // Scroll to the top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Toggle button visibility based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {visible && (
        <div
          className="scroll-to-top"
          onClick={scrollToTop}
        >
          ⬆
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
