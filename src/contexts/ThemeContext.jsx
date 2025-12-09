import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isAltTheme, setIsAltTheme] = useState(false);

  // Load theme preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('velocityPartsTheme');
    if (savedTheme) {
      setIsAltTheme(savedTheme === 'alt');
    }
  }, []);

  // Apply theme class to body and save preference to localStorage
  useEffect(() => {
    if (isAltTheme) {
      document.body.classList.add('alt-theme');
    } else {
      document.body.classList.remove('alt-theme');
    }
    localStorage.setItem('velocityPartsTheme', isAltTheme ? 'alt' : 'default');
  }, [isAltTheme]);

  const toggleTheme = () => {
    setIsAltTheme(!isAltTheme);
  };

  return (
    <ThemeContext.Provider value={{ isAltTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}