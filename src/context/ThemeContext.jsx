import React, { createContext, useState, useEffect } from "react";

// Create the context
export const ThemeContext = createContext(); // Ensure this is explicitly exported

// Function to get system theme preference
const getSystemTheme = () => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return "dark";
  }
  return "light";
};

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check saved theme in localStorage first
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    // If no saved theme, use system preference
    return getSystemTheme() === "dark";
  });

  useEffect(() => {
    // Apply the theme to the document body
    document.body.setAttribute("data-theme", isDarkMode ? "dark" : "light");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  // Listen to system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemThemeChange = (e) => {
      // Only update if user hasn't manually set a preference
      const savedTheme = localStorage.getItem("theme");
      if (!savedTheme) {
        setIsDarkMode(e.matches);
      }
    };

    // Check if browser supports addEventListener for media queries
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleSystemThemeChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleSystemThemeChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleSystemThemeChange);
      } else {
        mediaQuery.removeListener(handleSystemThemeChange);
      }
    };
  }, []);

  const toggleTheme = () => setIsDarkMode((prevMode) => !prevMode);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Export the provider as default
export default ThemeProvider;
